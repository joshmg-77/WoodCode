import { useState, useEffect } from 'react';
import { Export } from '../utils/createImage';

/*
  Next features goes here, about download snippets,
  
  1° Download with SVG
  2° Download with clipboard
  3° high quality of img 
  4° new sizes [x2 x4 x6] 

*/

const getImage = (openItem) => {
  const [blob, setBlob] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    Export().then((res) => {
      setBlob(res.blobUrl);
      setSuccess(res.ok);
    });
  }, [openItem]);

  return [blob, success];
};

export default getImage;
