import type React from "react";

export type MenuItem = {
    label: string;
    action?: string;
    children?: MenuItem[];
    // isOpen?: boolean;
}

export type Tab = {
    label: string;
    contents: React.ReactNode;
}