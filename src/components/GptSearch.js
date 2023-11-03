import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import { BG_URL } from '../utils/constants'

const GptSearch = () => {
  return (
    <div>
         <div className="absolute -z-10">
        <img
          src = {BG_URL}
          alt="bg-img"
        />
      </div>
        {/* Gpt : searchBar */}
        <GptSearchBar/>
        {/* Gpt : Movie suggestion */}
        <GptMovieSuggestions/>
    </div>
  )
}

export default GptSearch