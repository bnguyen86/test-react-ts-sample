import { useReducer } from "react";

import Card from "@mui/material/Card";
import Item from "@mui/material/Grid";

import WindowHeader from "./WindowHeader";
import TabPanel from "./TabPanel";
import MaintenanceRepGroupsPanel from "./tabContents/Maintenance/MaintenanceRepGroupsPanel";

import { windowActionReducer } from "../hooks/windowActionReducer";
import { menuActionReducer } from "../hooks/menuActionReducer";

import type { Tab } from "./types";

//TODO this should be context
const tabs: Tab[] = [
    {
        label: 'Fees',
        contents: <Item>Fees</Item>
    },
    {
        label: 'Models',
        contents: <Item>Models</Item>
    },
    {
        label: 'Referrals',
        contents: <Item>Referrals</Item>
    }, {
        label: 'Overrides',
        contents: <Item>Overrides</Item>
    },
    {
        label: 'Rep Groups',
        contents: <MaintenanceRepGroupsPanel />
    },
    {
        label: 'Rep Offices',
        contents: <Item>Rep Offices</Item>
    },
    {
        label: 'Companies',
        contents: <Item>Companies</Item>
    },
    {
        label: 'Brand Ambassador Groups',
        contents: <Item>Brand Ambassador Groups</Item>
    },
    {
        label: 'Data Changes',
        contents: <Item>Data Changes</Item>
    }
];

export default function MaintenanceWindow() {
    const [windowState, dispatchWindowState] = useReducer(windowActionReducer, { minimized: false, maximized: false });
    const [menuState, dispatchMenuState] = useReducer(menuActionReducer, {});

    return (
        <Card sx={{ display: 'flex', flexDirection: 'column'}}>
            <WindowHeader title="Maintenance" />
            <TabPanel tabs={tabs} />
        </Card>
    )
}