/// <reference types="react" />
import { Marker } from './marker';
import './styles.css';
export declare type ControlSelection = 'FullScreen' | 'Play' | 'Progress' | 'Time' | 'Volume' | 'LastFrame' | 'NextFrame';
export declare type SettingsSelection = 'Title' | 'FPS' | 'Repeat' | 'StartTime' | 'Volume';
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
    onProgress?: (event: Event) => void;
    onDuration?: (duration: number) => void;
    onMarkerClick?: (marker: Marker) => void;
    selectedMarker?: Marker;
    viewSettings?: SettingsSelection[];
}
declare function VideoPlayer(props: Props): JSX.Element;
export default VideoPlayer;
