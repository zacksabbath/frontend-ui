import React, { Component } from 'react';

import styled from 'styled-components';

const Main = styled.div`
  display: flex;
  flex-direciton: row;
  text-align: right;
  float: right;
`;

let number = 0;

export default class AccordionCount extends Component {
  render() {
    return (
      <>
        <div className="AccordionCount">{number}</div>
      </>
    );
  }
}
