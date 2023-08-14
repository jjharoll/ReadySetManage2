import React from 'react';

const getTokenAutorization = result => {
  try {
    if (result && result['access_token']) {
      const token = 'Bearer ' + result['access_token'];
      console.log('Token Bearer:', token);
      console.log('desde funcion');
      return token;
    } else {
      console.error('Error: No access_token found in the result object.');
      return false;
    }
  } catch (error) {
    console.error('Error while processing the token:', error);
    return false;
  }
};

export default getTokenAutorization;
