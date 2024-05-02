import {
    CategoryScale,
    Chart as ChartJS,
    ChartData,
    Filler,
    Legend,
    LinearScale,
    LineElement,
    PointElement,
    Title,
    Tooltip,
} from "chart.js"
import { FC } from "react"
import { Line } from "react-chartjs-2"
import {Card} from "antd";
import {DollarOutlined} from "@ant-design/icons";
import { Text } from "@/components";
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler, Legend)

interface LineChartProps {
    data?: ChartData<"line">
    className?: string,
    label?: any,
    datasets?: any,
    borderColor?: string,
    backgroundColor?: string,
    icon?: any
}
export const FORMAT_DATE = "MMM DD, yyyy"
export const LineChart: FC<LineChartProps> = ({ data, className, label, icon }) => {
       data = {
           labels: [1500,1600,1700,1750,1800,1850,1900,1950,1999,2050],
           datasets: [{
               fill: true,
               label: "",
               data: [282, 350, 411, 502, 635, 809, 947, 1402, 3700, 5267],
               borderColor: "#FB7B45",
               borderWidth: 2,
               tension: 0.4,
               backgroundColor: "rgb(255, 224, 114, 0.5)",
           }
           ]
       }

    return (
        <Card
            headStyle={{ padding: "8px 16px" }}
            bodyStyle={{ padding: "24px 24px 24px 24px" }}
            title={
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                    }}>
                    {icon || <DollarOutlined/>}
                    <Text size="sm" style={{ marginLeft: ".5rem" }}>
                        {label}
                    </Text>
                </div>
            }
                >
            <Line
                options={{
                    responsive: true,
                    plugins: {
                        legend: {
                           display: false
                        },
                    },
                    elements: {
                        point: {
                            // radius: 0,
                        },
                    },
                    scales: {
                        x: {
                            grid: {
                                display: false,
                            },
                        },
                        //   y: {
                        //     display: false,
                        //   },
                    },
                }}
                data={data}
                className={className}
            />
        </Card>

    )
}
