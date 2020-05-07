import * as React from 'react';
export interface Marker {
    id: number;
    time: number;
    color: string;
    title: string;
}
interface Props {
    marker: Marker;
    duration: number;
    onMarkerClick: (marker: Marker) => void;
    selectedMarker?: Marker;
}
export declare class MarkerView extends React.Component<Props, never> {
    getPosition: () => string;
    render(): JSX.Element;
}
export {};
