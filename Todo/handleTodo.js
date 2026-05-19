import { getTodo, deleteTodo } from "./todoRoutes.js";

const container = document.querySelector(".todo-container");

export const handleTodo = async () => {
    const warten = document.createElement('p');
    warten.className = 'warten'; 
    warten.textContent = 'Bitte warten bis der Server geladen ist...';

    container.innerHTML = '';
    container.appendChild(warten);
    
    const daten = await getTodo();
    
    if (daten && daten.todo) {
        const html = daten.todo.map(todo => {
            return `
                <div class="todo-card" data-id="${todo._id}">
                    <p class="text">${todo.text}</p>
                    <hr>
                    <div class="todo-zeile">  
                        <p class="datum">
                            ${new Date(todo.createdAt).toLocaleDateString('de-DE')} - ${new Date(todo.createdAt).toLocaleTimeString('de-DE', { hour: '2-digit', minute: '2-digit' })}
                        </p>
                        <button class="delete-button">x</button>
                    </div>
                </div>
            `;
        }).join("");
        
        container.innerHTML = html;
        
        container.addEventListener("click", async (e) => {
            if (e.target.classList.contains("delete-button")) {
                const userConfirmed = confirm("Wirklich löschen?");
                if (!userConfirmed) return;
                
                const card = e.target.closest(".todo-card");
                const id = card.dataset.id;
                
                await deleteTodo(id);
                await handleTodo();
            }
        });
    }
};