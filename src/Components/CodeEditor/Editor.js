import { useEffect, useState } from 'react';
import Prism from 'prismjs';
import styled from 'styled-components';
import { useSessionState } from '@dannyman/use-store';

import '../../assets/prism-live-custom/prism-live.js';
import '../../assets/prism-live-custom/prism-live.css';
import 'prismjs/plugins/data-uri-highlight/prism-data-uri-highlight.js';
import 'prismjs/plugins/filter-highlight-all/prism-filter-highlight-all.js';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';
import 'prismjs/plugins/line-numbers/prism-line-numbers.js';
import 'prismjs/plugins/autoloader/prism-autoloader.min.js';
import 'prismjs/plugins/autolinker/prism-autolinker';
import 'prismjs/plugins/autolinker/prism-autolinker.css';
import 'prismjs/plugins/normalize-whitespace/prism-normalize-whitespace';

const Span = styled.span`
  color: white;
  position: absolute;
  z-index: 1;
  bottom: 40px;
  overflow: hidden;
  text-align: right;
  padding: 3px;
  font-family: 'Indie Flower', cursive;
  font-weight: 800;
  border: 2px solid transparent;
`;

const Editor = () => {
  const [content, setContent] = useState(`/*
  Code example 
  source: https://github.com/joshmg-CA/Conversion-HextoRGB-RGBtoHex/blob/main/RgbtoHex.js 
*/
  const RgbtoHex = (rgb)=>{
      let getNumbers = rgb.replace(/(\\brgb)?([()])/g,"");    
      let numbers = getNumbers.split(",");    
      let hexa0 = parseInt(numbers[0]).toString(16);
      let hexa1 = parseInt(numbers[1]).toString(16);
      let hexa2 = parseInt(numbers[2]).toString(16);

      return \`#\${hexa0+hexa1+hexa2}\`
  }`);

  const [langStore] = useSessionState('LANG', {
    defaultValue: { label: 'javascript', value: 'javascript', Mark: '' },
    isNew: true,
    autoRefresh: true,
  });

  const [prev, setPrev] = useState('javascript');

  const ChangeContent = (e) => {
    setContent(e.target.value);
  };

  const InitChangeLang = () => {
    let cls = document.querySelectorAll('.ChangeLang');
    [...cls].forEach((ele) => {
      ele.classList.replace(
        `language-${prev}`,
        `language-${langStore.value}`
      );
    });
    setPrev(langStore.value);
  };
  useEffect(() => {
    InitChangeLang();
    Prism.highlightAll();
    Prism.plugins.autoloader.languages_path =
      'https://unpkg.com/prismjs@1.15.0/components/';
    Prism.plugins.autoloader.use_minified = true;
  }, [content, langStore, prev]);

  return (
    <>
      <textarea
        className={`prism prism-live language-${langStore.value}  autolinker autoloader prism-toolbar prism-data-uri-highlight filter-highlight-all`}
        data-label='Editor!'
        onChange={(e) => ChangeContent(e)}
        value={content}
      >
        {content}
      </textarea>

      <Span className='watermark'>{langStore.Mark}</Span>
    </>
  );
};

export default Editor;
