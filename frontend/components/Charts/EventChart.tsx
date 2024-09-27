"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { useGetUsersByMonth } from "@/lib/react-query/queries";

export const description = "A multiple bar chart"

const chartConfig = {
  user: {
    label: "User",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig

const EventChart = () => {

  const { data, isLoading, error } = useGetUsersByMonth();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading data</div>;
  }

  const chartData = data?.data.map((item: any) => ({
    month: item.month,
    user: item.count,
  }));

  return (
    <div className="border-slate-400 border-[1px] rounded-lg p-4 w-full h-full">
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar dataKey="user" fill="var(--color-desktop)" radius={4} />
          </BarChart>
        </ChartContainer>
    </div>
  )
}

export default EventChart;
