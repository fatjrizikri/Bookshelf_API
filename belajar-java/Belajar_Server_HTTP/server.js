const http = require('http');
const fs = require('fs');
const path = require('path');

const requestListener = (request, response) => {
    response.setHeader('Content-Type', 'text/html');
    // response.setHeader('Content-Type', 'application/jso0n');
    response.setHeader('X-Powered-By', 'NodeJS');
    const { method, url } = request;
    if(url === '/') {
    if(method === 'GET') {
        // if i want to display image
        // const imagePath = path.join(__dirname, 'image.png'); // Ganti dengan path gambar Anda
        // const imageStream = fs.createReadStream(imagePath);

        // response.setHeader('Content-Type', 'image/png'); // Sesuaikan dengan jenis gambar Anda
        // response.statusCode = 200;
        // imageStream.pipe(response);
        response.statusCode = 200;
        response.end(JSON.stringify({
        message: 'Ini adalah homepage',
        }));
    } else {
        response.statusCode = 400;
        response.end(JSON.stringify({
        message: `Halaman tidak dapat diakses dengan ${method} request`,
        }));
    }
        // curl http://localhost:5000/
    }
 
    else if(url === '/about') {
        // curl http://localhost:5000/about
    if(method === 'GET') {
        response.statusCode = 200;
        response.end(JSON.stringify({
        message: 'Halo! Ini adalah halaman about',
    }));
    }
 
    else if(method === 'POST') {
        let body = [];
    
        request.on('data', (chunk) => {
            body.push(chunk);
        });
       
        request.on('end', () => {
            body = Buffer.concat(body).toString();
            // response.end(`<h1>Hai, ${body}!</h1>`);
            // mengubah bentuk hasil yang merupakan bentuk json menjadi text
            const { name } = JSON.parse(body);
            response.statusCode = 200;
            response.end(JSON.stringify({
            message: `Halo, ${name}! Ini adalah halaman about`,
        }));
    });
    } else{
        response.statusCode = 400;
        response.end(JSON.stringify({
        message: `Halaman tidak dapat diakses menggunakan ${method}, request`
    }));
    }
    }else{
        response.statusCode = 404;
        response.end(JSON.stringify({
            message: 'Halaman tidak ditemukan!',
        }));
    }
};
 
const server = http.createServer(requestListener);
 
const port = 5000;
const host = 'localhost';
 
server.listen(port, host, () => {
    console.log(`Server berjalan pada http://${host}:${port}`);
});