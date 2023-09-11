
        var tablink = document.getElementsByClassName("tablinks")
        var tabcontent=document.getElementsByClassName("tabcontents") 
    function opentab(tabname){
     for(active of tablink){
       active.classList.remove("active")
    
     }
     for(activet of tabcontent){
        activet.classList.remove("activet")
    
     }
     event.currentTarget.classList.add("active")
     document.getElementById(tabname).classList.add("activet")
    }
   
        var typed = new Typed('#element', {
            strings: ['I am a Web Developer','From Pakistan'],
            typeSpeed: 100,
        });
    
    
