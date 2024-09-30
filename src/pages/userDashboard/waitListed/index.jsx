import React, { useMemo, useState } from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete'; // Import the Delete icon

// Define your custom data
const initialRows = [
  {
    id: 1,
    title: 'Inception',
    company: 'Warner Bros.',
    director: 'Christopher Nolan',
    year: 2010,
    cinematicUniverse: 'N/A',
    imageUrl: 'https://example.com/inception.jpg', // Replace with actual image URL
  },
  {
    id: 2,
    title: 'The Avengers',
    company: 'Marvel Studios',
    director: 'Joss Whedon',
    year: 2012,
    cinematicUniverse: 'Marvel',
    imageUrl: 'https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-1-1.jpg', // Replace with actual image URL
  },
  {
    id: 3,
    title: 'The Dark Knight',
    company: 'Warner Bros.',
    director: 'Christopher Nolan',
    year: 2008,
    cinematicUniverse: 'N/A',
    imageUrl: 'https://example.com/dark-knight.jpg', // Replace with actual image URL
  },
];

const VISIBLE_FIELDS = ['imageUrl', 'title', 'company', 'director', 'year', 'cinematicUniverse', 'Action'];

export default function QuickFilteringGrid() {
  const [rows, setRows] = useState(initialRows); // Use state to manage rows

  // Handle delete action
  const handleDelete = (id) => {
    setRows((prevRows) => prevRows.filter((row) => row.id !== id));
  };

  const columns = useMemo(
    () => [
      {
        field: 'imageUrl',
        headerName: 'Image',
        width: 200,
        renderCell: (params) => (
          <img
            src={params.value}
            alt={params.row.title}
            style={{ height: '100px' }} 
          />
        ),
      },
      ...VISIBLE_FIELDS.slice(1, -1).map((field) => ({
        field,
        headerName: field.charAt(0).toUpperCase() + field.slice(1),
        width: 150,
      })),
      {
        field: 'action',
        headerName: 'Action',
        width: 100,
        renderCell: (params) => (
          <DeleteIcon
            onClick={() => handleDelete(params.row.id)} // Call the delete handler
            style={{ cursor: 'pointer', color: 'red' }} // Style the delete icon
          />
        ),
      },
    ],
    [],
  );

  return (
    <Box sx={{ height: 400, width: '100%', mt: 5 }}>
      <DataGrid
        rows={rows}
        columns={columns}
        checkboxSelection
        disableColumnFilter
        disableColumnSelector
        disableDensitySelector
        components={{ Toolbar: GridToolbar }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
          },
        }}
        rowHeight={100}
      />
    </Box>
  );
}
