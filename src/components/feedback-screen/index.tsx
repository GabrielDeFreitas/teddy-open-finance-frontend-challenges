import type { FeedbackScreenProps } from './types';

export function FeedbackScreen({
	title,
	description,
	children,
}: FeedbackScreenProps) {
	return (
		<main className="container mx-auto px-4 py-6">
			{children}
			<div className="flex min-h-[400px] flex-col items-center justify-center rounded-lg border-2 border-dashed border-red-600 bg-white p-8">
				<h2 className="mb-2 text-xl font-semibold text-gray-900">{title}</h2>
				<p className="text-center text-gray-600">{description}</p>
			</div>
		</main>
	);
}
