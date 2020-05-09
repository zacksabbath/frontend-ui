import * as React from 'react';
import styled, { css } from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const SCarouselWrapper = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
`;

interface ICarouselSlide {
  active?: boolean;
}

const SCarouselSlide = styled.div<ICarouselSlide>`
  flex: 0 0 auto;
  opacity: ${props => (props.active ? 1 : 0)};
  transition: all 0.5s ease;
  width: 100%;
`;

interface ICarouselProps {
  currentSlide: number;
}

const SCarouselSlides = styled.div<ICarouselProps>`
  display: flex;
  ${props =>
    props.currentSlide &&
    css`
      transform: translateX(-${props.currentSlide * 100}%);
    `};
  transition: all 0.5s ease;
`;

interface IProps {
  children: JSX.Element[];
}

const SlideButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 30px;
  opacity: 0.5;
  border: none;

  :hover {
    cursor: pointer;
    opacity: 1;
  }
`;

const GoLeftButton = styled(SlideButton)`
  left: 0;
`;

const GoRightButton = styled(SlideButton)`
  right: 0;
`;

const Carousel = ({ children }: IProps) => {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const activeSlide = children.map((slide, index) => (
    <SCarouselSlide active={currentSlide === index} key={index}>
      {slide}
    </SCarouselSlide>
  ));

  return (
    <>
      <SCarouselWrapper>
        <SCarouselSlides currentSlide={currentSlide}>
          {activeSlide}
        </SCarouselSlides>
      </SCarouselWrapper>
      {currentSlide > 0 && (
        <GoLeftButton
          onClick={() => {
            setCurrentSlide(
              (currentSlide - 1 + activeSlide.length) % activeSlide.length
            );
          }}
        >
          <FontAwesomeIcon icon={faArrowLeft} />
        </GoLeftButton>
      )}
      {currentSlide < children.length - 1 && (
        <GoRightButton
          onClick={() => {
            setCurrentSlide((currentSlide + 1) % activeSlide.length);
          }}
        >
          <FontAwesomeIcon icon={faArrowRight} />
        </GoRightButton>
      )}
    </>
  );
};

export default Carousel;
