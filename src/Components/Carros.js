import React from "react";
import { Link } from "react-router-dom";
import styles from "./Carros.module.css";
const Carros = () => {
  const [carros, setCarros] = React.useState(null);

  React.useEffect(() => {
    fetch("https://carros-springboot.herokuapp.com/api/v1/carros")
      .then((car) => car.json())
      .then((json) => setCarros(json));
  }, []);
  if (carros === null) return <p className="loading"></p>;
  return (
    <section className={styles.carros + " animeLeft"}>
      {carros.map((carro) => (
        <Link to={`carro/${carro.id}`} key={carro.id}>
          <img src={carro.urlFoto} alt={carros.nome} />
          <h1>{carro.nome}</h1>
        </Link>
      ))}
    </section>
  );
};

export default Carros;
