import React from 'react';
import './css/About.scss';

const callApi = async () => {
  const response = await fetch('/about');
  const body = await response.text();

  if (response.status != 200)
    throw Error(body);
  return body;
};

const About = () => {
  const body = callApi();

  return (
    <div className="aboutText" >
      {body}
    </div>
  );
}

export default About
