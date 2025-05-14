import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';

import {repGroups} from '../../../../data/repGroups';

const columns = [
    { field: 'repGroupId', headerName: 'ID', width: 90 },
    { field: 'repGroupName', headerName: 'Group Name', width: 150 },
];
export default function GroupListData() {
    return (
        <Paper sx={{ height: 400, width: '100%' }}>
          <DataGrid
            rows={repGroups}
            columns={columns}
            sx={{ border: 0 }}
            getRowId={(row) => row.repGroupId}
          />
        </Paper>
      );
}