
export const getAllGrammars = async ()=>{
  try{
    //public https://api.jsonbin.io/b/605240a4683e7e079c52fef4
    const res = await fetch("https://api.jsonbin.io/b/60523b2a7ffeba41c07c7ea9/",{
      method:"GET",
      headers:{"secret-key": "$2b$10$/fF1p9QVgmI86XHRbcFHIOkdx/OqUnfhnzb7hKJntWK10odrTtBaK"}
    });
    const fin = res.json();
    return fin;
  }catch(Error){
    console.log("promise no resolved ",Error);
  }
}
