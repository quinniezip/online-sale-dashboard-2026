"use client";

import {
  ComposedChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { dailyRevenueData } from "@/lib/data";

const formatYAxis = (value: number) => {
  if (value === 0) return "0";
  return `${(value / 1000000).toFixed(1)} Tr`;
};

const formatTooltipValue = (value: number, name: string) => {
  if (name === "Khách mua") return [value + " khách", name];
  return [new Intl.NumberFormat("vi-VN").format(value) + " đ", name];
};

export default function DailyRevenueChart() {
  return (
    <div className="flex gap-4" style={{ minHeight: 400 }}>
      {/* Chart Card */}
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 flex-1" style={{ flex: 3 }}>
        <h2 className="text-base font-semibold text-gray-900 mb-4">
          Doanh Thu Theo Ngày (Re-Marketing)
        </h2>
        <ResponsiveContainer width="100%" height={320}>
          <ComposedChart
            data={dailyRevenueData}
            margin={{ top: 10, right: 60, left: 10, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis dataKey="date" tick={{ fontSize: 12 }} />
            <YAxis
              yAxisId="left"
              tickFormatter={formatYAxis}
              tick={{ fontSize: 11 }}
              tickCount={5}
              domain={[0, 18000000]}
            />
            <YAxis
              yAxisId="right"
              orientation="right"
              tick={{ fontSize: 11 }}
              tickCount={5}
              domain={[0, 100]}
              label={{ value: "Khách mua", angle: -90, position: "insideRight", fontSize: 11, fill: "#374151" }}
            />
            <Tooltip formatter={formatTooltipValue} />
            <Legend wrapperStyle={{ fontSize: 12 }} />
            <Bar yAxisId="left" dataKey="zalo" name="Zalo OA" stackId="a" fill="#3b82f6" />
            <Bar yAxisId="left" dataKey="facebook" name="Facebook" stackId="a" fill="#1d4ed8" />
            <Bar yAxisId="left" dataKey="hotline" name="Hotline" stackId="a" fill="#22c55e" />
            <Bar yAxisId="left" dataKey="appweb" name="App/Web" stackId="a" fill="#f59e0b" radius={[2, 2, 0, 0]} />
            <Line
              yAxisId="right"
              type="monotone"
              dataKey="khachMua"
              name="Khách mua"
              stroke="#0f172a"
              strokeWidth={2}
              dot={{ r: 3 }}
            />
            <Line
              yAxisId="left"
              type="monotone"
              dataKey="tongDT"
              name="Tổng Doanh Thu"
              stroke="#ef4444"
              strokeWidth={2}
              dot={{ r: 3 }}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>

      {/* Dark Analysis Panel */}
      <div className="bg-[#0f172a] rounded-xl p-5 text-white flex-shrink-0" style={{ flex: 1, minWidth: 220 }}>
        <p className="text-xs text-gray-400 font-medium uppercase tracking-wider mb-5">~ PHÂN TÍCH</p>

        <div className="space-y-5">
          <div>
            <p className="text-xs text-gray-400 mb-1">Đỉnh cao nhất</p>
            <p className="text-lg font-bold text-amber-400">17.033.000 đ</p>
            <p className="text-xs text-gray-500">23/02/2026</p>
          </div>

          <div>
            <p className="text-xs text-gray-400 mb-1">Thấp nhất</p>
            <p className="text-lg font-bold text-white">1.591.800 đ</p>
            <p className="text-xs text-gray-500">19/02/2026</p>
          </div>

          <div>
            <p className="text-xs text-gray-400 mb-1">Trung bình/ngày</p>
            <p className="text-lg font-bold text-white">8.251.405 đ</p>
          </div>

          <div>
            <p className="text-xs text-gray-400 mb-1">Số ngày có dữ liệu</p>
            <p className="text-lg font-bold text-white">8 ngày</p>
          </div>
        </div>
      </div>
    </div>
  );
}
