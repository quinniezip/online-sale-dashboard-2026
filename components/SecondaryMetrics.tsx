"use client";

export default function SecondaryMetrics() {
  return (
    <div className="grid grid-cols-3 gap-4">
      {/* Banner 1: Doanh thu chốt ngay */}
      <div className="bg-[#f0fdf4] border border-green-100 rounded-xl p-5">
        <p className="text-sm text-gray-600 mb-2">Doanh thu chốt ngay (32 đơn)</p>
        <p className="text-2xl font-bold text-gray-900">3.097.000 đ</p>
      </div>

      {/* Banner 2: Khách tháng 1 mua lại */}
      <div className="bg-[#eff6ff] border border-blue-100 rounded-xl p-5">
        <p className="text-sm text-gray-600 mb-2">Khách tháng 1 mua lại (52%)</p>
        <p className="text-2xl font-bold text-blue-600">154.3 Triệu</p>
      </div>

      {/* Banner 3: Khách mới mua */}
      <div className="bg-[#faf5ff] border border-purple-100 rounded-xl p-5">
        <p className="text-sm text-gray-600 mb-2">Khách mới Liên Hệ mua Tháng 2 (48%)</p>
        <p className="text-2xl font-bold text-purple-700">142.5 Triệu</p>
      </div>
    </div>
  );
}
