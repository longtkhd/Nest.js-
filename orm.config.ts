import * as dotenv from 'dotenv'

export const connectionString = {
    url: `${process.env.MONGO_URL}`
}