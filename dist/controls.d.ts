import * as React from 'react';
import { Marker } from './marker';
interface Props {
    progressEl: React.MutableRefObject<HTMLProgressElement>;
    volumeEl: React.MutableRefObject<HTMLProgressElement>;
    controls: string[];
    isPlaying: boolean;
    volume: number;
    muted: boolean;
    currentTime: number;
    duration: number;
    markers: Marker[];
    onPlayClick: () => void;
    onPauseClick: () => void;
    onProgressClick: (event: React.MouseEvent<HTMLProgressElement, MouseEvent>) => void;
    onVolumeClick: (event: React.MouseEvent<HTMLProgressElement, MouseEvent>) => void;
    onMuteClick: () => void;
    onFullScreenClick: () => void;
    onMarkerClick: (marker: Marker) => void;
    onNextFrameClick: () => void;
    onLastFrameClick: () => void;
    selectedMarker: Marker;
}
export declare class Controls extends React.Component<Props, never> {
    getTimeCode: (secs: number) => string;
    handleOnMarkerSelection: (selectedMarker: Marker) => void;
    render(): JSX.Element;
}
export {};
