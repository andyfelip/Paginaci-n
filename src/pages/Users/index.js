import React from "react";
import Link from "next/link";
import estilos from "../../styles/style.module.scss";
function Usuario() {
  return (
    <div>
      <h3 className={estilos.title}> Seccion Usuarios </h3>
      <Link href="../Users/admin" legacyBehavior>
        <a> Ir a la pagina Admin </a>
      </Link>
      <br></br>
      <Link href="../Users/ciudadano" legacyBehavior>
        <a> Ir a la pagina Ciudadano </a>
      </Link>
      <br></br>
    </div>
  );
}
export default Usuario;
