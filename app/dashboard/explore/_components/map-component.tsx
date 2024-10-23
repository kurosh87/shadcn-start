'use client';

import React, { useEffect, useRef, useState } from 'react';
import Map, { MapRef, Marker, Popup } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

interface DataItem {
  id: number;
  name: string;
  description: string;
  latitude: number;
  longitude: number;
  category: string;
}

interface MapComponentProps {
  data: DataItem[];
}

const MapComponent: React.FC<MapComponentProps> = ({ data }) => {
  const mapRef = useRef<MapRef>(null);
  const [popupInfo, setPopupInfo] = useState<DataItem | null>(null);
  const [dimensions, setDimensions] = useState({
    width: '100%',
    height: '100%'
  });

  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        const { width, height } = entry.contentRect;
        setDimensions({ width: `${width}px`, height: `${height}px` });
        if (mapRef.current) {
          mapRef.current.resize();
        }
      }
    });

    const container = mapRef.current?.getContainer();
    if (container) {
      resizeObserver.observe(container);
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      Landmark: '#FF5733',
      'Historic Site': '#33FF57',
      Neighborhood: '#3357FF',
      Street: '#FF33F1',
      Architecture: '#33FFF1',
      Shopping: '#F1FF33',
      Viewpoint: '#FF3333',
      Museum: '#33FFFF'
    };
    return colors[category] || '#FFAA33'; // Default color
  };

  return (
    <Map
      ref={mapRef}
      mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
      initialViewState={{
        longitude: -122.4193,
        latitude: 37.7749,
        zoom: 12
      }}
      style={dimensions}
      mapStyle="mapbox://styles/mapbox/dark-v10"
    >
      {data.map((item) => (
        <Marker
          key={item.id}
          longitude={item.longitude}
          latitude={item.latitude}
          anchor="bottom"
          onClick={(e) => {
            e.originalEvent.stopPropagation();
            setPopupInfo(item);
          }}
        >
          <div
            className="h-6 w-6 cursor-pointer rounded-full border-2 border-white"
            style={{ backgroundColor: getCategoryColor(item.category) }}
            title={item.name}
          />
        </Marker>
      ))}

      {popupInfo && (
        <Popup
          anchor="top"
          longitude={popupInfo.longitude}
          latitude={popupInfo.latitude}
          onClose={() => setPopupInfo(null)}
        >
          <div className="max-w-xs p-2">
            <h3 className="font-bold">{popupInfo.name}</h3>
            <p className="text-sm text-gray-600">{popupInfo.category}</p>
            <p className="mt-2 text-sm">{popupInfo.description}</p>
          </div>
        </Popup>
      )}
    </Map>
  );
};

export default MapComponent;
