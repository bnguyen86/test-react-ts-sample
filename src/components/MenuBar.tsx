import { useState } from "react";

import MenuItem from "./MenuItem";

import type { MenuItem as MenuItemType } from "./MenuItem";

type MenuBarProps = {
    menuItems: MenuItemType[];
    dispatcher: React.Dispatch<any>;
}
export default function MenuBar({ menuItems, dispatcher }: MenuBarProps) {
    return (
        <>
            {
                menuItems.map((item: MenuItemType, index) => {
                    return (
                        <MenuItem item={item} key={index} dispatcher={dispatcher} />
                    )
                })
            }
        </>
    );

}