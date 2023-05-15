import {useEffect, useState} from "react";
import axios from "axios";

type Character = {
    id: number
    name: string
    species: string
    image: string
    status: string
}

export type Info = {
    next:string,
    prev:string
}
export default function useCharacters() {
    const [characters, setCharacters] = useState<Character[]>([])
    const [info, setInfo] = useState<Info>({next: "", prev:""})
    const [url, setUrl] = useState<string>("https://rickandmortyapi.com/api/character")


    function getAllCharactersFromApi() {
        axios.get(url)
            .then((response) => {
                setCharacters(response.data.results);
                setInfo(response.data.info);
            })
    }
    useEffect(getAllCharactersFromApi, [url])

    function onClickSetUrlPrev() {
        setUrl(info.prev)
    }

    function onClickSetUrlNext() {
        setUrl(info.next)
    }

    return {characters, getAllCharactersFromApi, onClickSetUrlNext, onClickSetUrlPrev, info}
}