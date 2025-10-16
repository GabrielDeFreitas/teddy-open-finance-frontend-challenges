import type { ButtonHTMLAttributes, ElementType, ReactNode } from 'react';

export interface CardCustomerRootProps {
	children: ReactNode;
}

export interface CardCustomerDataProps {
	children: ReactNode;
}

export interface CardCustomerNameProps {
	name: string;
}

export interface CardCustomerSalaryProps {
	salary: number;
}

export interface CardCustomerCompanyProps {
	company: number;
}

export interface CardCustomerActionProps {
	children: ReactNode;
}

export interface CardCustomerButtonProps
	extends ButtonHTMLAttributes<HTMLButtonElement> {
	icon: ElementType;
}
