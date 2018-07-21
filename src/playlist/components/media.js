import React, { Component } from 'react';

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
			<div style={styles.container}>
				<img
					src=""
					alt=""
					width={260}
					height={160}
				/>
				<h3>¿Por que aprender react?</h3>
				<p>Brian Bentancourt</p>
			</div>
			)
	}
}

export default Media;