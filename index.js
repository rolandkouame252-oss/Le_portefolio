
          var menu1= document.getElementById('menu2') , nav = document.getElementById('nav') , logo=document.getElementById('logo') , tog=document.getElementById('dog')  , trans= tog.children; 
        
         let ecran= window.innerWidth ; 
         menu1.style.height='0px' ; 
         if (ecran<767){
                nav.style.height='100px';
         }
          tog.addEventListener('click' , T_nav)
       
          function T_nav(){
          if (menu1.style.height=='0px'){
       //      nav.style.height='11cm' ; 
            trans[0].style.transform='rotate(45deg) translate(10px ,10px)' ;
         trans[1].style.transform='rotate(-45deg)' ;
          trans[2].style.opacity='0' ;
           menu1.style.height='300px'; 
          
          
          }
           else if  (menu1.style.height=='300px'){
          menu1.style.height='0px';
             trans[0].style.transform='rotate(0deg) translate(0px ,0px)' ;
         trans[1].style.transform='rotate(0deg)' ;
          trans[2].style.opacity='1' ;
      
        
          }
          }
