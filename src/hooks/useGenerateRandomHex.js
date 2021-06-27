import { useState, useEffect } from 'react';

const useGenerateRandomHex = () => {
  const [HexString, setHexString] = useState('');
  let letters = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
  ];
  const GenerateChar = () => {
    let hexRandom = ['#'];
    for (let i = 0; i <= 5; i++) {
      let random = Math.ceil(Math.random() * 15);
      hexRandom.push(letters[random]);
    }
    let toStr = hexRandom.join('');
    setHexString(toStr);
  };
  useEffect(() => {
    GenerateChar();
  }, []);
  return [HexString];
};
export default useGenerateRandomHex;
