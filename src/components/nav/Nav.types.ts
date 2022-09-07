export type TNavLink = {
    path: string;
    text: string;
};

export type TNavItemProps = {
    currentPath: string;
    itemData: TNavLink;
};