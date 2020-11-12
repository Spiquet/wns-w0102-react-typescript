import React from 'react';

import { VoteCount as StyledVoteCount } from './Styled';

type VoteCountProps = { count: number };

const VoteCount = ({ count }: VoteCountProps): JSX.Element => (
  <StyledVoteCount count={count}>{count}</StyledVoteCount>
);

export default VoteCount;
