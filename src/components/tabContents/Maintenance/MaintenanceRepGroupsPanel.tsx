import Grid from "@mui/material/Grid";
import GroupList from "./RepGroups/GroupList";
import GroupEntry from "./RepGroups/GroupEntry";
import FirmEntry from "./RepGroups/FirmEntry";


export default function MaintenanceRepGroupsPanel() {
    return (
        <Grid container spacing={2}>
            <Grid size={4}>
                <GroupList/>
            </Grid>
            <Grid size={4}>
                <GroupEntry/>
            </Grid>
            <Grid size={4}>
               <FirmEntry/>
            </Grid>
        </Grid>
    );
}