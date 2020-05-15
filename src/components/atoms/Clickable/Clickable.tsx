import styled, { css } from 'styled-components';

const Clickable = styled.a(({ theme }) => {
  const { action, font } = theme;

  return css`
    font-weight: ${font.weights.semiBold};
    color: ${action.selected};
  `;
});

export default Clickable;
