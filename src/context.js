import React, { createContext, useReducer } from 'react';
import transactionReducer from './Reducer';

const initialData = []


export const TransactionContext = createContext(initialData);

export const ContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(transactionReducer, initialData);

    function addTransaction(transaction) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        })
    }

    return (
        <TransactionContext.Provider value={
            {
                transactions: state,
                addTransaction
            }
        }>
            {children}
        </TransactionContext.Provider>
    );

}