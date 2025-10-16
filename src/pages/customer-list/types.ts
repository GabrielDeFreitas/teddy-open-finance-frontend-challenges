export interface CustomerProps {
	id: number;
	name: string;
	salary: number;
	companyValuation: number;
}

export interface FormData {
	name: string;
	salary: string;
	company: string;
}

export interface CustomerListViewProps {
	isError: Error | null;

	isLoading: boolean;

	customers: CustomerProps[];

	pagination: {
		currentPage: number;
		totalPages: number;
		limit: number;
		onPageChange: (page: number) => void;
		onChangeLimit: (newLimit: number) => void;
	};

	dialogState: {
		create: boolean;
		edit: boolean;
		delete: boolean;
	};

	dialog: {
		openCreate: () => void;
		openEdit: (customer: CustomerProps) => void;
		openDelete: (customer: CustomerProps) => void;
		closeAll: () => void;
	};

	form: {
		data: FormData;
		onChange: (field: keyof FormData, value: string) => void;
		reset: () => void;
	};

	handlers: {
		create: () => void;
		edit: () => void;
		delete: () => void;
	};

	selectedCustomer: { id: number; name: string } | null;
}
