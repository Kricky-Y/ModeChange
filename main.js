'use strict';
 {
  const light = document.getElementById('light');
  const dark = document.getElementById('dark');
  const body = document.querySelector('body');
  const h1 = document.querySelector('h1');

  light.addEventListener('click', () => {
    body.classList.remove('dark');
    light.classList.remove('inactive');
    dark.classList.remove('active');
    h1.classList.remove('dark');  
  });

  dark.addEventListener('click', () => {
    body.classList.add('dark');
    light.classList.add('inactive');
    dark.classList.add('active');
    h1.classList.add('dark');
  });
  
 }