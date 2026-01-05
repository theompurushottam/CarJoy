import React from "react";

const TrackingPage = () => {
    return (
        <div className="space-y-6">
            <div className="space-y-4">
                <div className="relative group">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1 mb-1 block">
                        Tracking Number
                    </label>
                    <div className="relative">
                        <input 
                            type="text" 
                            placeholder="Enter AWB or Order ID"
                            className="w-full px-5 py-5 bg-slate-50 border border-slate-100 rounded-2xl text-base font-bold text-[#003366] outline-none transition-all focus:bg-white focus:ring-2 focus:ring-[#f26522]/20 focus:border-[#f26522] placeholder:text-slate-300 uppercase tracking-wider"
                        />
                        <div className="absolute right-4 top-1/2 -translate-y-1/2">
                            <svg className="w-5 h-5 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                    </div>
                </div>

                <div className="p-4 bg-orange-50/50 rounded-2xl border border-orange-100/50">
                    <p className="text-[11px] font-medium text-orange-700 leading-relaxed">
                        <span className="font-black mr-1 uppercase">Note:</span> 
                        Tracking information may take up to 24 hours to update after the shipment is picked up.
                    </p>
                </div>
            </div>

            <button className="w-full bg-[#f26522] text-white py-5 rounded-2xl font-black text-xs tracking-[0.2em] shadow-xl shadow-orange-900/20 hover:bg-[#d4541a] transition-all transform hover:-translate-y-0.5">
                TRACK SHIPMENT
            </button>

            <div className="pt-2">
                <p className="text-[10px] font-black text-slate-300 uppercase tracking-[0.2em] text-center mb-3">Recently Tracked</p>
                <div className="flex flex-wrap justify-center gap-2">
                    {["SMP7721", "SMP9021"].map(id => (
                        <span key={id} className="text-[10px] font-bold text-[#003366] bg-slate-100 px-3 py-1.5 rounded-full cursor-pointer hover:bg-slate-200 transition">
                            {id}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TrackingPage;