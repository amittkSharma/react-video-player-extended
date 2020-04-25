import React, { useState } from 'react'
import VideoPlayer from '../src/index'
import './styles.css'

function App() {
  const statelist = [url, controls, isPlaying, volume, timeStart, fps]
  const [url] = useState('https://media.w3.org/2010/05/bunny/trailer.mp4')
  const [controls, setControls] = useState(['play', 'time', 'progress', 'volume', 'full-screen'])
  const [isPlaying, setIsPlaying] = useState(false)
  const [volume, setVolume] = useState(0.7)
  const [timeStart] = useState(5)
  const [fps] = useState(10)

  const controlsList = [
    {
      id: 'play',
      title: 'Play button',
    },
    {
      id: 'time',
      title: 'Time',
    },
    {
      id: 'progress',
      title: 'Progress',
    },
    {
      id: 'volume',
      title: 'Volume',
    },
    {
      id: 'full-screen',
      title: 'Full Screen',
    },
    {
      id: 'next-frame',
      title: 'Next Frame',
    },
    {
      id: 'last-frame',
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
    alert(`Marker ${marker.id} clicked!`)
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
        height={'360px'}
        width={'640px'}
        timeStart={timeStart}
        onPlay={handlePlay}
        onPause={handlePause}
        onVolume={handleVolume}
        onProgress={handleProgress}
        onDuration={handleDuration}
        onMarkerClick={handleMarkerClick}
        fps={fps}
      />
      <div className="controls">
        <p className="control-list">
          Controls:
          {controlsList.map((control) => {
            return (
              <label key={control.id} htmlFor={control.id}>
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
        </p>
      </div>
    </div>
  )
}

export default App
