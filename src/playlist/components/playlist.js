import React, { Component} from 'react';
import Media from './media.js'
import './playlist.css';

class Playlist extends Component{
	render(){
		const playlist = this.props.playlist;

		return(
			<div className="Playlist">
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