import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { useDispatch } from 'react-redux';
import { addDetails } from '../../redux/slice/businessModalSlice';

const containerStyle = {
  width: '100%',
  height: '300px',
};

const api =import.meta.env.VITE_GOOLE_API

const initialCenter = {
  lat: 37.7749, 
  lng: -122.4194,
};

const MapIntregation = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const dispatch = useDispatch()

  const handleMapClick = (event) => {
    const lat = event.latLng.lat();
    const lng = event.latLng.lng();
    dispatch(addDetails({latitude:lat,longitude:lng}))
    setSelectedLocation({ lat, lng });
  };

  return (
    <div className="flex flex-col items-center space-y-4 shadow-md rounded-lg">
      <LoadScript googleMapsApiKey={api}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={initialCenter}
          zoom={10}
          onClick={handleMapClick}
          className="rounded-xl shadow-lg"
        >
          {selectedLocation && (
            <Marker position={selectedLocation} />
          )}
        </GoogleMap>
      </LoadScript>
    
    </div>
  );
};

export default MapIntregation;
