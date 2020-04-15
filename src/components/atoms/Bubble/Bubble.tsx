import styled from 'styled-components';

const Bubble = styled.div`
  background: ${({ theme }) => theme.cardTheme?.secondary};
  border-radius: 50px;
  font-weight: normal;
  font-size: 13px;
  color: #ffffff;
  padding: 8px;
  display: flex;
  flex-direction: row;
  align-items: center;
  :focus {
    outline: none;
  }
  border: none;
`;

export default Bubble;
