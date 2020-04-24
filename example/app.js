import React, { useState } from 'react'
import VideoPlayer from '../src/index'
import './styles.css'

function App() {
  const [url] = useState(
    'https://github.com/amittkSharma/react-video-player-extended/blob/master/video_sample/earth_moon.mp4?raw=true',
  )
  const [controls, setControls] = useState(['play', 'time', 'progress', 'volume', 'full-screen'])
  const [isPlaying, setIsPlaying] = useState(false)
  const [volume, setVolume] = useState(0.7)
  const [timeStart] = useState(0)

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
      />
      <div className="controls">
        <p>
          Controls:
          <button onClick={isPlaying ? handlePause : handlePlay}>
            {isPlaying ? 'Pause' : 'Play'}
          </button>
        </p>
        <p>
          Show controls:
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
      </div>
      <div>
        <h3>State:</h3>
        <p>url: {url}</p>
        <p>
          controls: {controls.length ? '["' : ''}
          {controls.join('", "')}
          {controls.length ? '"]' : ''}
        </p>
        <p>isPlaying: {isPlaying.toString()}</p>
        <p>volume: {volume}</p>
        <p>timeStart: {timeStart}</p>
      </div>
    </div>
  )
}

export default App
