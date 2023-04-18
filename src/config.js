import dotenv from 'dotenv'

dotenv.config()

export default{
    mongo_uri:process.env.URI,
    persistence:process.env.PERSISTENCE || 'FILE'
}