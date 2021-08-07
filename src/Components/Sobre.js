import React from "react";
import styles from "./Sobre.module.css";
import foto from "../img/perfil6.jpeg";
const Sobre = () => {
  return (
    <section className={`${styles.sobre} animeLeft`}>
      <img className={styles.foto} src={foto} alt="Carro sobre" />
      <div>
        <h1> Entre em contacto</h1>
        <ul className={styles.dados}>
          <li>eliezer@origamid.com</li>
          <li>924033375 </li>
          <li>Bairro Cdt Cow-Boy </li>
        </ul>
      </div>
    </section>
  );
};

export default Sobre;
