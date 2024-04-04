import { InputNumber } from "antd"

type Props = {
  populatedBalance: number | null;
  setPopulatedBalance: ((cost: number | null) => void)
}

const PopulateBalanceModal = (props: Props) => (
  
    <InputNumber prefix="₽" value={props.populatedBalance} style={{ width: '100%' }} onChange={props.setPopulatedBalance} />
  
)

export default PopulateBalanceModal