import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";

export default function GroupListFilters() {
    return (
        <Box sx={{ border: 1, borderColor: 'divider' }}>
            <h3 style={{margin: '.5rem'}}>Filter</h3>
            <FormGroup sx={{ padding: '0 1rem', display: 'flex', flexWrap: 'wrap', flexDirection: 'row' }}>
                <FormControlLabel control={<Checkbox />} label="Active" />
                <FormControlLabel control={<Checkbox />} label="Allow Outside RIA" />
                <FormControlLabel control={<Checkbox />} label="Terminated" />
                <FormControlLabel control={<Checkbox />} label="Broker Dealer" />
                <FormControlLabel control={<Checkbox />} label="Friend of Carlotta" />
            </FormGroup>
        </Box>
    );
}