import axios, { AxiosError, AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from "axios"
import { camelizeKeys } from "humps"

import { toast } from "react-toastify"
import {API_URL} from "@/config/endpoint";

export const http: AxiosInstance = axios.create({
    baseURL: API_URL,
    timeout: 1000000,
    headers: {},
})

function onRequestFulfilled(config: InternalAxiosRequestConfig) {
    const token = localStorage.getItem("admin-token")

    if (token) {
        config.headers["Authorization"] = `Bearer ${token}`
    }

    return config
}

function onResponseFulfilled(response: AxiosResponse) {
    response.statusText = ""
    response.data = camelizeKeys(response.data.data)
    return Promise.resolve(response)
}

function onResponseRejected(error: AxiosError) {
    console.log("🚀 ~ file: axios.ts:50 ~ onResponseRejected ~ error:", error, error?.response?.statusText)

    if (error?.code === "ERR_NETWORK") {
        toast.error("Network Error. This could be a CORS issue or a dropped internet connection.", {
            toastId: "network-error",
        })
    }

    if (error.response?.data) {
        const data = camelizeKeys(error.response.data) as any
        error.response.statusText = data["errorMsg"] || data["errorCode"]
        error.response.data = null
    } else {
        error.response!.statusText = "Connection lost"
    }

    return Promise.resolve(error.response)
}
export const toastErrorResponse = (error: any) => {
    toast.error(getErrorResponse(error))
}

const getErrorResponse = (error: any) => {
    return error?.response?.data?.error_msg || error?.response?.data?.error_code || error?.message
}
http.interceptors.request.use(onRequestFulfilled)
http.interceptors.response.use(onResponseFulfilled, onResponseRejected)
