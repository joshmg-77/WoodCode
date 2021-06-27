/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Export } from '../../utils/createImage';
import Button from '../common/Button';
import DivContent from '../common/DivContent';
import Loader from '../common/loader';

const Input = styled.input`
  width: 100%;
  height: 40px;
  margin: auto;
  padding-left: 10px;
  outline-color: transparent;
  border: 1px solid silver;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  color: white;

  &::placeholder {
    color: white;
    outline-color: transparent;
  }
  &:focus {
    outline-color: transparent;
  }
`;
const P = styled.p`
  color: #f4eeed;
  text-align: center;
  & span {
    color: #adeecf;
    font-weight: 700px;
    font-size: 19px;
  }
`;

const ExportSnippet = ({ openItem, onBackInner }) => {
  const [FileName, setFileName] = useState('Snippet_By_WoodCode');
  const [messageExport, setMessageExport] = useState(false);
  const [blob, setBlob] = useState('link');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    Export().then((res) => {
      setBlob(res.blobUrl);
      setSuccess(res.ok);
    });
  }, [openItem]);

  const DownloadSnippet = () => {
    //we should be refactor it
    setMessageExport(true);
  };
  const HandledFileName = (e) => {
    console.log(FileName);
    setFileName(e.target.value);
  };
  const OpenNewTab = () => {
    /*Error not allowed to navigate top frame to data url base64 image*/
    window.open(
      blob,
      '_blank'
    ).document.innerHTML = `<iframe src=${blob} frameborder="0" style="border:0;  top:0px; left:0px; bottom:0px; right:0px; width:100%; height:100%;overflow:none;" allowfullscreen></iframe>`;
  };

  return (
    <>
      <Loader load={success} />
      <DivContent
        className='drop'
        openItem={openItem}
        onBackInner={onBackInner}
      >
        <div className='body'>
          <h2 className='title'>Download Snippet</h2>
          <Input
            type='text'
            value={FileName}
            onChange={(o) => HandledFileName(o)}
            placeholder='file name'
          />

          <div className='divBtns'>
            <Button
              background='rgba(0,0,0,0.3)'
              borderRadius='7px'
              border='2px solid silver'
              hoverColor='rgba(0,0,0,0.7)'
              width='100px'
              height='30px'
              onClick={() => OpenNewTab()}
              rel='noopener noreferrer'
            >
              Preview
            </Button>
            <Button
              background='rgba(0,0,0,0.3);'
              borderRadius='7px'
              border='2px solid silver'
              hoverColor='rgba(0,0,0,0.7)'
              width='100px'
              height='30px'
              onClick={() => DownloadSnippet()}
              href={blob}
              download={FileName}
            >
              Export
            </Button>
          </div>
          <P>
            {messageExport && (
              <>
                Your Snippet with file name: <span>{FileName}</span> was
                exported
              </>
            )}
          </P>
        </div>
      </DivContent>
    </>
  );
};

export default ExportSnippet;
