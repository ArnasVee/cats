import {useState, useEffect} from "react";
import Search from "../Search/Search";
import {Row} from "react-bootstrap";
import Cat from "../Cat/Cat";

const Home =()=>{
    const [cats,setCats] = useState([]);   //cia desim fetchintus juokelius
    const [searchTerm, setSearchTerm] = useState('');
    const handleSearch = (term)=>{
        console.log('is home komponento ' + term)
        setSearchTerm(term)
    }
    useEffect(()=>{
        try{
            fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${searchTerm}`)
                .then(response=>response.json())
                .then(data=>setCats(data))  //kazkas cia svarbaus
        }catch(msg){
            console.log(msg)
        }
    },[searchTerm])  //<--prasuka efekta su nauja reiksme, tipo tikrina
    console.log(cats)
    searchTerm && console.log(cats)
    return(
        <div>
            <Search onSearch ={handleSearch}/>
            {cats &&
            <div>
                <h2>Paieskos rezultatai</h2>
                <Row>
                    {cats.map(cat=>(<Cat id = {cat.id} url={cat.url}/>))}   //cia baisiai svarbu, cia jau parodo aplikacijoje
                </Row>
            </div>
            }
        </div>
    )
}

export default Home