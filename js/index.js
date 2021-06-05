class index 
{
    constructor() { this.main() }

    main()
    {
        const checkbox = document.querySelector(".toggle-box input");

        checkbox.addEventListener("change", this.fnChange);
    }

    fnChange()
    {
        const cards = document.querySelector(".cards");

        cards.classList.toggle("show-monthly");
    }
}

window.onload = () => new index();