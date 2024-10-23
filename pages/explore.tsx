import React from 'react';
import Map from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const ExplorePage: React.FC = () => {
  return (
    <div className="flex h-[calc(100vh-4rem)]">
      {/* Left side: Content */}
      <div className="w-1/2 overflow-y-auto p-4">
        <h1 className="mb-4 text-2xl font-bold">Explore</h1>
        <p>
          This is the content area. You can add more components or information
          here.
        </p>
      </div>

      {/* Right side: Map */}
      <div className="w-1/2">
        <Map
          mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
          initialViewState={{
            longitude: -122.4,
            latitude: 37.8,
            zoom: 14
          }}
          style={{ width: '100%', height: '100%' }}
          mapStyle="mapbox://styles/mapbox/streets-v11"
        />
      </div>
    </div>
  );
};

export default ExplorePage;
