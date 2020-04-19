import styled, { css } from 'styled-components';

const ButtonStyle = styled.button(props => {
  const { color } = props;

  return css`
    background-color: #3c266e;
    color: white;
    border-color: #3c266e;
    display: flex;
    flex: left;
    width: 1/3;
    text-align: center;
    flex-direction: row;
  `;
});

export default ButtonStyle;
