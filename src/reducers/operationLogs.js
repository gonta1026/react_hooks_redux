import { ADD_OPERATION_LOGS, DELETE_ALL_OPERATION_LOGS } from "../actions";

const operationLogs = (state = [], action) => {
    switch (action.type) {
        case ADD_OPERATION_LOGS:
            const log = {
                description: action.description,
                operated_at: action.operated_at
            }
            return [log, ...state]
        case DELETE_ALL_OPERATION_LOGS:
            return [];
        default:
            return state
    }
}

export default operationLogs