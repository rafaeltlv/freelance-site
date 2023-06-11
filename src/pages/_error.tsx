import React from 'react';
import CustomErrorPage from './customerrorpage';

const ErrorPage = ({ statusCode, message }) => {
  // You can customize the error page based on the status code or message
  return <CustomErrorPage statusCode={statusCode} message={message} />;
};

export default ErrorPage;
