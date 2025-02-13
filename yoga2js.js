const items = document.querySelectorAll('.carousel .list .item');
            let current=0;

            function showslide(ind){
                items.forEach((item, i) =>{
                    if(i === ind){
                        item.style.opacity = "1";
                        item.style.pointerEvents="auto";

                        let elements = item.querySelectorAll('.title, .topic, .des');
                        elements.forEach(el => {
                            el.style.animation = "none";  
                            el.offsetHeight; 
                            el.style.animation = ""; 
                            });
                    }else{
                        item.style.opacity = "0";
                        item.style.pointerEvents="none";
                    }
                    item.style.transition = "opacity 1s ease";
                }
            );
            }
            document.getElementById("nx").addEventListener('click', ()=>{
                current = (current+1) % items.length;
                showslide(current);
            })

            document.getElementById("pr").addEventListener('click', ()=>{
                if(current === 0){
                    current = items.length-1;
                }else{
                    current = (current-1) % items.length;
                }
                showslide(current);
            })
            showslide(current);

e1 = document.getElementById("nx");
e2 = document.getElementById("pr");

document.querySelectorAll("#scroll").forEach(button => {
    button.addEventListener("click", function() {
        showslide(5);
        
        e1.style.opacity = "0";
        e2.style.opacity = "0";

        e1.style.pointerEvents = "none";
        e2.style.pointerEvents = "none";

})
});
const inputs = document.querySelectorAll("input");
        inputs.forEach(input => {
            input.addEventListener("input", function() {
                input.style.color = "yellow";
            });
        });

        document.querySelector("form").addEventListener("submit", function(event) {

            const p = document.getElementById("pp");
            const c = document.getElementById("cc");
            const a = document.getElementById("name");
            const e = document.getElementById("email");
            const ph = document.getElementById("ph");

            let emap = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            let pmap = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}$/;
            let phmap = /^[6789]\d{9}$/;

            if (a.value.trim() === "" || e.value.trim() === "") {
                alert("All fields must be filled.");
                event.preventDefault();
            } else if (!emap.test(e.value)) {
                alert("Please enter a valid email address.");
                event.preventDefault();
            } else if (!phmap.test(ph.value)) {
                alert("Please enter a valid phone number.");
                event.preventDefault();
            } else if (p.value.trim() === "" || c.value.trim() === "") {
                alert("Password cannot be empty.");
                event.preventDefault();
            } else if (!pmap.test(p.value)) {
                alert("Password must be 8 characters long and include an uppercase and lowercase letter and a special character.");
                event.preventDefault();
            } else if (c.value != p.value) {
                alert("Passwords do not match.");
                event.preventDefault();
            } else {
                this.submit();
            }
        });

        document.querySelectorAll("#logo").forEach(button => {
            button.addEventListener("click", function() {
                showslide(0);
                e1.style.opacity = "1";
                e2.style.opacity = "1";
                e1.style.pointerEvents = "auto";
                e2.style.pointerEvents = "auto";
            });
        });
        