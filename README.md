<h1 align='center'>
  React Video Markers
</h1>

<p align='center'>
  React Video player with markers
</p>

### Usage

```bash
npm install react-video-markers --save
# or
yarn add react-video-markers
```

```js
import React, { Component } from 'react';
import VideoPlayer from 'react-video-markers';

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
      url="https://download.blender.org/durian/trailer/sintel_trailer-720p.mp4"
      isPlaying={isPlaying}
      volume={volume}
      onPlay={this.handlePlay}
      onPause={this.handlePause}
      onVolume={this.handleVolume}
     />
  }
}
```

Demo page: [`https://amittkSharma.github.io/react-video-player-extended/example/`](https://amittkSharma.github.io/react-video-player-extended/example/)

### Props

Prop | Description | Default
---- | ----------- | -------
`controls` | Set visible controls. Available controls: `play`, `time`, `progress`, `volume`, `full-screen` | ['play', 'time', 'progress', 'volume', 'full-screen']
`height` | Set the height of the player | '360px'
`width` | Set the width of the player | '640px'
`isPlaying` | Set to `true` or `false` to play or pause the media | false
`volume` | Set the volume of the player, between `0` and `1` | 0.7
`loop` | Set to `true` or `false` to loop the media | false
`markers` | Set array of markers. Example: `[{id: 1, time: 5, color: '#ffc837', title: 'Marker 1'}]` | []
`timeStart` | Set the second number to start playing video | 0
`url` | The url of a video |

### Callback props

Prop | Description
---- | -----------
onPlay | Called when video is started
onPause | Called when media is paused
onVolume | Called when volume is changed. Callback contains `volume`
onProgress | Callback contains `event`
onDuration | Callback contains `duration` of the media, in seconds
onMarkerClick | Called when marked is clicked. Callback contains marker object. Example: `{id: 1, time: 5, color: '#ffc837', title: 'Marker 1'}`
