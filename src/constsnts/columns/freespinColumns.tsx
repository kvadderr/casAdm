import { Typography } from 'antd'
import type { ColumnsType } from 'antd/es/table';
import { Freespin } from '../../@types/entities/Freespin';


const { Text } = Typography;

export const freespinColumns: ColumnsType<Freespin> = [
  {
    title: 'Название',
    dataIndex: 'id',
    key: 'id',
    
  },
  {
    title: 'Баланс',
    dataIndex: 'count',
    key: 'count',
    render: (balance) => <Text>{balance}</Text>,
  },
  {
    title: 'Телефон',
    dataIndex: 'bet',
    key: 'bet',
    render: (phone) => <Text>{phone}</Text>,
  }
];
