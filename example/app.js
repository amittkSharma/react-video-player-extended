import React, { useState } from 'react'
import { ControlSelection } from '../src/controls'
import VideoPlayer from '../src/index'
import './styles.css'

function App() {
  const statelist = [url, controls, isPlaying, volume, timeStart, fps]
  const [url] = useState('https://media.w3.org/2010/05/bunny/trailer.mp4')
  const [controls, setControls] = useState([
    ControlSelection.Play,
    ControlSelection.Time,
    ControlSelection.Progress,
    ControlSelection.Volume,
    ControlSelection.FullScreen,
  ])
  const [isPlaying, setIsPlaying] = useState(false)
  const [volume, setVolume] = useState(0.7)
  const [timeStart] = useState(5)
  const [fps] = useState(10)
  const [selectedMarker, setSelectedMarker] = useState(undefined)

  const controlsList = [
    {
      id: ControlSelection.Play,
      title: 'Play button',
    },
    {
      id: ControlSelection.Time,
      title: 'Time',
    },
    {
      id: ControlSelection.Progress,
      title: 'Progress',
    },
    {
      id: ControlSelection.Volume,
      title: 'Volume',
    },
    {
      id: ControlSelection.FullScreen,
      title: 'Full Screen',
    },
    {
      id: ControlSelection.NextFrame,
      title: 'Next Frame',
    },
    {
      id: ControlSelection.LastFrame,
      title: 'Last Frame',
    },
  ]

  const handlePlay = () => {
    setIsPlaying(true)
  }

  const handlePause = () => {
    setIsPlaying(false)
  }

  const handleControlToggle = (event) => {
    let result = [...controls]
    const name = event.target.id
    if (result.includes(name)) {
      result = result.filter((item) => item !== name)
    } else {
      result.push(name)
    }
    setControls(result)
  }

  const handleVolume = (value) => {
    setVolume(value)
  }

  const handleProgress = (e) => {
    console.log('Current time: ', e.target.currentTime)
  }

  const handleDuration = (duration) => {
    console.log('Duration: ', duration)
  }

  const handleMarkerClick = (marker) => {
    setSelectedMarker(marker)
  }

  const markers = [
    {
      id: 1,
      time: 5,
      color: '#ffc837',
      title: 'Marker 1',
    },
    {
      id: 2,
      time: 10,
      color: '#ffc837',
      title: 'Marker 2',
    },
  ]

  return (
    <div className="container">
      <header className="main-header">
        <h1 className="app-name">React Video Player (Extended)</h1>
      </header>
      <VideoPlayer
        url={url}
        controls={controls}
        isPlaying={isPlaying}
        volume={volume}
        loop={true}
        markers={markers}
        height={'auto'}
        width={'640px'}
        timeStart={timeStart}
        onPlay={handlePlay}
        onPause={handlePause}
        onVolume={handleVolume}
        onProgress={handleProgress}
        onDuration={handleDuration}
        onMarkerClick={handleMarkerClick}
        fps={fps}
        selectedMarker={selectedMarker}
      />
      <div className="controls">
        <p className="control-list">
          Controls:
          {controlsList.map((control) => {
            return (
              <label key={control.id.toString()} htmlFor={control.id}>
                <input
                  id={control.id}
                  type="checkbox"
                  checked={controls.includes(control.id)}
                  onChange={handleControlToggle}
                />{' '}
                {control.title}
              </label>
            )
          })}
        </p>

        <p className="control-list">
          State:
          <span style={{ height: 3 }} />
          controls: {controls.join(', ')}
          <span style={{ height: 3 }} />
          isPlaying: {isPlaying.toString()}
          <span style={{ height: 3 }} />
          volume: {volume}
          <span style={{ height: 3 }} />
          timeStart: {timeStart}
          <span style={{ height: 3 }} />
          fps: {fps}
          <span style={{ height: 3 }}></span>
          selectedMarker:{' '}
          {selectedMarker === undefined
            ? 'No Marker is Selected'
            : JSON.stringify(selectedMarker, null, 2)}
        </p>
      </div>
    </div>
  )
}

export default App
