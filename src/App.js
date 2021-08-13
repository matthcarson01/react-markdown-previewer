import { useState } from 'react';
import marked from 'marked';
import './App.css';

function App() {

  const [value, setValue] = useState('# Marked in the browser\n\nRendered by **marked**.');
  const markedValue = marked(value);
  const handleChange = (event) => {
    setValue(event.target.value);

  }
  return (
    <main>
      <section>
        <textarea
          id="preview"
          onChange={handleChange}
          value={value}
        ></textarea>
      </section>
      <section>
        <div
          id="preview"
          dangerouslySetInnerHTML={{ __html: markedValue }}
        />
      </section>
    </main>
  );
}

export default App;
