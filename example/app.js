import React, { useState } from 'react'
import VideoPlayer from '../src/index'
import './styles.css'

function App() {
  const markersSample = [
    {
      id: 1,
      time: 5,
      title: 'Marker 1',
    },
    {
      id: 2,
      time: 10,
      title: 'Marker 2',
    },
  ]

  const [url] = useState('https://media.w3.org/2010/05/sintel/trailer.mp4')
  const [controls, setControls] = useState(['Play', 'Time', 'Progress', 'Volume', 'FullScreen'])
  const [settings, setSettings] = useState(['Title'])
  const [isPlaying, setIsPlaying] = useState(false)
  const [volume, setVolume] = useState(0.7)
  const [timeStart] = useState(5)
  const [fps] = useState(30)
  const [selectedMarker, setSelectedMarker] = useState(undefined)
  const [markers, setMarkers] = useState(markersSample)
  const [continuousMarker, setContinuousMarker] = useState(undefined)

  const controlsList = [
    {
      id: 'Play',
      title: 'Play button',
    },
    {
      id: 'Time',
      title: 'Time',
    },
    {
      id: 'Progress',
      title: 'Progress',
    },
    {
      id: 'Volume',
      title: 'Volume',
    },
    {
      id: 'FullScreen',
      title: 'Full Screen',
    },
    {
      id: 'NextFrame',
      title: 'Next Frame',
    },
    {
      id: 'LastFrame',
      title: 'Last Frame',
    },
    {
      id: 'AddMarker',
      title: 'Add Marker',
    },
    {
      id: 'ExportMarkers',
      title: 'Export Markers',
    },
    {
      id: 'ImportMarkers',
      title: 'Import Markers',
    },
  ]

  const settingsList = [
    {
      id: 'Title',
      title: 'Title',
    },
    {
      id: 'FPS',
      title: 'FPS',
    },
    {
      id: 'Volume',
      title: 'Volume',
    },
    {
      id: 'Repeat',
      title: 'Repeat',
    },
    {
      id: 'StartTime',
      title: 'Start Time',
    },
    {
      id: 'MarkersCount',
      title: 'Markers Count',
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

  const handleContinuousMarkerReceived = (marker) => {
    setContinuousMarker(marker)
  }

  const handleMarkerAdd = (marker) => {
    const updatedMarkers = markers.map((m) => m)
    updatedMarkers.push(marker)
    setMarkers(updatedMarkers)
  }

  return (
    <>
      <header className="main-header">
        <h1 className="app-name">React Video Player (Extended)</h1>
      </header>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around ',
          marginBottom: 20,
        }}
      >
        <img
          alt="npm"
          src="https://img.shields.io/npm/dt/react-video-player-extended?style=flat-square"
        />
        <img
          alt="NPM"
          src="https://img.shields.io/npm/l/react-video-player-extended?style=flat-square"
        />
        <img
          alt="npm type definitions"
          src="https://img.shields.io/npm/types/react-video-player-extended?style=flat-square"
        />
        <img
          alt="npm"
          src="https://img.shields.io/npm/v/react-video-player-extended?style=flat-square"
        />
      </div>
      <div className="container">
        <VideoPlayer
          url={url}
          controls={controls}
          isPlaying={isPlaying}
          volume={volume}
          loop={false}
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
          onMarkerAdded={handleMarkerAdd}
          onVideoPlayingComplete={(props) => setIsPlaying(false)}
          onContinuousMarkerReceived={handleContinuousMarkerReceived}
          fps={fps}
          selectedMarker={selectedMarker}
          viewSettings={settings}
        />
        <div className="controls">
          <em className="control-list">
            Controls:
            {controlsList.map((control) => {
              return (
                <label key={control.id.toString()} htmlFor={control.id}>
                  <input
                    id={control.id}
                    type="checkbox"
                    checked={controls.includes(control.id)}
                    onChange={handleControlToggle}
                  />
                  {control.title}
                </label>
              )
            })}
          </em>
          <em className="control-list">
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
          </em>
          <em className="control-list">
            State:
            <span style={{ height: 3 }} />
            fps: {fps}
            <span style={{ height: 3 }} />
            timeStart: {timeStart}
            <span style={{ height: 3 }} />
            volume: {volume}
            <span style={{ height: 3 }} />
            isPlaying: {isPlaying.toString()}
            <span style={{ height: 3 }} />
            controls: {controls.join(', ')}
            <span style={{ height: 3 }}></span>
            selectedMarker:
            {selectedMarker === undefined
              ? 'No Marker is Selected'
              : JSON.stringify(selectedMarker, null, 2)}
            <span style={{ height: 5 }}></span>
            Continuous Marker:{' '}
            {continuousMarker ? JSON.stringify(continuousMarker, null, 2) : 'No Continuous Marker'}
          </em>
        </div>
      </div>
    </>
  )
}

export default App
