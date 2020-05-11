import * as React from 'react'
import './styles.css'

export enum SettingsSelection {
  Title = 'title',
  FPS = 'fps',
  Repeat = 'loop',
  StartTime = 'timeStart',
  Volume = 'vol',
}

interface Props {
  url: string
  fps: number
  loop: boolean
  timeStart: number
  volume: number
  viewSettings?: SettingsSelection[]
}

export const SettingsViewer: React.SFC<Props> = ({
  url,
  fps,
  loop,
  timeStart,
  volume,
  viewSettings,
}: Props) => {
  return (
    <div className="overlay-desc">
      {viewSettings.indexOf(SettingsSelection.Title) !== -1 && (
        <p className="text-col">{`Title: ${url.substring(url.lastIndexOf('/') + 1)}`}</p>
      )}
      {viewSettings.indexOf(SettingsSelection.FPS) !== -1 && (
        <p className="text-col">{`FPS: ${fps}`}</p>
      )}
      {viewSettings.indexOf(SettingsSelection.Repeat) !== -1 && (
        <p className="text-col">{`Repeat: ${loop}`}</p>
      )}
      {viewSettings.indexOf(SettingsSelection.StartTime) !== -1 && (
        <p className="text-col">{`Start Time: ${timeStart}`}</p>
      )}
      {viewSettings.indexOf(SettingsSelection.Volume) !== -1 && (
        <p className="text-col">{`Volume: ${volume}`}</p>
      )}
    </div>
  )
}
