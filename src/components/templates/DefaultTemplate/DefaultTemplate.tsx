import React, { ReactNode } from 'react';
import styled, { css } from 'styled-components';
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

const Wrapper = styled.div(({ theme }) => {
  const { color, font } = theme;
  return css`
    font-family: ${font.family};
    background-color: ${color.background.primary};
    color: ${color.text.primary};
  `;
});

export default function DefaultTemplate(props: DefaultTemplateProps) {
  const { header, content, footer } = props;

  return (
    <Wrapper>
      <Container>{header}</Container>
      <ScrollContainer height="85vh">{content}</ScrollContainer>
      <Container>{footer}</Container>
    </Wrapper>
  );
}
