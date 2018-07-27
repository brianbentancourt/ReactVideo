import React, { Component} from 'react';
import Media from './media.js'
import './playlist.css';
import Play from '../../icons/components/play'
import Pause from '../../icons/components/pause'
import Volume from '../../icons/components/volume'
import FullScreen from '../../icons/components/fullscreen'

class Playlist extends Component{
	render(){
		const playlist = this.props.playlist;

		return(
			<div className="Playlist">
				<Play 
					size={50}
					color="blue"
				/>
				<Pause 
					size={50}
					color="orange"
				/>
				<Volume 
					size={50}
					color="green"
				/>
				<FullScreen 
					size={45}
					color="grey"
				/>
				<h3> {this.props.title}</h3>
				<p> {this.props.description}</p>
					{
						playlist.map((item)=> {
							return <Media {...item} key={item.id} />
						})
					}
				
			</div>
			)
	}
}

export default Playlist;