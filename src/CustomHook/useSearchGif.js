import { useState } from "react";

const useSearchGif = () => {
 const [word, setWord] = useState("");
 const [gifs, setGifs] = useState([]);
 const [cargando, setCargando] = useState(false);

 function changeWord(event) {
   const value = event.target.value;
   setWord(value);
 }

 async function getGif(query) {
   const url = `https://api.giphy.com/v1/gifs/search?api_key=j2GbP8aSjCned4h6ZvtwgUmLKkLBfj3D&q=${query}`;
   setCargando(true);
   const response = await fetch(url);
   const { data } = await response.json();
   setCargando(false);
   return data;
 }

 async function onSubmit(event) {
   event.preventDefault();
   const listaGif = await getGif(word);
   setGifs(listaGif);
 }

 return {
   onSubmit,
   changeWord,
   word,
   gifs,
   cargando,
 };
}

export default useSearchGif