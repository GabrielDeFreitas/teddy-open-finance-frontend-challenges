import { Minus } from 'lucide-react';
import { CardCustomer } from '../../../components/card-customer';
import { CustomerListSummary } from '../../../components/customer-list-summary';
import { formatCurrency } from '../../../utils/format-currency';
import { ButtonCreateCustomer } from '../../../components/button-create-customer';
import type { CustomerSelectedViewProps } from '../types';

export function CustomerSelectedView({
	selectedCustomers,
	toggleSelect,
	clearSelection,
}: CustomerSelectedViewProps) {
	function renderTitle() {
		return (
			<div className="mb-6">
				<CustomerListSummary.Root>
					<CustomerListSummary.Found text="Clientes selecionados:" />
				</CustomerListSummary.Root>
			</div>
		);
	}

	function renderEmptyCard() {
		return (
			<main className="container mx-auto px-4 py-6">
				{renderTitle()}
				<div className="flex min-h-[400px] flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-white p-8">
					<h2 className="mb-2 text-xl font-semibold text-gray-900">
						Nenhum cliente selecionado
					</h2>
					<p className="text-center text-gray-600">
						Vá até a página <strong>Clientes</strong> e selecione para vê-los
						aqui.
					</p>
				</div>
			</main>
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
								aria-label="Remover cliente selecionado"
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
					label="Limpar clientes selecionados"
					onClick={clearSelection}
				/>
			</div>
		);
	}

	if (selectedCustomers.length === 0) {
		return renderEmptyCard();
	}

	return (
		<div className="min-h-screen bg-gray-50">
			<main className="container mx-auto px-4 py-6">
				{renderTitle()}
				{renderSelectedCards()}
				{renderClearButton()}
			</main>
		</div>
	);
}
