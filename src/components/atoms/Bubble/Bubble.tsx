import styled, { css } from 'styled-components';

const Bubble = styled.div(({ theme }) => {
  const { background, foreground } = theme;

  return css`
    background-color: ${background.secondary};
    border-radius: 50px;
    font-weight: normal;
    font-size: 13px;
    color: ${foreground.icon};
    padding: 8px;
    display: flex;
    flex-direction: row;
    align-items: center;
    :focus {
      outline: none;
    }
    border: none;
  `;
});

export default Bubble;
