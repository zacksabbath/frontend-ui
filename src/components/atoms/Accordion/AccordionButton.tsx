import styled from 'styled-components';

const AccordionButton = styled.button`
  background-color: ${({ theme }) => theme.main.colors.purple};
  color: ${({ theme }) => theme.main.colors.white};
  border-color: ${({ theme }) => theme.main.colors.purple};
  display: flex;
  flex-direction: row;
  margin: 0;
  width: 720px;
  font-size: 15px;
  line-height: 22px;
  border-radius: 1px;
  height: 50px;
  position: relative;
  text-align: left;
`;

export default AccordionButton;
