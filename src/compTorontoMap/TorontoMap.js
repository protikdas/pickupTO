import React from 'react';
import { compose, withProps } from 'recompose';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
const MapStyles = require("./customMapStyles.json");

const MyMapComponent = compose(
    withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `100%` }} />,
        mapElement: <div style={{ height: `100%`, width: '100%', border:'10px solid cyan', boxSizing:'border-box' }} />
    }),
    withScriptjs,
    withGoogleMap
)((props)=>
    <GoogleMap defaultZoom={13} defaultCenter={{ lat: 43.6532, lng: -79.3832 }} defaultOptions={{ styles: MapStyles }}>

    {props.activeMarkers.map(marker => (
            <Marker
              icon={{url: props.icon}}
              position={{ lat: marker.lat, lng: marker.lng }}
              key={marker.id}
            />
        ))}
    </GoogleMap>
);


class TorontoMap extends React.Component {
    render() {
        return (
                <MyMapComponent
                    icon = {this.props.icon}
                    activeMarkers = {this.props.activeMarkers} 
                />
        )
    }
}

export default TorontoMap;