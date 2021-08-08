import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <nav className={styles.header}>
      <ul>
        <li>
          <NavLink
            activeClassName={styles.active}
            className={styles.link}
            to="/"
            end
          >
            Carros
          </NavLink>
        </li>{" "}
        <li>
          <NavLink
            activeClassName={styles.active}
            className={styles.link}
            to="/"
          >
            Classicos
          </NavLink>
        </li>{" "}
        <li>
          <NavLink
            activeClassName={styles.active}
            className={styles.link}
            to="/"
          >
            Esportivos
          </NavLink>
        </li>
        <li>
          <NavLink
            activeClassName={styles.active}
            className={styles.link}
            to="sobre"
          >
            Contacto
          </NavLink>
        </li>{" "}
      </ul>
    </nav>
  );
};

export default Header;
