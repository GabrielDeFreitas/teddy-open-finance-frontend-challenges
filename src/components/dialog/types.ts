import type {
	ButtonHTMLAttributes,
	InputHTMLAttributes,
	ReactNode,
} from 'react';

export interface DialogProps {
	open: boolean;
	onOpenChange: (open: boolean) => void;
	children: ReactNode;
}

export interface DialogContentProps {
	children: ReactNode;
	className?: string;
}

export interface DialogHeaderProps {
	children: ReactNode;
}

export interface DialogTitleProps {
	title: string;
}

export interface DialogDescriptionProps {
	description: string;
}

export interface DialogActionProps
	extends ButtonHTMLAttributes<HTMLButtonElement> {
	label: string;
}

export interface DialogInputProps
	extends InputHTMLAttributes<HTMLInputElement> {
	placeholder: string;
}
