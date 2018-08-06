import React from 'react';
import './search.css';


// function Search(props){
//     return(
//     	<form action="">
// 	    	<input type="text" />
// 		</form>
//     )
// }


const Search = ()=>(
	<form action="" className="Search">
		<input 
			type="text" 
			placeholder="Búsqueda..."
			className="Search-input"
		/>
	</form>
)

export default Search;