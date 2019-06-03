import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import App from '../app/components/app'

export default store => {
  const content = renderToString(
    <Provider store={store}>
        <App />
    </Provider>
  );


  return `
  <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <title>Todo App</title>
      </head>
      <body>
      
      <div id="root">${content}</div>
    
      <script src="dist/bundle.js"></script>
      </body>
      </html>
  `;
};