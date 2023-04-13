import Modal from 'react-modal';
import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import { Container, RadioBox, TransactionTypeContainer } from './styles';
import { useState } from 'react';

interface NewTransactionModalProps{
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps){
    const [type, setType] = useState('deposit');


    
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

          <Container>
            <h2>Cadastrar Transação</h2>

            <input placeholder='Título' />

            <input 
                type="number" 
                placeholder='Valor'
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

            <input placeholder='Título' />
            
            <button type="submit">
                Cadastrar
            </button>
          </Container>
      </Modal>
    );
}