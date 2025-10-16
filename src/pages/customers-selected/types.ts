export interface CustomerProps {
	id: number;
	name: string;
	salary: number;
	companyValuation: number;
}

export interface CustomerSelectedViewProps {
	selectedCustomers: CustomerProps[];
	toggleSelect: (customer: CustomerProps) => void;
	clearSelection: () => void;
}
