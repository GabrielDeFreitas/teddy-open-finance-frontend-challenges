import { useState } from 'react';
import { Link, useLocation } from 'react-router';
import { RoutesUrl } from '../../utils/enum/routes-url';
import { useNavigation } from '../../hooks/use-navigation';
import { Logo } from '../logo';
import type {
	DesktopNavProps,
	MobileMenuProps,
	HeaderRootProps,
	HeaderUserProps,
	HeaderLogoButtonProps,
} from './types';
import { Menu } from 'lucide-react';
import { useAuthContext } from '../../context/auth-context';

function HeaderRoot({ children }: HeaderRootProps) {
	return (
		<header className="sticky top-0 z-50 w-full shadow-md bg-white">
			<div className="container mx-auto flex h-16 items-center justify-between px-4 relative">
				{children}
			</div>
		</header>
	);
}

function DesktopNav({ isActive, handleLogout }: DesktopNavProps) {
	return (
		<nav className="hidden md:flex items-center gap-6">
			<Link
				to={RoutesUrl.CUSTOMER_LIST}
				className={`text-base font-medium ${
					isActive(RoutesUrl.CUSTOMER_LIST)
						? 'text-[#FF6B35] underline'
						: 'text-gray-600 hover:text-gray-900'
				}`}>
				Clientes
			</Link>

			<Link
				to={RoutesUrl.CUSTOMERS_SELECTED}
				className={`text-base font-medium ${
					isActive(RoutesUrl.CUSTOMERS_SELECTED)
						? 'text-[#FF6B35] underline'
						: 'text-gray-600 hover:text-gray-900'
				}`}>
				Clientes selecionados
			</Link>

			<button
				type="button"
				onClick={handleLogout}
				className="text-base font-medium text-gray-600 hover:text-gray-900">
				Sair
			</button>
		</nav>
	);
}

function MobileMenu({
	sidebarOpen,
	setSidebarOpen,
	isActive,
	handleLogout,
}: MobileMenuProps) {
	if (!sidebarOpen) return null;

	const links = [
		{ label: 'Clientes', path: RoutesUrl.CUSTOMER_LIST },
		{ label: 'Clientes selecionados', path: RoutesUrl.CUSTOMERS_SELECTED },
	];

	return (
		<>
			<button
				type="button"
				className="fixed inset-0 z-40 bg-black/50"
				onClick={() => setSidebarOpen(false)}
			/>
			<div className="fixed bottom-0 left-0 top-0 z-50 w-64 bg-white shadow-xl">
				<div className="flex h-32 items-center justify-center bg-neutral-700">
					<Logo />
				</div>
				<nav className="flex flex-col p-4">
					{links.map((link) => (
						<Link
							key={link.path}
							to={link.path}
							className={`flex items-center gap-3 rounded-md px-4 py-3 text-base font-medium transition-colors ${
								isActive(link.path)
									? 'bg-orange-50 text-[#FF6B35]'
									: 'text-gray-700 hover:bg-gray-100'
							}`}
							onClick={() => setSidebarOpen(false)}>
							{link.label}
						</Link>
					))}
					<button
						type="button"
						onClick={handleLogout}
						className="flex items-center gap-3 rounded-md px-4 py-3 text-base font-medium transition-colors text-gray-700 hover:bg-gray-100">
						Sair
					</button>
				</nav>
			</div>
		</>
	);
}

function HeaderLogoButton({ onToggle }: HeaderLogoButtonProps) {
	return (
		<button
			type="button"
			className="left-4 top-4 z-50 rounded-md p-2 transition-colors hover:bg-gray-100"
			onClick={onToggle}
			aria-label="Toggle menu">
			<Menu className="h-5 w-5" />
		</button>
	);
}

function HeaderUser({ name }: HeaderUserProps) {
	return (
		<div className="text-base text-gray-900">
			Olá, <span className="font-semibold">{name}!</span>
		</div>
	);
}

function HeaderMain() {
	const [sidebarOpen, setSidebarOpen] = useState(false);
	const location = useLocation();
	const { redirect } = useNavigation();
	const { userName, logout } = useAuthContext();
	const currentPath = location.pathname;

	const handleLogout = () => {
		redirect(RoutesUrl.BASE_URL);
		setSidebarOpen(false);
	};

	const isActive = (path: string) => currentPath.startsWith(path);

	return (
		<HeaderRoot>
			<div className="flex gap-8 items-center">
				<HeaderLogoButton onToggle={() => setSidebarOpen(!sidebarOpen)} />
				<Logo />
			</div>

			<DesktopNav isActive={isActive} handleLogout={handleLogout} />
			<HeaderUser name={userName ?? ''} />

			<MobileMenu
				sidebarOpen={sidebarOpen}
				setSidebarOpen={setSidebarOpen}
				isActive={isActive}
				handleLogout={logout}
			/>
		</HeaderRoot>
	);
}

export const Header = Object.assign(HeaderMain, {
	Root: HeaderRoot,
	DesktopNav,
	MobileMenu,
	LogoButton: HeaderLogoButton,
	User: HeaderUser,
});
