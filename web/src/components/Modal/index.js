import Button from '../Button';

import { Overlay, Container, Footer } from './styles';

export default function Modal() {
  return (
    <Overlay>
      <Container>
        <h1>Título do modal</h1>
        <p>
          Corpo do modal
        </p>

        <Footer>
          <button type="button" className="cancel-button">Cancelar</button>
          <Button type="button">
            Deletar
          </Button>
        </Footer>
      </Container>
    </Overlay>
  );
}