import { useGetUsers } from '../../../hooks/use-get-users';
import { useCreateUser } from '../../../hooks/use-create-user';
import { useUpdateUser } from '../../../hooks/use-update-user';
import { useDeleteUser } from '../../../hooks/use-delete-user';
import { useState } from 'react';
import type { CustomerProps } from '../types';
import { CustomerListView } from '../view/customer-list.view';
import { useCustomerSelectionContext } from '../../../context/customer-selection-context';

export function CustomerListController() {
	const { selectedCustomers, toggleSelect } = useCustomerSelectionContext();
	const [page, setPage] = useState(1);
	const [limit, setLimit] = useState(8);
	const [formData, setFormData] = useState({
		name: '',
		salary: '',
		company: '',
	});
	const [dialogs, setDialogs] = useState({
		create: false,
		edit: false,
		delete: false,
	});
	const [removeCustomer, setRemoveCustomer] = useState<{
		id: number;
		name: string;
	} | null>(null);

	const {
		data = { clients: [], currentPage: 1, totalPages: 1 },
		isLoading,
		error,
	} = useGetUsers({ page, limit });

	const createUserMutation = useCreateUser();
	const updateUserMutation = useUpdateUser();
	const deleteUserMutation = useDeleteUser();

	const pagination = {
		currentPage: data.currentPage,
		totalPages: data.totalPages,
		onPageChange: setPage,
		limit,
		onChangeLimit: setLimit,
	};

	const form = {
		data: formData,
		onChange: (field: keyof typeof formData, value: string) =>
			setFormData((prev) => ({ ...prev, [field]: value })),
		reset: () => setFormData({ name: '', salary: '', company: '' }),
	};

	const dialog = {
		openCreate: () => {
			form.reset();
			setDialogs({ create: true, edit: false, delete: false });
		},
		openEdit: (customer: CustomerProps) => {
			form.onChange('name', customer.name);
			form.onChange('salary', String(customer.salary));
			form.onChange('company', String(customer.companyValuation));
			setDialogs({ create: false, edit: true, delete: false });
			setRemoveCustomer({ id: customer.id, name: customer.name });
		},
		openDelete: (customer: CustomerProps) => {
			setRemoveCustomer({ id: customer.id, name: customer.name });
			setDialogs({ create: false, edit: false, delete: true });
		},
		closeAll: () => setDialogs({ create: false, edit: false, delete: false }),
	};

	const handlers = {
		create: () => {
			if (!form.data.name.trim()) {
				alert('O nome é um campo obrigatório!');
				return;
			}

			createUserMutation.mutate({
				name: form.data.name,
				salary: Number(form.data.salary),
				companyValuation: Number(form.data.company),
			});
			dialog.closeAll();
		},
		edit: () => {
			if (!removeCustomer) return;
			updateUserMutation.mutate({
				id: String(removeCustomer.id),
				data: {
					name: form.data.name,
					salary: Number(form.data.salary),
					companyValuation: Number(form.data.company),
				},
			});
			dialog.closeAll();
		},
		delete: () => {
			if (!removeCustomer) return;
			deleteUserMutation.mutate(String(removeCustomer.id));
			dialog.closeAll();
			setRemoveCustomer(null);
		},
		select: toggleSelect,
	};

	return (
		<CustomerListView
			clients={data.clients}
			pagination={pagination}
			dialog={dialog}
			form={form}
			handlers={handlers}
			dialogState={dialogs}
			removeCustomer={removeCustomer}
			isLoading={isLoading}
			isError={error}
			selectedCustomers={selectedCustomers}
		/>
	);
}
