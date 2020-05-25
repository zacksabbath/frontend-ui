import styled, { css } from 'styled-components';

const Clickable = styled.a(({ theme }) => {
  const { color, font } = theme;

  return css`
    font-weight: ${font.weights.semiBold};
    color: ${color.action.selected};
  `;
});

export default Clickable;
