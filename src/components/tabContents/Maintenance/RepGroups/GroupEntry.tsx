import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import TextField from "@mui/material/TextField";

import useFormEntry from "../../../../hooks/useFormEntry";
import MenuItem from "@mui/material/MenuItem";
import Group from '../../../../models/Group';
export default function GroupEntry() {

    const { formEntry, handleChange, isDirty, resetForm } = useFormEntry<Group>(new Group());

    return (
        <form style={{ display: 'flex', flexDirection: 'column', padding: '1rem', gap: '.5rem' }} onChange={handleChange}>
            <div style={{ display: 'flex', justifyContent: 'end', gap: '1rem' }}>
                <Button variant="outlined" onClick={resetForm}>Clear Form</Button>
            </div>
            <TextField name="repGroupId" label="Rep Group Id" variant="outlined" value={formEntry?.repGroupId} />
            <TextField name="repGroupName" label="Rep Group Name" variant="outlined" value={formEntry?.repGroupName}/>
            <TextField name="" label="Reps" variant="outlined" multiline rows={4} />
            <TextField name="" label="EOM Total" variant="outlined" />
            <TextField name="" label="Address" variant="outlined" />
            <TextField name="" label="" variant="outlined" />
            <div style={{ display: 'flex', justifyContent: 'end', gap: '1rem' }}>
                <TextField label="City" variant="outlined" sx={{ flex: '1' }}/>
                <TextField name="state" label="State/Province" select variant="outlined" sx={{ flex: '1' }} value={formEntry?.state}>
                    <MenuItem value="Alabama">
                        Alabama
                    </MenuItem>
                    <MenuItem value="Alaska">
                        Alaska
                    </MenuItem>
                    <MenuItem value="Arizona">
                        Arizona
                    </MenuItem>
                    <MenuItem value="Arkansas">
                        Arkansas
                    </MenuItem>
                    <MenuItem value="California">
                        California
                    </MenuItem>
                </TextField>
            </div>
            <div style={{ display: 'flex', justifyContent: 'end', gap: '1rem' }}>
                <TextField name="zip" label="Zip/Postal Code" variant="outlined" sx={{ flex: '1' }} />
                <TextField name="country" label="Country" select variant="outlined" sx={{ flex: '2' }} value={formEntry?.country}>
                    <MenuItem value="Canada">
                        Canada
                    </MenuItem>
                    <MenuItem value="USA">
                        USA
                    </MenuItem>
                </TextField>
            </div>
            <TextField label="Phone" type="tel" variant="outlined" />
            <TextField label="Fax" type="tel" variant="outlined" />
            <TextField label="Contact" variant="outlined" />
            <FormGroup sx={{ display: 'flex', flexDirection: 'column' }}>
                <FormControlLabel control={<Checkbox />} label="Active" />
                <FormControlLabel control={<Checkbox />} label="Broker Dealer" />
                <FormGroup sx={{ display: 'flex', flexDirection: 'column', padding: '0 0 0 2rem' }}>
                    <FormControlLabel control={<Checkbox />} label="Allow Outside RIA" />
                    <FormControlLabel control={<Checkbox />} label="Friend of Carlotta" />
                </FormGroup>
                <FormControlLabel control={<Checkbox />} label="Terminated" />
            </FormGroup>
            <TextField label="Notes" variant="outlined" multiline rows={4} />
            <div style={{ display: 'flex', justifyContent: 'end', gap: '.5rem' }}>
                <Button variant='outlined'>Add</Button>
            </div>
        </form>
    );
}