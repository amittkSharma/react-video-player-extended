import * as React from 'react'
import { Marker, MarkerConfiguration, MarkerView } from './marker'

enum ControlsSelection {
  FullScreen = 'FullScreen',
  Play = 'Play',
  Progress = 'Progress',
  Time = 'Time',
  Volume = 'Volume',
  LastFrame = 'LastFrame',
  NextFrame = 'NextFrame',
  AddMarker = 'AddMarker',
}

interface Props {
  progressEl: React.MutableRefObject<HTMLProgressElement>
  volumeEl: React.MutableRefObject<HTMLProgressElement>
  controls: string[]
  isPlaying: boolean
  volume: number
  muted: boolean
  currentTime: number
  duration: number
  markers: Marker[]
  onPlayClick: () => void
  onPauseClick: () => void
  onProgressClick: (event: React.MouseEvent<HTMLProgressElement, MouseEvent>) => void
  onVolumeClick: (event: React.MouseEvent<HTMLProgressElement, MouseEvent>) => void
  onMuteClick: () => void
  onFullScreenClick: () => void
  onMarkerClick: (marker: Marker) => void
  onNextFrameClick: () => void
  onLastFrameClick: () => void
  onAddMarkerClick: () => void
  selectedMarker?: Marker
  markerConfiguration?: MarkerConfiguration
}

export class Controls extends React.Component<Props, never> {
  getTimeCode = (secs: number): string => {
    let secondsNumber = secs ? parseInt(String(secs), 10) : 0
    let hours = Math.floor(secondsNumber / 3600)
    let minutes = Math.floor((secondsNumber - hours * 3600) / 60)
    let seconds = secondsNumber - hours * 3600 - minutes * 60
    let hoursStr: string = String(hours)
    let minutesStr: string = String(minutes)
    let secondsStr: string = String(seconds)

    if (hours < 10) {
      hoursStr = '0' + hours
    }
    if (minutes < 10) {
      minutesStr = '0' + minutes
    }
    if (seconds < 10) {
      secondsStr = '0' + seconds
    }

    return `${hoursStr !== '00' ? hoursStr + ':' : ''}${minutesStr}:${secondsStr}`
  }

  handleOnMarkerSelection = (selectedMarker: Marker): void => {
    this.props.onMarkerClick(selectedMarker)
  }

  render() {
    const {
      progressEl,
      volumeEl,
      controls,
      isPlaying,
      volume,
      muted,
      currentTime,
      duration,
      markers,
      onPlayClick,
      onPauseClick,
      onProgressClick,
      onVolumeClick,
      onMuteClick,
      onFullScreenClick,
      onNextFrameClick,
      onLastFrameClick,
      onAddMarkerClick,
      selectedMarker,
      markerConfiguration,
    } = this.props

    const durationTimeCode = this.getTimeCode(Math.ceil(duration))
    const currentTimeCode =
      currentTime !== duration ? this.getTimeCode(currentTime) : durationTimeCode

    return (
      <div className="react-video-controls">
        {controls.indexOf(ControlsSelection.LastFrame.toString()) !== -1 && (
          <button className="last-frame" onClick={onLastFrameClick}>
            Last Frame
          </button>
        )}
        {controls.indexOf(ControlsSelection.Play.toString()) !== -1 && (
          <button
            className={isPlaying ? 'pause' : 'play'}
            onClick={isPlaying ? onPauseClick : onPlayClick}
          >
            {isPlaying ? 'Pause' : 'Play'}
          </button>
        )}
        {controls.indexOf(ControlsSelection.NextFrame.toString()) !== -1 && (
          <button className="next-frame" onClick={onNextFrameClick}>
            Next Frame
          </button>
        )}
        {controls.indexOf(ControlsSelection.AddMarker.toString()) !== -1 && (
          <button className="add-marker" onClick={onAddMarkerClick}>
            Add Marker
          </button>
        )}
        {controls.indexOf(ControlsSelection.Time.toString()) !== -1 && (
          <div className="time">
            {currentTimeCode}/{durationTimeCode}
          </div>
        )}
        {controls.indexOf(ControlsSelection.Progress.toString()) !== -1 && (
          <div className="progress-wrap">
            <progress ref={progressEl} max="100" onClick={onProgressClick}>
              0% played
            </progress>
            {markers &&
              markers.map((marker, index) => {
                return (
                  <MarkerView
                    key={index}
                    marker={marker}
                    duration={duration}
                    onMarkerClick={this.handleOnMarkerSelection}
                    selectedMarker={selectedMarker}
                    configuration={markerConfiguration}
                  />
                )
              })}
          </div>
        )}
        {controls.indexOf(ControlsSelection.Volume.toString()) !== -1 && (
          <div className="volume-wrap">
            <progress ref={volumeEl} max="100" value={volume * 100} onClick={onVolumeClick}>
              {volume * 100}% volume
            </progress>
            <button className={muted ? 'no-volume' : 'volume'} onClick={onMuteClick}>
              Volume
            </button>
          </div>
        )}
        {controls.indexOf(ControlsSelection.FullScreen.toString()) !== -1 && (
          <button className="full-screen" onClick={onFullScreenClick}>
            FullScreen
          </button>
        )}
      </div>
    )
  }
}
