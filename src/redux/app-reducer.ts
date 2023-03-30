import { actionsType } from './redux-store';

export type staffType = {
    name: string
    available: string[]
}

type initialStateType = {
    staff: staffType[]
}

let initialState: initialStateType  = {
    staff: [],
}

const appReducer = (state: initialStateType = initialState, action:appActionsType) => {
    switch (action.type) {
        case 'ADD-EMPLOYEE':{
            return {
                ...state,
                staff: [...state.staff, action.data]
            }
        }
        case 'SORT-EMPLOYEES':{
            return {
                ...state,
                staff: action.newList
            }
        }
        default: 
            return state;
    }
}

type appActionsType = actionsType<typeof actions>

export const actions = {
    addEmployee: (data:staffType) => {
        return {
            type: 'ADD-EMPLOYEE',
            data
        } as const
    },
    sortEmployees: (newList: staffType[]) => {
        return {
            type: 'SORT-EMPLOYEES',
            newList
        } as const
    }
}

export default appReducer