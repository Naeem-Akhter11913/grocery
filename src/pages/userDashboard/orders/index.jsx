import React from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { useDemoData } from '@mui/x-data-grid-generator';
import { Box, Typography } from '@mui/material';

const VISIBLE_FIELDS = ['name', 'rating', 'country', 'dateCreated', 'isAdmin'];


const Index = () => {
    const { data } = useDemoData({
        dataSet: 'Employee',
        visibleFields: VISIBLE_FIELDS,
        rowLength: 100,
    });

    return (
        <Box sx={{width: '100%', display:'flex', justifyContent:'center', alignItems:'center', boxShadow:1}}>

            <Box style={{ height: 600, width: '100%'}}>
                <Typography variant='h4' component='h4'>List of Orders</Typography>
                <DataGrid
                    {...data}
                    slots={{
                        toolbar: GridToolbar,
                    }}
                    disableDensitySelector
                    initialState={{
                        ...data.initialState,
                        filter: {
                            ...data.initialState?.filter,
                            filterModel: {
                                items: [
                                    {
                                        field: 'rating',
                                        operator: '>',
                                        value: '2.5',
                                    },
                                ],
                            },
                        },
                    }}
                    slotProps={{
                        toolbar: {
                          showQuickFilter: true,
                        },
                      }}
                />
            </Box>
        </Box>
    );
}

export default Index;
