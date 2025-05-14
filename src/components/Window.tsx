import { useReducer } from "react";

import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Item from "@mui/material/Grid";
import CardHeader from '@mui/material/CardHeader';

import MenuBar from "./MenuBar";
import WindowActions from "./WindowActions";

import { windowActionReducer } from "../hooks/windowActionReducer";
import { menuActionReducer } from "../hooks/menuActionReducer";

import type { MenuItem } from "./MenuBar";

const menuItems: MenuItem[] = [
    {
        label: 'File',
        children: [
            {
                label: 'New',
                action: 'file.new'
            },
            {
                label: 'Open',
                action: 'file.open'
            },
            {
                label: 'Save',
                action: 'file.save'
            }
        ]
    },
    {
        label: 'Edit',
        children: [
            {
                label: 'Cut',
                action: 'edit.cut'
            },
            {
                label: 'Copy',
                action: 'edit.copy'
            },
            {
                label: 'paste',
                action: 'edit.paste'
            }
        ]
    },
    {
        label: 'Help',
        children: [
            {
                label: 'About',
                action: 'help.about'
            },
            {
                label: 'Documentation',
                action: 'help.documentation'
            }
        ]
    }
];



export default function Window() {
    const [windowState, dispatchWindowState] = useReducer(windowActionReducer, { minimized: false, maximized: false });
    const [menuState, dispatchMenuState] = useReducer(menuActionReducer, {});

    return (
        <Container maxWidth="lg" sx={{ width: '100vw' }}>
            <Card>
                {/* todo: move out card header */}
                <CardHeader
                    action={
                        <WindowActions
                            onMinimize={() => dispatchWindowState({ type: 'MINIMIZE' })}
                            onMaximize={() => dispatchWindowState({ type: 'MAXIMIZE' })}
                            onClose={() => {console.log('first');dispatchWindowState({ type: 'CLOSE' })}}
                        />
                    }
                    subheader={
                        <MenuBar menuItems={menuItems} dispatcher={dispatchMenuState}/>
                    }
                    sx={{
                            justifyContent: 'space-between'
                    }}
                    slotProps={{
                        content: {
                            sx: {
                                flex: 'initial'
                            }
                        }
                    }} />
                <Grid container spacing={2}>
                    <Grid size={8}>
                        <Item>size=8</Item>
                    </Grid>
                    <Grid size={4}>
                        <Item>size=4</Item>
                    </Grid>
                    <Grid size={4}>
                        <Item>size=4</Item>
                    </Grid>
                    <Grid size={8}>
                        <Item>size=8</Item>
                    </Grid>
                </Grid>
            </Card>
        </Container>
    )
}