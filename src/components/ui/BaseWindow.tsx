//TODO this should be a base window, and then use it in a "Maintenance" window
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";

export default function BaseWindow({children}: {children: React.ReactNode}) {
    return (
        <Container maxWidth="lg" sx={{ width: '100vw' }}>
            <Card sx={{display: 'flex', flexDirection: 'column'}}>
                {children}
            </Card>
        </Container>
    )
}