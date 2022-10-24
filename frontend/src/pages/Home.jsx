import React, { useEffect } from 'react';

const Home = (props) => {
  useEffect(() => {
    props.handlePageChange("Home");
  }, [props]);
  return (
    <div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
      </p>
    </div>
  )
}

export default Home