import styled, { css } from 'styled-components';

const ButtonStyle = styled.button(props => {
  return css`
    background-color: #3c266e;
    color: white;
    flex: left;
    flex-direction: row;
    text-align: center;
    display: inline;
  `;
});

export default ButtonStyle;
