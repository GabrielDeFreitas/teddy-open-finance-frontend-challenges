import type {
	CustomerListSummaryRootProps,
	CustomersFoundProps,
	CustomersPerPageProps,
} from './types';

function CustomerListSummaryRoot({ children }: CustomerListSummaryRootProps) {
	return (
		<div className="mb-6 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
			{children}
		</div>
	);
}

function CustomersFound({ customersFound }: CustomersFoundProps) {
	return (
		<h1 className="text-lg font-medium text-gray-900">
			<span className="font-bold">{customersFound}</span> clientes encontrados:
		</h1>
	);
}

function CustomerPerPage({ customerPerPage }: CustomersPerPageProps) {
	return (
		<div className="flex items-center gap-2">
			<span className="text-sm text-gray-600">
				Clientes por página: {customerPerPage}
			</span>
		</div>
	);
}

export const CustomerListSumary = {
	Root: CustomerListSummaryRoot,
	Found: CustomersFound,
	PerPage: CustomerPerPage,
};
