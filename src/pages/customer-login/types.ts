export interface CustomerLoginViewProps {
	name: string;
	onNameChange: (value: string) => void;
	onSubmit: (e: React.FormEvent) => void;
}
