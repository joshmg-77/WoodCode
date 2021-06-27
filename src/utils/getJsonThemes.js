const myAPIKeyThemes = process.env.REACT_APP_API_KEY_Themes;

export const getAllThemes = async () => {
  try {
    //public https://api.jsonbin.io/b/605240a4683e7e079c52fef4
    const res = await fetch(
      'https://api.jsonbin.io/b/60d79d0f8a4cd025b7a6673f/',
      {
        method: 'GET',
        headers: { 'secret-key': `$2b$10$${myAPIKeyThemes}` },
      }
    );
    const fin = res.json();
    return fin;
  } catch (Error) {
    console.log('promise no resolved ', Error);
  }
};
