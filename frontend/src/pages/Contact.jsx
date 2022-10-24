import React, { useEffect } from 'react'

const Contact = (props) => {
  useEffect(() => {
    props.handlePageChange("Contact");
  }, [props]);

  return (
    <div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
      </p>
    </div>
  )
}

export default Contact