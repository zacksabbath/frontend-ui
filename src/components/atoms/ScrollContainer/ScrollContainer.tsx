import styled from 'styled-components';

type ScrollContainerProps = {
  maxHeight?: string | number; // ie, 500, '200px', '3rem', or '30%'
};

const ScrollContainer = styled.div<ScrollContainerProps>(props => {
  const { maxHeight = 500 } = props;
  return {
    overflowY: 'auto',
    maxHeight,
    padding: 0,
    margin: 0,
  };
});

export default ScrollContainer;
