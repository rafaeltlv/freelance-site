import { NextApiRequest, NextApiResponse } from 'next';

const getAboutPage = async (_req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  try {
    // Fetch the content for the about page
    const aboutContent = await fetchAboutContent();
    const introText = 'Welcome to our business about page.';

    // Return the about content and intro text as JSON response
    res.status(200).json({ introText, content: aboutContent });
  } catch (error) {
    // Handle any errors and return an error response
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

async function fetchAboutContent(): Promise<string> {
  // Simulate fetching the about content from a data source
  return Promise.resolve('This is the about page content');
}

export default getAboutPage;
