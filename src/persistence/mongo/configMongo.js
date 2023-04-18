import mongoose from 'mongoose'
import config from "../../config.js";

const URI = config.mongo_uri

try {
    await mongoose.connect(URI)
    console.log('conectado a la BD');
} catch (error) {
    console.log(error);
}