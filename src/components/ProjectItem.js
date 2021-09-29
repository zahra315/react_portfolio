import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ProjectItemStyles = styled.div`
  .projectItem__img {
    width: 100%;
    height: 400px;
    border-radius: 12px;
    overflow: hidden;
    display: inline-block;
    border: 3px solid var(--gray-2);
    img {
      height: 100%;
    }


  @media only screen and (max-width: 768px) {
    .projectItem__img {
      height: 350px;
    }
  }
`;

export default function ProjectItem(props) {
  return (
    <ProjectItemStyles>
      <Link to="/projects" className="projectItem__img">
        <img src={props.img} alt="project img" />
      </Link>
      <div>
        <a href={props.link}>{props.title}</a>
        <p className="p-0">{props.description}</p>
      </div>
    </ProjectItemStyles>
  );
}
