import { createRoot } from 'react-dom/client';
import type { ToastType } from '../../components/toast/type';
import { Toast } from '../../components/toast';

export function showToast(
	message: string,
	type: ToastType = 'error',
	duration = 3000,
) {
	const container = document.createElement('div');
	document.body.appendChild(container);

	const root = createRoot(container);

	const handleClose = () => {
		root.unmount();
		container.remove();
	};

	root.render(
		<Toast
			message={message}
			type={type}
			duration={duration}
			onClose={handleClose}
		/>,
	);
}
