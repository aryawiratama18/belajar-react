// File ini digunakan untuk membuat proses CRUD menjadi global
// Global API Services

import Get from './Get';
import Post from './Post';

// API
 
// GET
const getNewsBlog = () => Get('posts?_sort=id&_order=desc',false);
const getPhoto = () => Get('photos',true);

// POST
const postNewsBlog = (data) => Post('posts',false,data);

const API = {
    getNewsBlog,
    getPhoto,
    postNewsBlog
}

export default API;