import React from 'react';
import './video-player-layout.css';

<<<<<<< HEAD
const VideoPlayerLayout = (props) =>{
	<div className="VideoPlayer">
		{props.children}
	</div>
}
=======
const VideoPlayerLayout = (props) => (
  <div
    className="VideoPlayer"
    ref={props.setRef}
  >
    {props.children}
  </div>
)
>>>>>>> ca10f1746df81c2dbc8c26f7ae29d2f5256a152e

export default VideoPlayerLayout;
