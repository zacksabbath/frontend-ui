import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { ScrollContainer } from '../../../components';

type DefaultTemplateProps = {
  header: ReactNode;
  content: ReactNode;
  footer?: ReactNode;
};

const Container = styled.div`
  margin: 0;
  padding: 0;
`;

const Wrapper = styled.div`
  width: 100%;
`;

export default function DefaultTemplate(props: DefaultTemplateProps) {
  const { header, content, footer } = props;

  return (
    <Wrapper>
      <Container>{header}</Container>
      <ScrollContainer maxHeight="80vh">{content}</ScrollContainer>
      <Container>{footer}</Container>
    </Wrapper>
  );
}
