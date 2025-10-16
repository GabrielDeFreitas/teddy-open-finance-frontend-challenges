import type { ReactNode } from 'react';

export interface HeaderRootProps {
	children: ReactNode;
}

export interface DesktopNavProps {
	isActive: (path: string) => boolean;
	handleLogout: () => void;
}

export interface MobileMenuProps {
	sidebarOpen: boolean;
	setSidebarOpen: (value: boolean) => void;
	isActive: (path: string) => boolean;
	handleLogout: () => void;
}

export interface HeaderLogoButtonProps {
	onToggle: () => void;
}

export interface HeaderUserProps {
	name: string;
}
