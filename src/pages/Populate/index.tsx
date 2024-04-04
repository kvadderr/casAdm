import { Flex, InputNumber, Form, Typography, Select, Button } from "antd"
import type { SelectProps } from 'antd';
import { useAppSelector } from "../../store/storeHooks";
import { selectUsersList } from "../../store/slices/userSlice";
import { useEffect, useState } from "react";
import { usePopulateMutation } from "../../api/users";
import { PopulateBalanceDto } from "../../@types/dto/populateBalance.dto";
const { Title } = Typography;

const PopulatePage = () => {

  const usersList = useAppSelector(selectUsersList);
  const [options, setOptions] = useState<SelectProps['options']>([])
  const [populate, { isLoading }] = usePopulateMutation();

  const onFinish = (values: PopulateBalanceDto) => {
    populate(values).unwrap();
  }

  useEffect(() => {
    const newOpt: SelectProps['options'] = usersList?.map(user => ({
      label: user.email + " " + user.phone,
      value: user.id
    }));
    setOptions(newOpt)
  }, [usersList])

  const filterOption = (input: string, option?: { label: string; value: string }) =>
    (option?.label ?? '').toLowerCase().includes(input.toLowerCase());

  return (
    <Flex vertical gap={40}>
      <Title level={4}>Пополнение баланса</Title>

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
          name="cost"
          rules={[{ required: true, message: 'Укажите сумму' }]}
        >
          <InputNumber prefix="₽" style={{ width: '100%' }} />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" loading={isLoading}>
            Начислить
          </Button>
        </Form.Item>
      </Form>
    </Flex>
  )
}

export default PopulatePage