import * as React from 'react'

export interface Marker {
  id: number
  time: number
  color: string
  title: string
}

interface Props {
  marker: Marker
  duration: number
  onMarkerClick: (marker: Marker) => void
  selectedMarker: Marker | undefined
}

export class MarkerView extends React.Component<Props, never> {
  getPosition = () => {
    const { marker, duration } = this.props
    const { time } = marker
    if (duration) {
      const percent = time <= duration ? time / duration : 1
      return `calc(${percent * 100}% - 2px)`
    }
    return '-9999px'
  }

  render() {
    const { marker, onMarkerClick } = this.props
    const { color, title } = marker
    const id = String(marker.id)

    let selectedColor = color
    if (this.props.selectedMarker !== undefined) {
      selectedColor =
        this.props.selectedMarker !== undefined && this.props.selectedMarker.id === marker.id
          ? '#7CFC00'
          : color
    }

    return (
      <i
        id={id}
        className="react-video-marker"
        title={title}
        style={{
          background: selectedColor,
          left: this.getPosition(),
        }}
        onClick={() => {
          onMarkerClick(marker)
        }}
      />
    )
  }
}
