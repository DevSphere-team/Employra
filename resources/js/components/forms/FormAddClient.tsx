import React, { useState } from 'react';
import {
  TextField,
  Button,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

type FormAddClientProps = {
  onSubmit: (formData: {
    companyName: string;
    email: string;
    telephone: string | undefined;
    startDate: string;
    endDate: string;
    status: string;
    address: string;
    projectTitle: string;
    taskDescription: string;
  }) => void;
  onCancel: () => void;
};

const FormAddClient: React.FC<FormAddClientProps> = ({ onSubmit, onCancel }) => {
  const [companyName, setCompanyName] = useState('');
  const [email, setEmail] = useState('');
  const [telephone, setTelephone] = useState<string | undefined>('+62'); // Set default value
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [status, setStatus] = useState('onprogress');
  const [address, setAddress] = useState('');
  const [projectTitle, setProjectTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      companyName,
      email,
      telephone,
      startDate,
      endDate,
      status,
      address,
      projectTitle,
      taskDescription,
    });
    // Reset form
    setCompanyName('');
    setEmail('');
    setTelephone('+62'); // Reset to +62
    setStartDate('');
    setEndDate('');
    setStatus('onprogress');
    setAddress('');
    setProjectTitle('');
    setTaskDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box sx={{ padding: 2 }}>
        {/* Auto Generated */}
        <Box sx={{ mb: 2 }}>
          <TextField
            fullWidth
            label="Auto Generated"
            variant="outlined"
            value="auto-generated"
            disabled
          />
        </Box>

        {/* Nama Company */}
        <Box sx={{ mb: 2 }}>
          <TextField
            fullWidth
            label="Nama Company"
            variant="outlined"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
          />
        </Box>

        {/* Email & Telephone */}
        <Box sx={{ mb: 2, display: 'flex', gap: 2 }}>
          <TextField
            fullWidth
            label="Email Company"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

<FormControl fullWidth>
  <PhoneInput
    international
    defaultCountry="ID"
    value={telephone}
    onChange={(value) => setTelephone(value)}
    countryCallingCodeEditable={false}
    withCountryCallingCode
    className="PhoneInput" // Tambahkan class di sini
  />
</FormControl>

        </Box>
        
        {/* Start Date & End Date */}
        <Box sx={{ mb: 2, display: 'flex', gap: 2 }}>
          <TextField
            fullWidth
            label="Start Date"
            variant="outlined"
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            InputLabelProps={{ shrink: true }}
          />
          <TextField
            fullWidth
            label="End Date"
            variant="outlined"
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            InputLabelProps={{ shrink: true }}
          />
        </Box>

        {/* Status & Alamat Company */}
        <Box sx={{ mb: 2, display: 'flex', gap: 2 }}>
          <FormControl fullWidth>
            <InputLabel>Status</InputLabel>
            <Select
              value={status}
              label="Status"
              onChange={(e) => setStatus(e.target.value)}
            >
              <MenuItem value="onprogress">On Progress</MenuItem>
              <MenuItem value="done">Done</MenuItem>
            </Select>
          </FormControl>
          <TextField
            fullWidth
            label="Alamat Company"
            variant="outlined"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </Box>

        {/* Accordion for Project Title and Task Description */}
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Tittle Project</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Box sx={{ mb: 2 }}>
              <TextField
                fullWidth
                label="Tittle Project"
                variant="outlined"
                value={projectTitle}
                onChange={(e) => setProjectTitle(e.target.value)}
              />
            </Box>

            <Box sx={{ mb: 2 }}>
              <TextField
                fullWidth
                label="Description Task"
                variant="outlined"
                multiline
                rows={4}
                value={taskDescription}
                onChange={(e) => setTaskDescription(e.target.value)}
              />
            </Box>
          </AccordionDetails>
        </Accordion>

        {/* Action Buttons */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
          <Button variant="outlined" onClick={onCancel}>Cancel</Button>
          <Button variant="contained" color="primary" type="submit">Submit</Button>
        </Box>
      </Box>
    </form>
  );
};

export default FormAddClient;