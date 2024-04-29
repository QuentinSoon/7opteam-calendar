'use client';
import mapboxgl from '!mapbox-gl';
import { Card } from '@/components/card';
import { NavbarHome } from '@/library/navbar/navbar';

import { useEffect, useRef, useState } from 'react';

export default function Page() {
	mapboxgl.accessToken =
		'pk.eyJ1IjoicXVlbnRpbnQiLCJhIjoiY2w4dGM5a3UwMDYwbTNvcXRsbWQyZXRtMSJ9.2IieorABrDO3bK9baO6vvg';

	const mapContainer = useRef(null);
	const map = useRef(null);
	const [lng, setLng] = useState(-70.9);
	const [lat, setLat] = useState(42.35);
	const [zoom, setZoom] = useState(9);

	useEffect(() => {
		function initMap() {
			if (map.current) return; // initialize map only once
			map.current = new mapboxgl.Map({
				container: mapContainer.current,
				style: 'mapbox://styles/quentint/cl8tcc2h2007o14qgzjwt7f1q',
				center: [lng, lat],
				zoom: zoom,
			});
		}
		initMap();
	}, []);

	return (
		<div className="h-screen w-screen flex flex-col">
			<NavbarHome />
			<div className="grid grid-cols-2 grid-rows-2 gap-6 p-6 grow">
				<Card title="Ressources">Card 1</Card>
				<Card title="Activités">Card 2</Card>
				<Card>Card 3</Card>
				<Card>
					<div ref={mapContainer} className="w-full h-full rounded-lg" />
				</Card>
			</div>
		</div>
	);
}
