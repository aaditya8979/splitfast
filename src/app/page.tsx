import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, Calculator, Camera, QrCode, Users } from 'lucide-react'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-muted flex flex-col items-center justify-center p-4 md:p-8">
      
      {/* 1. HERO SECTION */}
      <div className="text-center max-w-3xl mb-12 space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-bold border border-secondary/20">
          🇮🇳 Made for Indian Roommates
        </div>
        
        <h1 className="text-5xl md:text-7xl font-black text-foreground tracking-tight">
          Split<span className="text-primary">Fast</span>
        </h1>
        
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Stop arguing over who ordered what. Scan bills, split expenses, and settle via 
          <span className="font-bold text-foreground"> UPI</span> in seconds.
        </p>
      </div>

      {/* 2. THE FEATURE GRID */}
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
          icon={<Calculator className="text-indigo-400" />}
          title="Fair Math"
          desc="Proportional tax, tip, and shared item splitting."
        />
        <FeatureCard 
          icon={<QrCode className="text-amber-500" />}
          title="One-Tap Payment"
          desc="Generate UPI links for instant settlement."
        />
      </div>

      {/* 3. THE "START SPLITTING" CARD */}
      <div className="w-full max-w-md bg-card rounded-3xl shadow-2xl shadow-indigo-100/50 dark:shadow-indigo-950/30 border border-border overflow-hidden">
        <div className="p-8 space-y-6">
          <div className="text-center space-y-1">
            <h2 className="text-2xl font-bold text-foreground">Start Splitting Now</h2>
            <p className="text-sm text-muted-foreground">No login required. Just create & share.</p>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Session Name</label>
              <input 
                type="text" 
                placeholder="e.g. Goa Trip, Flat 302" 
                className="w-full p-4 bg-muted border-2 border-border rounded-xl focus:border-primary focus:ring-0 outline-none transition font-medium text-foreground placeholder:text-muted-foreground"
              />
            </div>

            <Button asChild className="w-full h-14 text-lg font-bold bg-primary hover:bg-indigo-600 text-primary-foreground shadow-lg shadow-indigo-200/50 dark:shadow-indigo-900/30 rounded-xl transition-all transform active:scale-95">
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

      {/* 4. FOOTER */}
      <footer className="mt-16 text-muted-foreground text-sm font-medium">
        © 2026 SplitFast • Built with ❤️ in India
      </footer>
    </main>
  )
}

// Helper Component for the Feature Cards
function FeatureCard({ icon, title, desc }: { icon: any, title: string, desc: string }) {
  return (
    <div className="bg-card p-6 rounded-2xl border border-border shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center gap-3">
      <div className="p-3 bg-muted rounded-xl mb-1">
        {icon}
      </div>
      <h3 className="font-bold text-foreground">{title}</h3>
      <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
    </div>
  )
}