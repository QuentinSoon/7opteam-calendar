'use client';

import { cn } from '@/utils/cn';
import { HTMLAttributes, PropsWithChildren, forwardRef } from 'react';
import './card.scss';

type CardProps = PropsWithChildren<{
	title?: string;
}>;

type UseCardProps = Omit<HTMLAttributes<HTMLDivElement>, keyof CardProps> &
	CardProps;

const Card = forwardRef<HTMLDivElement, UseCardProps>(
	({ title, children }, ref) => {
		return (
			<div ref={ref} className={cn('card')}>
				{title && <div className="card-title">{title}</div>}
				{children}
			</div>
		);
	}
);
Card.displayName = 'Card';

export { Card };

export type { CardProps, UseCardProps };
