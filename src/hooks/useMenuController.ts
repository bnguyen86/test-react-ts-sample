import { useState } from "react";

export default function useMenuController(dispatcher: React.Dispatch<any>) {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const isOpen = Boolean(anchorEl);

    const handleOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
        // const action =  event.currentTarget.dataset.action;
        setAnchorEl(event.currentTarget);
    };

    const handleClose = (event: React.MouseEvent<HTMLElement>) => {
        const action = event.currentTarget.dataset.action;

        if (action) {
            dispatcher({ type: action });
        }
        setAnchorEl(null);
    }

    return {
        handleOpen,
        handleClose,
        isOpen,
        anchorEl
    }
}