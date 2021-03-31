import styled,{keyframes} from "styled-components";
import Logo from "../../assets/161677264542504006.png";

const Footer = styled.footer`
  width: 100%;
  max-width: 900px;
  height: auto;
  margin: auto;
  margin-top: 120px;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(5px);
  color: white;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-content: space-around;
  padding: 20px;

`;
const SocialMedia = styled.div`
  width: 50%;
  height: auto;
  display: flex;
  position: relative;
  flex-flow: row wrap;
  justify-content: space-around;
  margin: 15px auto;
  bottom: 0;
`;
const Icon = styled.i`
  color: white;
  font-size: 40px;
`;
const MoreInformation = styled.div`
  padding: 20px;
  border-top: 2px solid white;
  text-align: center;
  font-style: italic;
  letter-spacing: 2.5px;
`;
const UL = styled.ul`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;

  & li {
    padding: 10px;
    cursor: pointer;
    border: 1px solid white;
    margin: 5px;
  }
  & li a {
    text-decoration: none;
    color: white;
  }
  & li a:hover {
    text-decoration: underline;
  }
`;
const key = keyframes`
  from{
    transform:rotateX(-25deg);
  }to{
    transform:rotateX(25deg);
  }
`;
const LogoWd = styled.div`
  width:100%;
  margin:auto;
  display:flex;
  justify-content:center;
  perspective:600px;
  & img{
    width:70%;
    min-width:35%;
    height:auto;  
    transform-style: preserve-3d;
    animation:${key} 3s linear infinite alternate;  
  }
`;
const CopyRight = styled.div`
   border: 2px solid white;
    width: 100%;
    padding: 10px;
    margin-top: 50px;
    text-align:center;
    & span{
      font-family: "Indie Flower", cursive;
      font-weight: 800;
      font-size:25px;
    }
`;

export default function FooterComponent() {
  return (
    <>
      <Footer>
        <SocialMedia>
          <a
            href="https://www.linkedin.com/in/joshua-martínez-garcía-b652691a3"
            alt="profile Linkedin" title="My profile Linkedin"
          >
            <Icon className="fab fa-linkedin"></Icon>
          </a>
          <a
            href="https://github.com/joshmg-CA"
            alt="profile Github" title="My profile in Github"
          >
            <Icon className="fab fa-github"></Icon>
          </a>
          <a
            href="https://www.instagram.com/josh_martinez77/"
            alt="profile Instagram" title="My profile in Instagram"
            
          >
            <Icon className="fab fa-instagram"></Icon>
          </a>
        </SocialMedia>

        <MoreInformation>
          <UL>
            <li>
              <a href="https://github.com/joshmg-CA/WoodCode/issues/new" title="Report issues">Report Issue</a>
            </li>
            <li>
              <a href="https://github.com/joshmg-CA/WoodCode" title="WoodCode" alt="repo WoodCode github">Resource</a>
            </li>
            <li>
              <a href="https://t.me/josh_mg4?text=hola" title="send feedback" alt="feedback telegram">Send me your feedback</a>
            </li>
            <li>
              <a href="https://github.com/joshmg-CA/WoodCode/pulls" title="new feautre" alt="feautre in process">Upload your own theme</a>
            </li>
          </UL>
        </MoreInformation>
       
        <LogoWd>
           <img src={Logo} alt="Logo woodcode"/> 
        </LogoWd>
        <CopyRight>
          <span>WoodCode 2021 </span>
        </CopyRight>
      </Footer>
    </>
  );
}
