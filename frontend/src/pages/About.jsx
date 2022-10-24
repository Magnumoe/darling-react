import React, { useEffect } from 'react';

const About = (props) => {
  useEffect(() => {
    props.handlePageChange("About");
  }, [props]);

  return (
    <div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
      </p>
    </div>
  )
}

export default About