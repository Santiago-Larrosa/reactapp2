import React, { useState, useEffect } from "react";
import './rootstyle.css';
export default function Root() {
  const [comentarios, setComentarios] = useState([]);
  const [go, setGo] = useState(null); 
 


  const HandleClick = (id) => {
    setGo(id);
    
  };

  useEffect(() => {
    const comentariosJson = localStorage.getItem("comentarios");
    if (comentariosJson) {
      const comentariosArray = JSON.parse(comentariosJson);
      setComentarios(comentariosArray);
    }

    const queryParams = new URLSearchParams(window.location.search);
    const idParam = queryParams.get("id");

    if (idParam) {
      setGo(idParam);
    }
  }, []);
    
 

  return (
    <>
    <header className="Head">
    <a href="/app"><img src=".\SRC\root\13007.png" alt="mensaje" className="imagen"  /></a> 
    <a href="/"><img src=".\SRC\root\13009.png" alt="mensaje" className="imagen2" /></a>
      
    </header>
    
      <div className="sidebar">
      
        <div>
         
          <form method="post">
            
          </form>
        </div>
        <nav>
         
              
           
          </nav>
          
          <div className="EsteDiv">
      
        <ul>
       
        
        {comentarios.map((comentario, index) => (
  <div key={index} className="Post">
    <h2 className="tituloPost">{comentario.nombre} </h2> <h1>{comentario.Titulo}</h1><p>{comentario.hora}:{comentario.minutos}:{comentario.segundos}</p>
    <button onClick={() => HandleClick(comentario.id)} className="Boton">
  <a onClick={()=>console.log(comentario.id)} href={`/coment/${parseInt(comentario.id)}`}>COMENTAR</a>
</button>

  </div>
))}
  
        </ul>
      </div>
        </div>
        <div id="detail"></div>
      </>
  );
}