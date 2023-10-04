import React, { useState, useEffect } from 'react';
import './Appstyle.css';

function TuComponente() {
  const [nombre, setNombre] = useState('');
  const [Titulo, setTitulo] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [comentarios, setComentarios] = useState([]);
  const fechaInicial = new Date();
  const [hora, sethora] = useState(fechaInicial);
  

  const handleSubmit = (e) => {
    e.preventDefault();

    const nuevahora = new Date();
        sethora(nuevahora);
      const nuevahoras=(nuevahora.getHours().toString().padStart(2,0));  
      const nuevaminuto=(nuevahora.getMinutes().toString().padStart(2,0));  
      const nuevasegundos=(nuevahora.getSeconds().toString().padStart(2,0));  
    const nuevoId = comentarios.length + 1;
    
    const nuevoComentario = {
      nombre,
      mensaje,
      Titulo,
      id: nuevoId,
      hora:(nuevahoras),
      minutos:(nuevaminuto),
      segundos:(nuevasegundos)

    };

    setComentarios([...comentarios, nuevoComentario]);
    setNombre('');
    setMensaje('');
    setTitulo('');
  };

  const saveComentarios = () => {
    localStorage.setItem('comentarios', JSON.stringify(comentarios));
  };

  useEffect(() => {
    if (comentarios.length) {
      saveComentarios();
    }
  }, [comentarios]);

  useEffect(() => {
    const storedComentarios = JSON.parse(localStorage.getItem('comentarios'));
    if (storedComentarios) {
      setComentarios(storedComentarios);
    }
  }, []);

  return (
    <>
     <header className="Head">
    <a href="/app"><img src=".\SRC\root\13007.png" alt="mensaje" className="imagen"  /></a> 
    <a href="/"><img src=".\SRC\root\13009.png" alt="mensaje" className="imagen2" /></a>
      
    </header>
    <div>
      
 
      <form onSubmit={handleSubmit}>
        <div>
          <label className="Nombre" htmlFor="nombre"></label>
          <input
          className='InNombre'
            type="text"
            id="nombre"
            placeholder='Nombre'
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div>
          <label className="Titulor" htmlFor="Titulo"></label>
          <input
          className='InTitulo'
            type="text"
            id="titulo"
            placeholder='Titulo'
            value={Titulo}
            onChange={(e) => setTitulo(e.target.value)}
          />
        </div>
        <div>
          <label className="Posting" htmlFor="mensaje"></label>
          <textarea
          className='InPost'
            id="mensaje"
            placeholder='Post'
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
          />
        </div>
        <button className='botonazo'>Crear Post</button>
     
      </form>
      
    </div>
    </>
  );
}

export default TuComponente;






