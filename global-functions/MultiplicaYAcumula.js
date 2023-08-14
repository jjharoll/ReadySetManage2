import React from 'react';

const MultiplicaYAcumula = (parametro1, parametro2, totalAcumulado) => {
  const resultado = parametro1 * parametro2;
  totalAcumulado += resultado;
  return resultado;
};

export default MultiplicaYAcumula;
