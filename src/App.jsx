import { useState } from "react";
import Buscador from "./components/Buscador";
import Imagen from "./components/Imagen";
import useSearchGif from "./CustomHook/useSearchGif";

const App = () => {
  const { onSubmit, changeWord, word, gifs, cargando } = useSearchGif();

  return (
    <>
      <Buscador onSubmit={onSubmit} word={word} changeWord={changeWord} />
      <br />

      {cargando ? (
        <h2>Cargando...</h2>
      ) : (
        <div className="grid-gif">
          {gifs.map((gif,index) => {
            return <Imagen key={gif.id} gif={gif} index={index}/>;
          })}
        </div>
      )}
    </>
  );
};

export default App;
