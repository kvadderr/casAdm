import { Flex, Form, Typography, Select, Button } from "antd"
import type { SelectProps } from 'antd';
import { useAppSelector } from "../../store/storeHooks";
import { selectUsersList } from "../../store/slices/userSlice";
import { useEffect, useState } from "react";
import { selectGamesList } from "../../store/slices/gameSlice";
import { useGetGameLinkMutation } from "../../api/games";
const { Title } = Typography;

const GameStartPage = () => {
  const usersList = useAppSelector(selectUsersList);
  const gamesList = useAppSelector(selectGamesList);
  const [getLink, { data, isLoading}] = useGetGameLinkMutation();
  const [options, setOptions] = useState<SelectProps['options']>([])
  const [gameOptions, setGameOptions] = useState<SelectProps['options']>([])
  const [link, setLink] = useState<string | null>(null)

  useEffect(() => {
    data && setLink(data.content.game.url)
  }, [data])

  useEffect(() => {
    const newOpt: SelectProps['options'] = usersList?.map(user => ({
      label: user.email + " " + user.phone,
      value: user.id
    }));
    setOptions(newOpt)
  }, [usersList])

  useEffect(() => {
    const newOpt: SelectProps['options'] = gamesList?.map(user => ({
      label: user.name,
      value: user.id
    }));
    setGameOptions(newOpt)
  }, [gamesList])

  const filterOption = (input: string, option?: { label: string; value: string }) =>
    (option?.label ?? '').toLowerCase().includes(input.toLowerCase());

  const onFinish = (values: any) => {
    getLink(values).unwrap()
  }

  return (
    <Flex vertical gap={40}>
      <Title level={4}>Запустить игру</Title>

      <Form
        name="normal_login"
        onFinish={onFinish}
        initialValues={{ remember: true }}>
        <Form.Item
          name="userId"
          rules={[{ required: true, message: 'Пожалуйста, выберите пользователя!' }]}
        >
          <Select filterOption={filterOption} optionFilterProp="children" showSearch placeholder="Выберите пользователя" options={options} />
        </Form.Item>
        <Form.Item
          name="gameId"
          rules={[{ required: true, message: 'Пожалуйста, выберите пользователя!' }]}
        >
          <Select filterOption={filterOption} optionFilterProp="children" showSearch placeholder="Выберите пользователя" options={gameOptions} />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" loading={isLoading}>
            Получить ссылку
          </Button>
        </Form.Item>
      </Form>
      {link && <Button type="primary" href={link}>Открыть</Button>}
    </Flex>
  )
}

export default GameStartPage