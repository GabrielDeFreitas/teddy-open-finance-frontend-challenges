import type { ReactNode } from 'react';

export interface CustomerListSummaryRootProps {
	children: ReactNode;
}

export interface CustomersFoundProps {
	customersFound: string;
}

export interface CustomersPerPageProps {
	customerPerPage: string;
}
