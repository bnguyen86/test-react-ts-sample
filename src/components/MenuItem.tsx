import { useState } from "react";

import Button from "@mui/material/Button"
import Menu from "@mui/material/Menu";
import MUIMenuItem from "@mui/material/MenuItem";

export type MenuItem = {
    label: string;
    action?: string;
    children?: MenuItem[];
    // isOpen?: boolean;
}

type MenuItemProps = {
    item: MenuItem;
    dispatcher: React.Dispatch<any>;
}

export default function MenuItem({ item, dispatcher }: MenuItemProps) {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const isOpen = Boolean(anchorEl);

    const handleOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
        // const action =  event.currentTarget.dataset.action;
        setAnchorEl(event.currentTarget);
    };

    const handleClose = (event: React.MouseEvent<HTMLElement>) => {
        const action =  event.currentTarget.dataset.action;

        if(action){
            dispatcher({ type: action });
        }
        setAnchorEl(null);
    }

    return (
        <>
            <Button
                data-action={item.action}
                onClick={handleOpen}
            >
                {item.label}
            </Button>
            <Menu
                anchorEl={anchorEl}
                open={isOpen}
                onClose={handleClose}
            >
                {
                    item.children?.map((child, index) => {
                        return (
                            <MUIMenuItem key={index} data-action={child?.action} onClick={handleClose}>{child.label}</MUIMenuItem>
                        )
                    })
                }
            </Menu>
        </>
    );
}