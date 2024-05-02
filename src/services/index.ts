import {axiosInstance} from "@refinedev/simple-rest";
import {http, toastErrorResponse} from "@/config/axios";


export const Service = {
    overview : async (data?: any) => {
        try {
            const res = await http.get("/overview")

            if (res?.data) {
                return res.data
            }
        } catch (error) {
            console.log("🚀 ~ ArtistService ~ listAll ~ error:", error)
            toastErrorResponse(error)
            throw error
        }
    },
    login(data: { email: string; password: string }) {
        return http.request({
            method: "POST",
            url: "/auth/admin/login",
            data,
        })
    }


}
