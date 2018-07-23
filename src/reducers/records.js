
import { LOAD_RECORD_PENDING, LOAD_RECORD_FULFILLED, LOAD_RECORD_REJECTED } from '../constants';
import { ADD_RECORD_PENDING, ADD_RECORD_FULFILLED, ADD_RECORD_REJECTED } from '../constants';
import { REMOVE_RECORD_PENDING, REMOVE_RECORD_FULFILLED, REMOVE_RECORD_REJECTED } from '../constants'
import { UPDATE_RECORD_PENDING, UPDATE_RECORD_FULFILLED, UPDATE_RECORD_REJECTED } from '../constants'
const initialSate = {
    error: null,
    isLoaded: false,
    records: []
}

const records = (state = initialSate, action) => {
    switch (action.type) {
        case LOAD_RECORD_PENDING:
            return Object.assign({}, state, {
                isLoaded: false
            })
        case LOAD_RECORD_FULFILLED:
            return Object.assign({}, state, {
                isLoaded: true,
                records: action.payload.data
            })
        case LOAD_RECORD_REJECTED:
            return Object.assign({}, state, {
                isLoaded: true,
                error: action.payload.message
            })
        case ADD_RECORD_PENDING:
            return Object.assign({}, state, {
                isLoaded: false,
            })
        case ADD_RECORD_FULFILLED:
            return Object.assign({}, state, {
                isLoaded: true,
                records: [
                    ...state.records,
                    action.payload.data
                ]
            })
        case ADD_RECORD_REJECTED:
            return Object.assign({}, state, {
                isLoaded: true,
                error: action.payload.message
            })
        case REMOVE_RECORD_PENDING:
            return Object.assign({}, state, {
                isLoaded: false
            })
        case REMOVE_RECORD_FULFILLED:
            return Object.assign({}, state, {
                isLoaded: true,
                records: state.records.filter(record => record.id !== action.payload.data.id)
            })
        case REMOVE_RECORD_REJECTED:
            return Object.assign({}, state, {
                isLoaded: true,
                error: action.payload.message
            })
        case UPDATE_RECORD_PENDING:
            return Object.assign({}, state, {
                isLoaded: false
            })
        case UPDATE_RECORD_FULFILLED:
            return Object.assign({}, state, {
                isLoaded: true,
                records: state.records.map(record =>{
                    if(record.id===action.payload.data.id)
                    {
                        return action.payload.data
                    }
                    else
                    {
                        return record
                    }
                })
            })
        case UPDATE_RECORD_REJECTED:
            return Object.assign({}, state, {
                isLoaded: true,
                error: action.payload.message
            })
        default:
            return state
    }
}

export default records;