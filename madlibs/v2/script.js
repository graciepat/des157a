(function(){
    "use strict";
    console.log("reading JS");

    const myForm = document.querySelector('form');
    const errorText = document.querySelector('#errorText');
    const madlib = document.querySelector('#madlib');

    myForm.addEventListener('submit', function(event){
        event.preventDefault();

        const name = document.querySelector('#name').value;
        const adjective1 = document.querySelector('#adjective1').value;
        const produce = document.querySelector('#fruitorveg').value;
        const verb = document.querySelector('#verb').value;
        const food = document.querySelector('#food').value;
        const adjective2 = document.querySelector('#adjective2').value;
        const bodypart = document.querySelector('#bodypart').value;
        const liquid = document.querySelector('#liquid').value;

        let myText;

        if (name == "") {
            myText="Please provide your name";
            document.querySelector('#name').focus;
            errorText.innerHTML = myText;
        }

        else if (adjective1 == "") {
            myText="Please provide an adjective";
            document.querySelector('#adjective1').focus;
            errorText.innerHTML = myText;
        }

        else if (produce == "") {
            myText="Please provide a fruit or veggie";
            document.querySelector('#fruitorveg').focus;
            errorText.innerHTML = myText;
        }

        else if (verb == "") {
            myText="Please provide a verb ending with ing";
            document.querySelector('#verb').focus;
            errorText.innerHTML = myText;
        }

        else if (food == "") {
            myText="Please provide a plural food";
            document.querySelector('#food').focus;
            errorText.innerHTML = myText;
        }

        else if (adjective2 == "") {
            myText="Please provide another adjective";
            document.querySelector('#adjective2').focus;
            errorText.innerHTML = myText;
        }

        else if (bodypart == "") {
            myText="Please provide a body part";
            document.querySelector('#bodypart').focus;
            errorText.innerHTML = myText;
        }

        else if (liquid == "") {
            myText="Please provide a liquid";
            document.querySelector('#liquid').focus;
            errorText.innerHTML = myText;
        }

        else {
            myText = `Today’s culinary masterpiece, created by the one and only ${name}, is a ${adjective1} ${produce} soup. It features ${verb} ${food} and a ${adjective2} ${bodypart} of ${liquid}. Enjoy!!`;
            document.querySelector('#name').value = "";
            document.querySelector('#adjective1').value = "";
            document.querySelector('#fruitorveg').value = "";
            document.querySelector('#verb').value = "";
            document.querySelector('#food').value = "";
            document.querySelector('#adjective2').value = "";
            document.querySelector('#bodypart').value = "";
            document.querySelector('#liquid').value = "";
        
            madlib.innerHTML = myText;
            
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
        }
    });
})();