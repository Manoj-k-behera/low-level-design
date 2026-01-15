import { MenuItem } from "./MenuItem";

export class MenuService {
    private menuItems: MenuItem[] = [];

    addMenuItem(item: MenuItem): void {
        this.menuItems.push(item);
    }

    getMenuItem(name: string): MenuItem | undefined {
        return this.menuItems.find(item => item.name === name);
    }

    getAllMenuItems(): MenuItem[] {
        return this.menuItems;
    }
}