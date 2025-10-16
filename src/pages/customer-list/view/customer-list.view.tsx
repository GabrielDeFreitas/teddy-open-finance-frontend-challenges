import { Pencil, Plus, Trash2 } from 'lucide-react';
import { ButtonCreateCustomer } from '../../../components/button-create-customer';
import { CardCustomer } from '../../../components/card-customer';
import { CustomerListSummary } from '../../../components/customer-list-summary';
import { Pagination } from '../../../components/pagination';
import { Dialog } from '../../../components/dialog';
import type { CustomerListViewProps } from '../types';
import { CustomerSkeleton } from '../../../components/customer-skeleton';
import { formatCurrency } from '../../../utils/format-currency';
import { FeedbackScreen } from '../../../components/feedback-screen';

export function CustomerListView({
	clients,
	pagination,
	dialogState,
	dialog,
	form,
	handlers,
	removeCustomer,
	isLoading,
	isError,
	selectedCustomers,
}: CustomerListViewProps) {
	function renderSummary() {
		return (
			<CustomerListSummary.Root>
				<CustomerListSummary.Found
					text="clientes encontrados:"
					customersFound={String(clients.length)}
				/>
				<CustomerListSummary.PerPage
					text="Clientes por página:"
					limit={pagination.limit}
					onChangeLimit={pagination.onChangeLimit}
					onPageChange={pagination.onPageChange}
				/>
			</CustomerListSummary.Root>
		);
	}

	function renderCards() {
		return (
			<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
				{clients.map((customer) => (
					<CardCustomer.Root
						key={customer.id}
						isSelected={selectedCustomers.includes(customer)}>
						<CardCustomer.Name name={customer.name} />
						<CardCustomer.Data>
							<CardCustomer.Salary salary={formatCurrency(customer.salary)} />
							<CardCustomer.Company
								company={formatCurrency(customer.companyValuation)}
							/>
						</CardCustomer.Data>
						<CardCustomer.Actions>
							<CardCustomer.Button
								icon={Plus}
								aria-label="Selecionar cliente"
								onClick={() => handlers.select(customer)}
							/>
							<CardCustomer.Button
								icon={Pencil}
								aria-label="Editar cliente"
								onClick={() => dialog.openEdit(customer)}
							/>
							<CardCustomer.Button
								icon={Trash2}
								aria-label="Excluir cliente"
								onClick={() => dialog.openDelete(customer)}
							/>
						</CardCustomer.Actions>
					</CardCustomer.Root>
				))}
			</div>
		);
	}

	function renderCreateButton() {
		return (
			<div className="mt-8 space-y-4">
				<ButtonCreateCustomer
					label="Criar cliente"
					onClick={dialog.openCreate}
				/>
			</div>
		);
	}

	function renderPagination() {
		return (
			<div className="mt-8 space-y-4">
				<Pagination {...pagination} />
			</div>
		);
	}

	function renderCreateDialog() {
		return (
			<Dialog.Root open={dialogState.create} onOpenChange={dialog.closeAll}>
				<Dialog.Content>
					<Dialog.Header>
						<Dialog.Title title="Criar cliente" />
						<Dialog.Close onClose={dialog.closeAll} />
					</Dialog.Header>
					<div className="space-y-4">
						{nameSalaryCompanyInputs()}
						<Dialog.Action label="Criar cliente" onClick={handlers.create} />
					</div>
				</Dialog.Content>
			</Dialog.Root>
		);
	}

	function renderEditDialog() {
		return (
			<Dialog.Root open={dialogState.edit} onOpenChange={dialog.closeAll}>
				<Dialog.Content>
					<Dialog.Header>
						<Dialog.Title title="Editar cliente" />
						<Dialog.Close onClose={dialog.closeAll} />
					</Dialog.Header>
					<div className="space-y-4">
						{nameSalaryCompanyInputs()}
						<Dialog.Action label="Salvar alterações" onClick={handlers.edit} />
					</div>
				</Dialog.Content>
			</Dialog.Root>
		);
	}

	function renderDeleteDialog() {
		return (
			<Dialog.Root open={dialogState.delete} onOpenChange={dialog.closeAll}>
				<Dialog.Content>
					<Dialog.Header>
						<Dialog.Title title="Excluir cliente" />
						<Dialog.Close onClose={dialog.closeAll} />
					</Dialog.Header>
					<div className="space-y-4">
						<p className="text-gray-900">
							Você está prestes a excluir o cliente:{' '}
							<span className="font-semibold">
								{removeCustomer?.name ?? '---'}
							</span>
						</p>
						<Dialog.Action label="Excluir cliente" onClick={handlers.delete} />
					</div>
				</Dialog.Content>
			</Dialog.Root>
		);
	}

	function nameSalaryCompanyInputs() {
		const inputs = [
			{ key: 'name', placeholder: 'Nome' },
			{ key: 'salary', placeholder: 'Salário' },
			{ key: 'company', placeholder: 'Empresa' },
		] as const;

		return inputs.map(({ key, placeholder }) => (
			<Dialog.Input
				key={key}
				placeholder={placeholder}
				value={form.data[key]}
				onChange={(e) => form.onChange(key, e.target.value)}
			/>
		));
	}

	if (isLoading) {
		return <CustomerSkeleton />;
	}

	if (isError) {
		return (
			<FeedbackScreen
				title="Nenhum cliente encontrado"
				description="No momento, não há clientes cadastrados. Tente novamente mais tarde."></FeedbackScreen>
		);
	}

	return (
		<main className="container mx-auto px-4 py-6">
			{renderSummary()}
			{renderCards()}
			{renderCreateButton()}
			{renderPagination()}
			{renderCreateDialog()}
			{renderEditDialog()}
			{renderDeleteDialog()}
		</main>
	);
}
