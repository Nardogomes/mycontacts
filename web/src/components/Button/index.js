import PropTypes from 'prop-types';

import Spinner from '../Spinner';
import { StyledButton } from './styles';

export default function Button(type, disable, isLoading, children) {
  <StyledButton type={type} disabled={disable || isLoading}>
    {!isLoading && children}
    {isLoading && <Spinner size={16} />}
  </StyledButton>;
}

Button.propTypes = {
  type: PropTypes.string,
  disabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

Button.deafultProps = {
  type: 'button',
  disabled: false,
  isLoading: false,
};
