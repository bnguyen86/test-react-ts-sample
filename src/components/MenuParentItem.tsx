import Button from "@mui/material/Button"
import Menu from "@mui/material/Menu";

import MenuChildItem from "./MenuChildItem";

import useMenuController from "../hooks/useMenuController";

import type { MenuItem } from "./types";

type MenuParentItemProps = {
    item: MenuItem;
    dispatcher: React.Dispatch<any>;
}

//TODO: refactor so dispatcher is not passed to each component, or maybe not depending on what the dispatcher does
export default function MenuParentItem({ item, dispatcher }: MenuParentItemProps) {
    const {handleOpen, handleClose, isOpen, anchorEl} = useMenuController(dispatcher);

    return (
        <>
            <Button
                data-action={item.action}
                onClick={handleOpen}
            >
                {item.label}
            </Button>
            {item?.children?.length && <Menu
                anchorEl={anchorEl}
                open={isOpen}
                onClose={handleClose}
            >
                <MenuChildItem items={item.children ?? []} dispatcher={dispatcher}></MenuChildItem>
            </Menu>}
        </>
    );
}