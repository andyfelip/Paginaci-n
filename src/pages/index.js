import React from 'react';
import Link from 'next/link';
import estilos from '../styles/style.module.css'; 

export default function Inicio() {
  return ( 
    <div className={estilos.body}>
      <h1 className={estilos.title}>Pagina Inicio</h1>
      <h1 className={estilos.title}> Esta es la pagina de inicio </h1>
      <Link href="./Users" legacyBehavior>
           <a className={estilos.hiperlinks}>Seccion Usuarios</a>
      </Link>
      <br>
      </br>
      <Link href="./Productos/1234" legacyBehavior>
        <a className={estilos.hiperlinks}>Producto 1234</a>
      </Link>
      <br>
      </br>
      <Link href="./Productos/5678" legacyBehavior >
        <a className={estilos.hiperlinks}>Producto 5678</a>
      </Link>
      <br>
      </br>
      <Link href="./users" legacyBehavior >
        <a className={estilos.hiperlinks}>Seccion Usuarios 2</a>
      </Link>
    </div>
  );
}; 