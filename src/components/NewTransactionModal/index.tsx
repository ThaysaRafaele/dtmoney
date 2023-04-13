import Modal from 'react-modal'
import { Container } from './styles';

interface NewTransactionModalProps{
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps){
    return (
        <Modal 
          isOpen={isOpen} 
          onRequestClose={onRequestClose}
          overlayClassName="react-modal-overlay"
          className="react-modal-content"
      >
          <h2>Cadastrar Transação</h2>

          <Container>
            <input placeholder='Título' />

            <input 
                type="number" 
                placeholder='Valor'
            />
            
            <input placeholder='Título' />
            
            <button type="submit">
                Cadastrar
            </button>
          </Container>
      </Modal>
    );
}