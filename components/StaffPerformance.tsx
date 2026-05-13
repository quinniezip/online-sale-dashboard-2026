"use client";

import { Clock } from "lucide-react";
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { staffData, lostReasonsData } from "@/lib/data";

export default function StaffPerformance() {
  return (
    <div className="flex gap-4">
      {/* Left: Staff Table */}
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 flex-1" style={{ flex: 3 }}>
        <div className="flex items-center justify-between mb-1">
          <h2 className="text-base font-semibold text-gray-900">
            Hiệu Quả Nhân Sự (Team Re-Marketing)
          </h2>
          <button className="text-sm text-green-600 font-medium hover:text-green-700">
            Xem toàn bộ
          </button>
        </div>
        <p className="text-sm text-gray-500 mb-4">Chi tiết hiệu suất của 5 thành viên trong team</p>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="text-left text-xs font-semibold text-gray-500 uppercase pb-3 pr-4">Nhân sự</th>
                <th className="text-right text-xs font-semibold text-gray-500 uppercase pb-3 px-4">Khách Liên Hệ</th>
                <th className="text-right text-xs font-semibold text-gray-500 uppercase pb-3 px-4">Chốt Đơn</th>
                <th className="text-center text-xs font-semibold text-gray-500 uppercase pb-3 px-4">Tỷ Lệ Chốt Đơn</th>
                <th className="text-right text-xs font-semibold text-gray-500 uppercase pb-3 pl-4">Phản Hồi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {staffData.map((staff) => (
                <tr key={staff.name} className="hover:bg-gray-50 transition-colors">
                  <td className="py-3 pr-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                        <span className="text-xs font-bold text-blue-700">{staff.initial}</span>
                      </div>
                      <span className="text-sm font-medium text-gray-900">{staff.name}</span>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-right text-sm text-gray-700 font-medium">
                    {staff.contacts.toLocaleString('vi-VN')}
                  </td>
                  <td className="py-3 px-4 text-right text-sm text-gray-700 font-medium">
                    {staff.orders.toLocaleString('vi-VN')}
                  </td>
                  <td className="py-3 px-4 text-center">
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold ${
                        staff.rateColor === 'green'
                          ? 'bg-green-100 text-green-700'
                          : 'bg-orange-100 text-orange-700'
                      }`}
                    >
                      {staff.rate}%
                    </span>
                  </td>
                  <td className="py-3 pl-4 text-right">
                    <div className="flex items-center justify-end gap-1 text-sm text-gray-600">
                      <Clock className="w-3.5 h-3.5 text-gray-400" />
                      <span>{staff.responseTime} phút</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="border-t-2 border-gray-200 bg-gray-50">
                <td className="py-3 pr-4">
                  <span className="text-sm font-bold text-gray-900">TỔNG CỘNG</span>
                </td>
                <td className="py-3 px-4 text-right text-sm font-bold text-gray-900">2,436</td>
                <td className="py-3 px-4 text-right text-sm font-bold text-gray-900">2,189</td>
                <td className="py-3 px-4 text-center">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-green-100 text-green-700">
                    65.55%
                  </span>
                </td>
                <td className="py-3 pl-4 text-right">
                  <div className="flex items-center justify-end gap-1 text-sm text-gray-600">
                    <Clock className="w-3.5 h-3.5 text-gray-400" />
                    <span className="font-medium">18 phút (Trung bình)</span>
                  </div>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>

      {/* Right: Lost Reasons Donut */}
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 flex-shrink-0" style={{ flex: 1, minWidth: 260 }}>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-base font-semibold text-gray-900">Lý Do Khách Không Mua</h2>
          <span className="px-2.5 py-1 bg-red-100 text-red-600 text-xs font-semibold rounded-full">
            34.45% Lost
          </span>
        </div>

        <div style={{ height: 180 }}>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={lostReasonsData}
                cx="50%"
                cy="50%"
                innerRadius={45}
                outerRadius={80}
                dataKey="value"
                labelLine={false}
              >
                {lostReasonsData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip formatter={(value: number) => [`${value}%`, '']} />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="space-y-2 mt-2">
          {lostReasonsData.map((item) => (
            <div key={item.name} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ backgroundColor: item.color }}></span>
                <span className="text-xs text-gray-600">{item.name}</span>
              </div>
              <span className="text-xs font-semibold text-gray-800">{item.value}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
