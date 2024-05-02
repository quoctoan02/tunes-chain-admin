import { ENV, Env } from "./env"

export const API_URLS: any = <const>{
    [Env.development]: "http://localhost:8888",
    [Env.staging]: "",
    [Env.production]: "https://tunes-chain-api.up.railway.app/",
}

export const API_URL = API_URLS[ENV]
