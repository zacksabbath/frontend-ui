import React, { useState } from 'react';
import styled, { css } from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

const SCarouselWrapper = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  font-family: ${({ theme }) => theme.font.family};
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
  children: React.ReactNode;
  showPagination?: boolean;
}

interface INavDot {
  isActive: boolean;
}

const NavDot = styled.span<INavDot>(({ isActive, theme }) => {
  const { action, spacing } = theme;
  return {
    fontSize: 15,
    color: isActive ? action.selected : action.disabled,
    paddingRight: spacing.sm,
    ':hover': { cursor: 'pointer' },
  };
});

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

const Carousel = ({ children: rawChildren, showPagination = true }: IProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const children = React.Children.toArray(rawChildren); // This must be done in case there is a single element

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

      {showPagination && (
        <Pagination>
          {children.map((_, slideIndex) => (
            <NavDot
              isActive={slideIndex === currentSlide}
              onClick={() => setCurrentSlide(slideIndex % activeSlide.length)}
            >
              <FontAwesomeIcon icon={faCircle} />
            </NavDot>
          ))}
        </Pagination>
      )}
    </>
  );
};

export default Carousel;
