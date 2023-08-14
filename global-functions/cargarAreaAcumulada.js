import React from 'react';

const cargarAreaAcumulada = () => {
  const areaAcumuladaGuardada = localStorage.getItem('areaAcumulada');
  if (areaAcumuladaGuardada) {
    setPropValue('TextoAreaAcumulada', 'text', areaAcumuladaGuardada);
  }
};

export default cargarAreaAcumulada;
