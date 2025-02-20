(function(){
    "use strict";
    console.log("reading JS");

    const image = document.querySelectorAll('img');

    image.addEventListener('click', function(event){
        event.preventDefault();

        document.querySelector('#overlay').className = 'showing';

            document.querySelector('.close').addEventListener('click', function(event){
                event.preventDefault();
                document.querySelector('#overlay').className = 'hidden';
            });
        
            document.addEventListener('keydown', function(event){
                if(event.key === 'Escape') {
                    document.querySelector('#overlay').className = 'hidden';
                }
            });


    });

})();