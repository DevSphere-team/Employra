import React from 'react';
import { Box } from '@mui/material';

interface StatusBadgeProps {
  status: 'On Progress' | 'Done' | string;
}

const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '2px 8px',
          backgroundColor: status === 'On Progress' ? 'green' : 'red',
          color: 'white',
          borderRadius: '12px',
          fontSize: '0.75rem',
          fontWeight: 500,
          textAlign: 'center',
          lineHeight: 1.2,
          minWidth: 60,
          cursor: 'default',
          '&:hover': {
            opacity: 0.85,
          },
        }}
      >
        {status}
      </Box>
    </Box>
  );
};

export default StatusBadge;
