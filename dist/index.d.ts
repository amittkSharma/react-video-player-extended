/// <reference types="react" />
import { Marker } from './marker';
import './styles.css';
interface Props {
    url: string;
    controls?: string[];
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
    selectedMarker: Marker;
}
declare function VideoPlayer(props: Props): JSX.Element;
export default VideoPlayer;
