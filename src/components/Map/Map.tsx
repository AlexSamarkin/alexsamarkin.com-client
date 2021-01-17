import React from 'react';

export interface MapProps {
    lat: number;
    lon: number;
}

export const Map: React.FC<MapProps> = (props) => {
    const { lat, lon } = props;
    return (
        <div className={'map'} id={'map'}>
            <iframe
                src={`https://maps.google.com/maps?q=${lat},${lon}&hl=en&z=10&output=embed`}
                title={'Contact Map'}
                style={{ width: '100%', height: '100%', border: 0 }}
            />
        </div>
    );
};

export default Map;
