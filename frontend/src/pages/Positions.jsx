import React, { useEffect } from 'react'

const Positions = (props) => {
  useEffect(() => {
    props.handlePageChange("Positions");
    }, [props]);

    return (
    <div>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
      </p>
    </div>
  )
}

export default Positions