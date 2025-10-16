import { useState } from 'react';
import type { CustomerProps } from '../../pages/customer-list/types';

const STORAGE_KEY = 'selected_customers';

export function useCustomerSelection() {
	const [selectedCustomers, setSelectedCustomers] = useState<CustomerProps[]>(
		() => {
			if (typeof window === 'undefined') return [];
			const stored = sessionStorage.getItem(STORAGE_KEY);
			return stored ? JSON.parse(stored) : [];
		},
	);

	const toggleSelect = (customer: CustomerProps) => {
		setSelectedCustomers((prev) => {
			const exists = prev.find((c) => c.id === customer.id);
			const next = exists
				? prev.filter((c) => c.id !== customer.id)
				: [...prev, customer];

			sessionStorage.setItem(STORAGE_KEY, JSON.stringify(next));
			return next;
		});
	};

	const clearSelection = () => {
		setSelectedCustomers([]);
		sessionStorage.setItem(STORAGE_KEY, JSON.stringify([]));
	};

	return { selectedCustomers, toggleSelect, clearSelection };
}
