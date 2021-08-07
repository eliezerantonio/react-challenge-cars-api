import React from "react";
import styles from "./Sobre.module.css";
const Sobre = () => {
  return (
    <section clasName={`${styles.sobre} animeLeft`}>
      <img alt="Carro sobre" />
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
