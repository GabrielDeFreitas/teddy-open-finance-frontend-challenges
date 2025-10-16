import type { ButtonCreateCustomerProps } from './types';

export function ButtonCreateCustomer({
	label,
	...rest
}: ButtonCreateCustomerProps) {
	return (
		<button
			type="button"
			{...rest}
			className="cursor-pointer w-full rounded-md border-2 border-[#FF6B35] bg-transparent px-4 py-2 text-sm font-medium text-[#FF6B35] transition-colors hover:bg-[#FF6B35] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#FF6B35] focus:ring-offset-2">
			{label}
		</button>
	);
}
