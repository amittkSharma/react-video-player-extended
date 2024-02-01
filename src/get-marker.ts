import { Marker } from './marker'

export const getMarker = (pCurrentTime: number) => {
  const id = Math.round(pCurrentTime)
  const newMarker: Marker = {
    id,
    time: pCurrentTime,
    title: `newMarker_${id}`,
  }
  return newMarker
}
