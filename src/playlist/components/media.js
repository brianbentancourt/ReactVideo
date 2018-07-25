import React, { Component } from 'react';
import './media.css';

class Media extends Component{
	render(){
		const styles = {
			container:{ 
				color: '#44546b',
				cursor: 'pointer',
				width: 260,
				border: '1px solid Red'
			}
		}
		return (
			<div className="Media">
				<img
					src="./images/covers/vikings.jpg"
					alt=""
					className="image"
				/>
				<div className="titulo">Vikings</div>
				<div className="overlay">
    				<div className="text">Las aventuras de Ragnar Lothbrok, un vikingo agricultor, mientras asciende para convertirse en el rey de los vikingos.</div>
  				</div>
			</div>
			)
	}
}

export default Media;