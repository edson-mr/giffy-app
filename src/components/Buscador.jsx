
const Buscador = ({onSubmit,word, changeWord}) => {
  return (
    <form className="form-buscador" onSubmit={onSubmit}>
      <input className="buscador" value={word} onChange={changeWord} />
    </form>
  );
}

export default Buscador