import React, { Component } from 'react';
//import { Map } from 'react-leaflet';
import { MapContainer,GeoJSON } from 'react-leaflet';
import mapData from './../data/countries.json';
import 'leaflet/dist/leaflet.css';
import './MyMap.css';

<MapContainer className='markercluster-map'
center={[51.0,19.0]}
zoom={4}
maxZoom={18}
>
    
    
</MapContainer>

class MyMap extends Component {
    state = { };

    componentDidMount() {
        console.log(mapData);
    }

    countryStyle = {
        fillColor: 'white',
        fillOpacity: 0.5,
        color: 'black',
        weight: 2,
    };

    onCountryClick = (event) => {
        console.log('clicked');
    };

    onCountryMouseover = (event) => {
        event.target.setStyle({
            color:'blue',
            fillColor:'pink',
        });
    };

    onEachCountry = (country,layer) => {
        const countryName = country.properties.ADMIN;
        console.log(countryName);
        layer.bindPopup(countryName);
        layer.on({
            click: this.onCountryClick,
            mouseover: this.onCountryMouseover,
        });
    };

    render() {
        return (<div>
            
            <MapContainer style={{height:'80vh'}} zoom={2} center={[20,100]}>
                <GeoJSON style={this.countryStyle} data={mapData.features} onEachFeature={this.onEachCountry} />
            </MapContainer>
        </div>);
    }
}

export default MyMap;