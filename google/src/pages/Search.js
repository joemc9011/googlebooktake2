import React, { useEffect, useState } from 'react';
import Card from '../components/Card/Card';
import Input from '../components/Input/Input'



function Search () {

    const [books, setBooks] = useState([]);
    const [query, setQuery] = useEffect({''});

    const handleInputChange = (event) => {
        event.preventDefault();
        setQuery(event.target.value);
    }
return ( 
    <div>
       <Input
       query = {query}
       handleFormSubmit = {handleFormSubmit}
       handleInputChange = {handleInputChange}
       />
       <Card/>

    </div>
);
}
export default Search;