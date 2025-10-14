import { BrowserRouter, Route, Routes } from 'react-router';
import { RoutesUrl } from './utils/enum/routes-url';

export function RouteProvider() {
	const routes = [
		{
			path: '*',
			element: <h1>error</h1>,
		},
		{
			path: RoutesUrl.BASE_URL,
			element: <h1>home page</h1>,
		},
		{
			path: `${RoutesUrl.CUSTOMER_LIST}`,
			element: <h1>customer list</h1>,
		},
		{
			path: `${RoutesUrl.CUSTOMERS_SELECTED}`,
			element: <h1>customers selected</h1>,
		},
	];

	return (
		<BrowserRouter>
			<Routes>
				{routes.map((route) => (
					<Route key={route.path} path={route.path} element={route.element} />
				))}
			</Routes>
		</BrowserRouter>
	);
}
