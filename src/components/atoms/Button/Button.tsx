import styled, { css } from 'styled-components';

const ButtonStyle = styled.button(props => {
  return css`
    background-color: #3c266e;
    color: white;
    flex: right;
    flex-direction: row;
    text-align: center;
    position: relative;
    display: row;
  `;
});

export default ButtonStyle;
