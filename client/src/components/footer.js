class Footer extends HTMLElement {
    constructor() {
        super()
        const shadow = this.attachShadow({ mode: 'open' });

        shadow.innerHTML = /*html*/`
            <style>
                    
                #footer{
                    text-align:center;
                   
                }
                     #footer a {
                   color:white;
                    text-decoration: none;  /* Keine Unterstreichung */
                    margin-left: 5px;
                }         
               
            </style>
            
            <div id ='footercontainer'>
                 <p id ='footer'> &copy;  2026 Stefan Basten  |  Köln-Klettenberg | 
                    <span>
                         <a href="/impressum"  rel="noopener noreferrer">Impressum</a>
                        </span> | 
                </p>
            </div>
           
            `;
    }
}

customElements.define('webcomponent-footer', Footer);