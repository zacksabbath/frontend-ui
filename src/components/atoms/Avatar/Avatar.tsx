import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type AvatarProps = {
  variant: string;
  size: Sizes;
};

function getAvatarSize(size: Sizes) {
  switch (size) {
    case 'small':
      return '30px';
    case 'medium':
      return '50px';
    case 'large':
      return '80px';
    case 'xl':
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

const AvatarWrapper = styled.div<AvatarProps>`
  ${props => {
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
  }}
`;

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

type Sizes = 'small' | 'medium' | 'large' | 'xl';
// type Variants = 'circle' | 'square' | 'rounded';

// export default function Avatar(props: any) {

//   const {
//     alt,
//     children: childrenProp,
//     classes,
//     className,
//     component: Component = 'div',
//     imgProps,
//     sizes,
//     src,
//     srcSet,
//     variant = 'circle',
//     ...other
//   } = props;

//   // const [src, setSrc] = useState(props.src);

//   const image = new Image();

//   // image.onerror =

//   return (
//     <AvatarWrapper>
//       <img alt={alt} src={src} onError={() => console} />
//     </AvatarWrapper>
//   );
// }

function Avatar(props: any) {
  const {
    alt,
    children: childrenProp,
    // classes,
    // className,
    // component: Component = 'div',
    imgProps = {},
    // sizes,
    size = 'medium',
    src,
    srcSet,
    variant = 'circle',
    // ...other
  } = props;

  let children = null;

  // Use a hook instead of onError on the img element to support server-side rendering.
  // const loaded = useLoaded({ src, srcSet });
  // const hasImgNotFailing = hasImg && loaded !== 'error';

  // console.log('!!!!!!!', { loaded, hasImg, hasImgNotFailing });

  const hasImg = !!(src || srcSet);

  const [imageWorks, setImageWorks] = useState(true);
  console.log({ hasImg });

  if (hasImg && imageWorks) {
    children = (
      <AvatarImage
        alt={alt}
        src={src}
        srcSet={srcSet}
        // sizes={sizes}
        // className={classes.img}
        onError={() => setImageWorks(false)}
        {...imgProps}
      />
    );
  } else if (childrenProp != null) {
    children = childrenProp;
  } else if (hasImg && alt) {
    console.log('alt!!!');
    children = alt[0];
  } else {
    console.log('Fallback image!!!!!!!');
    children = <FontAwesomeIcon icon="user" size="lg" />;
  }

  return (
    <AvatarWrapper variant={variant} size={size}>
      {children}
    </AvatarWrapper>
  );

  // return (
  //   <Component
  //     className={clsx(
  //       classes.root,
  //       classes.system,
  //       classes[variant],
  //       {
  //         [classes.colorDefault]: !hasImgNotFailing,
  //       },
  //       className,
  //     )}
  //     ref={ref}
  //     {...other}
  //   >
  //     {children}
  //   </Component>
  // );
}

// function useLoaded({ src, srcSet }: { src: string; srcSet: string }) {
//   const [loaded, setLoaded] = React.useState<string | boolean>(false);

//   React.useEffect(() => {
//     if (!src && !srcSet) {
//       return undefined;
//     }

//     setLoaded(false);

//     let active = true;
//     const image = new Image();
//     image.src = src;
//     image.srcset = srcSet;
//     image.onload = () => {
//       if (!active) {
//         return;
//       }
//       setLoaded('loaded');
//     };
//     image.onerror = () => {
//       if (!active) {
//         return;
//       }
//       setLoaded('error');
//     };

//     return () => {
//       active = false;
//     };
//   }, [src, srcSet]);

//   return loaded;
// }

export default Avatar;
