import type { ButtonHTMLAttributes } from 'react';

export interface ButtonCreateCustomerProps
	extends ButtonHTMLAttributes<HTMLButtonElement> {
	label: string;
}
