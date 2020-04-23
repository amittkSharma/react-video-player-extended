import * as React from 'react'
import Marker from './marker'

interface IProps {
  progressEl: HTMLProgressElement
  volumeEl: HTMLProgressElement
  controls: string[]
  isPlaying: boolean
  volume: number
  muted: boolean
  currentTime: number
  duration: number
  markers: object[]
  onPlayClick: () => void
  onPauseClick: () => void
  onProgressClick: () => void
  onVolumeClick: () => void
  onMuteClick: () => void
  onFullScreenClick: () => void
  onMarkerClick: () => void
}

function Controls(props) {
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
    onMarkerClick,
  } = props

  const getTimeCode = (secs: number): string => {
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

  const durationTimeCode = getTimeCode(Math.ceil(duration))
  const currentTimeCode = currentTime !== duration ? getTimeCode(currentTime) : durationTimeCode

  return (
    <div className="react-video-controls">
      {controls.includes('play') ? (
        <button
          className={isPlaying ? 'pause' : 'play'}
          onClick={isPlaying ? onPauseClick : onPlayClick}
        >
          {isPlaying ? 'Pause' : 'Play'}
        </button>
      ) : null}
      {controls.includes('last-frame') ? (
        <button className="last-frame" onClick={onFullScreenClick}>
          Next Frame
        </button>
      ) : null}
      {controls.includes('next-frame') ? (
        <button className="next-frame" onClick={onFullScreenClick}>
          Next Frame
        </button>
      ) : null}
      {controls.includes('time') ? (
        <div className="time">
          {currentTimeCode}/{durationTimeCode}
        </div>
      ) : null}
      {controls.includes('progress') ? (
        <div className="progress-wrap">
          <progress ref={progressEl} max="100" onClick={onProgressClick}>
            0% played
          </progress>
          {markers &&
            markers.map((marker, index) => {
              return (
                <Marker
                  key={index}
                  marker={marker}
                  duration={duration}
                  onMarkerClick={onMarkerClick}
                />
              )
            })}
        </div>
      ) : null}
      {controls.includes('volume') ? (
        <div className="volume-wrap">
          <progress ref={volumeEl} max="100" value={volume * 100} onClick={onVolumeClick}>
            {volume * 100}% volume
          </progress>
          <button className={muted ? 'no-volume' : 'volume'} onClick={onMuteClick}>
            Volume
          </button>
        </div>
      ) : null}
      {controls.includes('full-screen') ? (
        <button className="full-screen" onClick={onFullScreenClick}>
          FullScreen
        </button>
      ) : null}
    </div>
  )
}

export default Controls
