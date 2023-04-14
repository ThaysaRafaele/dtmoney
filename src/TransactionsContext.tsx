import {ReactNode, createContext, useEffect, useState} from 'react'
import { api } from './services/api';


interface Transaction {
    id: number;
    title: string;
    amount: number; 
    type: string;
    category: string;   
    createdAt: string; 
}

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>;

interface TransactionsContextData {
    transactions: Transaction[];
    craeteTransaction: (transaction: TransactionInput) => Promise<void>;
}

interface TransactionsProviderProps {
    children: ReactNode;
}

export const TransactionsContext = createContext<TransactionsContextData>({} as TransactionsContextData);

export function TransactionsProvider({children} : TransactionsProviderProps) {
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    useEffect(() => {
        api.get('transactions')
        .then(response => setTransactions(response.data.transactions))
    }, []);

    async function craeteTransaction(transactionInput: TransactionInput){
        const response = await api.post('/transactions', {
            ...transactionInput,
            createdAt: new Date(),
        });
        const {transaction} = response.data;
        
        setTransactions([...transactions, transaction,]);
    }

    return (
        <TransactionsContext.Provider value={{transactions, craeteTransaction}}>
            {children}
        </TransactionsContext.Provider>
    );
}