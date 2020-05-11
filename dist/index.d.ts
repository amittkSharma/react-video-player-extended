/// <reference types="react" />
import { ControlSelection } from './controls';
import { Marker } from './marker';
import { SettingsSelection } from './settings-viewer';
import './styles.css';
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
