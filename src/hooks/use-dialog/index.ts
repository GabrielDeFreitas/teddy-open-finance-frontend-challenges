import { useEffect } from 'react';

export function useDialog(open: boolean) {
	useEffect(() => {
		if (open) {
			const scrollbarWidth =
				window.innerWidth - document.documentElement.clientWidth;
			document.body.style.overflow = 'hidden';
			document.body.style.paddingRight = `${scrollbarWidth}px`;
		} else {
			document.body.style.overflow = 'unset';
			document.body.style.paddingRight = '0px';
		}

		return () => {
			document.body.style.overflow = 'unset';
			document.body.style.paddingRight = '0px';
		};
	}, [open]);
}
