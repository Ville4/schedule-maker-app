import { useDispatch, } from "react-redux"
import m from './addPage.module.css'
import '../../App'
import { actions, staffType } from "../../redux/app-reducer"
import { NavLink } from "react-router-dom"




type propsType = {
    employees: Array<staffType>
}

const ShowEmployees: React.FC<propsType> = ({employees}) => {

    const dispatch = useDispatch()

    const sortEmployees = (employees: Array<staffType>) => {
        const sort = (a:staffType, b:staffType) => {
            if (a.available.length > b.available.length) {
                return 1;
            } if (a.available.length === b.available.length) {
                return 0;
            } else {
                return -1;
            }
        }
        const newListOfEmployees = employees.sort(sort)
        dispatch(actions.sortEmployees(newListOfEmployees))
    
    }

    return (
        <div className={m.employeesWrapper}>
            <h2 className={m.employeestitle}>Сотрудники</h2>
            <div className={m.employeesContentWrapper}>
                {employees.map((emp:staffType, index:number) =>  {
                    return <div key={index} className={m.employeesItemWrapper}>
                        <div>{index + 1}.</div>
                        <div>{emp.name}</div>
                    </div>
                })}
            </div>
            <NavLink className={m.buttonWrapper}  to='/schedule'>
                <button onClick={((e:any)=> sortEmployees(employees))} className="button">Составить</button>
           </NavLink>
        </div>
    )
}

export default ShowEmployees