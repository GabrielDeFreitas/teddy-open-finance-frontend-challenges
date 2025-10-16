export const PerPageOptions = {
	EIGHT: 8,
	SIXTEEN: 16,
	TWENTY_FOUR: 24,
} as const;

export const BodyOverflow = {
	HIDDEN: 'hidden',
	UNSET: 'unset',
} as const;

export const BodyPadding = {
	NONE: '0px',
} as const;

export type PerPageOption =
	(typeof PerPageOptions)[keyof typeof PerPageOptions];
export type BodyOverflowType = (typeof BodyOverflow)[keyof typeof BodyOverflow];
