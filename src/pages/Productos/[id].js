import React from "react";
import { useRouter } from "next/router";


function DetalleProducto() {
    const router = useRouter(); 
    const {id} = router.query; 
    return(
        <div>
            <h1>Detalle del producto {id} </h1>
        </div>
    ); 
}


export default DetalleProducto; 