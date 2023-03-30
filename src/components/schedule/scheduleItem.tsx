import { staffType } from '../../redux/app-reducer'
import m from './schedule.module.css'

type propsType = {
    employees: staffType[]
    day: string
    index: number
}

const ScheduleItem: React.FC<propsType> = (props) => {
    return (
        <div className={m.contentWrapper}>
            <div className={m.shift}>
                <h2 className={m.shiftCount}>1-ая смена</h2>
                <div className={m.shiftItem}>
                    {props.employees.filter(emp => emp.available.includes(props.day)).length >= 4
                        ?
                        props.employees.filter(emp => emp.available.includes(props.day))
                            .slice(0, 2)
                            .map(emp => {
                                return <div className={m.name}>{emp.name}</div>
                            })
                        :
                        props.employees.filter(emp => emp.available.includes(props.day)).length > 0 && props.employees.filter(emp => emp.available.includes(props.day)).length < 4
                            ?
                            props.employees.filter(emp => emp.available.includes(props.day) || emp.available.length > 5 || emp.available.length < 3)
                                .slice(0, 2)
                                .map(emp => {
                                    return <div className={m.name}>{emp.name}</div>
                                })
                            : props.employees.filter(emp => emp.available.length > 5 || emp.available.length < 3)
                                .slice(0, 2)
                                .map(emp => {
                                    return <div className={m.name}>{emp.name}</div>
                                })
                    }
                </div>
            </div>
            <div className={m.shift}>
                <h2 className={m.shiftCount}>2-ая смена</h2>
                <div className={m.shiftItem}>
                    {props.employees.filter(emp => emp.available.includes(props.day)).length >= 4
                        ?
                        props.employees.filter(emp => emp.available.includes(props.day))
                            .slice(2, 4)
                            .map(emp => {
                                return <div className={m.name}>{emp.name}</div>
                            })
                        :
                        props.employees.filter(emp => emp.available.includes(props.day)).length > 0 && props.employees.filter(emp => emp.available.includes(props.day)).length < 4
                            ?
                            props.employees.filter(emp => emp.available.includes(props.day) || emp.available.length > 5 || emp.available.length < 3)
                                .slice(2, 4)
                                .map(emp => {
                                    return <div className={m.name}>{emp.name}</div>
                                })
                            : props.employees.filter(emp => emp.available.length > 5 || emp.available.length < 3)
                                .slice(2, 4)
                                .map(emp => {
                                    return <div className={m.name}>{emp.name}</div>
                                })
                    }
                </div>
            </div>
        </div>
    )
}

export default ScheduleItem