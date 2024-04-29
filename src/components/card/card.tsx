'use client';

import { cn } from '@/utils/cn';
import { HTMLAttributes, PropsWithChildren, forwardRef } from 'react';
import './card.scss';

type CardProps = PropsWithChildren<{}>;

type UseCardProps = Omit<HTMLAttributes<HTMLDivElement>, keyof CardProps> &
	CardProps;

const Card = forwardRef<HTMLDivElement, UseCardProps>(({ children }, ref) => {
	return (
		<div ref={ref} className={cn('card')}>
			{children}
		</div>
	);
});
Card.displayName = 'Card';

export { Card };

export type { CardProps, UseCardProps };
