export const RoutesUrl = {
	BASE_URL: '/',
	ERROR_AREA: '/generic-error',
	CUSTOMER_LIST: '/customer-list',
	CUSTOMERS_SELECTED: '/customers-selected',
} as const;

export type RouteUrl = (typeof RoutesUrl)[keyof typeof RoutesUrl];
