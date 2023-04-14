import Modal from 'react-modal';
import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import { Container, RadioBox, TransactionTypeContainer } from './styles';
import { FormEvent, useContext, useState } from 'react';
import { api } from '../../services/api';
import { TransactionsContext } from '../../TransactionsContext';

interface NewTransactionModalProps{
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps){
    const {craeteTransaction} = useContext(TransactionsContext);
    
    const [type, setType] = useState('deposit');
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [amount, setAmount] = useState(0);

    function handleCreateNewTransaction(event: FormEvent){
        event.preventDefault();

        craeteTransaction({
            title,
            amount,
            category,
            type,
        })
    }
    
    return (

        <Modal 
          isOpen={isOpen} 
          onRequestClose={onRequestClose}
          overlayClassName="react-modal-overlay"
          className="react-modal-content"
      >
        <button type='button' 
            className='react-modal-close'
            onClick={onRequestClose}
        >
            <img src={closeImg} alt="Fechar Modal" />
        </button>

          <Container onSubmit={handleCreateNewTransaction}>
            <h2>Cadastrar Transação</h2>

            <input 
                placeholder='Título' 
                value={title}
                onChange={event => setTitle(event.target.value)}
            />

            <input 
                type="number" 
                placeholder='Valor'
                value={amount}
                onChange={event => setAmount(Number(event.target.value))}
            />
            
            <TransactionTypeContainer>
                <RadioBox
                    type="button"
                    isActive={type === 'deposit'}
                    activeColor='green'
                    onClick={() => {setType('deposit');}}
                >
                    <img src={incomeImg} alt="Entrada" />
                    <span>Entrada</span>
                </RadioBox>

                <RadioBox                    
                    type="button"                    
                    isActive={type === 'withdraw'}
                    activeColor='red'
                    onClick={() => {setType('withdraw');}}
                >
                    <img src={outcomeImg} alt="Saída" />
                    <span>Saída</span>
                </RadioBox>
            </TransactionTypeContainer>

            <input 
                placeholder='Categoria'                 
                value={category}
                onChange={event => setCategory(event.target.value)}
            />
            
            <button type="submit">
                Cadastrar
            </button>
          </Container>
      </Modal>
    );
}