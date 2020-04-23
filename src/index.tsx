import React, { useEffect, useRef, useState } from 'react'
import Controls from './controls'
import { Marker } from './marker'
import './styles.css'

interface Props {
  url: string
  controls?: string[]
  height?: string
  width?: string
  isPlaying: boolean
  volume: number
  loop?: boolean
  markers?: Marker[]
  timeStart?: number
  onPlay?: () => void
  onPause?: () => void
  onVolume?: (volume: number) => void
  onProgress?: (event: Event) => void
  onDuration?: (duration: number) => void
  onMarkerClick?: (marker: object) => void
}

const DEFAULT_VOLUME: number = 0.7

function VideoPlayer(props: Props) {
  const playerEl = useRef<HTMLVideoElement>(null)
  const progressEl = useRef<HTMLProgressElement>(null)
  const volumeEl = useRef<HTMLProgressElement>(null)

  const [currentTime, setCurrentTime] = useState<number>(0)
  const [videoDuration, setVideoDuration] = useState<number>(null)
  const [muted, setMuted] = useState<boolean>(false)
  const [isFullScreen, setIsFullScreen] = useState<boolean>(false)

  const {
    url,
    controls = ['play', 'time', 'progress', 'volume', 'full-screen'],
    height = '360px',
    width = '640px',
    isPlaying = false,
    volume = 0.7,
    loop = false,
    markers = [],
    timeStart = 0,
    onPlay,
    onPause,
    onVolume,
    onProgress,
    onDuration,
    onMarkerClick,
  } = props

  useEffect(() => {
    playerEl.current.addEventListener('timeupdate', handleProgress)
    playerEl.current.addEventListener('durationchange', handleDurationLoaded)
    if (timeStart) {
      seekToPlayer()
    }
    if (isPlaying) {
      playerEl.current.play()
    }

    return () => {
      playerEl.current.removeEventListener('timeupdate', handleProgress)
      playerEl.current.removeEventListener('durationchange', handleDurationLoaded)
    }
  }, [])

  useEffect(() => {
    seekToPlayer()
  }, [timeStart])

  useEffect(() => {
    isPlaying ? playerEl.current.play() : playerEl.current.pause()
  }, [isPlaying])

  useEffect(() => {
    setVolume(volume)
  }, [volume])

  const seekToPlayer = () => {
    if (timeStart && playerEl) {
      playerEl.current.currentTime = timeStart
    }
  }

  const setVolume = (value: number) => {
    playerEl.current.volume = value
    setMuted(!value)
  }

  const handlePlayerClick = () => {
    if (isPlaying) {
      onPause()
    } else {
      onPlay()
    }
  }

  const handleDurationLoaded = (e: Event) => {
    let duration = e.currentTarget['duration']
    if (duration === Infinity) {
      duration = 0
    }
    setVideoDuration(duration)
    onDuration(duration)
  }

  const handleProgress = (e: Event) => {
    const { currentTarget } = e
    // tslint:disable-next-line: no-shadowed-variable
    const currentTime = currentTarget['currentTime']
    const duration = currentTarget['duration']
    if (duration) {
      setCurrentTime(currentTime)
      const percentage = (100 / duration) * currentTime
      progressEl.current.value = percentage
      progressEl.current.innerHTML = percentage + '% played'
      if (currentTime === duration) {
        onPause()
      }
    }
    onProgress(e)
  }

  const handleProgressClick = (e: Event) => {
    const x =
      e['clientX'] - progressEl.current.getBoundingClientRect().left + document.body.scrollLeft
    const percentage = (x * progressEl.current.max) / progressEl.current.offsetWidth
    playerEl.current.currentTime = (percentage / 100) * playerEl.current.duration
  }

  const handleVolumeClick = (e: Event) => {
    const y =
      volumeEl.current.offsetWidth -
      (e['clientY'] - volumeEl.current.getBoundingClientRect().top + document.body.scrollTop)
    const percentage = (y * volumeEl.current.max) / volumeEl.current.offsetWidth
    playerEl.current.muted = false
    onVolume(percentage / 100)
  }

  const handleMuteClick = () => {
    if (muted) {
      playerEl.current.muted = false
      setVolume(DEFAULT_VOLUME)
      setMuted(false)
    } else {
      playerEl.current.muted = true
      setVolume(0)
      setMuted(true)
    }
  }

  const handleFullScreenClick = () => {
    const videoWrap = document.getElementsByClassName('react-video-wrap')[0]
    if (isFullScreen) {
      document.body.classList.remove('react-video-full-screen')
      if (document['exitFullscreen']) {
        document['exitFullscreen']()
      } else if (document['mozCancelFullScreen']) {
        document['mozCancelFullScreen']()
      } else if (document['webkitExitFullscreen']) {
        document['webkitExitFullscreen']()
      } else if (document['msExitFullscreen']) {
        document['msExitFullscreen']()
      }
    } else {
      document.body.classList.add('react-video-full-screen')
      if (videoWrap['requestFullscreen']) {
        videoWrap['requestFullscreen']()
      } else if (videoWrap['mozRequestFullScreen']) {
        videoWrap['mozRequestFullScreen']()
      } else if (videoWrap['webkitRequestFullscreen']) {
        videoWrap['webkitRequestFullscreen']()
      } else if (videoWrap['msRequestFullscreen']) {
        videoWrap['msRequestFullscreen']()
      }
    }
    setIsFullScreen(!isFullScreen)
  }

  const handleMarkerClick = (marker: object) => {
    playerEl.current.currentTime = marker['time']
    onMarkerClick(marker)
  }

  return (
    <div className="react-video-wrap" style={{ height, width }}>
      <p>Extended Markers</p>
      <video ref={playerEl} className="react-video-player" loop={loop} onClick={handlePlayerClick}>
        <source src={url} type="video/mp4" />
      </video>
      {isFullScreen ? (
        <button className="react-video-close" onClick={handleFullScreenClick}>
          Close video
        </button>
      ) : null}
      {controls.length ? (
        <Controls
          progressEl={progressEl}
          volumeEl={volumeEl}
          controls={controls}
          isPlaying={isPlaying}
          volume={volume}
          currentTime={currentTime}
          duration={videoDuration}
          muted={muted}
          markers={markers}
          onPlayClick={onPlay}
          onPauseClick={onPause}
          onProgressClick={handleProgressClick}
          onVolumeClick={handleVolumeClick}
          onMuteClick={handleMuteClick}
          onFullScreenClick={handleFullScreenClick}
          onMarkerClick={handleMarkerClick}
        />
      ) : null}
    </div>
  )
}

export default VideoPlayer
