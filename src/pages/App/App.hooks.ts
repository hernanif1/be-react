import React, {useEffect, useState} from 'react';
import axios from "axios"
import { Beer } from '../../services/beers';

const useBeers = ()=>{
  const [beers, setBeers] = useState<Beer[]>()
  const [callApi, setCallAPI] = useState(false)

  const handleCallAPI = () => { setCallAPI(true) }

  useEffect(()=>{
    //true
    callApi && axios.get<Beer[]>("https://api.punkapi.com/v2/beers").then(
      result => { setBeers(result.data) }
    )
  }, []) // nothing  [callApi false] [callApi true]
  
  // primitives boolean, string, number
  // function ()=>{void}, array[function, ], objects{key: function()} : 

  return {
    beers: beers, //undefined
    callBeers: handleCallAPI //() => { setCallAPI(true) }
  }
}

export {useBeers}