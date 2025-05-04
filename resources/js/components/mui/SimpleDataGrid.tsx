import { DataGrid, GridColDef, GridValidRowModel } from '@mui/x-data-grid';

interface SimpleDataGridProps<T extends GridValidRowModel> {
  rows: T[];
  columns: GridColDef<T>[]; // penting! gunakan generic T
  getRowId?: (row: T) => string | number;
}

const SimpleDataGrid = <T extends GridValidRowModel>({
  rows,
  columns,
  getRowId,
}: SimpleDataGridProps<T>) => {
  return (
    <DataGrid
      rows={rows}
      columns={columns}
      getRowId={getRowId}
      initialState={{
        pagination: {
          paginationModel: { page: 0, pageSize: 5 },
        },
      }}
      pageSizeOptions={[5, 10]}
      disableRowSelectionOnClick
      sx={{
        border: 0,
        '& .MuiDataGrid-row:hover': {
          backgroundColor: '#f5f5f5',
        },
      }}
    />
  );
};

export default SimpleDataGrid;
