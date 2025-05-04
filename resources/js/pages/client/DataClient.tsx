// Layout dan Head
import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';
// Tipe data umum
import { type BreadcrumbItem } from '@/types';
// React
import * as React from 'react';
// MUI (Material UI) components
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
// MUI DataGrid
import { GridColDef } from '@mui/x-data-grid';
// MUI Icons
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
// Inertia.js
import { Inertia } from '@inertiajs/inertia';
// Komponen kustom (Custom Components)
import SimpleDataGrid from 'mui/SimpleDataGrid';
import TableWrapper from 'mui/TableWrapper';
import SearchAddBar from 'mui/SearchAddBar';
import StatusBadge from 'mui/StatusBadge'; // Komponen status badge (custom)
import BaseModal from 'js/components/modals/BaseModal'; // Komponen modal umum
import FormAddClient from 'components/forms/FormAddClient'; // Form tambah data karyawan




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

type Client = {
    id: number;
    name: string;
    project: string;
    dateLine: string;
    city: string;
    status: 'On Progress' | 'Done';
  };

  const columns: GridColDef<Client>[] = [
    { field: 'id', headerName: 'ID', headerAlign: 'center', flex: 1, minWidth: 100 },
    { field: 'name', headerName: 'Name', headerAlign: 'center', flex: 1, minWidth: 120 },
    { field: 'project', headerName: 'Project', headerAlign: 'center', flex: 1, minWidth: 200 },
    { field: 'dateLine', headerName: 'End Date', headerAlign: 'center', flex: 1, minWidth: 120 },
    { field: 'city', headerName: 'City', headerAlign: 'center', flex: 1, minWidth: 100 },
    {
        field: 'status',
        headerName: 'Status',
        headerAlign: 'center',
        flex: 1,
        minWidth: 120,
        renderCell: (params) => <StatusBadge status={params.value} />,
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
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1 }}>
          <IconButton size="small" onClick={() => console.log('View', params.row)}><VisibilityIcon fontSize="small" /></IconButton>
          <IconButton size="small" onClick={() => console.log('Edit', params.row)}><EditIcon fontSize="small" /></IconButton>
          <IconButton size="small" color="error" onClick={() => console.log('Delete', params.row)}><DeleteIcon fontSize="small" /></IconButton>
        </Box>
      ),
    },
  ];
  

const rows: Client[] = [
    {
      id: 1,
      name: 'PT. Maju Jaya',
      project: 'Development System Warehouse',
      dateLine: '10 November 2026',
      city: 'Jakarta',
      status: 'On Progress',
    },
    {
      id: 2,
      name: 'CV. Welding Costume Alfa',
      project: 'Created Web Apps Business Flow',
      dateLine: '30 March 2027',
      city: 'Bandung',
      status: 'On Progress',
    },
    {
      id: 3,
      name: 'CV. Amanah Stell Construction',
      project: 'Development Automatic Approval',
      dateLine: '30 September 2026',
      city: 'Bali',
      status: 'Done',
    },
  ];

const DataClient: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('Search:', e.target.value);
  };

  const handleAddClient = (formData: {
    companyName: string;
    email: string;
    telephone: string | undefined;
    startDate: string;
    endDate: string;
    status: string;
    address: string;
    projectTitle: string;
    taskDescription: string;
  }) => {
    console.log('Add client:', formData);
    setIsModalOpen(false); // Close modal after adding client
  };

  const handleCancel = () => {
    setIsModalOpen(false); // Close modal without adding employee
  };

  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title="Data Client" />
      
      <Box sx={{ mt: 4 }}>
    {/* Kontainer Utama */}
    <Box sx={{ maxWidth: 1200, mx: 'auto', px: { xs: 2, sm: 8 } }}>
      <Typography variant="h5" sx={{ mb: 2, textAlign: 'center' }}>
        Data Client
      </Typography>

      <SearchAddBar
        placeholder="Search..."
        onSearchChange={handleSearchChange}
        onAddClick={() => setIsModalOpen(true)}
        containerSx={{  marginBottom: '1rem', }} // pastikan tidak menambahkan padding di sini
      />

      <TableWrapper>
        <SimpleDataGrid<Client>
          rows={rows}
          columns={columns}
          getRowId={(row) => row.id}
        />
      </TableWrapper>
    </Box>
  </Box>

      {/* Modal to add employee */}
      <BaseModal open={isModalOpen} onClose={() => setIsModalOpen(false)} title="Add Employee">
        <FormAddClient onSubmit={handleAddClient} onCancel={handleCancel} />
      </BaseModal>
    </AppLayout>
  );
};

export default DataClient;
