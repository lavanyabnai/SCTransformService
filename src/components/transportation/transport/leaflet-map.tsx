"use client"

import { useEffect, useRef } from "react"

// Define types for the component
interface MapMarker {
  id: number
  lat: number
  lng: number
  type: string
  city: string
}

interface LeafletMapProps {
  markers: MapMarker[]
}

export default function LeafletMap({ markers }: LeafletMapProps) {
  const mapRef = useRef<HTMLDivElement>(null)
  const mapInstanceRef = useRef<any>(null)

  useEffect(() => {
    if (typeof window !== "undefined" && mapRef.current && !mapInstanceRef.current) {
      // Dynamically import Leaflet to avoid SSR issues
      import("leaflet").then((L: any) => {
        // Fix for default markers in Leaflet with Next.js
        delete (L.Icon.Default.prototype as any)._getIconUrl
        L.Icon.Default.mergeOptions({
          iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
          iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
          shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
        })

        // Initialize the map
        const map = L.map(mapRef.current!).setView([39.8283, -98.5795], 4) // Center of USA

        // Add tile layer
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution: "© OpenStreetMap contributors",
        }).addTo(map)

        // Function to get marker color based on type
        const getMarkerColor = (type: string) => {
          switch (type) {
            case "emergency":
              return "#ef4444" // red
            case "alert":
              return "#f97316" // orange
            case "deviation":
              return "#eab308" // yellow
            case "normal":
              return "#22c55e" // green
            default:
              return "#6b7280" // gray
          }
        }

        // Add markers to the map
        markers.forEach((marker) => {
          const color = getMarkerColor(marker.type)

          // Create custom icon
          const customIcon = L.divIcon({
            className: "custom-marker",
            html: `
              <div style="
                width: 24px;
                height: 24px;
                background-color: ${color};
                border: 3px solid white;
                border-radius: 50%;
                box-shadow: 0 2px 4px rgba(0,0,0,0.3);
                display: flex;
                align-items: center;
                justify-content: center;
              ">
                <div style="
                  width: 8px;
                  height: 8px;
                  background-color: white;
                  border-radius: 50%;
                "></div>
              </div>
            `,
            iconSize: [24, 24],
            iconAnchor: [12, 12],
          })

          // Add marker to map
          const mapMarker = L.marker([marker.lat, marker.lng], { icon: customIcon }).addTo(map)

          // Add popup with city information
          mapMarker.bindPopup(`
            <div style="text-align: center; font-family: system-ui;">
              <strong>${marker.city}</strong><br>
              <span style="color: ${color}; text-transform: capitalize;">${marker.type}</span>
            </div>
          `)
        })

        mapInstanceRef.current = map
      })
    }

    // Cleanup function
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove()
        mapInstanceRef.current = null
      }
    }
  }, [markers])

  return (
    <>
      {/* Leaflet CSS */}
      <link
        rel="stylesheet"
        href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
        integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
        crossOrigin=""
      />

      {/* Map container */}
      <div ref={mapRef} className="w-full h-full rounded-lg" />

      {/* Legend */}
      <div className="absolute bottom-4 left-4 bg-white p-3 rounded-lg shadow-lg z-[1000]">
        <div className="text-xs font-medium mb-2">Legend</div>
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <span className="text-xs">Emergency</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
            <span className="text-xs">Alert</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <span className="text-xs">Deviation</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="text-xs">Normal</span>
          </div>
        </div>
      </div>
    </>
  )
}
