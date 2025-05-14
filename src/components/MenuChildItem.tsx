import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ChevronRight from '@mui/icons-material/ChevronRight';

import useMenuController from "../hooks/useMenuController";

import type { MenuItem as MenuItemType } from "./types";
type MenuChildItemProps = {
    items: MenuItemType[];
    dispatcher: React.Dispatch<any>;
}

export default function MenuChildItem({ items, dispatcher }: MenuChildItemProps) {
    const { handleOpen, handleClose, isOpen, anchorEl } = useMenuController(dispatcher);

    return (
        <>
            {
                items.map((item, index) => {
                    let menuItem;
                    if (item?.children?.length) {
                        menuItem = (
                            <>
                                <MenuItem key={index} data-action={item?.action} >
                                    <ListItemText>{item.label}</ListItemText>
                                    <ListItemIcon>
                                        <IconButton onMouseOver={handleOpen} onClick={handleOpen}>
                                            <ChevronRight />
                                        </IconButton>
                                    </ListItemIcon>
                                </MenuItem>
                                <Menu key={index}
                                    anchorEl={anchorEl}
                                    open={isOpen}
                                    onClose={handleClose}
                                >
                                    <MenuChildItem items={item.children} dispatcher={dispatcher}/>
                                </Menu>
                            </>
                        );
                    } else {
                        menuItem = <MenuItem key={index} data-action={item?.action} onClick={handleClose}>{item.label}</MenuItem>;
                    }
                    return menuItem;
                })
            }
        </>
    );
}