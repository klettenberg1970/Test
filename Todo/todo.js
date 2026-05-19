
import { getTodo, createTodo, deleteTodo } from "./todoRoutes.js";

const container = document.querySelector(".todo-container");
console.log(container)

const main = async () => {
    const daten = await getTodo();

    console.log(daten)

    const html = daten.todo.map(todo => {
        console.log(todo.text);
        return `
         <div class="todo-card" data-id="${todo._id}">
         
         <p> ${todo.text}</p>
        
        <button class="delete-button" >x</button>
        
         </div>`;
    }).join("");
    console.log(html);


    container.innerHTML = html;
    console.log(container);
    container.addEventListener("click", (e) => {
        if (e.target.classList.contains("delete-button")) {
            const card = e.target.closest(".todo-card");
            const id = card.dataset.id;  // Holt die 123 aus data-id="123"
            // deleteTodo(id);              
            console.log(`Gelöscht wird die ID: ${id}`)
        }
    });
}

main();