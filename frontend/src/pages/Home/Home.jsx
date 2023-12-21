import React from 'react'
import style from './home.module.css'
export default function Home() {
  return (
    <div className={style.container}>

    <div className={style.hero}>
    <div className={style.heroContent}>
    <h2>Welcom to MahmoodTech <br/>solution webiste</h2>
    <p>In my ideal organization, I envision a dynamic and collaborative
     work environment that fosters innovation and encourages continuous 
     learning. 
     </p>
     <p>
     A company that values open communication, where ideas can
      be freely exchanged, and where each team member feels heard and appreciated. 
      
     </p>
     <p>
     Diversity and inclusion are crucial components, and I appreciate organizations
     that embrace a variety of perspectives, backgrounds, and experiences.
     </p>
     <p>
     A company that values open communication, where ideas can
      be freely exchanged, and where each team member feels heard and appreciated. 
      
     </p>
     <p>
     Diversity and inclusion are crucial components, and I appreciate organizations
     that embrace a variety of perspectives, backgrounds, and experiences.
     </p>
     <div className={style.heroButton}>
      <a>
        <button>Register</button>
        
      </a>
      <a>
      <button>See more</button>
      </a>
     </div>
    </div>

    <div className={style.heroImg}>
    <img src='/images/home-img.jpg' />
    </div>
    </div>
   
    <div className={style.wraper}>
      <div className={style.wraperOuter}>
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
      </div>
    </div>

    <div class={style.footer}>
    asdf
    </div>
    </div>
  )
}
