/* eslint-disable react/prop-types */
// Project.js
// eslint-disable-next-line no-unused-vars
import React from 'react';

function Project({ title, description, imageUrl, projectLink, repoLink }) {
  return (
    <section>
      <h2>{title}</h2>
      <p>{description}</p>
      <a href={projectLink} target="_blank" rel="noreferrer">
        <img src={imageUrl} alt={title} className="img" />
      </a>
      <a href={projectLink} target="_blank" rel="noreferrer">View Project</a>
      <a href={repoLink} target="_blank" rel="noreferrer">GitHub Repo</a>
    </section>
  );
}

export default Project;
