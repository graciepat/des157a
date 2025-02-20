(function(){
    "use strict";
    console.log("reading JS");

    const whale = document.querySelector('#whale');
    const tomato = document.querySelector('#tomato');
    const cheese = document.querySelector('#cheese');
    const plants = document.querySelector('#plants');
    const hearts = document.querySelector('#hearts');
    const bread = document.querySelector('#bread');
    const cloud = document.querySelector('#cloud');
    const egg = document.querySelector('#egg');


    whale.addEventListener('click', function(event){
        event.preventDefault();

        document.querySelector('#overlay-1').className = 'overlay showing';
  
    });

    tomato.addEventListener('click', function(event){
        event.preventDefault();

        document.querySelector('#overlay-2').className = 'overlay showing';

    });

    cheese.addEventListener('click', function(event){
        event.preventDefault();

        document.querySelector('#overlay-3').className = 'overlay showing';

    });

    plants.addEventListener('click', function(event){
        event.preventDefault();

        document.querySelector('#overlay-4').className = 'overlay showing';

    });

    hearts.addEventListener('click', function(event){
        event.preventDefault();

        document.querySelector('#overlay-5').className = 'overlay showing';

    });

    bread.addEventListener('click', function(event){
        event.preventDefault();

        document.querySelector('#overlay-6').className = 'overlay showing';

    });

    cloud.addEventListener('click', function(event){
        event.preventDefault();

        document.querySelector('#overlay-7').className = 'overlay showing';

    });

    egg.addEventListener('click', function(event){
        event.preventDefault();

        document.querySelector('#overlay-8').className = 'overlay showing';

    });

    const closeBttns = document.querySelectorAll('.close');
    const allOverlays = document.querySelectorAll('.overlay');

    for(const eachCloseBttn of closeBttns){
        eachCloseBttn.addEventListener('click', function(event){
            console.log('clicked');
            event.preventDefault();
            for( const eachOverlay of allOverlays){
                eachOverlay.className = 'overlay hidden';
            }
        });
    }

    document.addEventListener('keydown', function(event){
        if(event.key === 'Escape') {
            for( const eachOverlay of allOverlays){
                eachOverlay.className = 'overlay hidden';
            }
        }
    });

})();