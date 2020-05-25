import styled, { css } from 'styled-components';

export default styled.div(({ theme }) => {
  const { color, spacing, font } = theme;

  return css`
    background-color: ${color.background.primary};
    font-family: ${font.family};
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.3);
    border-radius: 8px;
    text-align: left;
    position: relative;
    margin-bottom: ${spacing.sm};
  `;
});
