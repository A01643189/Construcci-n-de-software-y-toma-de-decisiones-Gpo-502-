import { useEffect } from 'react';
import './ScreenPokemon.css'

const ScreenPokemon = ({pokemones, position}) => {
  return (
    <div className="screen-container">
        {pokemones?.map((pokemon, idx) => (
            <div key={pokemon.id} className="pokemon-item" style={{backgroundColor: idx === position ? 'green' : 'transparent', borderRadius: '7px', textTransform: 'capitalize'}}>
                <img src={pokemon.sprites.front_default} alt='pokemon image'/>
                {pokemon.name}
            </div>
        ))}
    </div>
  );
};

export default ScreenPokemon