export type WindowActionType = 'MINIMIZE' | 'MAXIMIZE' | 'RESTORE' | 'CLOSE';

export type WindowAction = {
    type: WindowActionType;
};

export type WindowState = {
    minimized: boolean;
    maximized: boolean;
};

export function windowActionReducer(state: WindowState, action: WindowAction) {
    switch (action.type) {
        case 'MINIMIZE': {
            console.log('minimize');
            return { ...state, minimized: true, maximized: false };
        }
        case 'MAXIMIZE': {
            console.log('maximize');
            return { ...state, minimized: false, maximized: true };
        }
        case 'RESTORE': {
            console.log('restore');
            return { ...state, minimized: false, maximized: false };
        }
        case 'CLOSE': {
            console.log('close');
            return { ...state, minimized: false, maximized: false };
        }
        default:
            throw new Error(`Unknown action type: ${action.type}`);
    }
}
