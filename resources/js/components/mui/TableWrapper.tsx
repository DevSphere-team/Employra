// components/TableWrapper.tsx
import React from 'react';
import { Box, Paper } from '@mui/material';

interface TableWrapperProps {
  children: React.ReactNode;
}

const TableWrapper: React.FC<TableWrapperProps> = ({ children }) => {
  return (
    <Box sx={{ overflowX: 'auto' }}>
      <Paper
        elevation={8}
        sx={{
          mx: 'auto',
          width: '100%',
          maxWidth: '1000px',
          p: 2,
          borderTop: '2px solid #e0e0e0',
          borderBottom: '2px solid #e0e0e0',
          borderRadius: 2,
          minWidth: { xs: '100%', sm: '600px' },
        }}
      >
        {children}
      </Paper>
    </Box>
  );
};

export default TableWrapper;
