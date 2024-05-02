import { useState } from "react"
import { useQuery } from "react-query"
import {Service} from "@/services";

export const useGetOverview = () => {
    const [isLoading, setLoading] = useState(false)

    const { data, refetch } = useQuery(["useGetOverview"], async () => {
        setLoading(true)
        // if (!token || !fromTime || !toTime) {
        //     setLoading(false)
        //     return
        // }
        const response = await Service.overview()
        setLoading(false)
        return response
    })

    return {
        data,
        refetch,
        isLoading,
    }
}
