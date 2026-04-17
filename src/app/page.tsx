export default function Home() {
  return (
    <div className="min-h-screen bg-[#1A1A2E]">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-[#1A1A2E]/80 backdrop-blur-md border-b border-white/10 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-white">NovaGrid</div>
          <div className="flex gap-8 items-center">
            <a href="#features" className="text-white/80 hover:text-white transition-colors">Features</a>
            <a href="#about" className="text-white/80 hover:text-white transition-colors">About</a>
            <button className="bg-[#E94560] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#E94560]/90 transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
              The Future of
              <span className="text-[#E94560]"> Grid Computing</span>
            </h1>
            <p className="text-xl text-white/70 mb-10 leading-relaxed">
              NovaGrid empowers enterprises with scalable, distributed computing solutions.
              Transform your infrastructure with next-generation grid technology.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <button className="bg-[#E94560] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#E94560]/90 transition-all hover:scale-105">
                Start Free Trial
              </button>
              <button className="border-2 border-white/20 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:border-white/40 hover:bg-white/5 transition-all">
                Watch Demo
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 max-w-4xl mx-auto">
            <div className="text-center p-6 bg-[#16213E] rounded-xl border border-white/10">
              <div className="text-4xl font-bold text-[#E94560] mb-2">99.9%</div>
              <div className="text-white/70">Uptime Guarantee</div>
            </div>
            <div className="text-center p-6 bg-[#16213E] rounded-xl border border-white/10">
              <div className="text-4xl font-bold text-[#E94560] mb-2">50K+</div>
              <div className="text-white/70">Active Nodes</div>
            </div>
            <div className="text-center p-6 bg-[#16213E] rounded-xl border border-white/10">
              <div className="text-4xl font-bold text-[#E94560] mb-2">10x</div>
              <div className="text-white/70">Performance Boost</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 bg-[#16213E]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-4">Powerful Features</h2>
            <p className="text-xl text-white/70">Everything you need for distributed computing excellence</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-[#1A1A2E] rounded-xl border border-white/10 hover:border-[#E94560]/50 transition-all">
              <div className="w-12 h-12 bg-[#E94560]/20 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#E94560]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Lightning Fast</h3>
              <p className="text-white/70 leading-relaxed">
                Distributed processing across thousands of nodes for unmatched speed and efficiency.
              </p>
            </div>

            <div className="p-8 bg-[#1A1A2E] rounded-xl border border-white/10 hover:border-[#E94560]/50 transition-all">
              <div className="w-12 h-12 bg-[#E94560]/20 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#E94560]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Enterprise Security</h3>
              <p className="text-white/70 leading-relaxed">
                Bank-grade encryption and compliance with SOC2, GDPR, and HIPAA standards.
              </p>
            </div>

            <div className="p-8 bg-[#1A1A2E] rounded-xl border border-white/10 hover:border-[#E94560]/50 transition-all">
              <div className="w-12 h-12 bg-[#E94560]/20 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#E94560]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Auto-Scaling</h3>
              <p className="text-white/70 leading-relaxed">
                Automatically scale resources up or down based on demand, optimizing costs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-white mb-6">
            Ready to Transform Your Infrastructure?
          </h2>
          <p className="text-xl text-white/70 mb-10">
            Join thousands of companies already leveraging NovaGrid for their computing needs.
          </p>
          <button className="bg-[#E94560] text-white px-10 py-5 rounded-lg font-semibold text-lg hover:bg-[#E94560]/90 transition-all hover:scale-105">
            Start Your Free Trial Today
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 px-6">
        <div className="max-w-7xl mx-auto text-center text-white/50">
          <p>&copy; 2026 NovaGrid. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
