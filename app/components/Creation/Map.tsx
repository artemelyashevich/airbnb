"use client"

import { MapContainer, Marker, TileLayer } from 'react-leaflet'
import "leaflet/dist/leaflet.css"
import { useCountries } from '../../lib/hooks'
import { icon } from 'leaflet'

const ICON = icon({
    iconUrl: "https://cdn-icons-png.freepik.com/256/399/399396.png?semt=ais_hybrid",
    iconSize: [20, 20] 
})

export default function Map({ locationValue }: { locationValue: string }) {
    const { getCountryByValue } = useCountries()
    const position = getCountryByValue(locationValue)?.latLang ?? [52.505, -0.09]
    return (
        <MapContainer
            scrollWheelZoom={false}
            className='h-[50vh] rounded-lg relative z-0 mb-10'
            center={position}
            zoom={6}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position} icon={ICON}/>
        </MapContainer>
    )
}