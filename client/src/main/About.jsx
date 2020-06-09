import React, { useEffect, useState } from 'react';
import './css/About.scss';

const callApi = async () => {
  let ret = { text: "nothing here" };

  try {
    const response = await fetch('/about');

    ret = response.status == 200 ? (await response.json()) : ret;
  }
  catch (e) {
    console.log(e.message);
  }
  return ret;
};

const About = () => {
  const [state, setState] = useState({ body: "" });

  useEffect(() => {
    const useCallApi = async () => {
      const response = await callApi();

      setState({ body: response.text });
    }

    useCallApi();
  }, []);

  return (
    <div className="aboutText" >
      {state.body}
    </div>
  );
}

export default About
