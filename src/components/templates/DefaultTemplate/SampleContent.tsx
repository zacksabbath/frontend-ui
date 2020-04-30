import React from 'react';

const Content = () => (
  <>
    <h3>Content</h3>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dui risus,
      fringilla ut lobortis vel, elementum in turpis. Praesent luctus enim eu
      tristique tempor. Mauris non augue quis nibh aliquet pretium sit amet quis
      tellus. Nullam et consectetur sem, lobortis maximus risus. Nam est ligula,
      iaculis vel libero sit amet, faucibus efficitur lacus. Duis non ipsum
      nunc. Aenean nec lobortis risus. Phasellus ornare dui nibh.
    </p>
    <p>
      Sed nisl purus, ornare sed dui in, elementum facilisis arcu. Pellentesque
      habitant morbi tristique senectus et netus et malesuada fames ac turpis
      egestas. Integer porta, sapien vitae condimentum posuere, turpis nisi
      porttitor augue, vel auctor orci ipsum vitae felis. In ullamcorper, nibh
      sed accumsan faucibus, lectus augue egestas turpis, nec molestie mi metus
      non eros. Sed vel metus metus. Quisque vel tellus sem. Praesent rutrum
      imperdiet diam, nec sollicitudin tellus maximus ut. Pellentesque elit
      lorem, cursus vitae suscipit eget, euismod nec nisl. Suspendisse euismod
      pulvinar ante, sed vehicula risus tristique quis. Ut vehicula tincidunt
      ipsum, a pretium orci venenatis sit amet. In vulputate interdum tellus, a
      porttitor justo euismod ac.
    </p>
    <p>
      Suspendisse eu nulla sit amet leo commodo aliquet a ut ipsum. Pellentesque
      pulvinar, libero convallis ornare iaculis, lorem libero pretium lorem, sit
      amet semper metus metus sed velit. Nullam eget malesuada diam, ac volutpat
      elit. Etiam eleifend sed justo tincidunt semper. Quisque consequat mollis
      turpis at congue. Cras laoreet, lorem quis venenatis sagittis, metus erat
      sollicitudin nibh, ut pellentesque enim eros et sapien. Aenean volutpat,
      neque sit amet pellentesque pellentesque, sem sem accumsan metus, a
      vulputate orci dolor eu odio. Aenean tincidunt lorem pulvinar, dapibus
      orci sed, vestibulum libero.
    </p>
  </>
);

const Header = () => (
  <h1
    style={{
      backgroundColor: 'red',
      textAlign: 'center',
      padding: 0,
      margin: 0,
    }}
  >
    Header!!!
  </h1>
);
const Footer = () => (
  <h3
    style={{
      backgroundColor: 'green',
      textAlign: 'center',
      padding: 0,
      margin: 0,
    }}
  >
    Footer!!
  </h3>
);

export { Content, Header, Footer };
