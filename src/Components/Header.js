import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./header.module.css";
const Header = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink
            activeClassName={styles.active}
            className={styles.link}
            to="/"
          >
            Carros
          </NavLink>
        </li>{" "}
        <li>
          <NavLink
            activeClassName={styles.active}
            className={styles.link}
            to="sobre"
          >
            Sobre
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
