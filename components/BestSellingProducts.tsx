"use client";

import { Coffee, ChevronDown, BarChart2 } from "lucide-react";
import { bestSellingProducts } from "@/lib/data";

const categoryColors: Record<string, string> = {
  "Trà Sữa": "bg-pink-100 text-pink-700",
  "Cà Phê": "bg-amber-100 text-amber-700",
  "Trà": "bg-green-100 text-green-700",
  "Sữa": "bg-blue-100 text-blue-700",
  "Khác": "bg-gray-100 text-gray-700",
};

export default function BestSellingProducts() {
  return (
    <div className="flex gap-4">
      {/* Left: Best Selling Products */}
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 flex-1" style={{ flex: 3 }}>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Coffee className="w-5 h-5 text-amber-600" />
            <h2 className="text-base font-semibold text-gray-900">Sản Phẩm Re-Marketing Bán Chạy</h2>
          </div>
          <div className="flex items-center gap-2">
            <button className="flex items-center gap-1.5 px-3 py-1.5 border border-gray-200 rounded-lg text-sm text-gray-600 hover:bg-gray-50 transition-colors">
              <span>Tất cả Kênh</span>
              <ChevronDown className="w-3.5 h-3.5 text-gray-400" />
            </button>
            <button className="flex items-center gap-1.5 px-3 py-1.5 border border-gray-200 rounded-lg text-sm text-gray-600 hover:bg-gray-50 transition-colors">
              <span>Tất cả Nhóm món</span>
              <ChevronDown className="w-3.5 h-3.5 text-gray-400" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-5 gap-3">
          {bestSellingProducts.map((product) => (
            <div
              key={product.rank}
              className="border border-gray-100 rounded-xl p-4 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between mb-2">
                <span
                  className="w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
                  style={{ backgroundColor: product.rankColor }}
                >
                  #{product.rank}
                </span>
                <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${categoryColors[product.category] || 'bg-gray-100 text-gray-700'}`}>
                  {product.category}
                </span>
              </div>

              <p className="text-sm font-semibold text-gray-900 mb-3 leading-tight min-h-[2.5rem] flex items-center">
                {product.name}
              </p>

              <div className="space-y-1.5">
                <div>
                  <p className="text-xs text-gray-400 uppercase font-medium tracking-wide">DOANH THU</p>
                  <p className="text-sm font-bold text-green-600">{product.revenue}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase font-medium tracking-wide">ĐÃ BÁN</p>
                  <p className="text-sm font-bold text-gray-800">{product.sold.toLocaleString('vi-VN')}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right: Sales Analysis Panel */}
      <div className="bg-[#0f172a] rounded-xl p-5 text-white flex-shrink-0" style={{ flex: 1, minWidth: 220 }}>
        <div className="flex items-center gap-2 mb-5">
          <BarChart2 className="w-3.5 h-3.5 text-gray-400" />
          <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">PHÂN TÍCH BÁN HÀNG</p>
        </div>

        <div className="space-y-5">
          <div>
            <p className="text-xs text-gray-400 mb-1">Món Re-Marketing đỉnh nhất</p>
            <p className="text-base font-semibold text-amber-400">Trà Sữa Oolong</p>
            <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">
              Chiếm 35% tổng số lượng ly bán ra, khách quay lại gọi nhiều nhất.
            </p>
          </div>

          <div>
            <p className="text-xs text-gray-400 mb-1">Kênh chốt Sale hiệu quả</p>
            <p className="text-base font-semibold text-blue-400">Zalo OA (40%)</p>
            <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">
              Doanh thu 85 triệu. Tính năng gửi tin nhắn hàng loạt trên Zalo mang lại tỷ lệ chuyển đổi cao nhất.
            </p>
          </div>

          <div>
            <p className="text-xs text-gray-400 mb-1">Xu hướng Upsell</p>
            <p className="text-xs text-gray-300 mt-0.5 leading-relaxed">
              Khách hàng từ kênh Zalo thường có xu hướng mua thêm Bánh Mì Que (+15% bill). Cần đẩy mạnh combo Trà sữa + Bánh Mì.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
