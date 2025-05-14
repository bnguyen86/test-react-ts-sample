import { useReducer } from "react";

import CardHeader from "@mui/material/CardHeader";

import MenuBar from "./MenuBar";
import WindowActions from "./WindowActions";

import { windowActionReducer } from "../hooks/windowActionReducer";
import { menuActionReducer } from "../hooks/menuActionReducer";

import type { MenuItem } from "./types";

type WindowHeaderProps = {
    title: string;
};
//maybe this should be in a context
const menuItems: MenuItem[] = [
    {
        label: 'Add New',
        children: [
            {
                label: 'Group',
                action: 'file.new'
            },
            {
                label: 'Contact',
                action: 'file.open'
            }
        ]
    },
    {
        label: 'Update',
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
                label: 'Copy As',
                children: [
                    {
                        label: 'Markdown',
                        action: 'edit.copy.markdown'
                    },
                    {
                        label: 'Github Link',
                        children: [
                            {
                                label: 'Public',
                                action: 'edit.copy.markdown'
                            },
                            {
                                label: 'Private',
                                action: 'edit.copy.githublink'
                            }
                        ]
                    }
                ]
            },
            {
                label: 'Paste',
                action: 'edit.paste'
            }
        ]
    },
    {
        label: 'Folder',
    },
    {
        label: 'Scan',
    },
    {
        label: 'Show Log Windows',
    }
];

export default function WindowHeader({title}: WindowHeaderProps) {
    const [windowState, dispatchWindowState] = useReducer(windowActionReducer, { minimized: false, maximized: false });
    const [menuState, dispatchMenuState] = useReducer(menuActionReducer, {});
    return (
        <CardHeader
            title={title}
            action={
                <WindowActions
                    onMinimize={() => dispatchWindowState({ type: 'MINIMIZE' })}
                    onMaximize={() => dispatchWindowState({ type: 'MAXIMIZE' })}
                    onClose={() => { console.log('first'); dispatchWindowState({ type: 'CLOSE' }) }}
                />
            }
            subheader={
                <MenuBar menuItems={menuItems} dispatcher={dispatchMenuState} />
            }
            sx={{
                justifyContent: 'space-between'
            }}
            slotProps={{
                content: {
                    sx: {
                        flex: 'initial'
                    }
                },
                title: {
                    sx: {
                        textAlign: 'left'
                    }
                },
            }} />
    );
}