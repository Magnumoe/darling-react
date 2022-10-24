import React, { useEffect } from 'react';

const About = (props) => {
  useEffect(() => {
    props.handlePageChange("About");
  }, [props]);

  return (
    <main>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
      </p>
    </main>
  )
}

export default About