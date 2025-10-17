import { BrowserRouter, Route, Routes } from 'react-router';
import { CustomerListController } from './pages/customer-list/index.page';
import { RoutesUrl } from './utils/enum/routes-url';
import { CustomerSelectionProvider } from './context/customer-selection-context';
import { CustomerSelectedController } from './pages/customers-selected/index.page';
import { PrivateRoute } from './private-route';
import { CustomerLoginController } from './pages/customer-login/index.page';
import { PageErrorLayout, PageLayout } from './components/page-layout';
export function RouteProvider() {
	const routes = [
		{
			path: '*',
			element: <PageErrorLayout />,
		},
		{
			path: RoutesUrl.BASE_URL,
			element: <CustomerLoginController />,
		},
		{
			path: `${RoutesUrl.CUSTOMER_LIST}`,
			element: (
				<PrivateRoute>
					<PageLayout>
						<CustomerListController />
					</PageLayout>
				</PrivateRoute>
			),
		},
		{
			path: `${RoutesUrl.CUSTOMERS_SELECTED}`,
			element: (
				<PrivateRoute>
					<PageLayout>
						<CustomerSelectedController />
					</PageLayout>
				</PrivateRoute>
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
