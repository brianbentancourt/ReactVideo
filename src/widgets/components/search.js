import React from 'react';
import './search.css';


// function Search(props){
//     return(
//     	<form action="">
// 	    	<input type="text" />
// 		</form>
//     )
// }


const Search = (props)=>(
	<form 
		className="Search"
		onSubmit={props.handleSubmit}
	>
		<input 
			ref={props.setRef}
			type="text" 
			placeholder="Búsqueda..."
			className="Search-input"
			name="search"
			onChange={props.handleChange}
			value={props.value}
		/>
	</form>
)

export default Search;