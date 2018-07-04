import React from 'react';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from 'react-google-maps';
import {
  GOOGLE_MAPS_CENTER,
  GOOGLE_MAPS_MARKER,
  GOOGLE_MAPS_ZOOM,
  GOOGLE_MAPS_REDIRECT_URL,
} from '../../../constants/googleMaps';

const GoogleMapEmbed = withScriptjs(
  withGoogleMap(() => (
    <GoogleMap
      defaultZoom={GOOGLE_MAPS_ZOOM}
      defaultCenter={GOOGLE_MAPS_CENTER}
      defaultOptions={{
        styles: [
          {
            featureType: 'road',
            elementType: 'geometry.fill',
            stylers: [{ color: '#AFBEBB' }],
          },
          {
            featureType: 'water',
            stylers: [{ color: '#acd0bf' }],
          },
          {
            featureType: 'road',
            elementType: 'labels.text.stroke',
            stylers: [
              { visibility: 'on' },
              { color: '#AFBEBB' },
              { weight: 3 },
            ],
          },
          {
            featureType: 'road',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#ffffff' }],
          },
          {
            featureType: 'administrative',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#830052' }],
          },
          {
            featureType: 'poi',
            stylers: [{ visibility: 'off' }],
          },
          {
            featureType: 'road',
            elementType: 'geometry.stroke',
            stylers: [{ weight: 0.1 }],
          },
          {
            featureType: 'landscape.natural',
            stylers: [{ visibility: 'on' }, { color: '#F9F9F9' }],
          },
          {},
        ],
        panControl: false,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        overviewMapControl: false,
      }}
    >
      <Marker
        position={GOOGLE_MAPS_MARKER}
        icon={{
          path:
            'M8.5 2.2C7.5.3 5.2-.5 3.3.5S.6 3.8 1.5 5.7c.5.8 2.3 3.1 3.1 4.1.2.3.6.3.8 0 .8-1 2.6-3.3 3.1-4.1.6-1.1.6-2.4 0-3.5zM5 5.6c-.9 0-1.7-.8-1.7-1.7 0-.9.8-1.7 1.7-1.7s1.7.8 1.7 1.7c0 1-.7 1.7-1.7 1.7z',
          fillColor: '#830052',
          fillOpacity: 1,
          strokeWeight: 0,
          scale: 4,
          anchor: new window.google.maps.Point(5, 10),
        }}
        onClick={() => {
          window.open(GOOGLE_MAPS_REDIRECT_URL);
        }}
      />
    </GoogleMap>
  ))
);

export default GoogleMapEmbed;
