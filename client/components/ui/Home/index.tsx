import styled from 'styled-components';

export const SectionTitle = styled.h1`
  text-align: center;
`;

export const SectionSubtitle = styled.h2.attrs({
  className: 'text-gray-700 dark:text-gray-400',
})`
  text-align: center;
  margin-bottom: 2rem;
  font-weight: 400;
`;
