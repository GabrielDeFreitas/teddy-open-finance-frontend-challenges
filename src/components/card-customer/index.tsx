import type {
	CardCustomerActionProps,
	CardCustomerButtonProps,
	CardCustomerCompanyProps,
	CardCustomerDataProps,
	CardCustomerNameProps,
	CardCustomerRootProps,
	CardCustomerSalaryProps,
} from './types';

function CardCustomerRoot({ children, isSelected }: CardCustomerRootProps) {
	return (
		<div
			className={`rounded-lg border p-4 transition-all ${
				isSelected
					? 'border-[#FF6B35] bg-orange-50'
					: 'border-gray-200 bg-white hover:shadow-md'
			}`}>
			<div className="space-y-3">{children}</div>
		</div>
	);
}

function CardCustomerName({ name }: CardCustomerNameProps) {
	return <h3 className="text-center font-semibold text-gray-900">{name}</h3>;
}

function CardCustomerData({ children }: CardCustomerDataProps) {
	return <div className="text-center space-y-1 text-base">{children}</div>;
}

function CardCustomerSalary({ salary }: CardCustomerSalaryProps) {
	return (
		<p className="text-gray-600">
			Salário: <span className="font-medium text-gray-900">{salary}</span>
		</p>
	);
}

function CardCustomerCompany({ company }: CardCustomerCompanyProps) {
	return (
		<p className="text-gray-600">
			Empresa: <span className="font-medium text-gray-900">{company}</span>
		</p>
	);
}

function CardCustomerActions({ children }: CardCustomerActionProps) {
	return (
		<div className="flex items-center justify-between gap-2 pt-2">
			{children}
		</div>
	);
}

function CardCustomerButton({ icon: Icon, ...rest }: CardCustomerButtonProps) {
	return (
		<button
			type="button"
			{...rest}
			className="cursor-pointer h-8 w-8 flex items-center justify-center rounded-md text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors">
			<Icon className="h-4 w-4 text-gray-900" />
		</button>
	);
}

export const CardCustomer = {
	Root: CardCustomerRoot,
	Data: CardCustomerData,
	Name: CardCustomerName,
	Salary: CardCustomerSalary,
	Company: CardCustomerCompany,
	Actions: CardCustomerActions,
	Button: CardCustomerButton,
};
