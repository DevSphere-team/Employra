import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import * as React from 'react';
import { GridColDef } from '@mui/x-data-grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import SearchAddBar from 'mui/SearchAddBar';
import TableWrapper from 'mui/TableWrapper';
import SimpleDataGrid from 'mui/SimpleDataGrid';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import FormAddEmploye from 'components/forms/FormAddEmploye'; // Pastikan nama komponen yang benar
import BaseModal from 'js/components/modals/BaseModal';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Inertia } from '@inertiajs/inertia';


const breadcrumbs: BreadcrumbItem[] = [
  {
    title: (
      <IconButton onClick={() => Inertia.visit('/dashboard')}>
        <ArrowBackIcon fontSize="small" />
      </IconButton>
    ),
    href: '/dashboard',
  }
];

type Employee = {
  id: string;
  avatar?: string | null;
  firstName: string | null;
  department: string;
  grade: string | null;
  status: 'Active' | 'Leave';
};

const columns: GridColDef<Employee>[] = [
  {
    field: 'id',
    headerName: 'ID',
    headerAlign: 'center',
    flex: 1,
    minWidth: 100,
  },
  {
    field: 'avatar',
    headerName: 'Avatar',
    headerAlign: 'center',
    flex: 1,
    minWidth: 100,
    renderCell: (params) => (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          height: '100%',
        }}
      >
        <img
          src={params.value || '/default-avatar.png'}
          alt="avatar"
          style={{
            width: 32,
            height: 32,
            borderRadius: '50%',
            objectFit: 'cover',
          }}
        />
      </Box>
    ),
  },
  { field: 'firstName', headerAlign: 'center', headerName: 'First name', flex: 1, minWidth: 120 },
  { field: 'department', headerAlign: 'center', headerName: 'Department', flex: 1, minWidth: 120 },
  { field: 'grade', headerName: 'Grade', headerAlign: 'center', flex: 1, minWidth: 100 },
  {
    field: 'status',
    headerName: 'Status',
    headerAlign: 'center',
    flex: 1,
    minWidth: 120,
    renderCell: (params) => (
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
            display: 'inline-block',
            padding: '2px 6px',
            backgroundColor: params.value === 'Active' ? 'green' : 'red',
            color: 'white',
            borderRadius: '8px',
            textAlign: 'center',
            cursor: 'default',
            fontSize: '0.875rem',
            lineHeight: 1,
            '&:hover': {
              opacity: 0.8,
            },
          }}
        >
          {params.value}
        </Box>
      </Box>
    ),
  },
  {
    field: 'actions',
    headerName: 'Action',
    headerAlign: 'center',
    flex: 1,
    minWidth: 100,
    sortable: false,
    filterable: false,
    renderCell: (params) => (
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
          width: '100%',
          gap: 1,
        }}
      >
        <IconButton size="small" onClick={() => console.log('View', params.row)}>
          <VisibilityIcon fontSize="small" />
        </IconButton>
        <IconButton size="small" onClick={() => console.log('Edit', params.row)}>
          <EditIcon fontSize="small" />
        </IconButton>
        <IconButton size="small" color="error" onClick={() => console.log('Delete', params.row)}>
          <DeleteIcon fontSize="small" />
        </IconButton>
      </Box>
    ),
  },
];

const rows: Employee[] = [
  { id: 'EMP-0001', avatar: '/storage/images/man-1.png', firstName: 'Jon', department: 'Hrga', grade: 'Supervisor', status: 'Active' },
  { id: 'EMP-0002', avatar: '/storage/images/man-2.png', firstName: 'Cersei', department: 'Hrga', grade: 'Staff', status: 'Active' },
  { id: 'EMP-0003', avatar: '/storage/images/man-3.png', firstName: 'Jaime', department: 'Hrga', grade: 'Staff', status: 'Leave' },
  { id: 'EMP-0004', avatar: '/storage/images/girl-1.png', firstName: 'Arya', department: 'Warehouse', grade: 'Supervisor', status: 'Active' },
  { id: 'EMP-0005', avatar: '/storage/images/girl-2.png', firstName: 'Danerys', department: 'Warehouse', grade: 'Staff', status: 'Leave' },
  { id: 'EMP-0006', avatar: '/storage/images/man-4.png', firstName: 'Tatang', department: 'Warehouse', grade: 'Staff', status: 'Active' },
  { id: 'EMP-0007', avatar: '/storage/images/man-5.png', firstName: 'Ferrara', department: 'Marketing', grade: 'Supervisor', status: 'Active' },
  { id: 'EMP-0008', avatar: '/storage/images/girl-3.png', firstName: 'Rossini', department: 'Marketing', grade: 'Staff', status: 'Active' },
  { id: 'EMP-0009', avatar: '/storage/images/man-6.png', firstName: 'Harvey', department: 'Marketing', grade: 'Staff', status: 'Active' },
];

const DataEmployes: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('Search:', e.target.value);
  };

  const handleAddEmployee = (employee: { firstName: string; department: string; grade: string }) => {
    console.log('Add employee:', employee);
    setIsModalOpen(false); // Close modal after adding employee
  };

  const handleCancel = () => {
    setIsModalOpen(false); // Close modal without adding employee
  };

  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title="Data Employes" />


      {/* <Box sx={{ mt: 4, px: 2 }}>
        <Typography variant="h5" sx={{ mb: 2, textAlign: 'center' }}>
          Data Employes
        </Typography>

        <SearchAddBar
          placeholder="Search..."
          onSearchChange={handleSearchChange}
          onAddClick={() => setIsModalOpen(true)} 
        />

        <TableWrapper>
          <SimpleDataGrid<Employee>
            rows={rows}
            columns={columns}
            getRowId={(row) => row.id}
          />
        </TableWrapper>
      </Box> */}
      
      <Box sx={{ mt: 4 }}>
    {/* Kontainer Utama */}
    <Box sx={{ maxWidth: 1200, mx: 'auto', px: { xs: 2, sm: 8 } }}>
      <Typography variant="h5" sx={{ mb: 2, textAlign: 'center' }}>
        Data Employes
      </Typography>

      <SearchAddBar
        placeholder="Search..."
        onSearchChange={handleSearchChange}
        onAddClick={() => setIsModalOpen(true)}
        containerSx={{  marginBottom: '1rem', }} // pastikan tidak menambahkan padding di sini
      />

      <TableWrapper>
        <SimpleDataGrid<Employee>
          rows={rows}
          columns={columns}
          getRowId={(row) => row.id}
        />
      </TableWrapper>
    </Box>
  </Box>

      {/* Modal to add employee */}
      <BaseModal open={isModalOpen} onClose={() => setIsModalOpen(false)} title="Add Employee">
        <FormAddEmploye onSubmit={handleAddEmployee} onCancel={handleCancel} />
      </BaseModal>
    </AppLayout>
  );
};

export default DataEmployes;
