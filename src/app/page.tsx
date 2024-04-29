import { Card } from '@/components/card';
import { NavbarHome } from '@/library/navbar/navbar';

export default async function Page() {
	return (
		<div className="h-screen w-screen flex flex-col">
			<NavbarHome />
			<div className="grid grid-cols-2 grid-rows-2 gap-6 p-6 grow">
				<Card>Card 1</Card>
				<Card>Card 2</Card>
				<Card>Card 3</Card>
				<Card>Card 4</Card>
			</div>
		</div>
	);
}
