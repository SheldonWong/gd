window.onload = function () {
            var container = document.getElementById('container');
            var list = document.getElementById('list');
            var buttons = document.getElementById('buttons').getElementsByTagName('span');
            var prev = document.getElementById('prev');
            var next = document.getElementById('next');
            var index = 1;
            var timer;

            function showButton(){
                for (var i = 0; i < buttons.length; i++) {
                    if(buttons[i].className == 'on'){
                        buttons[i].className = ' ';
                        break;
                    }
                };
                buttons[index-1].className = 'on';
            }

            function play(){
                    timer = setInterval(function(){
                      next.onclick()},
                     6130);
            }
            function stop(){
                clearInterval(timer);
            }

            function animate(offset){
                var newLeft = parseInt(list.style.left) + offset;
                var time = 300;
                var interval = 10;
                var speed = offset/(time/interval);

                function go(){
                    if((speed < 0 && parseInt(list.style.left) > newLeft) || (speed > 0 && parseInt(list.style.left) < newLeft)){
                        list.style.left = parseInt(list.style.left) + speed + 'px';
                        setTimeout(go, interval);
                    }
                
                    else{
                        list.style.left = newLeft  + 'px';
                        if(newLeft > -1226){
                            list.style.left = -6130 + 'px';
                        }
                        if(newLeft < -6130){
                            list.style.left = -1226 + 'px';
                        }
                    }

                }
                go();
            }
            
            next.onclick = function(){
                if (index == 5) {
                    index = 1;
                } 
                else{
                    index++;
                }
                
                showButton();
                animate(-1226);
                
                
            }
            prev.onclick = function(){
                if (index == 1) {
                    index = 5;
                } 
                else{
                    index--;
                }
                showButton();
                animate(1226);
                
            }

            container.onmouseover = stop;
            container.onmouseout = play;

            play();
        }