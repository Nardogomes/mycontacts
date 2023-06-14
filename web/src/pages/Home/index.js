import {
  Container, InputSearchContainer, Header, ListContainer, Card,
} from './styles';

import arrow from '../../assets/images/icons/arrow.svg';
import edit from '../../assets/images/icons/edit.svg';
import trash from '../../assets/images/icons/trash.svg';

export default function ContactsList() {
  return (
    <Container>
      <InputSearchContainer>
        <input type="text" placeholder="Pesquise pelo nome..." />
      </InputSearchContainer>

      <Header>
        <strong>3 contatos</strong>
        <a href="/">Novo contato</a>
      </Header>

      <ListContainer>
        <header>
          <button type="button">
            <span>Nome</span>
            <img src={arrow} alt="arrow" />
          </button>
        </header>

        <Card>
          <div className="info">
            <div className="contact-name">
              <strong>Nardo Gomes</strong>
              <small>instagram</small>
            </div>
            <span>nardo@mail.com</span>
            <span>(00) 99999-999</span>
          </div>

          <div className="actions">
            <a href="/">
              <img src={edit} alt="Editar contato" />
            </a>
            <button type="button">
              <img src={trash} alt="Deletar contato" />
            </button>
          </div>
        </Card>

        <Card>
          <div className="info">
            <div className="contact-name">
              <strong>Nardo Gomes</strong>
              <small>instagram</small>
            </div>
            <span>nardo@mail.com</span>
            <span>(00) 99999-999</span>
          </div>

          <div className="actions">
            <a href="/">
              <img src={edit} alt="Editar contato" />
            </a>
            <button type="button">
              <img src={trash} alt="Deletar contato" />
            </button>
          </div>
        </Card>

        <Card>
          <div className="info">
            <div className="contact-name">
              <strong>Nardo Gomes</strong>
              <small>instagram</small>
            </div>
            <span>nardo@mail.com</span>
            <span>(00) 99999-999</span>
          </div>

          <div className="actions">
            <a href="/">
              <img src={edit} alt="Editar contato" />
            </a>
            <button type="button">
              <img src={trash} alt="Deletar contato" />
            </button>
          </div>
        </Card>
      </ListContainer>
    </Container>
  );
}
