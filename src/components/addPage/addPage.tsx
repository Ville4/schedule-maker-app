import { useSelector } from "react-redux"
import { appStateType } from "../../redux/redux-store"
import AddForm from "./addForm"
import m from './addPage.module.css'
import ShowEmployees from "./showEmployees"

const AddPage = () => {

    const employees = useSelector((state:appStateType) => state.app.staff)

    return (
            <div className={m.wrapper}>
            <h2 className={m.title}>Добавьте сотрудника</h2>
            <AddForm/>
            {employees.length > 0 && <ShowEmployees employees={employees}/>}
            </div>
    )
}

export default AddPage