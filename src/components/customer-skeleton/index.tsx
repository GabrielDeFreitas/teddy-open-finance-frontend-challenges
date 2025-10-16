import { Pencil, Plus, Trash2 } from 'lucide-react';
import { ButtonCreateCustomer } from '../button-create-customer';
import { CardCustomer } from '../card-customer';
import { CustomerListSummary } from '../customer-list-summary';

export function CustomerSkeleton() {
	const skeletonItems = Array.from({ length: 4 }, (_, i) => ({
		id: `skeleton-${i + 1}`,
	}));

	return (
		<div className="min-h-screen bg-gray-50">
			<main className="container mx-auto px-4 py-6">
				<CustomerListSummary.Root>
					<CustomerListSummary.Found
						text="encontrando clientes:"
						customersFound={'0'}
					/>
				</CustomerListSummary.Root>
				<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
					{skeletonItems.map((item) => (
						<CardCustomer.Root key={item.id}>
							<CardCustomer.Name name="Carregando..." />
							<CardCustomer.Data>
								<CardCustomer.Salary salary={'0'} />
								<CardCustomer.Company company={'0'} />
							</CardCustomer.Data>
							<CardCustomer.Actions>
								<CardCustomer.Button
									icon={Plus}
									aria-label="Selecionar cliente"
									disabled
								/>
								<CardCustomer.Button
									icon={Pencil}
									aria-label="Editar cliente"
									disabled
								/>
								<CardCustomer.Button
									icon={Trash2}
									aria-label="Deletar cliente"
									disabled
								/>
							</CardCustomer.Actions>
						</CardCustomer.Root>
					))}
				</div>

				<div className="mt-8 space-y-4">
					<ButtonCreateCustomer
						label="Criar cliente"
						aria-label="Criar cliente"
						disabled
					/>
				</div>
			</main>
		</div>
	);
}
