import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
	const buttonText = 'click me';
	return(
		<div> 
           <label type="name" className="label">enter e-mail</label>
           <input id="name" type="text" />
           <button style={{backgroundColor: 'red' , color: 'white'}}>
           {buttonText}
             </button>


		 </div>

		)
}
ReactDOM.render(
<App />,
	document.querySelector('#root')
)
	
