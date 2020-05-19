import React, { useState } from 'react'
import { ControlSelection, SettingsSelection } from '../src/enums'
import VideoPlayer from '../src/index'
import './styles.css'

function App() {
  const [url] = useState('https://media.w3.org/2010/05/bunny/trailer.mp4')
  const [controls, setControls] = useState([
    ControlSelection.Play,
    ControlSelection.Time,
    ControlSelection.Progress,
    ControlSelection.Volume,
    ControlSelection.FullScreen,
  ])
  const [settings, setSettings] = useState([SettingsSelection.Title])
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

  const settingsList = [
    {
      id: SettingsSelection.Title,
      title: 'Title',
    },
    {
      id: SettingsSelection.FPS,
      title: 'FPS',
    },
    {
      id: SettingsSelection.Volume,
      title: 'Volume',
    },
    {
      id: SettingsSelection.Repeat,
      title: 'Repeat',
    },
    {
      id: SettingsSelection.StartTime,
      title: 'Start Time',
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

  const handleSettingToggle = (event) => {
    let result = [...settings]
    const name = event.target.id
    if (result.includes(name)) {
      result = result.filter((item) => item !== name)
    } else {
      result.push(name)
    }
    setSettings(result)
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
        viewSettings={settings}
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

        <p className="control-list">
          Settings:
          {settingsList.map((setting) => {
            return (
              <label key={setting.id.toString()} htmlFor={setting.id}>
                <input
                  id={setting.id}
                  type="checkbox"
                  checked={settings.includes(setting.id)}
                  onChange={handleSettingToggle}
                />{' '}
                {setting.title}
              </label>
            )
          })}
        </p>
      </div>
    </div>
  )
}

export default App
