'use client';

import { cn } from '@/utils/cn';
import { ButtonHTMLAttributes, PropsWithChildren, forwardRef } from 'react';
import './button.scss';
import {
	ButtonColorProps,
	ButtonRoundedProps,
	ButtonSizeProps,
	ButtonVariantProps,
} from './types';

type ButtonProps = PropsWithChildren<{
	/**
	 * The variant of the button.
	 * @default 'solid'
	 */
	variant?: ButtonVariantProps;
	/**
	 * The size of the button.
	 * @default 'md'
	 */
	size?: ButtonSizeProps;
	/**
	 * The rounded of the button.
	 */
	rounded?: ButtonRoundedProps;
	/**
	 * The color of the button.
	 * @default 'primary'
	 */
	color?: ButtonColorProps;
	/**
	 * If `true`, the button will be icon only.
	 * @default false
	 */
	iconOnly?: boolean;
}>;

type UseButtonProps = Omit<
	ButtonHTMLAttributes<HTMLButtonElement>,
	keyof ButtonProps
> &
	ButtonProps;

const Button = forwardRef<HTMLButtonElement, UseButtonProps>(
	(
		{
			variant = 'solid',
			size = 'md',
			rounded,
			color = 'primary',
			iconOnly = false,
			children,
		},
		ref
	) => {
		return (
			<button
				className={cn(
					'button',
					`button-variant-${variant}`,
					`button-size-${size}`,
					rounded && `button-rounded-${rounded}`,
					`button-color-${color}`,
					iconOnly && 'button-icon-only'
				)}
			>
				{children}
			</button>
		);
	}
);
Button.displayName = 'Button';

export { Button };

export type { ButtonProps, UseButtonProps };
