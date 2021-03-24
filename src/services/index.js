// File ini digunakan untuk membuat proses CRUD menjadi global
// Global API Services

import Get from './Get';
import Post from './Post';
import Put from './Put';
import Delete from './Delete';

// API

// GET
const getNewsBlog = () => Get('posts?_sort=id&_order=desc',false);
const getPhoto = () => Get('photos',true);

// POST
const postNewsBlog = (data) => Post('posts',false,data);

// PUT
const updateNewsBlog = (data,id) => Put(`posts/${id}`,false,data);

// DELETE
const deleteNewsBlog = (id) => Delete(`posts/${id}`,false);
const API = {
    getNewsBlog,
    getPhoto,
    postNewsBlog,
    updateNewsBlog,
    deleteNewsBlog
}

export default API;