import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './media.css';

class Media extends Component{
	state = {
		title: this.props.title
	}


	handleClick = (event) =>{
		this.setState({
			title: 'Vikingos serie'
		})
	}

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
			<div className="Media" onClick={this.handleClick}>
				<img
					src={this.props.image}
					alt=""
					className="image"
				/>
				<div className="titulo">{this.state.title}</div>
				<div className="overlay">
    				<div className="text">{this.props.text}</div>
  				</div>
			</div>
			)
	}
}


// https://reactjs.org/docs/typechecking-with-proptypes.html
Media.propTypes ={
	image: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	text: PropTypes.string
}

export default Media;