import { createContext, useContext, type ReactNode } from 'react';
import { useCustomerSelection } from '../../hooks/use-customer-selection';
import type { CustomerProps } from '../../pages/customer-list/types';

interface CustomerSelectionContextValue {
	selectedCustomers: CustomerProps[];
	toggleSelect: (customer: CustomerProps) => void;
	clearSelection: () => void;
}

const CustomerSelectionContext = createContext<
	CustomerSelectionContextValue | undefined
>(undefined);

export function CustomerSelectionProvider({
	children,
}: {
	children: ReactNode;
}) {
	return (
		<CustomerSelectionContext.Provider value={useCustomerSelection()}>
			{children}
		</CustomerSelectionContext.Provider>
	);
}

export function useCustomerSelectionContext() {
	const context = useContext(CustomerSelectionContext);
	if (!context)
		throw new Error(
			'useCustomerSelectionContext deve ser usado dentro do CustomerSelectionProvider',
		);
	return context;
}
