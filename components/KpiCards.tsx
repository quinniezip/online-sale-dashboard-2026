"use client";

import { TrendingUp, Phone, ShoppingBag, Percent, ShoppingCart } from "lucide-react";

export default function KpiCards() {
  return (
    <div className="grid grid-cols-5 gap-4">
      {/* Card 1: Tổng Doanh Thu */}
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-2">TỔNG DOANH THU</p>
            <p className="text-3xl font-bold text-gray-900 mb-1">296.8 Triệu</p>
            <p className="text-sm text-green-600 font-medium">+14.5% so với tháng trước</p>
          </div>
          <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <TrendingUp className="w-5 h-5 text-green-600" />
          </div>
        </div>
      </div>

      {/* Card 2: Khách Đã Liên Hệ */}
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-2">KHÁCH ĐÃ LIÊN HỆ</p>
            <p className="text-3xl font-bold text-gray-900 mb-2">2,436</p>
            <div className="flex items-center gap-3 text-sm">
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-blue-500 inline-block"></span>
                <span className="text-gray-600">Fanpage: <strong>858</strong></span>
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-green-500 inline-block"></span>
                <span className="text-gray-600">Zalo: <strong>1,578</strong></span>
              </span>
            </div>
          </div>
          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <Phone className="w-5 h-5 text-blue-600" />
          </div>
        </div>
      </div>

      {/* Card 3: Khách Mua Hàng */}
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-2">KHÁCH MUA HÀNG</p>
            <p className="text-3xl font-bold text-gray-900 mb-2">2,189</p>
            <div className="flex items-center gap-3 text-sm">
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-green-500 inline-block"></span>
                <span className="text-gray-600">Online: <strong>1,593</strong></span>
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
                <span className="text-gray-600">Offline: <strong>596</strong></span>
              </span>
            </div>
          </div>
          <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <ShoppingBag className="w-5 h-5 text-orange-600" />
          </div>
        </div>
      </div>

      {/* Card 4: Tỷ Lệ Chuyển Đổi */}
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-2">TỶ LỆ CHUYỂN ĐỔI</p>
            <p className="text-3xl font-bold text-gray-900 mb-2">65.55%</p>
            <p className="text-xs text-gray-500 mb-1">Doanh Thu Re-Marketing / Doanh Thu Cơ Sở: <strong>37.82%</strong></p>
            <p className="text-xs text-gray-500">Doanh Thu Re-Marketing / Tổng Điểm: <strong>18.31%</strong></p>
          </div>
          <div className="w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <Percent className="w-5 h-5 text-pink-600" />
          </div>
        </div>
      </div>

      {/* Card 5: Trung Bình/Khách */}
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-2">TRUNG BÌNH/KHÁCH</p>
            <p className="text-3xl font-bold text-gray-900 mb-1">135.6 K</p>
            <p className="text-sm text-green-600 font-medium">+5.2% so với tháng trước</p>
          </div>
          <div className="w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <ShoppingCart className="w-5 h-5 text-pink-600" />
          </div>
        </div>
      </div>
    </div>
  );
}
