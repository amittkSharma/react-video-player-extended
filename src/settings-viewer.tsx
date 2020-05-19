import * as React from 'react'
import './styles.css'

enum SettingsSelection {
  Title = 'Title',
  FPS = 'FPS',
  Repeat = 'Repeat',
  StartTime = 'StartTime',
  Volume = 'Volume',
}

interface Props {
  url: string
  fps: number
  loop: boolean
  timeStart: number
  volume: number
  viewSettings?: string[]
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
      {viewSettings.indexOf(SettingsSelection.Title.toString()) !== -1 && (
        <p className="text-col">{`Title: ${url.substring(url.lastIndexOf('/') + 1)}`}</p>
      )}
      {viewSettings.indexOf(SettingsSelection.FPS.toString()) !== -1 && (
        <p className="text-col">{`FPS: ${fps}`}</p>
      )}
      {viewSettings.indexOf(SettingsSelection.Repeat.toString()) !== -1 && (
        <p className="text-col">{`Repeat: ${loop}`}</p>
      )}
      {viewSettings.indexOf(SettingsSelection.StartTime.toString()) !== -1 && (
        <p className="text-col">{`Start Time: ${timeStart}`}</p>
      )}
      {viewSettings.indexOf(SettingsSelection.Volume.toString()) !== -1 && (
        <p className="text-col">{`Volume: ${volume}`}</p>
      )}
    </div>
  )
}
