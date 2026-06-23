const API = (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1')
  ? 'http://localhost:8080' 
  : 'https://nodeserver-995188789852.europe-west3.run.app';

const token = localStorage.getItem('token');

if (!token) {
    window.location.href = 'PasswortAbfrage/passwortAbfrage.html';
} else {
    const response = await fetch(`${API}/api/passwort/verify`, {
        headers: { 'Authorization': `Bearer ${token}` }
    });

    if (!response.ok) {
        localStorage.removeItem('token');
        window.location.href = 'PasswortAbfrage/passwortAbfrage.html';
    }
}