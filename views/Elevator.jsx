import { TableData } from "../cmp/tableData.jsx"

export function Elevator() {

    const numOfFloors = 10
    const numOfElevators = 5

    const numOfColumns = numOfElevators + 2

    return <section>
        <TableData numOfFloors={numOfFloors} numOfElevators={numOfColumns} />
    </section>
}
