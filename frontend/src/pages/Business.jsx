import React, { useEffect } from 'react'

const Business = (props) => {
    useEffect(() => {
        props.handlePageChange("For Businesses");
    }, [props]);

  return (
    <div>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
      </p>
    </div>
  )
}

export default Business