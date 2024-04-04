import { Tag, Typography, Avatar } from 'antd'
import type { ColumnsType } from 'antd/es/table';
import { Game } from '../../@types/entities/Game';
const { Text } = Typography;

export const gameColumns = () => {
  const data: ColumnsType<Game> = [
    {
      title: 'Название',
      dataIndex: 'img',
      key: 'img',
      render: (src) => <Avatar src={src} shape="square" size={64} />,
    },
    {
      title: 'Название',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <Text>{text}</Text>,
    },
    {
      title: 'Категории',
      key: 'categories',
      dataIndex: 'categories',
      render: (_, { categories }) => (
        <Tag color={'green'}>
          {categories}
        </Tag>
      ),
    }
  ];

  return data
}