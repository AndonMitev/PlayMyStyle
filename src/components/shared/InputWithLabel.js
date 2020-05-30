import React from 'react';

const InputWithLabel = ({ id, className, type, name, value, onChange, shouldUseLabel, labelContent, placeholder }) => (
  <>
    {shouldUseLabel ? <label htmlFor={id}>{labelContent}</label> : null}
    <input
      id={id}
      className={className}
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  </>
);

export default InputWithLabel;
