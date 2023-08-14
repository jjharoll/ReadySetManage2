import React from 'react';

const inicializarAreaAcumulada = () => {
  const areaAcumuladaGuardada = localStorage.getItem('areaAcumulada');
  if (!areaAcumuladaGuardada) {
    localStorage.setItem('areaAcumulada', '0');
  }
};

export default inicializarAreaAcumulada;
