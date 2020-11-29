import React from 'react';

const RadioField = ({ input, meta, ...rest }) => (
  <input  {...rest} checked={input.value === rest.value} />
);
