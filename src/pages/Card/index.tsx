import { Flex, Typography, Form, Input, Button, Table } from "antd"
import { useAppSelector } from "../../store/storeHooks"
import { selectCards } from "../../store/slices/cardSlice"
import { Card } from "../../@types/entities/Card"
import { ColumnsType } from "antd/es/table"
import { useCreateCardMutation, useDeleteCardMutation } from "../../api/card"

const { Title, Text } = Typography

const CardPage = () => {
  const cards = useAppSelector(selectCards);
  const [deactivate, { isLoading: deactivateLoading }] = useDeleteCardMutation()
  const [create, { isLoading: createLoading }] = useCreateCardMutation()

  const deactivateSelectedCard = (id: string) => {
    deactivate(id).unwrap();
  }
  const cardColumns: ColumnsType<Card> = [
    {
      title: 'Название',
      dataIndex: 'name',
      key: 'name',
      render: (name) => <Text>{name}</Text>,
    },
    {
      title: 'Номер карты',
      dataIndex: 'cardNumber',
      key: 'cardNumber',
      render: (cardNumber) => <Text>{cardNumber}</Text>,
    },
    {
      title: 'Деактировать',
      dataIndex: 'id',
      key: 'id',
      render: (id) => <Button danger onClick={() => deactivateSelectedCard(id)} loading={deactivateLoading}>Удалить</Button>,
    }
  ];


  const onFinish = (values: Card) => {
    create(values).unwrap()
  }


  return (
    <Flex vertical gap={30}>
      <Title level={4}>Карты</Title>
      <Form
        name="normal_login"
        onFinish={onFinish}
        initialValues={{ remember: true }}
      >
        <Form.Item>
          <Flex gap={20}>
            <Form.Item
              name="name"
              rules={[{ required: true, message: 'Введите название карты!' }]}
            >
              <Input placeholder="Название" />
            </Form.Item>
            <Form.Item
              name="cardNumber"
              rules={[{ required: true, message: 'Введите номер карты' }]}
            >
              <Input placeholder="Номер карты" />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" loading={createLoading}>
                Сохранить
              </Button>
            </Form.Item>
          </Flex>
        </Form.Item>

      </Form>
      <Table columns={cardColumns} dataSource={cards} rowKey={item => item.id} />
    </Flex>
  )
}

export default CardPage