import { BrowserRouter, Route, Routes } from 'react-router';
import { CustomerListController } from './pages/customer-list/index.page';
import { RoutesUrl } from './utils/enum/routes-url';
import { CustomerSelectionProvider } from './context/customer-selection-context';
import { CustomerSelectedController } from './pages/customers-selected/index.page';
export function RouteProvider() {
	const routes = [
		{
			path: '*',
			element: <h1>error page</h1>,
		},
		{
			path: RoutesUrl.BASE_URL,
			element: <h1>home page</h1>,
		},
		{
			path: `${RoutesUrl.CUSTOMER_LIST}`,
			element: <CustomerListController />,
		},
		{
			path: `${RoutesUrl.CUSTOMERS_SELECTED}`,
			element: <CustomerSelectedController />,
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
