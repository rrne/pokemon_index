import { useState, useEffect } from "react";
import getList from "../../api/getList";
import TopBar from "../layout/TopBar";

const PokemonList = () => {
    const [pokemon, setPokemon] = useState<Pokemon[]>([]);

    useEffect(() => {
        for(let i = 1; i <= 20; i++){
            getList({id:i})
        }
    },[])

    return(
        <div>
            <TopBar listpage={true} />
        </div>
    )
}

export default PokemonList;

interface Pokemon {
    id:number;
    name:string;
    height:number;
    // abilities
}