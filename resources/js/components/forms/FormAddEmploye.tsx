import React, { useState } from 'react';
import { TextField, Button, Box, FormControl, InputLabel, Select, MenuItem } from '@mui/material';

type FormAddEmployeProps = {
  onSubmit: (employee: { firstName: string; department: string; grade: string }) => void;
  onCancel: () => void;
};

const FormAddEmploye: React.FC<FormAddEmployeProps> = ({ onSubmit, onCancel }) => {
  const [firstName, setFirstName] = useState('');
  const [department, setDepartment] = useState('');
  const [grade, setGrade] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ firstName, department, grade });
    // Reset form after submit
    setFirstName('');
    setDepartment('');
    setGrade('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box sx={{ padding: 2 }}>
        <Box sx={{ mb: 2 }}>
          <TextField
            fullWidth
            label="First Name"
            variant="outlined"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </Box>
        <Box sx={{ mb: 2 }}>
          <FormControl fullWidth>
            <InputLabel>Department</InputLabel>
            <Select
              value={department}
              label="Department"
              onChange={(e) => setDepartment(e.target.value)}
            >
              <MenuItem value="HRGA">HRGA</MenuItem>
              <MenuItem value="Marketing">Marketing</MenuItem>
              <MenuItem value="Warehouse">Warehouse</MenuItem>
              {/* Tambahkan lebih banyak pilihan departemen sesuai kebutuhan */}
            </Select>
          </FormControl>
        </Box>
        <Box sx={{ mb: 2 }}>
          <FormControl fullWidth>
            <InputLabel>Grade</InputLabel>
            <Select
              value={grade}
              label="Grade"
              onChange={(e) => setGrade(e.target.value)}
            >
              <MenuItem value="Staff">Staff</MenuItem>
              <MenuItem value="Supervisor">Supervisor</MenuItem>
              {/* Tambahkan lebih banyak pilihan grade sesuai kebutuhan */}
            </Select>
          </FormControl>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
          <Button variant="outlined" onClick={onCancel}>Cancel</Button>
          <Button variant="contained" color="primary" type="submit">Add Employee</Button>
        </Box>
      </Box>
    </form>
  );
};

export default FormAddEmploye;
