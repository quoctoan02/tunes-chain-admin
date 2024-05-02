import {axiosInstance} from "@refinedev/simple-rest";
import {http, toastErrorResponse} from "@/config/axios";


export const Service = {
  overview: async (data?: any) => {
    try {
      const res = await http.get("/overview");

      if (res?.data) {
        return res.data;
      }
    } catch (error) {
      console.log("🚀 ~ ArtistService ~ listAll ~ error:", error);
      toastErrorResponse(error);
      throw error;
    }
  },
  login(data: { email: string; password: string }) {
    return http.request({
      method: "POST",
      url: "/auth/admin/login",
      data,
    });
  },
  listArtist: async (data: any) => {
    try {
      const res = await http.get("/artist-info/list", { params: data });

      if (res?.data) {
        return res?.data;
      }
    } catch (error) {
      console.log("🚀 ~ ArtistService ~ listAll ~ error:", error);
      toastErrorResponse(error);
      throw error;
    }
  },
  listSong: async (data: any) => {
    try {
      const res = await http.get("/song/list", { params: data });

      if (res?.data) {
        return res?.data;
      }
    } catch (error) {
      console.log("🚀 ~ ArtistService ~ listAll ~ error:", error);
      toastErrorResponse(error);
      throw error;
    }
  },
  listUnverifiedArtist: async (data: any) => {
    try {
      const res = await http.get("/admin/list-unverified-artist", {
        params: data,
      });

      if (res?.data) {
        return res?.data;
      }
    } catch (error) {
      console.log("🚀 ~ ArtistService ~ listAll ~ error:", error);
      toastErrorResponse(error);
      throw error;
    }
  },
  listReportSong: async (data: any) => {
    try {
      const res = await http.get("/admin/list-report-song", { params: data });

      if (res?.data) {
        return res?.data;
      }
    } catch (error) {
      console.log("🚀 ~ ArtistService ~ listAll ~ error:", error);
      toastErrorResponse(error);
      throw error;
    }
  },
  listTransaction: async (data: any) => {
    try {
      const res = await http.get("/admin/list-transaction", { params: data });

      if (res?.data) {
        return res?.data;
      }
    } catch (error) {
      console.log("🚀 ~ ArtistService ~ listAll ~ error:", error);
      toastErrorResponse(error);
      throw error;
    }
  },
  listUser: async (data: any) => {
    try {
      const res = await http.get("/admin/list-user", { params: data });

      if (res?.data) {
        return res?.data;
      }
    } catch (error) {
      console.log("🚀 ~ ArtistService ~ listAll ~ error:", error);
      toastErrorResponse(error);
      throw error;
    }
  },
  verifyArtist: async (data: any) => {
    try {
      const res = await http.post("/admin/verify-artist-profile", data);

      if (res?.data) {
        return res?.data;
      }
    } catch (error) {
      console.log("🚀 ~ ArtistService ~ listAll ~ error:", error);
      toastErrorResponse(error);
      throw error;
    }
  },
  verifyReport: async (data: any) => {
    try {
      const res = await http.post("/admin/verify-report", data);

      if (res?.data) {
        return res?.data;
      }
    } catch (error) {
      console.log("🚀 ~ ArtistService ~ listAll ~ error:", error);
      toastErrorResponse(error);
      throw error;
    }
  },
};
