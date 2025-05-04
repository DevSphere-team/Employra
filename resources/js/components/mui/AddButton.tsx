import React from 'react';
import { Button, ButtonProps } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

// Definisikan tipe properti yang dapat diterima oleh komponen ini
interface CustomButtonProps extends ButtonProps {
  label: string; // Label untuk tombol
}

const AddButton: React.FC<CustomButtonProps> = ({ label, ...props }) => {
  return (
    <Button
      {...props}
      variant="outlined" // Menggunakan outlined agar hanya border
      sx={{
        textTransform: 'none', // Menghindari kapitalisasi teks secara otomatis
        borderColor: '#81c784', // Border warna hijau muda
        color: '#1976d2', // Teks warna biru
        '&:hover': {
          borderColor: '#66bb6a', // Warna border lebih gelap saat hover
          backgroundColor: 'transparent', // Menghindari perubahan background saat hover
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Menambahkan efek shadow pada hover
        },
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '6px 12px', // Ukuran tombol lebih kecil
        borderRadius: 1, // Membulatkan border sedikit
      }}
      startIcon={<AddIcon />} // Ikon Add
    >
      {label}
    </Button>
  );
};

export default AddButton;
