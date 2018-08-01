import React, { Component} from 'react';
import Media from './media.js'
import './playlist.css';

class Playlist extends Component{
	render(){
		return(
			<div className="Playlist">
				<h3> {this.props.title}</h3>
				<p> {this.props.description}</p>
					{
						this.props.playlist.map((item)=> {
							return <Media {...item} key={item.id} />
						})
					}
				
			</div>
			)
	}
}

export default Playlist;