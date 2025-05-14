export type MenuAction = {
    type: string;
};


export function menuActionReducer(state: any, action: MenuAction) {
    //todo: implement actions
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
            console.log('do nothing', action.type);
            // throw new Error(`Unknown action type: ${action.type}`);
    }
}
