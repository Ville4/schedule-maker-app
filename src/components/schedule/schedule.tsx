import { useSelector } from "react-redux";
import { appStateType } from "../../redux/redux-store";
import m from './schedule.module.css'
import ScheduleItem from "./scheduleItem";
import '../../App'

const Schedule = () => {

    const employees = useSelector((state:appStateType) => state.app.staff)

    const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
     
    return (
        <div className={m.scheduleWrapper}>
            {daysOfWeek.map((day, index) => {
                return (
                    <div className={m.scheduleItem}>
                        <div className={m.day} key={index}>{day}</div>
                        <ScheduleItem employees={employees} day={day} index={index} />
                    </div>
                )
            })}
        </div>
    )

}


export default Schedule

