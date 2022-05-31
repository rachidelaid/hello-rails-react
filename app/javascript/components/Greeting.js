import React from "react"
import PropTypes from "prop-types"
const Greeting = ({ greeting }) => {
  return (
    <React.Fragment>
      Greeting: {greeting}
    </React.Fragment>
  );
}

Greeting.propTypes = {
  greeting: PropTypes.string
};
export default Greeting
