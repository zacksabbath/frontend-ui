import styled, { css } from 'styled-components';

const Bubble = styled.span(({ theme }) => {
  const { color, font } = theme;

  return css`
    font-family: ${font.family};
    background-color: ${color.background.secondary};
    border-radius: 50px;
    font-weight: normal;
    font-size: 13px;
    color: ${color.foreground.icon};
    padding: 8px;
    display: flex;
    flex-direction: row;
    align-items: center;
    :focus {
      outline: none;
    }
    border: none;
    text-align: center;
  `;
});

export default Bubble;
