import { X } from 'lucide-react';
import { useDialog } from '../../hooks/use-dialog';
import type {
	DialogActionProps,
	DialogContentProps,
	DialogDescriptionProps,
	DialogHeaderProps,
	DialogInputProps,
	DialogProps,
	DialogTitleProps,
} from './types';

function DialogRoot({ open, onOpenChange, children }: DialogProps) {
	useDialog(open);

	if (!open) return null;

	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center">
			<div
				role="dialog"
				tabIndex={-1}
				className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
				onClick={() => onOpenChange(false)}
				onKeyDown={(e) => {
					if (e.key === 'Enter' || e.key === ' ') {
						onOpenChange(false);
					}
				}}
			/>
			{children}
		</div>
	);
}

function DialogContent({ children, className = '' }: DialogContentProps) {
	return (
		<div
			className={`relative z-50 w-full max-w-md rounded-lg bg-white p-6 shadow-xl ${className}`}
			onClick={(e) => e.stopPropagation()}
			onKeyDown={(e) => e.stopPropagation()}
			role="dialog"
			aria-modal="true">
			{children}
		</div>
	);
}

function DialogHeader({ children }: DialogHeaderProps) {
	return (
		<div className="mb-4 flex items-center justify-between">{children}</div>
	);
}

function DialogTitle({ title }: DialogTitleProps) {
	return <h2 className="text-lg font-semibold text-gray-900">{title}</h2>;
}

function DialogDescription({ description }: DialogDescriptionProps) {
	return <p className="mt-2 text-base text-gray-600">{description}</p>;
}

function DialogAction({ label, ...rest }: DialogActionProps) {
	return (
		<div className="mt-6 flex justify-end gap-3">
			<button
				{...rest}
				type="button"
				className="cursor-pointer w-full rounded-md bg-[#FF6B35] px-4 py-2 text-base font-medium text-white transition-colors hover:bg-[#E55A2B] focus:outline-none focus:ring-2 focus:ring-[#FF6B35] focus:ring-offset-2">
				{label}
			</button>
		</div>
	);
}

function DialogInput({ placeholder, ...rest }: DialogInputProps) {
	return (
		<input
			{...rest}
			type="text"
			placeholder={placeholder}
			className="w-full rounded-md border border-gray-300 px-3 py-2 text-base focus:border-[#FF6B35] focus:outline-none focus:ring-2 focus:ring-[#FF6B35]"
		/>
	);
}

function DialogClose({ onClose }: { onClose: () => void }) {
	return (
		<button
			type="button"
			className="cursor-pointer rounded-md p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition-colors"
			onClick={onClose}
			aria-label="Fechar">
			<X className="h-5 w-5 text-gray-900" />
		</button>
	);
}

export const Dialog = {
	Root: DialogRoot,
	Content: DialogContent,
	Header: DialogHeader,
	Title: DialogTitle,
	Description: DialogDescription,
	Action: DialogAction,
	Close: DialogClose,
	Input: DialogInput,
};
