import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';

import {repGroups} from '../../../../data/repGroups';

const columns = [
    { field: 'repGroupId', headerName: 'ID', flex: 1 },
    { field: 'repGroupName', headerName: 'Group Name', flex: 2 },
];
export default function GroupListData() {
    return (
        <Paper sx={{ height: 'calc(100vh - 2rem)' }}>
          <DataGrid
            rows={repGroups}
            columns={columns}
            sx={{ border: 0, flex: '1' }}
            getRowId={(row) => row.repGroupId}
          />
        </Paper>
      );
}