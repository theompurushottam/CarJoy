import React from "react";

function HomePage() {
    return (
        <div className="min-h-screen flex flex-col font-sans text-slate-900 bg-white">
            {/* Hero Section */}
            <section className="relative bg-slate-50 overflow-hidden">
                {/* Decorative Background Element */}
                <div className="absolute top-0 right-0 -mt-20 -mr-20 w-[600px] h-[600px] bg-orange-100 rounded-full blur-3xl opacity-50"></div>
                
                <div className="max-w-7xl mx-auto px-6 py-20 md:py-32 grid lg:grid-cols-2 gap-12 items-center relative z-10">
                    <div className="space-y-8">
                        <div className="inline-flex items-center space-x-2 bg-white border border-gray-200 px-3 py-1 rounded-full shadow-sm">
                            <span className="flex h-2 w-2 rounded-full bg-green-500"></span>
                            <span className="text-xs font-bold text-slate-600 uppercase tracking-wider">Now serving 29,000+ Pincodes</span>
                        </div>
                        
                        <h1 className="text-5xl md:text-7xl font-black text-[#003366] leading-[1.1]">
                            Scale your <br />
                            <span className="text-[#f26522]">e-commerce</span> <br />
                            without limits.
                        </h1>
                        
                        <p className="text-lg text-slate-600 max-w-lg leading-relaxed">
                            ShipMyParcel is the ultimate logistics engine for your business. Integrate with top couriers and deliver smiles to your customers, faster than ever.
                        </p>

                        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                            <a
                                href="/register"
                                className="bg-[#f26522] text-white py-4 px-8 rounded-lg font-bold text-center hover:bg-[#d4541a] shadow-lg shadow-orange-200 transition-all transform hover:-translate-y-1"
                            >
                                Get Started for Free
                            </a>
                            <a
                                href="/login"
                                className="bg-white text-[#003366] border-2 border-[#003366] py-4 px-8 rounded-lg font-bold text-center hover:bg-slate-50 transition-all"
                            >
                                Merchant Login
                            </a>
                        </div>
                    </div>

                    {/* Visual Element / Placeholder for an Illustration */}
                    <div className="hidden lg:block relative">
                        <div className="bg-[#003366] rounded-3xl p-8 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                            <div className="bg-white/10 rounded-xl p-6 border border-white/20">
                                <div className="h-4 w-32 bg-white/30 rounded mb-4"></div>
                                <div className="h-8 w-48 bg-white/50 rounded mb-8"></div>
                                <div className="space-y-4">
                                    <div className="h-2 w-full bg-white/20 rounded"></div>
                                    <div className="h-2 w-full bg-white/20 rounded"></div>
                                    <div className="h-2 w-3/4 bg-white/20 rounded"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-20 max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-[#003366]">Why Choose ShipMyParcel?</h2>
                    <div className="w-20 h-1 bg-[#f26522] mx-auto mt-4"></div>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {/* Feature 1 */}
                    <div className="p-8 border border-gray-100 rounded-2xl hover:shadow-xl transition-shadow bg-white group">
                        <div className="w-12 h-12 bg-orange-50 text-[#f26522] rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#f26522] group-hover:text-white transition-colors">
                            <span className="material-icons">speed</span>
                        </div>
                        <h3 className="text-xl font-bold text-[#003366] mb-3">Next-Day Delivery</h3>
                        <p className="text-sm text-gray-500 leading-relaxed">Leverage our AI-driven routing to find the fastest carrier for every single order.</p>
                    </div>

                    {/* Feature 2 */}
                    <div className="p-8 border border-gray-100 rounded-2xl hover:shadow-xl transition-shadow bg-white group">
                        <div className="w-12 h-12 bg-blue-50 text-[#003366] rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#003366] group-hover:text-white transition-colors">
                            <span className="material-icons">account_tree</span>
                        </div>
                        <h3 className="text-xl font-bold text-[#003366] mb-3">Multi-Channel Sync</h3>
                        <p className="text-sm text-gray-500 leading-relaxed">Import orders directly from Shopify, Amazon, and WooCommerce with one-click integration.</p>
                    </div>

                    {/* Feature 3 */}
                    <div className="p-8 border border-gray-100 rounded-2xl hover:shadow-xl transition-shadow bg-white group">
                        <div className="w-12 h-12 bg-orange-50 text-[#f26522] rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#f26522] group-hover:text-white transition-colors">
                            <span className="material-icons">payments</span>
                        </div>
                        <h3 className="text-xl font-bold text-[#003366] mb-3">Cash on Delivery</h3>
                        <p className="text-sm text-gray-500 leading-relaxed">Automated COD remittance and early payment options to keep your cash flow healthy.</p>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="bg-[#003366] py-16">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    <div>
                        <p className="text-4xl font-black text-[#f26522]">1M+</p>
                        <p className="text-blue-200 text-xs uppercase font-bold mt-2">Shipments Monthly</p>
                    </div>
                    <div>
                        <p className="text-4xl font-black text-[#f26522]">17+</p>
                        <p className="text-blue-200 text-xs uppercase font-bold mt-2">Courier Partners</p>
                    </div>
                    <div>
                        <p className="text-4xl font-black text-[#f26522]">24/7</p>
                        <p className="text-blue-200 text-xs uppercase font-bold mt-2">Expert Support</p>
                    </div>
                    <div>
                        <p className="text-4xl font-black text-[#f26522]">99%</p>
                        <p className="text-blue-200 text-xs uppercase font-bold mt-2">Success Rate</p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default HomePage;