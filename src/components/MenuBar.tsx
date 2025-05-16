import MenuParentItem from "./MenuParentItem";

import type { MenuItem } from "./types";


type MenuBarProps = {
    menuItems: MenuItem[];
    dispatcher: React.Dispatch<any>;
}
export default function MenuBar({ menuItems, dispatcher }: MenuBarProps) {
    return (
        <>
            {
                menuItems.map((item: MenuItem, index) => {
                    return (
                        <MenuParentItem item={item} key={index} dispatcher={dispatcher} />
                    )
                })
            }
        </>
    );

}