import * as React from 'react';
import './styles.css';
export declare enum SettingsSelection {
    Title = "title",
    FPS = "fps",
    Repeat = "loop",
    StartTime = "timeStart",
    Volume = "vol"
}
interface Props {
    url: string;
    fps: number;
    loop: boolean;
    timeStart: number;
    volume: number;
    viewSettings?: SettingsSelection[];
}
export declare const SettingsViewer: React.SFC<Props>;
export {};
