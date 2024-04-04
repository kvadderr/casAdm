import { Table } from "antd"
import { gameColumns } from "../../constsnts/columns/gameColumns"
import { useAppSelector } from "../../store/storeHooks"
import { selectGamesList } from "../../store/slices/gameSlice"

const GamePage = () => {
  const gamesList = useAppSelector(selectGamesList);

  return (
    <Table columns={gameColumns()} dataSource={gamesList} rowKey={meditation => meditation.id} />
  )
}

export default GamePage