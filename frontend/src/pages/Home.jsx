import React, { useEffect } from 'react';

const Home = (props) => {
  useEffect(() => {
    props.handlePageChange("Home");
  }, [props]);
  return (
    <main>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
      </p>
    </main>
  )
}

export default Home