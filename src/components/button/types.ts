type ButtonVariantProps =
	| 'solid'
	| 'outline'
	| 'ghost'
	| 'light'
	| 'flat'
	| 'faded';
type ButtonSizeProps = 'sm' | 'md' | 'lg';
type ButtonRoundedProps = 'sm' | 'md' | 'lg' | 'full' | 'none';
type ButtonColorProps = 'primary';

export type {
	ButtonColorProps,
	ButtonRoundedProps,
	ButtonSizeProps,
	ButtonVariantProps,
};
