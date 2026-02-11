import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, Calculator, Camera, QrCode, Users, Zap } from 'lucide-react'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-hero-gradient flex flex-col items-center justify-center p-4 md:p-8">
      
      {/* 1. HERO SECTION */}
      <div className="text-center max-w-3xl mb-12 space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-bold border border-secondary/20">
          🇮🇳 Made for Indian Roommates
        </div>
        
        <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tight">
          Split<span className="text-primary">Fast</span>
        </h1>
        
        <p className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
          Stop arguing over who ordered what. Scan bills, split expenses, and settle via 
          <span className="font-bold text-slate-800"> UPI</span> in seconds.
        </p>
      </div>

      {/* 2. THE FEATURE GRID (Your 4 Cards) */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 w-full max-w-5xl mb-12">
        <FeatureCard 
          icon={<Camera className="text-primary" />}
          title="AI-Powered OCR"
          desc="Upload a receipt, get instant item extraction."
        />
        <FeatureCard 
          icon={<Users className="text-secondary" />}
          title="Real-time Sync"
          desc="Everyone sees updates instantly on their phone."
        />
        <FeatureCard 
          icon={<Calculator className="text-blue-500" />}
          title="Fair Math"
          desc="Proportional tax, tip, and shared item splitting."
        />
        <FeatureCard 
          icon={<QrCode className="text-purple-500" />}
          title="One-Tap Payment"
          desc="Generate UPI links for instant settlement."
        />
      </div>

      {/* 3. THE "START SPLITTING" CARD (Your Input Form UI) */}
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl shadow-red-100/50 border border-slate-100 overflow-hidden">
        <div className="p-8 space-y-6">
          <div className="text-center space-y-1">
            <h2 className="text-2xl font-bold text-slate-900">Start Splitting Now</h2>
            <p className="text-sm text-slate-400">No login required. Just create & share.</p>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Session Name</label>
              <input 
                type="text" 
                placeholder="e.g. Goa Trip, Flat 302" 
                className="w-full p-4 bg-slate-50 border-2 border-slate-100 rounded-xl focus:border-primary focus:ring-0 outline-none transition font-medium text-slate-900 placeholder:text-slate-400"
              />
            </div>

            <Button asChild className="w-full h-14 text-lg font-bold bg-primary hover:bg-red-600 text-white shadow-lg shadow-red-200 rounded-xl transition-all transform active:scale-95">
              <Link href="/groups" className="flex items-center justify-center gap-2">
                Create Session <ArrowRight size={20} />
              </Link>
            </Button>
          </div>
          
          <div className="pt-4 text-center">
            <Link href="/groups" className="text-sm font-semibold text-secondary hover:underline">
              Join existing room?
            </Link>
          </div>
        </div>
        
        {/* Decorative Bottom Bar */}
        <div className="h-2 w-full bg-gradient-to-r from-primary to-secondary" />
      </div>

      {/* 4. FOOTER (Personalized) */}
      <footer className="mt-16 text-slate-400 text-sm font-medium">
        © 2026 SplitFast • Built with ❤️ in India
      </footer>
    </main>
  )
}

// Helper Component for the Feature Cards
function FeatureCard({ icon, title, desc }: { icon: any, title: string, desc: string }) {
  return (
    <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center gap-3">
      <div className="p-3 bg-slate-50 rounded-xl mb-1">
        {icon}
      </div>
      <h3 className="font-bold text-slate-900">{title}</h3>
      <p className="text-xs text-slate-500 leading-relaxed">{desc}</p>
    </div>
  )
}