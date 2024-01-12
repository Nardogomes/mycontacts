import ToastMessage from '../ToastMessage';

import { Container } from './styles';

export default function ToastContainer() {
  return (
    <Container>
      <ToastMessage text="default" />
      <ToastMessage text="error" type="danger" />
      <ToastMessage text="Success" type="success" />
    </Container>
  );
}
