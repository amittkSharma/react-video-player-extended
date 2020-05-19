import * as React from 'react';
export interface Marker {
    id: number;
    time: number;
    title: string;
}
export interface MarkerConfiguration {
    color: string;
    selectionColor: string;
}
interface Props {
    marker: Marker;
    duration: number;
    onMarkerClick: (marker: Marker) => void;
    selectedMarker?: Marker;
    configuration?: MarkerConfiguration;
}
export declare class MarkerView extends React.Component<Props, never> {
    getPosition: () => string;
    render(): JSX.Element;
}
export {};
