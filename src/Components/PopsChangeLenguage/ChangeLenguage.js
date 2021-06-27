/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import { useSessionState } from '@dannyman/use-store';
import Select, { components } from 'react-select';
import styled from 'styled-components';
import DivContent from '../common/DivContent';
import { getAllGrammars } from '../../utils/GetJsonLanguages.js';

const DivAni = styled.div`
  width: 80%;
  height: 50%;
  margin: 0 auto;
`;
const DivContainerSelect = styled.div`
  width: inherit;
`;
const SpanControl = styled.span`
  cursor: pointer;
  font-size: 25px;
  padding: 5px;
`;
const Control = ({ children, ...props }) => {
  return (
    <components.Control {...props}>
      <SpanControl>
        <i className='fas fa-language'></i>
      </SpanControl>
      {children}
    </components.Control>
  );
};

function ChangeLenguage({ openItem, onBackInner, className, props }) {
  const [options, setOptions] = useState([]);
  const [lang, setLang] = useSessionState('LANG', {
    defaultValue: {},
    isNew: true,
    autoRefresh: true,
  });
  const AllGrammars = async () => {
    const gm = await getAllGrammars();
    setOptions(gm.langsJ);
    setLang(gm.langsJ[9]);
  };
  useEffect(() => {
    AllGrammars();
  }, []);

  const AllStyleReactSelect = {
    option: (base) => ({
      ...base,
      height: '100%',
      ':hover': {
        background: '#0f1123',
      },
      ':focus': {
        background: '#0f1123',
      },
      ':active': {
        background: '#0f1123',
      },
      background: 'rgba(0,0,0,0.2)',
    }),
    menu: (vase) => ({
      ...vase,
      background: 'rgba(0,0,0,1)',
      color: '#fff',
    }),
    control: (container) => ({
      ...container,
      paddingLeft: '.3rem',
      width: '100%',
      background: 'rgba(0,0,0,0.3)',
      color: '#fff',
    }),
    input: (input) => ({
      ...input,
      color: '#fff',
    }),
    singleValue: (place) => ({
      ...place,
      color: '#ffffff',
    }),
  };

  return (
    <DivContent
      className={className}
      openItem={openItem}
      onBackInner={onBackInner}
    >
      <h2>Change Language</h2>

      <DivAni>
        <img
          src='https://media3.giphy.com/media/12BYUePgtn7sis/giphy.gif'
          width='100%'
          height='100%'
          loading='lazy'
          alt='gif programmer wooDCode'
        />
      </DivAni>

      <DivContainerSelect>
        <Select
          {...props}
          isSearchable
          onChange={(w) => setLang({ label: w.label, value: w.value })}
          value={lang}
          components={{ Control }}
          options={options}
          styles={AllStyleReactSelect}
        />
      </DivContainerSelect>
      <p>Language selected: {lang.label}</p>
    </DivContent>
  );
}

export default ChangeLenguage;
