import React from 'react';

function Resume() {
  return (
    <section className="my-5">
      <div className="my-2">
      <p>
        Please see my LinkedIn profile for my <a href="https://www.linkedin.com/in/nalarue/">work history.</a>
        </p>
        <h3>Front-end Proficiencies</h3>
        <ul className="skills">
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>jQuery</li>
          <li>responsive design</li>
          <li>Bootstrap</li>
        </ul>
        <h3>Back-end Proficiencies</h3>
        <ul className="skills">
          <li>APIs</li>
          <li>Node</li>
          <li>Express</li>
        </ul>
      </div>
    </section>
  );
}

export default Resume;
