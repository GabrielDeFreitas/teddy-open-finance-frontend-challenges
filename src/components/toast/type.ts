export type ToastType = 'success' | 'error';

export interface ToastProps {
	message: string;
	type: ToastType;
	duration?: number;
	onClose: () => void;
}
