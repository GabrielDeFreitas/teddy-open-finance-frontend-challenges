import { useTranslation } from 'react-i18next';
import { Minus } from 'lucide-react';
import { CardCustomer } from '../../../components/card-customer';
import { CustomerListSummary } from '../../../components/customer-list-summary';
import { formatCurrency } from '../../../utils/format-currency';
import { ButtonCreateCustomer } from '../../../components/button-create-customer';
import type { CustomerSelectedViewProps } from '../types';
import { FeedbackScreen } from '../../../components/feedback-screen';

export function CustomerSelectedView({
	selectedCustomers,
	toggleSelect,
	clearSelection,
}: CustomerSelectedViewProps) {
	const { t } = useTranslation();

	function renderTitle() {
		return (
			<div className="mb-6">
				<CustomerListSummary.Root>
					<CustomerListSummary.Found text={t('customerSelected.title')} />
				</CustomerListSummary.Root>
			</div>
		);
	}

	function renderEmptyCard() {
		return (
			<FeedbackScreen
				title={t('customerSelected.emptyTitle')}
				description={t('customerSelected.emptyDescription')}>
				{renderTitle()}
			</FeedbackScreen>
		);
	}

	function renderSelectedCards() {
		return (
			<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
				{selectedCustomers.map((customer) => (
					<CardCustomer.Root key={customer.id} isSelected>
						<CardCustomer.Name name={customer.name} />
						<CardCustomer.Data>
							<CardCustomer.Salary salary={formatCurrency(customer.salary)} />
							<CardCustomer.Company
								company={formatCurrency(customer.companyValuation)}
							/>
						</CardCustomer.Data>
						<CardCustomer.Actions>
							<CardCustomer.Button
								icon={Minus}
								aria-label={t('customerSelected.removeButton')}
								onClick={() => toggleSelect(customer)}
							/>
						</CardCustomer.Actions>
					</CardCustomer.Root>
				))}
			</div>
		);
	}

	function renderClearButton() {
		return (
			<div className="mt-8 space-y-4">
				<ButtonCreateCustomer
					label={t('customerSelected.clearButton')}
					onClick={clearSelection}
				/>
			</div>
		);
	}

	if (selectedCustomers.length === 0) {
		return renderEmptyCard();
	}

	return (
		<main className="container mx-auto px-4 py-6">
			{renderTitle()}
			{renderSelectedCards()}
			{renderClearButton()}
		</main>
	);
}
