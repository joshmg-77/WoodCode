import styled from "styled-components";
import DivContent from "../../Shared/DivContent";
import inst from "../../../assets/logowoodcode.jpg";


const DivSection = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: auto;


  & ul {
    width:100%;
    height:100%;
    display:flex;
    flex-flow:row wrap;
    justify-content:space-around;
  
  }
  & ul li{
    width:auto;
    height:2rem;
  }
  & ul li a{
    display:flex;
    flex-flow:row wrap;
    justify-content:center;
    align-content:center;
    padding:5px;
    margin:5px;

    color:white;
    background:rgba(0,0,0,0.4);
    border:1.5px solid silver;
    border-radius:5px;

    &:hover{
      background:#ffffff;
      color:#000000;
    }
  }
  & ul li span{
    margin-right:3px;

  }
  



`;

function ShareSnippet({ openItem, onBackInner, className }) {
  return (
    <DivContent
      className={className}
      openItem={openItem}
      onBackInner={onBackInner}
    >
      <h2>Share Snippet</h2>
      <DivSection>
        <ul>
          <li>
            <button onClick={()=>{
                let url = window.location.href;
                
                console.log(url);
                //&t=aFlickrPicture

              

                //with react-router history.push()
                window.open(`http://www.facebook.com/sharer.php?u=https://www.fodors.com/wp-content/uploads/2019/10/BestBeachesInCostaRica__HERO_iStock-1003143496.jpg`)
            }}>
              <span>
                <i className="fab fa-facebook" aria-hidden="true"></i>
              </span>
              Facebook
            </button>
          </li>
          <li>

            <a href="#" >
              <span>
                <i
                  className="fab fa-instagram"
                  aria-hidden="true"
                ></i>
              </span>
              Instagram
            </a>
          </li>
          <li>
            <a href="">
              <span>
                <i className="fab fa-telegram" aria-hidden="true"></i>
              </span>
              Telegram
            </a>
          </li>
          <li>
            <a href="">
              <span>
                <i className="fab fa-whatsapp" aria-hidden="true"></i>
              </span>
              Whatsapp
            </a>
          </li>
          <li>
            <a href="">
              <span>
                <i className="fab fa-twitter" aria-hidden="true"></i>
              </span>
              Twitter
            </a>
          </li>
        </ul>
      </DivSection>
    </DivContent>
  );
}

export default ShareSnippet;
