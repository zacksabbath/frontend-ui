import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

type AvatarProps = {
  variant: string;
  size: Sizes;
};

//All of this junk will be replaced with themes
function getAvatarSize(size: Sizes) {
  switch (size) {
    case 'sm':
      return '30px';
    case 'md':
      return '50px';
    case 'lg':
      return '80px';
    case '1x':
      return '100px';
  }
}

function getBorderRadius(variant: string) {
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

const AvatarWrapper = styled.div<AvatarProps>(props => {
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

type Sizes = 'sm' | 'md' | 'lg' | '1x';
// type Variants = 'circle' | 'square' | 'rounded';

function Avatar(props: any) {
  const {
    alt,
    children: childrenProp,
    imgProps = {},
    size = 'md',
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
        {...imgProps}
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
