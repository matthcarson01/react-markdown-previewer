import { useState } from 'react';
import marked from 'marked';
import './App.css';

function App() {
  return (
    <main>
      <section>
        <textarea id="preview"></textarea>
      </section>
      <section>
        <div 
          id="preview"
          dangerouslySetInnerHTML={{__html: data}}
        />
      </section>
    </main>
  );
}

export default App;
