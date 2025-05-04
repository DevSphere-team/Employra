import React from 'react';
import { Box, Button, TextField, InputAdornment, SxProps } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';


interface SearchAddBarProps {
  placeholder?: string;
  onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onAddClick?: () => void;
  containerSx?: SxProps;
  inputSx?: SxProps;
  buttonLabel?: string;
}

const SearchAddBar: React.FC<SearchAddBarProps> = ({
  placeholder = 'Search..',
  onSearchChange,
  onAddClick,
  containerSx,
  inputSx,
  buttonLabel = 'Add',
}) => {
  return (
    <Box
     
      sx={{
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 2,
    flexWrap: 'nowrap',
    overflowX: 'auto',
    width: '100%',
    maxWidth: 1000, // Pastikan maxWidth tetap
    mx: 'auto', // Agar konten tetap terpusat

    ...containerSx, // hanya pakai style dari luar
  }}
    >
      {/* Search Input */}
      <Box sx={{ flex: 1, minWidth: 120, maxWidth: { xs: '60%', sm: '20%' } }}>
        <TextField
          placeholder={placeholder}
          onChange={onSearchChange}
          size="small"
          fullWidth
          sx={{ ...inputSx }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </Box>

      {/* Add Button */}
      <Box
        sx={{
          flexShrink: 0,
          width: { xs: 'auto', sm: 'auto' },
          display: 'flex',
          justifyContent: 'flex-end',
        }}
      >
        <Button
          variant="contained"
          color="primary"
          onClick={onAddClick}
          sx={{whiteSpace: 'nowrap',}}
          startIcon={<AddIcon />} 
        >
          {buttonLabel}
        </Button>
      </Box>
    </Box>
  );
};

export default SearchAddBar;
