import styled, { css } from 'styled-components';

const Clickable = styled.a(({ theme }) => {
  const { action, fontWeights } = theme;

  return css`
    font-weight: ${fontWeights.semiBold};
    color: ${action.selected};
  `;
});

export default Clickable;
