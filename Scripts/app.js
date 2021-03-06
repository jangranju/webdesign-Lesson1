// IIFE -> Immediately Invoked Function Expression

(function(){

    function Start()
    {
        console.log("App started...");

        let firstHeading = document.getElementById("firstHeading");

        firstHeading.textContent = "Goodbye Cruel World!"

        // document.getElementById("firstHeading").textContent = "Goodbye Cruel World!"

        firstHeading.style.fontWeight = "bold"

        let main = document.getElementsByTagName("main")[0];

        let newH2 = document.createElement("h2");
        newH2.setAttribute("class", "Display-5");
        newH2.textContent = "Secondary heading";

        main.appendChild(newH2);
    }

    window.addEventListener("load", Start);
})();