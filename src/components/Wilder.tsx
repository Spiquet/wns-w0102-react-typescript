import React from 'react';
import blank_profile from '../blank-profile-picture-female.png';
import Skill from './Skill';
import { TWilder } from '../types';

const Wilder = ({ name, skills }: TWilder): JSX.Element => {
  return (
    <article className="card">
      <img src={blank_profile} alt="Jane Doe Profile" />
      <h3>{name}</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <h4>Wild Skills</h4>
      <ul className="skills">
        {skills.map((skill) => (
          <Skill
            key={skill.title}
            title={skill.title}
            voteCount={skill.voteCount}
          />
        ))}
      </ul>
    </article>
  );
};

export default Wilder;
