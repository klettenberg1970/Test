class Footer extends HTMLElement {
    constructor() {
        super()
            const shadow = this.attachShadow({ mode: 'open' });
        
        shadow.innerHTML = /*html*/`
            <style>
                #footer{
                    text-align:center;
                    background-color: #f1f1f1;
                    color:var(--primary-color);
                     padding: 1rem;
                     margin-bottom: 1rem;
                }
            
            </style>
           
            <p id ='footer'> &copy; 2026 Stefan Basten | Köln-Klettenberg</p>
        `;
    }


    
}

customElements.define('webcomponents-footer', Footer);