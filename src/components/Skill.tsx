import React from 'react';
import PropTypes from 'prop-types';
import VoteCount from './VoteCount';

type SkillProps = {
  title: string;
  voteCount: number;
};

const Skill = ({ title, voteCount }: SkillProps): JSX.Element => (
  <li>
    {title}
    <VoteCount count={voteCount} />
  </li>
);

Skill.propTypes = {
  title: PropTypes.string.isRequired,
  voteCount: PropTypes.number.isRequired,
};

export default Skill;
