import React from 'react';

const converter = ({
  label,
  value,
  onChange,
  onConvert,
  result,
  placeholder,
  buttonText,
}) => (
  <div className="my-4">
    <h3 className="text-xl font-primary text-gray-600 font-semibold mb-2">{label}</h3>
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="border border-gray-300 font-primary rounded-md p-2 mb-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    <button
      onClick={onConvert}
      className="bg-teal-700 text-white font-primary font-semibold py-2 px-4 rounded hover:bg-teal-600"
    >
      {buttonText}
    </button>
    <div className="mt-4 text-lg font-primary">
      <p>Result:</p>
      <div className="border border-gray-300 font-primary rounded-md p-2 w-full max-w-md overflow-hidden truncate">
        {result}
      </div>
    </div>
  </div>
);

export default converter;


