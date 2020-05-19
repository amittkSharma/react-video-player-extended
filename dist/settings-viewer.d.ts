import * as React from 'react';
import { SettingsSelection } from './enums';
import './styles.css';
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
