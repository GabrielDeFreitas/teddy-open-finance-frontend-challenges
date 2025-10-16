import { PER_PAGE_OPTIONS } from '../../utils/enum/per-page-options';
import type {
	CustomerListSummaryRootProps,
	CustomersFoundProps,
	CustomersPerPageProps,
} from './types';

function CustomerListSummaryRoot({ children }: CustomerListSummaryRootProps) {
	return (
		<div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center sm:gap-0">
			{children}
		</div>
	);
}

function CustomersFound({ customersFound, text }: CustomersFoundProps) {
	return (
		<h1 className="text-lg text-gray-900">
			<span className="font-bold">{customersFound}</span> {text}
		</h1>
	);
}

function CustomersPerPage({
	limit,
	text,
	onChangeLimit,
	onPageChange,
}: CustomersPerPageProps) {
	return (
		<div className="flex items-center gap-2">
			<span className="text-lg text-gray-900">{text}</span>

			<select
				name="customer-per-page"
				value={limit}
				onChange={(e) => {
					onChangeLimit(Number(e.target.value));
					onPageChange(1);
				}}
				className="focus:outline-none focus:ring-2 focus:ring-[#FF6B35] focus:ring-offset-2 h-9 w-20 rounded-md border border-gray-300 bg-white px-2 text-base text-gray-900 shadow-sm transition">
				{PER_PAGE_OPTIONS.map((option) => (
					<option key={option} value={option}>
						{option}
					</option>
				))}
			</select>
		</div>
	);
}

export const CustomerListSummary = {
	Root: CustomerListSummaryRoot,
	Found: CustomersFound,
	PerPage: CustomersPerPage,
};
