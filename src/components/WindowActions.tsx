import { ButtonGroup, IconButton } from "@mui/material";
import { Close, WebAsset, Minimize } from "@mui/icons-material";

type WindowActionsProps = {
    onMinimize: () => void;
    onMaximize: () => void;
    onClose: () => void;
};

export default function WindowActions({onMinimize, onMaximize, onClose}: WindowActionsProps) {
    return (
        <ButtonGroup>
            <IconButton onClick={onMinimize}>
                <Minimize/>
            </IconButton>
            <IconButton onClick={onMaximize}>
                <WebAsset/>
            </IconButton>
            <IconButton onClick={onClose}>
                <Close/>
            </IconButton>
        </ButtonGroup>
    );
}