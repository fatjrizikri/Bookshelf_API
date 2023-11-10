/* eslint-disable consistent-return */
/* eslint-disable max-len */
const { nanoid } = require('nanoid');
const books = require('./books');

const addBookHandler = (request, h) => {
    // eslint-disable-next-line object-curly-newline
    const { name, year, author, summary, publisher, pageCount, readPage, reading } = request.payload;
    const id = nanoid(16);
    const insertedAt = new Date().toISOString();
    const updateAt = insertedAt;
    const finished = (pageCount === readPage);

    if (name === undefined) {
        const response = h.response({
            status: 'fail',
            message: 'Gagal menambahkan buku. Mohon isi nama buku',
        });
        response.code(400);
        return response;
    }

    if (readPage > pageCount) {
        const response = h.response({
            status: 'fail',
            message: 'Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount',
        });
        response.code(400);
        return response;
    }
    // eslint-disable-next-line object-curly-spacing, object-curly-newline
    const newBook = { id, name, year, author, summary, publisher, pageCount, readPage, finished, reading, insertedAt, updateAt };
    books.push(newBook);
    // success upload file book
    const isSuccess = books.filter((book) => book.id === id).length > 0;
    if (isSuccess) {
        const response = h.response({
            status: 'success',
            message: 'Buku berhasil ditambahkan',
            data: {
                bookId: id,
            },
        });
        response.code(201);
        return response;
    }
};
module.exports = { addBookHandler };