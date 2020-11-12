import styled from 'styled-components';

const Container = styled.div`
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  padding: 24px;
`;

const VoteCount = styled.span`
  /* Center the content */
  align-items: center;
  display: flex;
  justify-content: center;

  /* Colors */
  background-color: ${({ count }: { count: number }) =>
    count >= 10 ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.3)'};
  color: #fff;

  /* Rounded border */
  border-radius: 9999px;
  height: 20px;
  width: 20px;
`;

export { Container, VoteCount };
