import styled from 'styled-components';
import { getTranslation } from '@/ts/Util';

const Container = styled.section`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  position: relative;
  padding: var(--padding-section);
  overflow: hidden;
  background-color: var(--color-sub);
  align-items: center;

  ::selection {
    color: var(--color-sub);
    background-color: var(--color-main);
  }
`;
const ContainerLink = styled.a`
  font-size: var(--font-size-lg);
`;
const ContainerCaption = styled.span`
  opacity: 0.4;
`;

export const Mail = () => {
  const translation = getTranslation();

  return (
    <Container>
      <ContainerLink href="mailto:hi@ch3rn1k.me">hi@ch3rn1k.me</ContainerLink>
      <ContainerCaption>{translation.messageMePlease} (:</ContainerCaption>
    </Container>
  );
};
