import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from "chart.js";
import axios from "axios";
import { Link } from "react-router-dom";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

const apiBaseURL = 'http://127.0.0.1:5000/api';

function ReportsPage() {
  const [reportsData, setReportsData] = useState(null);

  useEffect(() => {
    axios
      .get(`${apiBaseURL}/reports`)
      .then((response) => setReportsData(response.data))
      .catch((error) => console.error("Error fetching report data:", error));
  }, []);

  if (!reportsData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="animate-pulse flex flex-col items-center">
            <div className="w-12 h-12 bg-[#003366] rounded-lg mb-4"></div>
            <p className="text-[#003366] font-black tracking-widest text-xs">GENERATING REPORTS...</p>
        </div>
      </div>
    );
  }

  // Consistent Chart Options
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: '#003366',
        titleFont: { size: 12, weight: 'bold' },
        padding: 12,
        cornerRadius: 8
      }
    },
    scales: {
      y: { grid: { display: false }, ticks: { font: { weight: 'bold' } } },
      x: { grid: { display: false }, ticks: { font: { weight: 'bold' } } }
    }
  };

  const ordersStatusData = {
    labels: reportsData.orders_status.map((item) => item.order_status),
    datasets: [{
        label: "Orders",
        data: reportsData.orders_status.map((item) => item.count),
        backgroundColor: "#003366",
        borderRadius: 8,
    }],
  };

  const topDistrictsData = {
    labels: reportsData.top_districts.map((item) => item.district),
    datasets: [{
        label: "Orders",
        data: reportsData.top_districts.map((item) => item.order_count),
        backgroundColor: "#f26522",
        borderRadius: 8,
    }],
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex">
      {/* --- SIDEBAR --- */}
      <aside className="w-64 bg-[#003366] text-white hidden lg:flex flex-col">
        <div className="p-8">
            <span className="text-xl font-black tracking-tighter">SHIPMY<span className="text-[#f26522]">PARCEL</span></span>
        </div>
        <nav className="flex-1 px-4 space-y-2">
            <Link to="/dashboard" className="flex items-center space-x-3 p-3 rounded-xl hover:bg-white/10 transition text-sm font-bold opacity-70 hover:opacity-100">
                <span>Dashboard</span>
            </Link>
            <Link to="/reports" className="flex items-center space-x-3 p-3 rounded-xl bg-white/10 transition text-sm font-bold">
                <span>Analytics Reports</span>
            </Link>
            <Link to="/admin" className="flex items-center space-x-3 p-3 rounded-xl hover:bg-white/10 transition text-sm font-bold opacity-70 hover:opacity-100">
                <span>Admin Console</span>
            </Link>
        </nav>
      </aside>

      {/* --- MAIN CONTENT --- */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="h-20 bg-white border-b border-slate-200 flex items-center justify-between px-8">
            <h1 className="text-xl font-black text-[#003366] uppercase tracking-widest">Business Insights</h1>
            <div className="flex items-center space-x-4">
                <span className="text-xs font-bold text-slate-400">Jan 2026 - Dec 2026</span>
                <div className="w-10 h-10 rounded-full bg-slate-100 border border-slate-200"></div>
            </div>
        </header>

        <div className="p-8 space-y-8">
            {/* Report Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-[32px] shadow-sm border border-slate-100 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">📦</div>
                    <h2 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-2">Total Orders</h2>
                    <p className="text-4xl font-black text-[#003366]">{reportsData.total_orders_count.toLocaleString()}</p>
                    <div className="mt-4 flex items-center text-xs font-bold text-emerald-500">
                        <span>↑ 12.5%</span>
                        <span className="text-slate-300 ml-2 italic">vs last month</span>
                    </div>
                </div>

                <div className="bg-white p-8 rounded-[32px] shadow-sm border border-slate-100 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">🚚</div>
                    <h2 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-2">Total Shipments</h2>
                    <p className="text-4xl font-black text-[#003366]">{reportsData.total_shipments_count.toLocaleString()}</p>
                    <div className="mt-4 flex items-center text-xs font-bold text-emerald-500">
                        <span>↑ 8.2%</span>
                        <span className="text-slate-300 ml-2 italic">vs last month</span>
                    </div>
                </div>

                <div className="bg-white p-8 rounded-[32px] shadow-sm border border-slate-100 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">💰</div>
                    <h2 className="text-[10px] font-black text-[#f26522] uppercase tracking-[0.2em] mb-2">Estimated Revenue</h2>
                    <p className="text-4xl font-black text-[#003366]">₹{(reportsData.total_weight * 5).toLocaleString()}</p>
                    <div className="mt-4 flex items-center text-xs font-bold text-[#f26522]">
                        <span>Secure Billing</span>
                    </div>
                </div>
            </div>

            {/* Charts Grid */}
            <div className="grid lg:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-[32px] shadow-sm border border-slate-100">
                    <div className="flex justify-between items-center mb-8">
                        <h2 className="text-sm font-black text-[#003366] uppercase tracking-widest">Order Status Distribution</h2>
                        <button className="text-[10px] font-black text-slate-400 hover:text-[#f26522]">EXPORT CSV</button>
                    </div>
                    <div className="h-80">
                        <Bar data={ordersStatusData} options={chartOptions} />
                    </div>
                </div>

                <div className="bg-white p-8 rounded-[32px] shadow-sm border border-slate-100">
                    <div className="flex justify-between items-center mb-8">
                        <h2 className="text-sm font-black text-[#003366] uppercase tracking-widest">Top Performing Districts</h2>
                        <button className="text-[10px] font-black text-slate-400 hover:text-[#f26522]">VIEW ALL</button>
                    </div>
                    <div className="h-80">
                        <Bar data={topDistrictsData} options={chartOptions} />
                    </div>
                </div>
            </div>

            {/* Bottom Alert/Insight */}
            <div className="bg-[#003366] rounded-[32px] p-8 text-white flex flex-col md:flex-row items-center justify-between">
                <div>
                    <h4 className="text-xl font-bold mb-1">Weekly Intelligence Report is ready</h4>
                    <p className="text-white/60 text-sm">We've identified a 14% RTO risk in the South Zone. Review your NDR settings.</p>
                </div>
                <button className="mt-4 md:mt-0 bg-[#f26522] px-8 py-3 rounded-full font-black text-xs tracking-widest hover:scale-105 transition">DOWNLOAD PDF</button>
            </div>
        </div>
      </div>
    </div>
  );
}

export default ReportsPage;