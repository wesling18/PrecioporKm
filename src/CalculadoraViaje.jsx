import React, { useState } from 'react';
import Resultado from './components/Resultado';

function CalculadoraViaje() {
 
  const [kilometros, setKilometros] = useState(0);
  const [costo, setCosto] = useState(0);
  const [total, setTotal] = useState(0);

  const manejarCalculo = () => {
    const calculo = kilometros * costo;
    setTotal(calculo);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>Cálculo de Viaje (Ejercicio 14)</h1>
      
      <div style={{ marginBottom: '10px' }}>
        <label>Kilómetros recorridos: </label>
        <input 
          type="number" 
          placeholder="Ej. 100"
          onChange={(e) => setKilometros(Number(e.target.value))} 
        />
      </div>

      <div style={{ marginBottom: '10px' }}>
        <label>Costo por kilómetro: </label>
        <input 
          type="number" 
          placeholder="Ej. 0.50"
          onChange={(e) => setCosto(Number(e.target.value))} 
        />
      </div>

      <button onClick={manejarCalculo}>Calcular Total</button>

      {/* Se pasa el resultado al componente visual */}
      <Resultado valor={total} />
    </div>
  );
}

export default CalculadoraViaje;