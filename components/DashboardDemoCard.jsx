"use client";

import React from 'react';

const DashboardDemoCard = () => {
  return (
    <div className="section-shell">
      <div className="section-inner">
        <div className="flex flex-col items-center gap-10">
          <div className="text-center">
            <h2 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
              The <span className="accent-text">Glassmorphism</span> Standard
            </h2>
            <p className="mt-4 text-white/60">
              A showcase of the premium frosting and neon glow effects.
            </p>
          </div>

          <div className="relative group w-full max-w-2xl translate-z-0">
            {/* Background Glow Accents - Unified Purple */}
            <div className="neon-glow-accent glow-purple -top-10 -left-10 group-hover:scale-125 transition-transform duration-700" />
            <div className="neon-glow-accent glow-purple -bottom-10 -right-10 group-hover:scale-125 transition-transform duration-700 opacity-20" />

            <div className="surface-panel p-8 sm:p-12 relative z-10">
              <div className="flex flex-col gap-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center shadow-lg shadow-purple-500/20">
                      <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-white">Project Dashboard</h4>
                      <p className="text-white/50 text-sm">Active Monitoring</p>
                    </div>
                  </div>
                  <div className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider">
                    Live
                  </div>
                </div>

                <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                <div className="grid grid-cols-2 gap-4">
                  <div className="surface-card p-4 bg-white/[0.03]">
                    <p className="text-xs font-medium text-white/40 uppercase tracking-widest">Efficiency</p>
                    <p className="text-2xl font-bold text-white mt-1">+94.2%</p>
                  </div>
                  <div className="surface-card p-4 bg-white/[0.03]">
                    <p className="text-xs font-medium text-white/40 uppercase tracking-widest">Growth</p>
                    <p className="text-2xl font-bold text-white mt-1">12.5k</p>
                  </div>
                </div>

                <div className="surface-card p-6 bg-white/[0.02] border-white/5">
                  <p className="text-sm text-white/70 leading-relaxed italic">
                    "The frosted glass effect adds a layer of depth that makes the interface feel tactile and modern. The subtle borders and neon accents create a true dashboard experience."
                  </p>
                </div>

                <button className="w-full h-12 rounded-xl bg-white text-black font-bold hover:bg-white/90 transition-all flex items-center justify-center gap-2 group/btn">
                  Launch Console
                  <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardDemoCard;
