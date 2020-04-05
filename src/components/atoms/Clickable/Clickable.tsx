import styled from 'styled-components';

const Clickable = styled.a`
  font-weight: bold;
  color: ${({ theme }) => theme.main.colors.pink};
`;

export default Clickable;
