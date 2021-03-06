import React from 'react';
const styles = {
    input: {
            margin: '50px',
            width: '50%',
            
          
    }
}
function Input ({query, click, handleInputChange, handleFormSubmit}){
    return (
        <div style = {styles.input} className="input-group mb-3">
  <input 
  type="text" 
  className="form-control" 
  aria-label="Sizing example input" 
  aria-describedby="inputGroup-sizing-default"
  value = {query}
  placeholder = "Search"
  onChange={handleInputChange}

/>
<button 
type="button" 
class="btn btn-primary"
onClick = {handleFormSubmit}>
    Search
</button>
</div>
    );
}

export default Input;