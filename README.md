<h1 align='center'>
  React Video Player (Extended)
</h1>

<p align='center'>
  React Video Player (with Markers, Next, Last Frame jumps)
</p>

<div align='center'>
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

### Introduction

React-video-player-extended supports both development and general user requirements. In addition to the basic video player functionality, react-video-player-extended provides the functionality for marking and selecting frames, jumping back and forth between frames based on the fps.

### Install

```bash
npm install react-video-player-extended --save
# or
npm i react-video-player-extended
# or
yarn add react-video-player-extended
```

### Example

```js
import React, { Component } from 'react';
import VideoPlayer from 'react-video-player-extended';

class App extends Component {
  state = {
    isPlaying: false,
    volume: 0.7
  };

  handlePlay = () => {
    this.setState({isPlaying: true});
  };

  handlePause = () => {
    this.setState({isPlaying: false});
  };

  handleVolume = value => {
    this.setState({volume: value});
  };

  render () {
    const {isPlaying, volume} = this.state;

    return <VideoPlayer
      url="https://media.w3.org/2010/05/bunny/trailer.mp4"
      isPlaying={isPlaying}
      volume={volume}
      onPlay={this.handlePlay}
      onPause={this.handlePause}
      onVolume={this.handleVolume}
     />
  }
}
```

### Demo

[`https://amittkSharma.github.io/react-video-player-extended/example/index.html`](https://amittkSharma.github.io/react-video-player-extended/example/index.html)

### Features

- Package supports basic video player functionality like play/pause, volume control and full screen
- Markers creation, display and selection
- Jumping back and forth between frames based on FPS (default fps value is 30)
- Display various settings associated with the video player such as title, fps, volume, repeat, start time
- Export markers as JSON file.
- Importing markers from JSON file.

![alt text](./video_sample/react_video_player_extended.png?raw=true)


### Props

Prop | Description | Default
---- | ----------- | -------
`controls` | Set visible controls. Available controls: ControlSelection | [ControlSelection.Play, ControlSelection.Time, ControlSelection.Progress, ControlSelection.Volume, ControlSelection.FullScreen, ControlSelection.AddMarker, ControlSelection.ExportMarkers]
`height` | Set the height of the player | '360px'
`width` | Set the width of the player | '640px'
`isPlaying` | Set to `true` or `false` to play or pause the media | false
`volume` | Set the volume of the player, between `0` and `1` | 0.7
`loop` | Set to `true` or `false` to loop the media | false
`markers` | Set array of markers. Example: `[{id: 1, time: 5, color: '#ffc837', title: 'Marker 1'}]` | []
`timeStart` | Set the second number to start playing video | 0
`url` | The url of a video |
`fps` | Frame per second | 30
`selectedMarker` | Selected marker | undefined
`viewSettings` | Array of SettingSelection displaying various video player settings e.g. Title, FPS, Volume, Repeat, Start Time, Markers Count | undefined

### Callback Events

Prop | Description | Version
---- | ----------- | --------
onPlay | Called when video is started
onPause | Called when media is paused
onVolume | Called when volume is changed. Callback contains `volume`
onProgress | Callback contains `event, progressProps`, ProgressProps is an object containing currentTime, duration and percentage,
onDuration | Callback contains `duration` of the media, in seconds
onMarkerClick | Called when marked is clicked. Callback contains marker object. Example: `{id: 1, time: 5, color: '#ffc837', title: 'Marker 1'}`
onContinuousMarkerReceived | Callback sending markers continuously, but it will not mark the video timeline. Callback contains marker object. Example: `{id: 1, time: 5, color: '#ffc837', title: 'Marker 1'}`
onMarkerAdded | Callback when a new marker is being added, this API will return a new marker object with current time. | 8.0.0
onLoadedMetadata| Callback is triggered when the video player is loaded with new video, with all the meta-information
onVideoPlayingComplete| Callback triggered when the video is completely played contains progressProps object. `Example: {"currentTime":52.209,"duration":52.209,"percentage":100}`. <b>Note:</b> This event will not be triggered in case video is being played in loop. | 8.3.0


##### Donation

Let's sit together and contribute towards further enhancements <a href="https://www.buymeacoffee.com/ash12raig">
Buy me a coffee :coffee:</a>



