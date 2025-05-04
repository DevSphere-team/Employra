import React from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import { Box, SxProps } from '@mui/material';

interface SearchTextProps {
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  containerSx?: SxProps; // styling fleksibel utk container luar
  inputSx?: SxProps;     // styling fleksibel utk TextField
}

const SearchText: React.FC<SearchTextProps> = ({
  placeholder,
  onChange,
  containerSx,
  inputSx,
}) => {
  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        ...containerSx, // override atau extend posisi dari luar
      }}
    >
      <TextField
        size="small"
        variant="outlined"
        placeholder={placeholder}
        onChange={onChange}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        sx={{
          width: { xs: '100%', sm: '250px' }, // default responsive
          '& .MuiOutlinedInput-root': {
            borderRadius: '20px',
            border: '2px solid rgb(45, 74, 189)',
            '&:hover': {
              borderColor: '#4caf50',
              boxShadow: 'none',
            },
          },
          ...inputSx, // custom styling dari luar
        }}
      />
    </Box>
  );
};

export default SearchText;
