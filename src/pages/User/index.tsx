import { Table } from "antd"
import { userColumns } from "../../constsnts/columns/userColumns";
import { useAppSelector } from "../../store/storeHooks"
import { selectUsersList } from "../../store/slices/userSlice";

const UserPage = () => {
  const usersList = useAppSelector(selectUsersList);

  return (
    <>
      <Table columns={userColumns} dataSource={usersList} rowKey={item => item.id} scroll={{ x: 800 }} />
    </>
  )
}

export default UserPage