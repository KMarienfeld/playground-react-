import React, {ChangeEvent, useState} from 'react';
import Card from "./Card"
import "./Gallery.css"
import {Info} from "./useCharacters";

type Props = {
    characters:RickAndMortyCharacters[],
    info: Info,
    onClickSetUrlNext: ()=> void
    onClickSetUrlPrev: ()=> void
    getAllCharactersFromApi: ()=> void


}

type RickAndMortyCharacters = {
    id:number
    name:string
    species:string
    image:string
    status:string

}



function Gallery(props:Props) {

    const [inputFieldValue, setInputFieldValue] = useState<string>("")
    const filteredByName = props.characters.filter((characters) => characters.name.toLowerCase().includes(inputFieldValue.toLowerCase()))


    function useTextInput(event: ChangeEvent<HTMLInputElement>) {
        setInputFieldValue(event.target.value)

    }

    return (
        <div>
            <div className="inputAndButton">
                <input className="input" type="text" onChange={useTextInput} value={inputFieldValue} placeholder="search character by name"/>

                <button className="buttonAllChar">get all characters</button>
                <br/>
                {props.info.prev === null ? <></> : <button onClick={props.onClickSetUrlPrev}>prev</button>}
                {props.info.next === null ? <></> : <button onClick={props.onClickSetUrlNext}>next</button>}
            </div>
            <div className="gallery">

                {filteredByName.map(currentChar => <Card key={currentChar.id} character={currentChar}/>)}

            </div>
        </div>
    );
}

export default Gallery;