import {useState} from "react";
import style from "./App.module.scss";
import image from "./assets/images/illustration-article.svg";
import avatar from "./assets/images/image-avatar.webp";

const App = () => {
  const [isHovered, setIsHovered] = useState(false);


  return (
    <div className={style.mainBod}>
      <div className={isHovered ? `${style.mainHov} ${style.mainDiv}` : style.mainDiv}>
        <img src={image} className={style.mainImg} alt="main img" />
        <div className={style.learningDiv}>Learning</div>
        <p>Published 21 December 2023</p>
        <p className={isHovered ? style.specialPH : style.specialPU} onMouseEnter ={ () => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>HTML and CSS foundation</p>
        <p className={style.greyP}>
          These languages are the backbone of every website, defining structure,
          content and presentation.
        </p>
        <div className={style.imgParaDiv}>
        <img src={avatar} className={style.avatar} alt="avatar"/>
        <p>Greg Hooper</p>
        </div>
       
      </div>
    </div>
  );
};

export default App;
