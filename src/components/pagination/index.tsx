import type { PaginationProps } from './types';

export function Pagination({
	currentPage,
	totalPages,
	onPageChange,
}: PaginationProps) {
	const renderPageNumbers = () => {
		const pages = [];
		pages.push(
			<button
				key={1}
				type="button"
				className={`cursor-pointer h-9 w-9 flex items-center justify-center rounded-md text-sm font-medium transition-colors ${
					currentPage === 1
						? 'bg-[#FF6B35] text-white hover:bg-[#FF6B35]/90'
						: 'text-gray-700 hover:bg-gray-100'
				}`}
				onClick={() => onPageChange(1)}>
				1
			</button>,
		);

		if (totalPages > 2) {
			const start = Math.max(2, currentPage - 1);
			const end = Math.min(totalPages - 1, currentPage + 1);

			if (start > 2) {
				pages.push(
					<span
						key="ellipsis-start"
						className="flex h-9 w-9 items-center justify-center text-gray-600">
						...
					</span>,
				);
			}

			for (let i = start; i <= end; i++) {
				pages.push(
					<button
						key={i}
						type="button"
						className={`cursor-pointer h-9 w-9 flex items-center justify-center rounded-md text-sm font-medium transition-colors ${
							currentPage === i
								? 'bg-[#FF6B35] text-white hover:bg-[#FF6B35]/90'
								: 'text-gray-700 hover:bg-gray-100'
						}`}
						onClick={() => onPageChange(i)}>
						{i}
					</button>,
				);
			}

			if (end < totalPages - 1) {
				pages.push(
					<span
						key="ellipsis-end"
						className="flex h-9 w-9 items-center justify-center text-gray-600">
						...
					</span>,
				);
			}
		}

		if (totalPages > 1) {
			pages.push(
				<button
					key={totalPages}
					type="button"
					className={`cursor-pointer h-9 w-9 flex items-center justify-center rounded-md text-sm font-medium transition-colors ${
						currentPage === totalPages
							? 'bg-[#FF6B35] text-white hover:bg-[#FF6B35]/90'
							: 'text-gray-700 hover:bg-gray-100'
					}`}
					onClick={() => onPageChange(totalPages)}>
					{totalPages}
				</button>,
			);
		}

		return pages;
	};

	return (
		<div className="flex items-center justify-center gap-1">
			{renderPageNumbers()}
		</div>
	);
}
