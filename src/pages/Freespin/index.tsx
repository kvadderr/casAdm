import { Form, Select, Input, Typography, Table, Button, Flex, Avatar } from 'antd';
import { useAppSelector } from '../../store/storeHooks';
import { selectGamesList } from '../../store/slices/gameSlice';
import type { SelectProps } from 'antd';
import { useEffect, useState } from 'react';
import { Freespin } from '../../@types/entities/Freespin';
import type { ColumnsType } from 'antd/es/table';
import { selectFreespinsList } from '../../store/slices/freespinSlice';
import { useCreateFreespinMutation, useDeleteFreespinMutation } from '../../api/freespin';

const { Title, Text } = Typography

const FreespinPage = () => {

  const freespins = useAppSelector(selectFreespinsList);
  const cuurentGames = useAppSelector(selectGamesList);
  const [createFreespin, { isLoading }] = useCreateFreespinMutation();
  const [deleteFreespin, { isLoading: loadingDelete }] = useDeleteFreespinMutation();
  const [options, setOptions] = useState<SelectProps['options']>([])

  const getGameNameById = (id: string) => {
    return cuurentGames?.find(game => game.id === id);
  };

  const onFinish = (values: Freespin) => {
    createFreespin(values).unwrap()
  }

  const deleteSelectedFreespin = (id: string) => {
    deleteFreespin(id).unwrap();
  }

  const freespinColumns: ColumnsType<Freespin> = [
    {
      title: '',
      dataIndex: 'gameId',
      key: 'gameId',
      render: (id) => <Avatar src={getGameNameById(String(id))?.img} shape="square" size={64} />,
    },
    {
      title: 'Название',
      dataIndex: 'gameId',
      key: 'gameId',
      render: (id) => <Text>{getGameNameById(String(id))?.name}</Text>,
    },
    {
      title: 'Спины',
      dataIndex: 'count',
      key: 'count',
      render: (balance) => <Text>{balance}</Text>,
    },
    {
      title: 'Ставка',
      dataIndex: 'bet',
      key: 'bet',
      render: (phone) => <Text>{phone}</Text>,
    },
    {
      title: 'Удалить',
      dataIndex: 'id',
      key: 'id',
      render: (id) => <Button danger onClick={() => deleteSelectedFreespin(id)} loading={loadingDelete}>Удалить</Button>,
    }
  ];

  useEffect(() => {
    if (!cuurentGames) return;
    const fillteredGames = cuurentGames.filter(game => game.bm === "1")
    console.log('fillteredGames', fillteredGames)
    const newOpt: SelectProps['options'] = fillteredGames?.map(game => ({
      label: game.name,
      value: game.id
    }));
    setOptions(newOpt)
  }, [cuurentGames])

  const filterOption = (input: string, option?: { label: string; value: string }) =>
    (option?.label ?? '').toLowerCase().includes(input.toLowerCase());


  return (
    <Flex vertical gap={30}>
      <Title level={4}>Фриспины</Title>

      <Form
        name="normal_login"
        onFinish={onFinish}
        initialValues={{ remember: true }}
      >
        <Form.Item
          name="gameId"
          rules={[{ required: true, message: 'Пожалуйста, выберите игру!' }]}
        >
          <Select filterOption={filterOption} optionFilterProp="children" showSearch placeholder="Выберите игру" options={options} />
        </Form.Item>
        <Form.Item>
          <Flex gap={20}>
            <Form.Item
              name="count"
              rules={[{ required: true, message: 'Выберите количество прокруток!' }]}
            >
              <Input placeholder="Кол-во прокруток" />
            </Form.Item>
            <Form.Item
              name="bet"
              rules={[{ required: true, message: 'Выберите ставку' }]}
            >
              <Input placeholder="Ставка в рублях" />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" loading={isLoading}>
                Сохранить
              </Button>
            </Form.Item>
          </Flex>
        </Form.Item>

      </Form>
      <Table columns={freespinColumns} dataSource={freespins} rowKey={item => item.id} />
    </Flex>
  )
}

export default FreespinPage