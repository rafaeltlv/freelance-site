import React from 'react';

const CustomErrorPage: React.FC<{ statusCode: number, message: string }> = ({ statusCode, message }) => {
  return (
    <div>
      <h1>Error {statusCode}</h1>
      <p>{message}</p>
    </div>
  );
};

export default CustomErrorPage;
