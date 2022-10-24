import React, { useEffect } from 'react'

const Business = (props) => {
    useEffect(() => {
        props.handlePageChange("For Businesses");
    }, [props]);

  return (
    <main>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
      </p>
    </main>
  )
}

export default Business