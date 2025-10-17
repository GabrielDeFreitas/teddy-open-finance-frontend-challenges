import { useEffect } from 'react';
import type { ToastProps } from './type';
import { CircleCheck, CircleX, X } from 'lucide-react';

export function Toast({
	message,
	type = 'error',
	duration = 3000,
	onClose,
}: ToastProps) {
	useEffect(() => {
		const timer = setTimeout(() => onClose(), duration);
		return () => clearTimeout(timer);
	}, [duration, onClose]);

	const colors = {
		success: 'bg-green-500',
		error: 'bg-red-500',
	};

	const icons = {
		success: <CircleCheck className="h-5 w-5 flex-shrink-0" />,
		error: <CircleX className="h-5 w-5 flex-shrink-0" />,
	};

	return (
		<div className="fixed bottom-4 right-4 z-50 animate-slide-up">
			<div
				className={`flex items-center gap-3 ${colors[type]} px-4 py-3 rounded-lg text-white shadow-lg`}>
				{icons[type]}
				<span className="text-sm font-medium">{message}</span>
				<button
					type="button"
					onClick={onClose}
					className="ml-2 p-1 rounded-md hover:bg-white/20 transition-colors"
					aria-label="Close">
					<X className="h-4 w-4" />
				</button>
			</div>
		</div>
	);
}
