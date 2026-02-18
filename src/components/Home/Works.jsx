'use client'
import React from 'react';
import { QrCode, Clock, TrendingDown, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const Works = () => {
    return (
        <section id='works' className="w-full py-24 lg:py-32 bg-zinc-950 text-zinc-100 overflow-hidden font-sans">
            <div className="container px-4 md:px-6 mx-auto">

                <div className="grid gap-12 lg:grid-cols-2 lg:gap-24 items-center">

                    {/* LEFT COLUMN: Text & Branding */}
                    <div className="flex flex-col space-y-8">
                        <div className="space-y-4">
                            {/* Catchy Startup Badge */}
                            <Badge variant="outline" className="w-fit px-4 py-1.5 mb-2 text-sm font-medium uppercase tracking-wider border-amber-500/30 bg-amber-500/10 text-amber-500 flex items-center gap-2">
                                <Sparkles className="h-3.5 w-3.5" />
                                Currently Building
                            </Badge>

                            {/* BRAND NAME & SLOGAN STACK */}
                            <div className="space-y-2">
                                {/* 1. PRODUCT NAME (The Highlight) */}
                                <h1 className="text-5xl sm:text-7xl font-black tracking-tighter text-amber-500 uppercase">
                                    PantryPal
                                </h1>
                                {/* 2. THE SLOGAN */}
                                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
                                    Inventory management, <br />
                                    <span className="text-zinc-400">simplified by QR.</span>
                                </h2>
                            </div>

                            <p className="max-w-[600px] text-zinc-400 text-lg md:text-xl leading-relaxed">
                                We replace manual counting with bulk QR coding. Track expiry dates, monitor stock levels, and reduce manager workload in a single scan.
                            </p>
                        </div>

                        {/* Key Feature List - Kept from the layout you liked */}
                        <div className="space-y-6 pt-4">
                            <div className="flex items-start gap-4">
                                <div className="mt-1 bg-amber-500/10 p-3 rounded-xl border border-amber-500/20 shadow-[0_0_15px_rgba(245,158,11,0.15)]">
                                    <QrCode className="h-6 w-6 text-amber-500" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-xl text-white mb-1">Bulk QR Coding</h3>
                                    <p className="text-zinc-400 leading-relaxed">Tag items in batches. Scan once to update inventory count and details instantly.</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="mt-1 bg-amber-500/10 p-3 rounded-xl border border-amber-500/20">
                                    <Clock className="h-6 w-6 text-amber-500" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-xl text-white mb-1">Automated Expiry Tracking</h3>
                                    <p className="text-zinc-400 leading-relaxed">Never sell expired goods. Get proactive alerts before products go bad.</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="mt-1 bg-amber-500/10 p-3 rounded-xl border border-amber-500/20">
                                    <TrendingDown className="h-6 w-6 text-amber-500" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-xl text-white mb-1">Reduced Operational Load</h3>
                                    <p className="text-zinc-400 leading-relaxed">Save hours for store managers by automating the tedious parts of inventory.</p>
                                </div>
                            </div>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 pt-4 cursor-pointer">
                            <Button size="lg" className="cursor-pointer h-12 px-8 text-md group bg-amber-500 hover:bg-black hover:text-amber-500 hover:shadow-2xs transition-all duration-300 shadow-amber-500 text-zinc-950 font-bold">
                                Request a Demo
                                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:rotate-315" />
                            </Button>
                        </div>
                    </div>

                    {/* RIGHT COLUMN: Visual Showcase (The Layout you liked) */}
                    <div className="relative group perspective-1000 lg:ml-auto lg:max-w-[600px]">
                        {/* Background Glow */}
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-500/30 to-orange-600/30 rounded-2xl blur-2xl opacity-30 group-hover:opacity-50 transition duration-1000"></div>

                        {/* Main Interface Card */}
                        <Card className="relative bg-zinc-900 border-zinc-800 overflow-hidden shadow-2xl rounded-2xl transform transition-transform hover:scale-[1.01] duration-500">

                            {/* Mock Header */}
                            <div className="border-b border-zinc-800 bg-zinc-900/50 p-4 flex items-center justify-between">
                                <div className="flex gap-2">
                                    <div className="h-3 w-3 rounded-full bg-zinc-700"></div>
                                    <div className="h-3 w-3 rounded-full bg-zinc-700"></div>
                                    <div className="h-3 w-3 rounded-full bg-zinc-700"></div>
                                </div>
                                <div className="h-2 w-24 rounded-full bg-zinc-800"></div>
                            </div>

                            <CardContent className="p-6 space-y-6">

                                {/* Stat Cards Row */}
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-zinc-800/40 p-5 rounded-xl border border-zinc-700/50 relative overflow-hidden">
                                        <div className="absolute top-0 right-0 w-16 h-16 bg-amber-500/10 blur-xl rounded-full -mr-8 -mt-8"></div>
                                        <div className="text-xs text-zinc-400 uppercase font-bold tracking-wider">Total Items</div>
                                        <div className="text-3xl font-bold mt-2 text-white">12,450</div>
                                        <div className="text-xs text-emerald-400 mt-2 flex items-center font-medium">
                                            <TrendingDown className="h-3 w-3 mr-1 rotate-180" /> +2.5% vs last week
                                        </div>
                                    </div>
                                    <div className="bg-zinc-800/40 p-5 rounded-xl border border-zinc-700/50 relative overflow-hidden">
                                        <div className="absolute top-0 right-0 w-16 h-16 bg-red-500/10 blur-xl rounded-full -mr-8 -mt-8"></div>
                                        <div className="text-xs text-zinc-400 uppercase font-bold tracking-wider">Expiry Alerts</div>
                                        <div className="text-3xl font-bold mt-2 text-red-400">14</div>
                                        <div className="text-xs text-zinc-500 mt-2 font-medium">Action required</div>
                                    </div>
                                </div>

                                {/* QR Scan Simulation Area */}
                                <div className="relative bg-black/30 rounded-xl border-2 border-dashed border-amber-500/30 p-8 flex flex-col items-center justify-center text-center space-y-4">
                                    <div className="bg-zinc-800 p-4 rounded-2xl shadow-inner border border-zinc-700 relative">
                                        <div className="absolute top-0 left-0 w-full h-1 bg-amber-500/50 shadow-[0_0_10px_rgba(245,158,11,0.8)] animate-[scan_3s_ease-in-out_infinite]"></div>
                                        <QrCode className="h-16 w-16 text-amber-500" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-lg text-zinc-100">Bulk Scanning Active</p>
                                        <p className="text-sm text-zinc-400">Batch #4092-A processing...</p>
                                    </div>

                                    {/* Floating 'Success' Badge */}
                                    <div className="absolute -top-3 right-4 bg-emerald-950/90 text-emerald-400 border border-emerald-900 text-xs px-3 py-1.5 rounded-full flex items-center shadow-lg font-medium">
                                        <CheckCircle2 className="h-3.5 w-3.5 mr-1" /> Verified
                                    </div>
                                </div>

                                {/* List Simulation */}
                                <div className="space-y-3 pt-2">
                                    {[1, 2, 3].map((i) => (
                                        <div key={i} className="flex items-center justify-between p-3 bg-zinc-800/30 rounded-lg border border-transparent hover:border-zinc-700 transition-colors">
                                            <div className="flex items-center gap-3">
                                                <div className="h-8 w-8 rounded bg-zinc-700/50"></div>
                                                <div>
                                                    <div className="h-2.5 w-24 bg-zinc-700 rounded mb-1.5"></div>
                                                    <div className="h-2 w-16 bg-zinc-800 rounded"></div>
                                                </div>
                                            </div>
                                            <div className="h-2 w-12 bg-zinc-800 rounded opacity-50"></div>
                                        </div>
                                    ))}
                                </div>

                            </CardContent>
                        </Card>
                    </div>

                </div>
            </div>
            <style jsx>{`
        @keyframes scan {
          0%, 100% { top: 0%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
      `}</style>
        </section>
    );
};

export default Works;