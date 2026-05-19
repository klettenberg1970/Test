const username = 'admin';
const API = 'https://backend-dashboard-1slu.onrender.com'

export const getTodo = async () => {
    const response = await fetch(`${API}/api/todo/${username}`);
    const data = await response.json();
    return data
}


export const createTodo = async (neueAufgabe) => {
    const response = await fetch(`${API}/api/todo/new/${username}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: neueAufgabe })
    });
    const data = await response.json();
};

export const deleteTodo = async (id) => {

    const response = await fetch(`${API}/api/todo/delete/${username}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ _id: id })
    });

};


