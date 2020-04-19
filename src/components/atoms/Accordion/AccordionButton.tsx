import styled, { css } from 'styled-components';

const AccordionButton = styled.button(props => {
  const { color } = props;

  return css`
    background-color: #3c266e;
    color: white;
    border-color: #3c266e;
    display: flex;
    flex-direction: row;
    margin: 1px;
    width: 720px;
    font-size: 15px;
    line-height: 50%;
    border-radius: 1px;
    height: 50px;
    position: relative;
    text-align: left;
  `;
});

export default AccordionButton;
