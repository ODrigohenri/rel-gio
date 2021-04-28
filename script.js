function load() {
          
   var msg = window.document.getElementById('msg')
   var img = window.document.getElementById('imagem')
   var data = new Date()
   var hour = data.getHours()
   var minute = data.getMinutes()
   var second = data.getSeconds()
  
   msg.innerHTML = hour.toString().padStart(2, '0') + ":" + minute.toString().padStart(2, '0') + ":" + second.toString().padStart(2, '0');
    if(hour >= 0 && hour < 12) {
       document.body.style.background = "url(https://cdn.pixabay.com/photo/2018/04/30/15/26/nature-3362956_960_720.jpg)";
       document.body.style.backgroundSize = "cover";
       document.body.style.backgroundRepeat = "no-repeat";
       document.body.style.width =  "100vw";
       document.body.style.height =  "100vh";
       document.body.style.margin =  "0 auto";     
    }else if (hour >= 12 && hour < 18) {
       document.body.style.backgroundImage = "url(https://cdn.pixabay.com/photo/2013/04/04/12/34/mountains-100367_960_720.jpg)";
       document.body.style.backgroundSize = "cover";
       document.body.style.backgroundRepeat = "no-repeat";
       document.body.style.width =  "100vw";
       document.body.style.height =  "100vh";
       document.body.style.margin =  "0 auto";     
    }else{
       document.body.style.background = "url(https://www.prefeitura.sp.gov.br/cidade/secretarias/upload/estrelas.jpg)";
       document.body.style.backgroundSize = "cover";
       document.body.style.backgroundRepeat = "no-repeat";
       document.body.style.width =  "100vw";
       document.body.style.height =  "100vh";
       document.body.style.margin =  "0 auto";     
    }
    setTimeout('load()',500);
  }