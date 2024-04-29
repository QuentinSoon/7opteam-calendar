import { Button } from '@/components/button';
import {
	Dropdown,
	DropdownContent,
	DropdownItem,
	DropdownSeparator,
	DropdownTrigger,
} from '@/components/dropdown';
import {
	Navbar,
	NavbarCenter,
	NavbarLeft,
	NavbarRight,
} from '@/components/navbar';
import Image from 'next/image';

export const NavbarHome = () => (
	<Navbar>
		<NavbarLeft>
			<Image src="/assets/darty.png" alt="7Opteam" width={36} height={36} />
			<span>
				Darty SAV <span className="font-medium text-sm">x 7Opteam</span>
			</span>
		</NavbarLeft>
		<NavbarCenter>
			<Button rounded="full" variant="light">
				Calendrier
			</Button>
			<Button rounded="full" variant="light">
				Activités
			</Button>
			<Button rounded="full" variant="light">
				Indicateurs
			</Button>
			<Button rounded="full" variant="light">
				Cockpit
			</Button>
			<Dropdown>
				<DropdownTrigger>
					<Button rounded="full" variant="light">
						Menu
					</Button>
				</DropdownTrigger>
				<DropdownContent size="md">
					<DropdownItem className="font-medium">Activités</DropdownItem>
					<DropdownItem className="font-medium">Ressources</DropdownItem>
					<DropdownItem className="font-medium">Archives</DropdownItem>
					<DropdownSeparator />
					<DropdownItem className="font-medium">Cree une activité</DropdownItem>
				</DropdownContent>
			</Dropdown>
		</NavbarCenter>
		<NavbarRight className="space-x-2">
			<div className="font-medium text-sm">Bordeaux</div>
			<Dropdown placement="bottom-right">
				<DropdownTrigger>
					<Button iconOnly rounded="full" variant="outline">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						>
							<circle cx="12" cy="12" r="10" />
							<path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
							<path d="M2 12h20" />
						</svg>
					</Button>
				</DropdownTrigger>
				<DropdownContent size="md">
					<DropdownItem className="font-medium">Documentation</DropdownItem>
					<DropdownItem className="font-medium">Légende</DropdownItem>
					<DropdownItem className="font-medium">
						Couleur par : Statut
					</DropdownItem>
					<DropdownItem className="font-medium">Synchronisation</DropdownItem>
				</DropdownContent>
			</Dropdown>
			<Dropdown placement="bottom-right">
				<DropdownTrigger>
					<Button rounded="full" variant="outline">
						Quentin
					</Button>
				</DropdownTrigger>
				<DropdownContent size="md">
					<DropdownItem className="font-medium">Profile</DropdownItem>
					<DropdownItem className="font-medium">Compte</DropdownItem>
					<DropdownItem className="font-medium">Obtenir de l`aide</DropdownItem>
					<DropdownSeparator />
					<DropdownItem>Français (FR)</DropdownItem>
					<DropdownItem>€ EUR</DropdownItem>
					<DropdownSeparator />
					<DropdownItem>Parrainer un hôte</DropdownItem>
					<DropdownItem>Déconnexion</DropdownItem>
				</DropdownContent>
			</Dropdown>
		</NavbarRight>
	</Navbar>
);
