import React, { useEffect } from 'react'

const NotFound = (props) => {
  useEffect(() => {
    props.handlePageChange("404: Page Not Found");
  }, [props]);

  return (
    <div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
      </p>
    </div>
  )
}

export default NotFound