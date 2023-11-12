const {
  AddNewBook,
  GetAllBooks,
  GetBookById,
  EditBookById,
  DeleteBookById,
 } = require('./handler');

const routes = [
  // mengintput buku baru
  {
    method: 'POST',
    path: '/books',
    handler: AddNewBook,
  },
  // melihat semua buku
  {
    method: 'GET',
    path: '/books',
    handler: GetAllBooks,
  },
  // melihat buku berdasarkan id
  {
    method: 'GET',
    path: '/books/{id}',
    handler: GetBookById,
  },
  // mengedit buku berdasarkan id
  {
    method: 'PUT',
    path: '/books/{id}',
    handler: EditBookById,
  },
  // menghapus buku berdasarkan id
  {
    method: 'DELETE',
    path: '/books/{id}',
    handler: DeleteBookById,
  },
];
module.exports = routes;