import React from 'react';

function Resultado({ valor }) {
  return (
    <div style={{ marginTop: '20px', fontSize: '1.2rem' }}>
      {valor > 0 ? (
        <p>El costo total del viaje es: <strong>${valor}</strong></p>
      ) : (
        <p>Ingrese los datos y presione calcular.</p>
      )}
    </div>
  );
}

export default Resultado;