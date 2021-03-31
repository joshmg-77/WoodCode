import { useEffect, useState } from "react";
import Prism from "prismjs";
import styled from "styled-components";
import { useSessionState } from "@dannyman/use-store";

import "prismjs/prism-live.js";
import "prismjs/prism-live.css";
import "prismjs/plugins/data-uri-highlight/prism-data-uri-highlight.js";
import "prismjs/plugins/filter-highlight-all/prism-filter-highlight-all.js";
import "prismjs/plugins/line-numbers/prism-line-numbers.css";
import "prismjs/plugins/line-numbers/prism-line-numbers.js";
import "prismjs/plugins/autoloader/prism-autoloader.min.js";
import "prismjs/plugins/autolinker/prism-autolinker";
import "prismjs/plugins/autolinker/prism-autolinker.css";
import "prismjs/plugins/normalize-whitespace/prism-normalize-whitespace";

const Span = styled.span`
  color: white;
  position: absolute;
  z-index: 1;
  bottom: 40px;
  overflow: hidden;
  text-align: right;
  padding: 3px;
  font-family: "Indie Flower", cursive;
  font-weight: 800;
  border: 2px solid transparent;
`;

const Editor = () => {
  const [content, setContent] = useState(`.p{
    color:red;
  }
  <head></head>
  async function(){
    let valor = "hello"
  }
  
  class public VOi{
    public static void main(){
      System.out.println("hola");
    }
  }
  #python
  print("hi world")
  `);

  const [langStore] = useSessionState("LANG", {
    defaultValue: { label: "javascript", value: "javascript",Mark:""},
    isNew: true,
    autoRefresh: true,
  });

  const [prev, setPrev] = useState("javascript");

  const ChangeContent = (e) => {
    setContent(e.target.value);
  };



  useEffect(() => {
    //Into of this Effect for prevent es-lint warnings 
    const InitChangeLang = () => {
      let cls = document.querySelectorAll(".ChangeLang");
      [...cls].forEach((ele) => {
        ele.classList.replace(
          `language-${prev}`,
          `language-${langStore.value}`
        );
      });
      setPrev(langStore.value);
    };
    InitChangeLang();
    Prism.highlightAll();
    Prism.plugins.autoloader.languages_path =
      "https://unpkg.com/prismjs@1.15.0/components/";
    Prism.plugins.autoloader.use_minified = true;

  }, [content, langStore,prev]);

  return (
    <>
      <textarea
        className={`prism prism-live language-${langStore.value} line-numbers autolinker autoloader prism-toolbar prism-data-uri-highlight filter-highlight-all`}
        data-label="Editor!"
        onChange={(e) => ChangeContent(e)}
        value={content}
      >
        {content}
      </textarea>

      <Span className="watermark">{langStore.Mark}</Span>
    </>
  );
};

export default Editor;
