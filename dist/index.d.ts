import React from 'react';
import { Marker, MarkerConfiguration } from './marker';
import './styles.css';
export declare type ControlSelection = 'FullScreen' | 'Play' | 'Progress' | 'Time' | 'Volume' | 'LastFrame' | 'NextFrame';
export declare type SettingsSelection = 'Title' | 'FPS' | 'Repeat' | 'StartTime' | 'Volume';
export interface ProgressProps {
    currentTime: number;
    duration: number;
    percentage: number;
}
interface Props {
    url: string;
    controls?: ControlSelection[];
    height?: string;
    width?: string;
    isPlaying: boolean;
    volume: number;
    loop?: boolean;
    markers?: Marker[];
    timeStart?: number;
    fps?: number;
    onPlay?: () => void;
    onPause?: () => void;
    onVolume?: (volume: number) => void;
    onProgress?: (event: Event, props: ProgressProps) => void;
    onDuration?: (duration: number) => void;
    onMarkerClick?: (marker: Marker) => void;
    onLoadedMetadata?: (event: React.SyntheticEvent<HTMLVideoElement, Event>) => void;
    selectedMarker?: Marker;
    viewSettings?: SettingsSelection[];
    markerConfiguration?: MarkerConfiguration;
}
declare function VideoPlayer(props: Props): JSX.Element;
export default VideoPlayer;
