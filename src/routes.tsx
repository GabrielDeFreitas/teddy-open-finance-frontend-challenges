import { BrowserRouter, Route, Routes } from 'react-router';
import { CustomerListController } from './pages/customer-list/index.page';
import { RoutesUrl } from './utils/enum/routes-url';
import { CustomerSelectionProvider } from './context/customer-selection-context';
import { CustomerSelectedController } from './pages/customers-selected/index.page';
import { Header } from './components/header';
export function RouteProvider() {
	const routes = [
		{
			path: '*',
			element: (
				<div className="min-h-screen bg-gray-50">
					<Header />
					<h1>error page</h1>
				</div>
			),
		},
		{
			path: RoutesUrl.BASE_URL,
			element: <h1>home page</h1>,
		},
		{
			path: `${RoutesUrl.CUSTOMER_LIST}`,
			element: (
				<div className="min-h-screen bg-gray-50">
					<Header />
					<CustomerListController />
				</div>
			),
		},
		{
			path: `${RoutesUrl.CUSTOMERS_SELECTED}`,
			element: (
				<div className="min-h-screen bg-gray-50">
					<Header />
					<CustomerSelectedController />
				</div>
			),
		},
	];

	return (
		<BrowserRouter>
			<CustomerSelectionProvider>
				<Routes>
					{routes.map((route) => (
						<Route key={route.path} path={route.path} element={route.element} />
					))}
				</Routes>
			</CustomerSelectionProvider>
		</BrowserRouter>
	);
}
