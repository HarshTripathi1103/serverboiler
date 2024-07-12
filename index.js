import * as http from 'http';


export function nodeboiler(yourport) {
    const server = http.createServer((req, res) => {
       
        res.writeHead(200, { 'Content-Type': 'text/html' });
       
        res.end();
    });
    
   
    let port = yourport;
   
    server.listen(port, () => {
        console.log(`Node.js HTTP server is running on port ${port}`);
    });
    return yourport;
}





