import { NavLink } from "react-router-dom"
import m from './beginPage.module.css'
import '../../App'

const BeginPage = () => {
    return (
        <NavLink className='button' to={'/add'}>
            <button >
                Начать
            </button>
        </NavLink>
    )
}

export default BeginPage