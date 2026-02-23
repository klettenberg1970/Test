export default function logger(req, res, next) {

 const timestamp = new Date().toLocaleString('de-DE');
     const status = res.statusCode;

    //  Farben für die Konsole definieren
    const reset = "\x1b[0m";
    const red = "\x1b[31m";
    const yellow = "\x1b[33m";
    const green = "\x1b[32m";
    const blue = "\x1b[34m";

    let color = reset;
    if (status >= 500) color = red;
    else if (status >= 400) color = yellow;
    else if (status >= 300) color = blue;
    else if (status >= 200) color = green;

    console.log(`${color}[${timestamp}] ${req.method} ${req.url} - Status: ${status} - IP: ${req.ip} - ${req.headers['user-agent']}${reset}`);
    next();
}