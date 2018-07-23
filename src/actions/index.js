import {LOAD_RECORD,ADD_RECORD,REMOVE_RECORD,UPDATE_RECORD} from '../constants';
import * as RecordsAPI from '../utils/RecordsAPI';

export const load_records = () => {
    return {
        type: LOAD_RECORD,
        payload:RecordsAPI.getAll()
    }
}

export const add_record = (record) =>{
    return{
        type:ADD_RECORD,
        payload:RecordsAPI.push(record)
    }
}

export const remove_record = (id)=>{
    return {
        type:REMOVE_RECORD,
        payload:RecordsAPI.remove(id)
    }
}

export const update_record = (id,record)=>{
    return {
        type:UPDATE_RECORD,
        payload:RecordsAPI.update(id,record)
    }
}