import React, { useEffect } from 'react'

const Positions = (props) => {
  useEffect(() => {
    props.handlePageChange("Positions");
    }, [props]);

    return (
    <main>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
      </p>
    </main>
  )
}

export default Positions