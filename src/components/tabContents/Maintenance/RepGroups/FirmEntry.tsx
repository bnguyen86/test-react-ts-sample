import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

import useFormEntry from "../../../../hooks/useFormEntry";

export default function FirmEntry() {
    const { formEntry, handleChange, isDirty, resetForm } = useFormEntry({});

    return (
        <form style={{ display: 'flex', flexDirection: 'column', padding: '1rem', gap: '.5rem' }} onChange={handleChange}>
            <div style={{ display: 'flex', justifyContent: 'end', gap: '1rem' }}>
                <Button variant='outlined' onClick={resetForm}>Clear Form</Button>
            </div>

            <TextField label="Firm CRD" variant="outlined" />
            <FormGroup sx={{ padding: '0 .6rem', display: 'flex', flexWrap: 'wrap', flexDirection: 'row' }}>
                <FormControlLabel control={<TextField label="" type="file" variant="outlined" />} label="Drag and Drop Email Items" />
            </FormGroup>
            {/* TODO: Does this need it's own component? */}
            <Box sx={{ border: 1, borderColor: 'divider', display: 'flex', flexDirection: 'column', padding: '1rem', gap: '.5rem' }}>
                <h3 style={{ margin: '.5rem' }}>Quarterly Payout</h3>
                <TextField label="W9 Name" variant="outlined" />
                <TextField label="Paycor Id" variant="outlined" />
                <FormGroup sx={{ padding: '0 1rem', display: 'flex', flexWrap: 'wrap', flexDirection: 'row' }}>
                    <FormControlLabel control={<Checkbox />} label="Is 1099" />
                </FormGroup>
                <TextField label="Email Addresses" variant="outlined" multiline rows={4} />

            </Box>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
                <Button variant='outlined'>Add New</Button>
            </div>
        </form>
    );
}