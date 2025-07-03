function generaterpoem(event) {
    event.preventDefault();

    new Typewriter("#poem",{
        Strings: true,
        autoStart: true,
        delay:1,
        cursor: "",

    });



}



let poemFormElement = document.querySelector("#peom-generator-form")
poemFormElement.addEventListener("submit",generaterpoem);