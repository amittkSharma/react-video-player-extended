import * as React from 'react';
import './styles.css';
interface Props {
    url: string;
    fps: number;
    loop: boolean;
    timeStart: number;
    volume: number;
    markersCount: number;
    viewSettings?: string[];
}
export declare const SettingsViewer: React.SFC<Props>;
export {};
