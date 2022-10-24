import React, { useEffect } from 'react'

const Contact = (props) => {
  useEffect(() => {
    props.handlePageChange("Contact");
  }, [props]);

  return (
    <main>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
      </p>
    </main>
  )
}

export default Contact