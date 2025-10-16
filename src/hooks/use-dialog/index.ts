import { useEffect } from 'react';
import { BodyOverflow, BodyPadding } from '../../utils/enum/dialog';

export function useDialog(open: boolean): void {
	useEffect(() => {
		if (open) {
			const scrollbarWidth =
				window.innerWidth - document.documentElement.clientWidth;

			document.body.style.overflow = BodyOverflow.HIDDEN;
			document.body.style.paddingRight = `${scrollbarWidth}px`;
		} else {
			document.body.style.overflow = BodyOverflow.UNSET;
			document.body.style.paddingRight = BodyPadding.NONE;
		}

		return () => {
			document.body.style.overflow = BodyOverflow.UNSET;
			document.body.style.paddingRight = BodyPadding.NONE;
		};
	}, [open]);
}
