import React from 'react';

const addBearerToken = token => {
  try {
    if (token) {
      const tokenWithBearer = 'Bearer ' + token;
      console.log('Token Bearer:', tokenWithBearer);
      console.log('desde funcion');
      return tokenWithBearer;
    } else {
      console.error('Error: No token provided.');
      return false;
    }
  } catch (error) {
    console.error('Error while processing the token:', error);
    return false;
  }
};

export default addBearerToken;
