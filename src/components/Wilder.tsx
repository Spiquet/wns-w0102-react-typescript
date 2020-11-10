import React from "react";

import blank_profile from "../blank-profile-picture-female.png";
import Skill from "./Skill";

type SkillType = {
  title: string;
  voteCount: number;
}
type WilderType = {
  name: string;
  city: string;
  skills: SkillType[];
}


const Wilder = ({ name, skills } : WilderType) : JSX.Element =>  {
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
        {skills.map((skill : SkillType) => (
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
