import {Card, Button} from "react-bootstrap";

// let favoriteList = [];
const Cat=(props)=>{

    // const handleSave = () =>{
    //     let obj ={}
    //     obj["id"]=props.id;
    //     obj["url"]=props.url;
    //     favoriteList.push(obj)
    //     localStorage.setItem('favoriteCats', JSON.stringify(favoriteList))
    // }

    return(
        <Card>
            <Card.Header>{props.id}</Card.Header>
            <Card.Body>
                <div>
                    <img src={props.url} className="m-2"/> \
                </div>
                {/*<div><Button onClick={handleSave}>Man Patinka</Button></div>*/}
            </Card.Body>
        </Card>
    )
}
export default Cat