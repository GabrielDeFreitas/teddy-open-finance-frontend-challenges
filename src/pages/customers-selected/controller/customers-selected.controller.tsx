import { useCustomerSelection } from '../../../hooks/use-customer-selection';
import { CustomerSelectedView } from '../view/customers-selected.view';

export function CustomerSelectedController() {
	const { selectedCustomers, toggleSelect, clearSelection } =
		useCustomerSelection();

	return (
		<CustomerSelectedView
			selectedCustomers={selectedCustomers}
			toggleSelect={toggleSelect}
			clearSelection={clearSelection}
		/>
	);
}
