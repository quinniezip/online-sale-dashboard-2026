import Header from "@/components/Header";
import KpiCards from "@/components/KpiCards";
import SecondaryMetrics from "@/components/SecondaryMetrics";
import DailyRevenueChart from "@/components/DailyRevenueChart";
import ChannelCharts from "@/components/ChannelCharts";
import StaffPerformance from "@/components/StaffPerformance";
import IndividualPerformance from "@/components/IndividualPerformance";
import BestSellingProducts from "@/components/BestSellingProducts";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#f8fafc]">
      {/* Section 1: Header */}
      <Header />

      {/* Main Content */}
      <main className="max-w-[1600px] mx-auto px-6 py-6 space-y-6">
        {/* Section 2: KPI Cards */}
        <KpiCards />

        {/* Section 3: Secondary Metrics */}
        <SecondaryMetrics />

        {/* Section 4: Daily Revenue Chart + Analysis */}
        <DailyRevenueChart />

        {/* Section 5: Channel Donut Charts */}
        <ChannelCharts />

        {/* Section 6: Staff Table + Lost Reasons */}
        <StaffPerformance />

        {/* Section 7: Individual Performance + Team Analysis */}
        <IndividualPerformance />

        {/* Section 8: Best Selling Products + Sales Analysis */}
        <BestSellingProducts />
      </main>
    </div>
  );
}
