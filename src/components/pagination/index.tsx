import type { PaginationProps } from './types';

export function Pagination({
	currentPage,
	totalPages,
	onPageChange,
}: PaginationProps) {
	const renderPageNumbers = () => {
		const pages = [];
		const showEllipsisStart = currentPage > 3;
		const showEllipsisEnd = currentPage < totalPages - 2;

		pages.push(
			<button
				type="button"
				key={1}
				className={`cursor-pointer h-9 w-9 flex items-center justify-center rounded-md text-sm font-medium transition-colors ${
					currentPage === 1
						? 'bg-[#FF6B35] text-white hover:bg-[#FF6B35]/90'
						: 'text-gray-700 hover:bg-gray-100'
				}`}
				onClick={() => onPageChange(1)}>
				1
			</button>,
		);

		if (showEllipsisStart) {
			pages.push(
				<span
					key="ellipsis-start"
					className="flex h-9 w-9 items-center justify-center text-gray-600">
					...
				</span>,
			);
		} else if (totalPages > 1) {
			pages.push(
				<button
					type="button"
					key={2}
					className={`cursor-pointer h-9 w-9 flex items-center justify-center rounded-md text-sm font-medium transition-colors ${
						currentPage === 2
							? 'bg-[#FF6B35] text-white hover:bg-[#FF6B35]/90'
							: 'text-gray-700 hover:bg-gray-100'
					}`}
					onClick={() => onPageChange(2)}>
					2
				</button>,
			);
		}

		for (
			let i = Math.max(3, currentPage - 1);
			i <= Math.min(totalPages - 2, currentPage + 1);
			i++
		) {
			pages.push(
				<button
					type="button"
					key={i}
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

		if (showEllipsisEnd) {
			pages.push(
				<span
					key="ellipsis-end"
					className="flex h-9 w-9 items-center justify-center text-gray-600">
					...
				</span>,
			);
		} else if (totalPages > 2 && currentPage !== totalPages - 1) {
			pages.push(
				<button
					type="button"
					key={totalPages - 1}
					className={`cursor-pointer h-9 w-9 flex items-center justify-center rounded-md text-sm font-medium transition-colors ${
						currentPage === totalPages - 1
							? 'bg-[#FF6B35] text-white hover:bg-[#FF6B35]/90'
							: 'text-gray-700 hover:bg-gray-100'
					}`}
					onClick={() => onPageChange(totalPages - 1)}>
					{totalPages - 1}
				</button>,
			);
		}

		if (totalPages > 1) {
			pages.push(
				<button
					type="button"
					key={totalPages}
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
