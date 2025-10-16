import type { ButtonHTMLAttributes, ElementType, ReactNode } from 'react';

export interface CardCustomerRootProps {
	children: ReactNode;
	isSelected?: boolean;
}

export interface CardCustomerDataProps {
	children: ReactNode;
}

export interface CardCustomerNameProps {
	name: string;
}

export interface CardCustomerSalaryProps {
	salary: string;
}

export interface CardCustomerCompanyProps {
	company: string;
}

export interface CardCustomerActionProps {
	children: ReactNode;
}

export interface CardCustomerButtonProps
	extends ButtonHTMLAttributes<HTMLButtonElement> {
	icon: ElementType;
}
