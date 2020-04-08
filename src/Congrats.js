// shell code stubbing

import React from 'react';


/**
 * Functional recat component for Congratulations message.
 * @function
 * @param {Object} props
 * @return {JSX.Element} - Rendered component or Null
 */
export default ((props)=>{
    return <div data-test="component-congrats">{props.success ? 'Congratulations! You guessed the word!': ''}</div>
})