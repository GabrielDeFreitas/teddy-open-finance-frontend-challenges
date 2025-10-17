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
import { useTranslation } from 'react-i18next';

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
	const { t } = useTranslation();

	function renderSummary() {
		return (
			<CustomerListSummary.Root>
				<CustomerListSummary.Found
					text={t('customerList.summary.found')}
					customersFound={String(clients.length)}
				/>
				<CustomerListSummary.PerPage
					text={t('customerList.summary.perPage')}
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
								aria-label={t('customerList.buttons.selectCustomer')}
								onClick={() => handlers.select(customer)}
							/>
							<CardCustomer.Button
								icon={Pencil}
								aria-label={t('customerList.buttons.editCustomer')}
								onClick={() => dialog.openEdit(customer)}
							/>
							<CardCustomer.Button
								icon={Trash2}
								aria-label={t('customerList.buttons.deleteCustomer')}
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
					label={t('customerList.buttons.createCustomer')}
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
						<Dialog.Title title={t('customerList.dialogs.createTitle')} />
						<Dialog.Close onClose={dialog.closeAll} />
					</Dialog.Header>
					<div className="space-y-4">
						{nameSalaryCompanyInputs()}
						<Dialog.Action
							label={t('customerList.buttons.createCustomer')}
							onClick={handlers.create}
						/>
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
						<Dialog.Title title={t('customerList.dialogs.editTitle')} />
						<Dialog.Close onClose={dialog.closeAll} />
					</Dialog.Header>
					<div className="space-y-4">
						{nameSalaryCompanyInputs()}
						<Dialog.Action
							label={t('customerList.buttons.saveChanges')}
							onClick={handlers.edit}
						/>
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
						<Dialog.Title title={t('customerList.dialogs.deleteTitle')} />
						<Dialog.Close onClose={dialog.closeAll} />
					</Dialog.Header>
					<div className="space-y-4">
						<p className="text-gray-900">
							{t('customerList.dialogs.deleteDescription', {
								name: removeCustomer?.name ?? '---',
							})}
						</p>
						<Dialog.Action
							label={t('customerList.buttons.deleteCustomer')}
							onClick={handlers.delete}
						/>
					</div>
				</Dialog.Content>
			</Dialog.Root>
		);
	}

	function nameSalaryCompanyInputs() {
		const inputs = [
			{ key: 'name', placeholder: t('customerList.inputs.name') },
			{ key: 'salary', placeholder: t('customerList.inputs.salary') },
			{ key: 'company', placeholder: t('customerList.inputs.company') },
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

	if (isLoading) return <CustomerSkeleton />;

	if (isError)
		return (
			<FeedbackScreen
				title={t('customerList.feedback.noClientsTitle')}
				description={t('customerList.feedback.noClientsDescription')}
			/>
		);

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
