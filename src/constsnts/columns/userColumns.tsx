import { Typography } from 'antd'
import type { ColumnsType } from 'antd/es/table';
import { User } from '../../@types/entities/User';

const { Text } = Typography;

export const userColumns: ColumnsType<User> = [
  {
    title: 'ФИО',
    dataIndex: 'name',
    key: 'name',
    render: (name) => <Text>{name}</Text>,
  },
  {
    title: 'Баланс',
    dataIndex: 'balance',
    key: 'balance',
    sorter: (a, b) => a.balance - b.balance,
    render: (balance) => <Text>{balance}</Text>,
  },
  {
    title: 'Телефон',
    dataIndex: 'phone',
    key: 'phone',
    render: (phone) => <Text>{phone}</Text>,
  },
  {
    title: 'Почта',
    dataIndex: 'email',
    key: 'email',
    render: (email) => <Text>{email}</Text>,
  }
];
