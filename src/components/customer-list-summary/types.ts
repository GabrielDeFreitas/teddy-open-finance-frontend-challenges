import type { ReactNode } from 'react';

export interface CustomerListSummaryRootProps {
	children: ReactNode;
}

export interface CustomersFoundProps {
	customersFound?: string;
	text: string;
}

export interface CustomersPerPageProps {
	text: string;
	limit: number;
	onChangeLimit: (newLimit: number) => void;
	onPageChange: (newPage: number) => void;
}
