import { NextApiRequest, NextApiResponse } from 'next';
import React from 'react';

const CustomErrorPage: React.FC<{ error: Error }> = ({ error }) => {
  return <div>{error.message}</div>;
};

const ErrorPage = (_req: NextApiRequest, res: NextApiResponse): void => {
  const error = new Error('404 Not Found');

  res.status(404).json({ error: error.message }); // Only send the error message in the response
};

export default CustomErrorPage;
export { ErrorPage };
