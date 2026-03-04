class Footer extends HTMLElement {
    constructor() {
        super()
        const shadow = this.attachShadow({ mode: 'open' });

        shadow.innerHTML = /*html*/`
            <style>
                #footer{
                    text-align:center;
                    font-family:Arial, Helvetica, sans-serif;
                    color:var(--color-white)
                }
            
            </style>
           
            <p id ='footer'> &copy;  2026 Stefan Basten  |  Köln-Klettenberg</p>
        `;
    }



}

customElements.define('webcomponent-footer', Footer);