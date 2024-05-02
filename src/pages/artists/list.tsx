
import {Space, Table, TableColumnsType} from "antd";
import ImagePrimary from "@/libs/image";
import moment from "moment";
import {useEffect, useState} from "react";

export const ArtistList = () => {
    const [data, setData] = useState()
    const buildData = async () => {
        let data = await Service.listMusic(2)
        setData(
            data.map((item: any) => {
                return {
                    ...item,
                    key: item.id,
                }
            }),
        )
    }
    useEffect(() => {
        buildData()
        return () => {}
    }, [])
    const columns: TableColumnsType = [
        {
            title: "Image",
            dataIndex: "image",
            render: (url: string) => <ImagePrimary className="h-10 w-10" src={url} />,
        },
        {
            title: "Name",
            dataIndex: "name",
            render: (text: string) => <a>{text}</a>,
        },

        {
            title: "Total songs",
            dataIndex: "totalSongs",
        },
        {
            title: "Release date",
            dataIndex: "releaseDate",
            render: (date: Date) => moment(date).format("DD-MM-YYYY"),
        },
    ]

    return (
        <Table columns={columns} dataSource={data} />
    );
};
