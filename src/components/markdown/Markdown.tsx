import { Link, Typography } from '@mui/material';
import React from 'react';
import ReactMarkdown from 'react-markdown';

const Markdown = ({ children }: { children: string }) => {
  return (
    <ReactMarkdown
      components={{
        a: ({ children, href }) => (
          <Link href={href} target="_blank">
            {children}
          </Link>
        ),
        h2: ({ children }) => (
          <Typography variant="h3" component="h2" mt={4}>
            {children}
          </Typography>
        ),
        p: ({ children }) => (
          <Typography variant="body1" mt={2}>
            {children}
          </Typography>
        ),
        ul: ({ children }) => (
          <ul
            style={{ listStyle: 'disc', marginLeft: '20px', marginTop: '5px' }}
          >
            {children}
          </ul>
        ),
      }}
    >
      {children}
    </ReactMarkdown>
  );
};

export default Markdown;
