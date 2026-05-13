"use client";

import { BarChart2, Calendar, Download } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="max-w-[1600px] mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-green-600 rounded-lg flex items-center justify-center">
            <BarChart2 className="w-5 h-5 text-white" />
          </div>
          <span className="text-lg font-bold text-gray-900">Re-Marketing Dashboard</span>
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-sm text-gray-700 bg-white hover:bg-gray-50 transition-colors">
            <Calendar className="w-4 h-4 text-gray-500" />
            <span>Tháng 2, 2026</span>
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-green-600 rounded-lg text-sm text-white hover:bg-green-700 transition-colors">
            <Download className="w-4 h-4" />
            <span>Xuất báo cáo</span>
          </button>
        </div>
      </div>
    </header>
  );
}
