const hapi = require('@hapi/hapi');


const init = async() =>{
    const server = hapi.server({
        port: 9000,
        host: 'localhost',
    });

    await server.start();
    console.log(`Server Berjalan pada ${server.info.uri}`);
};

init();