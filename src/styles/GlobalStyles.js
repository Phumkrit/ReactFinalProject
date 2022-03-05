import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle` 
.light-theme{
    --primary-color: #007bff;
    --primary-color-light: #057FFF;
    --secondary-color: #ff7675;
    --background-dark-color: #F1F1F1;
    --background-dark-grey: #e4e4e4;
    --border-color: #cbced8;
    --background-light-color: #F1F1F1;
    --background-light-color-2: rgba(3,127,255,.3);
    --white-color: #151515;
    --font-light-color: #313131;
    --font-dark-color: #313131;
    --font-dark-color-2: #151515;
    --sidebar-dark-color: #E4E4E4;
    --scrollbar-bg-color: #383838;
    --scrollbar-thump-color: #6b6b6b;
    --scrollbar-track-color: #383838;
  
}
.dark-theme{
    --primary-color: #007bff;
    --primary-color-light: #057FFF;
    --secondary-color: #6c757d;
    --background-dark-color: #10121A;
    --background-dark-grey: #191D2B;
    --border-color: #2e344e;
    --background-light-color: #F1F1F1;
    --background-light-color-2: rgba(3,127,255,.3);
    --white-color: #FFF;
    --font-light-color: #a4acc4;
    --font-dark-color: #313131;
    --font-dark-color-2: #151515;
    --sidebar-dark-color: #191D2B;
    --scrollbar-bg-color: #383838;
    --scrollbar-thump-color: #6b6b6b;
    --scrollbar-track-color: #383838;
   
    
}

*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-size: 1.2rem
    list-style: none;
    text-decoration none;
    font-family: 'Fredoka', sans-serif;
}

body{
    background-color: var(--background-dark-color);
    color: var(--font-light-color)
}

a{
    font-family: inherit;
    color: inherit;
    font-size: inherit;
    
}

h1{
    font-size: 3rem;
    color: var(--white-color);
    span{
        font-size:3rem;
    }
}

span{
    color: var(--primary-color)
}

.light-dark-mode{
    position: fixed;
    right: 0;
    top: 50%;
    background-color: var(--background-light-color-2);
    width: 6.5rem;
    height: 2.5rem;
    z-index: 15;
    display: flex;
    align-items: center;
    justify-content: center;
    svg{
      display: flex;
      align-items: center;
      font-size: 1.7rem;
      color: var(--white-color);
    }
  }

  .myphoto{
      width: 30%;
  }

  .flexbox-container {
    display: flex;
    flex-direction: row;
}


.v1{
    border-left: 1px solid;
    height: 500px; 
    padding-left: 10rem;
}

.desc{
    color: black;
}

.vertical-timeline-element-title{
    color: black;

}

.vertical-timeline-element-subtitle{
    color: black;
}

.Progress{
    width: 70%;
    padding-bottom: 50px;
    
}
.center{
  padding-top: 50;
  display: flex;
  justify-content: center;
  align-items: center;
  
.lebel{
    padding: 0 10 0 10;
    font-size: 22px;
}
  
}
.row{
    flex-direction: initial;
    align-items: center;
    .left-content{
        margin-right: 67rem;
        font-size: 22px;
    }
  
    .mid{
      font-size: 22px;
      
    }
    .right{
        margin-left: 67rem;
        font-size: 22px;
    }
  }
.cirpro{
    width: 20%;
    padding-top: 20px;
    margin: 50px;
    font-size: 16px;
}

.center-row{
    display: flex;
  justify-content: center;
  align-items: center;
  
}

.title-skills{
    padding-bottom: 50px;
}

.Progressbar{
    margin-top: 60px;
}

.coverletter{
    width: 85%;
}



.card:Hover{
    filter: drop-shadow(30px 10px 4px #2031FF);
}

.cardgithub:Hover{
    filter: drop-shadow(30px 10px 4px #4444dd);
}

.cardline:Hover{
    filter: drop-shadow(30px 10px 4px #20FF20);
}
`;

export default GlobalStyle;
