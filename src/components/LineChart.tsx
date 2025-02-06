"use client"

import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts"

// Sample data - you should replace this with your actual data
const data = [
  { day: "FRI", pending: 4, completed: 2 },
  { day: "SAT", pending: 3, completed: 5 },
  { day: "SUN", pending: 6, completed: 3 },
]

export function TaskLineChart() {
  return (
    <div className="h-[200px] w-full mt-4 border border-gray-800 p-2 rounded-lg">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fill: "#9CA3AF", fontSize: 12 }} />
          <YAxis hide={true} />
          <Tooltip
            contentStyle={{
              backgroundColor: "#1F2937",
              border: "none",
              borderRadius: "8px",
              fontSize: "12px",
            }}
            itemStyle={{ color: "#E5E7EB" }}
            labelStyle={{ color: "#9CA3AF" }}
          />
          <Line
            type="monotone"
            dataKey="pending"
            stroke="#A3E635"
            strokeWidth={2}
            dot={{ fill: "#A3E635", strokeWidth: 0, r: 4 }}
            activeDot={{ r: 6, fill: "#A3E635" }}
          />
          <Line
            type="monotone"
            dataKey="completed"
            stroke="#818CF8"
            strokeWidth={2}
            dot={{ fill: "#818CF8", strokeWidth: 0, r: 4 }}
            activeDot={{ r: 6, fill: "#818CF8" }}
          />
        </LineChart>
      </ResponsiveContainer>
      <div className="flex items-center justify-start gap-6 mt-4">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#A3E635]" />
          <span className="text-xs text-gray-400">Pending</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#818CF8]" />
          <span className="text-xs text-gray-400">Completed</span>
        </div>
      </div>
    </div>
  )
}

