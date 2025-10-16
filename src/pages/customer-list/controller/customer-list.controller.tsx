import { useGetUsers } from '../../../hooks/use-get-users';
import { useCreateUser } from '../../../hooks/use-create-user';
import { useUpdateUser } from '../../../hooks/use-update-user';
import { useDeleteUser } from '../../../hooks/use-delete-user';
import { useState } from 'react';
import type { CustomerProps } from '../types';
import { CustomerListView } from '../view/customer-list.view';

export function CustomerListController() {
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
	const [selectedCustomer, setSelectedCustomer] = useState<{
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
			setSelectedCustomer({ id: customer.id, name: customer.name });
		},
		openDelete: (customer: CustomerProps) => {
			setSelectedCustomer({ id: customer.id, name: customer.name });
			setDialogs({ create: false, edit: false, delete: true });
		},
		closeAll: () => setDialogs({ create: false, edit: false, delete: false }),
	};

	const handlers = {
		create: () => {
			createUserMutation.mutate({
				name: form.data.name,
				salary: Number(form.data.salary),
				companyValuation: Number(form.data.company),
			});
			dialog.closeAll();
		},
		edit: () => {
			if (!selectedCustomer) return;

			updateUserMutation.mutate({
				id: String(selectedCustomer.id),
				data: {
					name: form.data.name,
					salary: Number(form.data.salary),
					companyValuation: Number(form.data.company),
				},
			});
			dialog.closeAll();
		},
		delete: () => {
			if (!selectedCustomer) return;

			deleteUserMutation.mutate(String(selectedCustomer.id));
			dialog.closeAll();
			setSelectedCustomer(null);
		},
	};

	return (
		<CustomerListView
			customers={data.clients}
			pagination={pagination}
			dialog={dialog}
			form={form}
			handlers={handlers}
			dialogState={dialogs}
			selectedCustomer={selectedCustomer}
			isLoading={isLoading}
			isError={error}
		/>
	);
}
