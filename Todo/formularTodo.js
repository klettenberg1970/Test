// formularTodo.js
import { createTodo } from "./todoRoutes.js";
import { handleTodo } from "./handleTodo.js";

const toggle = document.querySelector('.aufklappen');
const todoInput = document.querySelector('#formular');

export const todoFormular = () => {  // ← Kein async nötig
    toggle.addEventListener('click', () => {
        todoInput.classList.toggle('sichtbar');
    });

    todoInput.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const formData = new FormData(e.target);
        const neuTodo = formData.get("newTodo");
        
        await createTodo(neuTodo);
        
        todoInput.classList.remove('sichtbar');
        e.target.reset();
        
        await handleTodo();  // ← Hier neu laden
    });
};