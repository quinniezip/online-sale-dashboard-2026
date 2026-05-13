"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Users } from "lucide-react";
import { individualPerformanceData, teamMembers } from "@/lib/data";

const formatYAxis = (value: number) => {
  if (value === 0) return "0";
  return `${(value / 1000000).toFixed(1)} Tr`;
};

const formatTooltipValue = (value: number, name: string) => {
  return [new Intl.NumberFormat("vi-VN").format(value) + " đ", name];
};

export default function IndividualPerformance() {
  return (
    <div className="flex gap-4" style={{ minHeight: 400 }}>
      {/* Left: Individual Performance Chart */}
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 flex-1" style={{ flex: 3 }}>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-base font-semibold text-gray-900">Hiệu Suất Cá Nhân Theo Ngày</h2>
          <span className="text-xs text-gray-500">Đơn vị: Việt Nam Đồng</span>
        </div>
        <ResponsiveContainer width="100%" height={320}>
          <BarChart
            data={individualPerformanceData}
            margin={{ top: 10, right: 30, left: 10, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis dataKey="date" tick={{ fontSize: 12 }} />
            <YAxis tickFormatter={formatYAxis} tick={{ fontSize: 11 }} tickCount={5} />
            <Tooltip formatter={formatTooltipValue} />
            <Legend wrapperStyle={{ fontSize: 12 }} />
            {teamMembers.map((member) => (
              <Bar
                key={member.key}
                dataKey={member.key}
                name={member.name}
                stackId="a"
                fill={member.color}
                radius={member.key === 'e' ? [2, 2, 0, 0] : [0, 0, 0, 0]}
              />
            ))}
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Right: Team Analysis Panel */}
      <div className="bg-[#0f172a] rounded-xl p-5 text-white flex-shrink-0" style={{ flex: 1, minWidth: 220 }}>
        <div className="flex items-center gap-2 mb-5">
          <Users className="w-3.5 h-3.5 text-gray-400" />
          <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">PHÂN TÍCH TEAM</p>
        </div>

        <div className="space-y-5">
          <div>
            <p className="text-xs text-gray-400 mb-1">Top Best Seller</p>
            <p className="text-base font-semibold text-blue-400">Phạm Văn D</p>
            <p className="text-xs text-gray-500 mt-0.5">Duy trì TOP 1 liên tục 3 ngày cuối</p>
          </div>

          <div>
            <p className="text-xs text-gray-400 mb-1">Chốt đơn ổn định nhất</p>
            <p className="text-base font-semibold text-green-400">Lê Hoàng C</p>
            <p className="text-xs text-gray-500 mt-0.5">Ít biến động, đều tay qua các ngày</p>
          </div>

          <div>
            <p className="text-xs text-gray-400 mb-1">Ngày bùng nổ của Team</p>
            <p className="text-xl font-bold text-white">23/02/2026</p>
            <p className="text-xs text-gray-500 mt-0.5">Gấp 3.5 lần trung bình ngày</p>
          </div>

          <button className="w-full mt-2 px-4 py-2.5 border border-gray-600 rounded-lg text-sm text-white hover:bg-gray-800 transition-colors text-center">
            Xem chi tiết KPI
          </button>
        </div>
      </div>
    </div>
  );
}
