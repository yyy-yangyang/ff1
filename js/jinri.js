function a(){
      var container=document.getElementById('container');
      var list = document.getElementById('list');
      var next = document.getElementById('next');
      var prev = document.getElementById('prev');
        function anmiate(q){
          var newLeft = parseInt(list.style.left) + q;
          list.style.left=newLeft + 'px';
        
        if(newLeft < -600){
          list.style.left = -20 + 'px';
        }
        if(newLeft > -20){
          list.style.left = -600 + 'px';
        }
    }
      next.onclick = function(){
        anmiate(-205);      
      }
      prev.onclick = function(){
        anmiate(205);
      }
       
     
     }