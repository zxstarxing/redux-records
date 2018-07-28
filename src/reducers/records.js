import { LOAD_RECORD_PENDING, LOAD_RECORD_FULFILLED, LOAD_RECORD_REJECTED } from '../constants';
import { ADD_RECORD_PENDING, ADD_RECORD_FULFILLED, ADD_RECORD_REJECTED } from '../constants';
import { REMOVE_RECORD_PENDING, REMOVE_RECORD_FULFILLED, REMOVE_RECORD_REJECTED } from '../constants';
import { UPDATE_RECORD_PENDING, UPDATE_RECORD_FULFILLED, UPDATE_RECORD_REJECTED } from '../constants';

const initialSate = {
    error: null,
    isLoaded: false,
    records: [],
    credit: 0,
    debit: 0,
    balance: 0
}

const records = (state = initialSate, action) => {
    let records, amount, credit, debit, balance;
    switch (action.type) {
        case LOAD_RECORD_PENDING:
            return Object.assign({}, state, {
                isLoaded: false
            })
        case LOAD_RECORD_FULFILLED:
            records = action.payload.data;
            credit = records.filter(record => record.amount > 0).length > 0
                ? action.payload.data
                    .filter(record => record.amount > 0)
                    .map(record => record.amount)
                    .reduce((total, amount) => total + amount)
                : 0;
            debit = records.filter(record => record.amount < 0).length > 0
                ? action.payload.data
                    .filter(record => record.amount < 0)
                    .map(record => record.amount)
                    .reduce((total, amount) => total + amount)
                : 0;
            balance = credit + debit;
            return Object.assign({}, state, {
                isLoaded: true,
                records,
                credit,
                debit,
                balance
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
            amount = action.payload.data.amount;
            credit = amount > 0 ? amount : 0;
            debit = amount < 0 ? amount : 0;
            balance = credit + debit;
            return Object.assign({}, state, {
                isLoaded: true,
                records: [
                    ...state.records,
                    action.payload.data
                ],
                credit: state.credit + credit,
                debit: state.debit + debit,
                balance: state.balance + balance
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
            amount = action.payload.data.amount;
            credit = amount > 0 ? amount : 0;
            debit = amount < 0 ? amount : 0;
            balance = credit + debit;
            return Object.assign({}, state, {
                isLoaded: true,
                records: state.records
                    .filter(record => record.id !== action.payload.data.id),
                credit: state.credit - credit,
                debit: state.debit - debit,
                balance: state.balance - balance
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
            records = state.records.map(record => record.id === action.payload.data.id ? action.payload.data : record);
            credit = records.filter(record => record.amount > 0).length > 0
                ? records
                    .filter(record => record.amount > 0)
                    .map(record => record.amount)
                    .reduce((total, amount) => total + amount)
                : 0;
            debit = records.filter(record => record.amount < 0).length > 0
                ? records
                    .filter(record => record.amount < 0)
                    .map(record => record.amount)
                    .reduce((total, amount) => total + amount)
                : 0;
            balance = credit + debit;
            return Object.assign({}, state, {
                isLoaded: true,
                records,
                credit,
                debit,
                balance
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