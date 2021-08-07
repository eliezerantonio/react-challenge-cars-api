import React from "react";
import { Link } from "react-router-dom";
const Carros = () => {
  const [carros, setCarros] = React.useState(null);

  React.useEffect(() => {
    fetch("https://carros-springboot.herokuapp.com/api/v1/carros")
      .then((car) => car.json())
      .then((json) => setCarros(json));
  }, []);
  if (carros === null) return null;
    return <section>
      
        
        
  </section>;
};

export default Carros;
