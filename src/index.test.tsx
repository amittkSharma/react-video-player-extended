import React from 'react';

import Enzyme, { mount, ReactWrapper } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

import { act } from 'react-dom/test-utils';
import VideoPlayer from './index';

describe('VideoPlayer', () => {
  window['HTMLMediaElement'].prototype.play = () => {};
  window['HTMLMediaElement'].prototype.pause = () => {};

  const markers: object[] = [
    {
      id: 1,
      time: 5,
      color: '#ffc837',
      title: 'Marker 1'
    }
  ];

  let wrapper: ReactWrapper = null;

  beforeEach(() => {
    wrapper = mount(
      <VideoPlayer
        controls={['time', 'progress', 'volume', 'full-screen']}
        isPlaying={true}
        markers={markers}
        volume={1}
        url="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
      />
    );
  });

  it('renders', () => {
    expect(wrapper).not.toBeNull();
  });

  it('shows time/progress/volume/full_screen controls', () => {
    expect(wrapper.find('div.play')).toHaveLength(0);
    expect(wrapper.find('div.time')).toHaveLength(1);
    expect(wrapper.find('div.progress-wrap')).toHaveLength(1);
    expect(wrapper.find('div.volume-wrap')).toHaveLength(1);
    expect(wrapper.find('button.full-screen')).toHaveLength(1);
  });

  it('renders 1 marker', () => {
    expect(wrapper.find('i.react-video-marker')).toHaveLength(1);
  });
});
