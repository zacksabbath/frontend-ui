import styled from 'styled-components';

interface IScrollContainer {
  height?: string | number; // ie, 500, '200px', '70vh', '3rem', '30%', etc
}

const ScrollContainer = styled.div<IScrollContainer>(props => {
  const {
    height = 700,
    theme: { background },
  } = props;
  return {
    overflowY: 'auto',
    height,
    padding: 0,
    margin: 0,
    backgroundColor: background.primary,
  };
});

export default ScrollContainer;
