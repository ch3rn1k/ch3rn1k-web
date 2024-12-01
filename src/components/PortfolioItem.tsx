import styled from 'styled-components';

const Container = styled.a<{ $status?: 'on' | 'off' | 'private' | string }>`
  font-family: 'Gilroy', sans-serif;
  position: relative;
  color: var(--color-sub);
  background-color: white;
  padding: 20px;
  border-radius: 12px;
  margin: 8px 12px 0 0;
  transition: all 200ms;
  cursor: pointer;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.01rem;
  font-weight: 600;

  span {
    display: block;
    opacity: 0.6;
    font-size: var(--font-size-sm);
    font-weight: 500;
    text-transform: initial;
    margin-top: 4px;
  }

  &::after {
    content: ${({ $status }) => ($status === 'on' ? 'ON' : $status === 'off' ? 'OFF' : 'PVT')};
    background-color: ${({ $status }) => ($status === 'on' ? '#70bf4c' : $status === '#f26262' ? 'OFF' : '#7b67db')};
    position: absolute;
    right: 6px;
    top: 6px;
    padding: 4px 8px;
    font-size: var(--font-size-sm);
    color: #ffffff;
    border-radius: 8px;
  }
  &:hover,
  &:active {
    color: var(--color-main);
    background-color: var(--color-sub);
    font-weight: 600;
    transform: translateY(-4px) scale(1.025);
  }
`;

export const PortfolioItem = ({
  link,
  title,
  description,
  status
}: {
  link?: string;
  title?: string;
  description?: string;
  status?: 'on' | 'off' | 'private' | string;
}) => {
  return (
    <Container href={link} target="_blank" $status={status} rel="noreferrer" tabIndex={0}>
      {title}
      <span>{description}</span>
    </Container>
  );
};
