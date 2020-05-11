import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

//All of this junk will be replaced with themes
function getAvatarSize(size?: Sizes) {
  switch (size) {
    case 'xs':
      return '2.75em';
    case 'sm':
      return '2.875em;';
    case 'lg':
      return '3.33333em';
    case '1x':
      return '3em';
    case '2x':
      return '4em';
    case '3x':
      return '5em';
    case '4x':
      return '6em';
    case '5x':
      return '7em';
    case '6x':
      return '8em';
    case '7x':
      return '9em';
    case '8x':
      return '10em';
    case '9x':
      return '11em';
    case '10x':
      return '12em';
    default:
      return '3em';
  }
}

function getBorderRadius(variant?: string) {
  switch (variant) {
    case 'circle':
      return '50%';
    case 'square':
      return '0';
    case 'rounded':
      return '20%';
    default:
      return '50%';
  }
}

type Sizes =
  | 'xs'
  | 'lg'
  | 'sm'
  | '1x'
  | '2x'
  | '3x'
  | '4x'
  | '5x'
  | '6x'
  | '7x'
  | '8x'
  | '9x'
  | '10x';
type Variants = 'circle' | 'square' | 'rounded';

type IAvatarWrapper = {
  size?: Sizes;
  variant?: Variants;
};

export interface IAvatar extends IAvatarWrapper {
  alt?: string;
  children?: React.ReactNode;
  src?: string;
  srcSet?: string;
}

const AvatarWrapper = styled.div<IAvatarWrapper>(props => {
  const { variant, size } = props;
  const borderRadius = getBorderRadius(variant);
  const avatarSize = getAvatarSize(size);
  return css`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    border-radius: ${borderRadius};
    width: ${avatarSize};
    height: ${avatarSize};
    background-color: gray;
  `;
});

const AvatarImage = styled.img({
  width: '100%',
  height: '100%',
  textAlign: 'center',
  // Handle non-square image. The property isn't supported by IE 11.
  objectFit: 'cover',
  // Hide alt text.
  color: 'transparent',
  // Hide the image broken icon, only works on Chrome.
  textIndent: 10000,
  borderRadius: 'inherit',
});

function Avatar(props: IAvatar) {
  const {
    alt,
    children: childrenProp,
    size = '1x',
    src,
    srcSet,
    variant = 'circle',
  } = props;

  let children = null;

  const hasImg = !!(src || srcSet);

  const [hasWorkingImg, setHasWorkingImg] = useState(hasImg);

  if (hasImg && hasWorkingImg) {
    children = (
      <AvatarImage
        alt={alt}
        src={src}
        srcSet={srcSet}
        onError={() => setHasWorkingImg(false)}
      />
    );
  } else if (childrenProp != null) {
    children = childrenProp;
  } else if (hasImg && alt) {
    children = alt[0];
  } else {
    children = <FontAwesomeIcon icon={faUser} size={size} />;
  }

  return (
    <AvatarWrapper variant={variant} size={size}>
      {children}
    </AvatarWrapper>
  );
}

export default Avatar;
