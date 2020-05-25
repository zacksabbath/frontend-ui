import styled from 'styled-components';

interface IScrollContainer {
  height?: string | number; // ie, 500, '200px', '70vh', '3rem', '30%', etc
}

const ScrollContainer = styled.div<IScrollContainer>(props => {
  const { height = 700 } = props;
  return {
    overflowY: 'auto',
    height,
    padding: 0,
    margin: 0,
  };
});

export default ScrollContainer;
