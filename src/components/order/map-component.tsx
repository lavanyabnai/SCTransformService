"use client"

import { useEffect, useRef, useState } from "react"
import "leaflet/dist/leaflet.css"

interface MapComponentProps {
  selectedTool: string
}

interface Location {
  id: number
  lat: number
  lng: number
  name: string
  status: "ok" | "warning" | "critical"
}

export default function MapComponent({ selectedTool }: MapComponentProps) {
  const mapContainerRef = useRef<HTMLDivElement>(null)
  const mapRef = useRef<any>(null)
  const [locations] = useState<Location[]>(() => {
    // Generate restaurant locations across the US
    const locs: Location[] = []

    // Major cities including Canadian cities
    const majorCities = [
      { lat: 40.7128, lng: -74.006, name: "New York" },
      { lat: 34.0522, lng: -118.2437, name: "Los Angeles" },
      { lat: 41.8781, lng: -87.6298, name: "Chicago" },
      { lat: 29.7604, lng: -95.3698, name: "Houston" },
      { lat: 33.4484, lng: -112.074, name: "Phoenix" },
      { lat: 39.9526, lng: -75.1652, name: "Philadelphia" },
      { lat: 29.4241, lng: -98.4936, name: "San Antonio" },
      { lat: 32.7767, lng: -96.797, name: "Dallas" },
      { lat: 37.7749, lng: -122.4194, name: "San Francisco" },
      { lat: 30.2672, lng: -97.7431, name: "Austin" },
      { lat: 47.6062, lng: -122.3321, name: "Seattle" },
      { lat: 25.7617, lng: -80.1918, name: "Miami" },
      { lat: 42.3601, lng: -71.0589, name: "Boston" },
      { lat: 39.7392, lng: -104.9903, name: "Denver" },
      { lat: 33.749, lng: -84.388, name: "Atlanta" },
      { lat: 43.6532, lng: -79.3832, name: "Toronto" },
      { lat: 45.4215, lng: -75.6972, name: "Ottawa" },
      { lat: 49.2827, lng: -123.1207, name: "Vancouver" },
      { lat: 51.0447, lng: -114.0719, name: "Calgary" },
      { lat: 53.5461, lng: -113.4938, name: "Edmonton" },
    ]

    majorCities.forEach((city, index) => {
      locs.push({
        id: index,
        lat: city.lat,
        lng: city.lng,
        name: city.name,
        status: Math.random() < 0.7 ? "ok" : Math.random() < 0.9 ? "warning" : "critical",
      })
    })

    // Add random locations across North America
    for (let i = majorCities.length; i < 400; i++) {
      locs.push({
        id: i,
        lat: 25 + Math.random() * 35, // Extended range to include more of Canada
        lng: -140 + Math.random() * 80, // Extended range to include more of the continent
        name: `Location ${i}`,
        status: Math.random() < 0.7 ? "ok" : Math.random() < 0.9 ? "warning" : "critical",
      })
    }

    return locs
  })

  useEffect(() => {
    let cancelled = false

    if (typeof window !== "undefined" && mapContainerRef.current) {
      // Dynamically import Leaflet to avoid SSR issues
      import("leaflet").then((L) => {
        if (cancelled || !mapContainerRef.current) return

        // Clean up any existing map on this container
        if (mapRef.current) {
          mapRef.current.remove()
          mapRef.current = null
        }

        // If Leaflet already tagged this DOM node, clear it
        const container = mapContainerRef.current!
        if ((container as any)._leaflet_id) {
          delete (container as any)._leaflet_id
        }

        // Fix for default Leaflet icon path issues
        delete (L.Icon.Default.prototype as any)._getIconUrl
        L.Icon.Default.mergeOptions({
          iconRetinaUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
          iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
          shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
        })

        // Initialize map
        mapRef.current = L.map(mapContainerRef.current!, {
          center: [45.0, -100.0],
          zoom: 3,
          minZoom: 3,
          maxZoom: 3,
          zoomControl: true,
          scrollWheelZoom: false,
          doubleClickZoom: false,
          boxZoom: false,
          keyboard: false,
          dragging: false,
        }).setView([45.0, -100.0], 3)

        // Add tile layer
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution: "© OpenStreetMap contributors",
        }).addTo(mapRef.current)

        // Add markers for locations
        locations.forEach((location) => {
          const color =
            location.status === "critical" ? "#ef4444" : location.status === "warning" ? "#facc15" : "#22c55e"

          // Create custom house icon HTML
          const houseIconHtml = `
    <div style="
      width: 16px;
      height: 16px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-end;
    ">
      <div style="
        width: 0;
        height: 0;
        border-left: 6px solid transparent;
        border-right: 6px solid transparent;
        border-bottom: 6px solid ${color};
        margin-bottom: 1px;
      "></div>
      <div style="
        width: 12px;
        height: 10px;
        background-color: ${color};
        position: relative;
        border: 1px solid rgba(0,0,0,0.2);
      ">
        <div style="
          position: absolute;
          top: 2px;
          left: 2px;
          width: 2px;
          height: 2px;
          background-color: rgba(255,255,255,0.8);
        "></div>
        <div style="
          position: absolute;
          top: 2px;
          right: 2px;
          width: 2px;
          height: 2px;
          background-color: rgba(255,255,255,0.8);
        "></div>
        <div style="
          position: absolute;
          bottom: 2px;
          left: 4px;
          width: 4px;
          height: 4px;
          background-color: rgba(0,0,0,0.3);
        "></div>
      </div>
    </div>
  `

          const customIcon = L.divIcon({
            html: houseIconHtml,
            className: "custom-house-icon",
            iconSize: [16, 16],
            iconAnchor: [8, 16],
          })

          const marker = L.marker([location.lat, location.lng], { icon: customIcon }).addTo(mapRef.current!)
          marker.bindPopup(`<b>${location.name}</b><br/>Status: ${location.status}`)
        })
      })
    }

    return () => {
      cancelled = true
      if (mapRef.current) {
        mapRef.current.remove()
        mapRef.current = null
      }
    }
  }, [locations])

  useEffect(() => {
    if (typeof window !== "undefined") {
      const link = document.createElement("link")
      link.rel = "stylesheet"
      link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
      document.head.appendChild(link)

      return () => {
        document.head.removeChild(link)
      }
    }
  }, [])

  return (
    <div className="relative w-full h-full" style={{ zIndex: 0 }}>
      <style jsx>{`
        .custom-house-icon {
          background: none !important;
          border: none !important;
        }
      `}</style>
      <div ref={mapContainerRef} className="w-full h-full" id="map-container" />
      <div className="absolute bottom-2 right-2 text-xs text-gray-500 bg-white/70 px-2 py-1 rounded">
        © Custom Canvas Map Render
      </div>
      {selectedTool && (
        <div className="absolute top-2 right-2 bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
          Active Tool: {selectedTool}
        </div>
      )}
    </div>
  )
}
