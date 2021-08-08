import React from "react";
import { useParams } from "react-router-dom";
import { styles } from "./Produto.module.css";
const Carro = () => {
  const { id } = useParams();
  const [carro, setCarro] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    async function fetchCarro(url) {
      try {
        setLoading(true);
        const response = await fetch(url);
        const json = await response.json();
        setCarro(json);
      } catch (error) {
        setError("Ocurreu um erro");
      } finally {
        setLoading(false);
      }
    }
    fetchCarro(`https://carros-springboot.herokuapp.com/api/v1/carros/${id}`);
  }, [id]);

  if (loading) return <div className={"loading"}></div>;
  if (error) return <p>{error}</p>;
  if (carro === null) return null;
  return (
    <section className={styles.produto + " animeLeft"}>
      <div>{<img src={carro.urlFoto} alt={carro.nome} />}</div>
      <h1>{carro.nome}</h1>
      <h3>{carro.tipo}</h3>
      <p>{carro.descricao}</p>
    </section>
  );
};

export default Carro;
