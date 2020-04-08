// shell code stubbing

import React from 'react';

import PropTypes from 'prop-types';


/**
 * Functional recat component for Congratulations message.
 * @function
 * @param {Object} props
 * @return {JSX.Element} - Rendered component or Null
 */
const Congrats = ((props)=>{
    return <div data-test="component-congrats">{props.success ? 'Congratulations! You guessed the word!': ''}</div>
});

Congrats.propTypes = {
    success: PropTypes.bool.isRequired,
};

export default Congrats