import { useState } from 'react';
import marked from 'marked';
import './App.css';

function App() {

  const initialValue = "# This is a header\n\n## This is a sub-heading...\nThis is a [links](https://www.freecodecamp.org)\n\nThis is some inlinecode, `<div></div>`.\n\n```\n// this is multi-line code:\n\nfunction anotherExample(firstLine, lastLine) {\n  if (firstLine == '```' && lastLine == '```') {\n    return multiLineCode;\n  }\n}\n```\n\nYou can also make text **bold**... whoa!\n\n\nThis is a\n> Block Quotes!\n\n\n\n- And of course there are lists.\n  - Some are bulleted.\n     - With different indentation levels.\n        - That look like this.\n\nHere is a image (of me by the way)\n\n![freeCodeCamp Logo](https://media-exp1.licdn.com/dms/image/C5603AQFm4pQ9jyKgNw/profile-displayphoto-shrink_200_200/0/1517704748282?e=1634169600&v=beta&t=R1L3pcGKgoV7u9f32qvtW6694zyZoAmKJha_URzB5dk)";
  const [value, setValue] = useState(initialValue);
  const markedValue = marked(value);
  const handleChange = (event) => {
    setValue(event.target.value);

  }
  return (
    <main>
      <section>
        <textarea
          id="editor"
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
