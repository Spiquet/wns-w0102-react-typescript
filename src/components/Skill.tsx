import React from 'react';
import PropTypes from 'prop-types';
import VoteCount from './VoteCount';
import { TSkill } from '../types';

const Skill = ({ title, voteCount }: TSkill): JSX.Element => (
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
