import React, {useState, useEffect} from 'react';
import axios from 'axios';

function Search(){

    const [searchKey, setSearchKey] = useState("");
    const [results, setResults] = useState([]);


    useEffect(() => {
        
        console.log("useEffect: Eqivalent to the componentDidMount(called only once)")


    }, [])

    useEffect(() => {
        
        console.log("useEffect: Eqivalent to the componentDidUpdate(called only whenever dependency change)")


    }, [results])

    function change(evt){
        setSearchKey(evt.target.value);
    }

    async function search(){

        const url = "https://en.wikipedia.org/w/api.php?action=opensearch&origin=*&search=" + searchKey;

        try {
            
            const response = await axios.get(url);
            setResults(response.data[1]);
        } catch (error) {

            alert("failed to fetch");
        }
    }

    return (
        <div>
            <h3>Wiki Search</h3>
            <div>
                <input type="search" placeholder="Search" value={searchKey} onChange={change}/>
            </div>
            {searchKey ? <p>Searching for {searchKey}</p>: null}
            <div>
                <button onClick={search}>Search</button>
            </div>
            <div>
                {results.map((item, index) => {

                    return (
                        <div key={index}>
                            <p>{item}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )

}


export default Search;