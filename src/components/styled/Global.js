import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    
 body{
    overflow-y: scroll;
     background: ${({theme})=> theme.bg};
     color: ${({theme})=> theme.color};
     &::-webkit-scrollbar-track{
        background-color: ${({theme})=> theme.bg};
    }
    &::-webkit-scrollbar {
        width: 5px;
    }
    &::-webkit-scrollbar-thumb {
        /* background: #E7E7E7 !important;  */
        background:${({theme})=> theme.scrollColor} !important; 
        
        border-radius:10px;
        -webkit-box-shadow: none !important;
    }
 }   
    
.sch-ovly{
  /* background: #ccc; */
  position: fixed;
  width: 100%;
  bottom: 0;
  left: 0;
  top: 78px;
  /* padding: 40px; */
  display: none;
  justify-content: end;
}

.sch-ovly.active{
  display: flex;
}

.sch-movie-list{
  height: 100vh;
  width: 450px;
  box-shadow: -65px -15px 24px #000000;
  /* display: grid;
  grid-template-columns: repeat(10,1fr); */
  /* position: absolute; */
  background: #000000f7;
    top: 0;
  bottom: 0;
  overflow-y: auto;
  padding-bottom: 100px;
  &::-webkit-scrollbar-track{
      background-color: transparent;
  }
  &::-webkit-scrollbar {
      width: 5px;
  }
  &::-webkit-scrollbar-thumb {
      /* background: #E7E7E7 !important;  */
      background:transparent; 
      
      border-radius:10px;
      -webkit-box-shadow: none !important;
  }
}

.sch-close{
  position: fixed;
  right:18px;
  top:75px;
  z-index: 5;
  width: 35px;
  height: 35px;
  border: none;
  border-radius: 40px;
  cursor: pointer;
  
}

.paginate-next{
  display: flex;
  position: fixed;
  bottom: 15px;
  right: 15px;
  align-items:center;
  label{
    margin:10px;
  }
  button{
    width: 42px;
    height: 42px;
    border-radius: 50px;
    border: none;
    cursor: pointer;
    background: #4d4d4d;
    color: #fff;
  }
}

.particle {
	position: absolute;
 	border-radius: 50%;
}

@for $i from 1 through 30 {
	@keyframes particle-animation-#{$i} {
		100% {
			transform: translate3d((random(90) * 1vw), (random(90) * 1vh), (random(100) * 1px));
		}
	}
	
	.particle:nth-child(#{$i}){
		animation: particle-animation-#{$i} 60s infinite;
		$size: random(5) + 2 + px;
		opacity: random(100)/100;
		height: $size;
		width: $size;
		animation-delay: -$i * .2s;
		transform: translate3d((random(90) * 1vw), (random(90) * 1vh), (random(100) * 1px));
		background: hsl(random(360), 70%, 50%);
	}
}





`

export default GlobalStyles