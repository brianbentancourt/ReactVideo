import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
					src={this.props.image}
					alt=""
					className="image"
				/>
				<div className="titulo">{this.props.title}</div>
				<div className="overlay">
    				<div className="text">{this.props.text}</div>
  				</div>
			</div>
			)
	}
}

Media.propTypes ={
	image: PropTypes.string,
	title: PropTypes.string,
	text: PropTypes.string
}

export default Media;