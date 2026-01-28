import { Apple, Smartphone } from 'lucide-react';

export function FooterCTA() {
  return (
    <footer className="py-16 bg-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-background rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-background rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-8">
          Download habit tracker<br />
          and growth with us!
        </h2>

        {/* App Store Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <button className="flex items-center gap-3 px-6 py-4 bg-background text-foreground rounded-xl hover:scale-105 hover:-translate-y-1 transition-all duration-200 shadow-elevated hover:shadow-2xl group">
            <Apple className="w-8 h-8 group-hover:scale-110 transition-transform" />
            <div className="text-left">
              <div className="text-xs opacity-80">Download on the</div>
              <div className="text-lg font-semibold">App Store</div>
            </div>
          </button>
          <button className="flex items-center gap-3 px-6 py-4 bg-background text-foreground rounded-xl hover:scale-105 hover:-translate-y-1 transition-all duration-200 shadow-elevated hover:shadow-2xl group">
            <Smartphone className="w-8 h-8 group-hover:scale-110 transition-transform" />
            <div className="text-left">
              <div className="text-xs opacity-80">Get it on</div>
              <div className="text-lg font-semibold">Google Play</div>
            </div>
          </button>
        </div>

        {/* Footer Links */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-wrap justify-center gap-6 text-sm text-primary-foreground/70">
            <a href="#" className="hover:text-primary-foreground transition-colors link-hover">About us</a>
            <a href="#" className="hover:text-primary-foreground transition-colors link-hover">FAQ</a>
            <a href="#" className="hover:text-primary-foreground transition-colors link-hover">Security</a>
            <a href="#" className="hover:text-primary-foreground transition-colors link-hover">Brand Assets</a>
            <a href="#" className="hover:text-primary-foreground transition-colors link-hover">Terms of Use</a>
            <a href="#" className="hover:text-primary-foreground transition-colors link-hover">Privacy Policy</a>
          </div>
          <div className="mt-6 text-sm text-primary-foreground/50">
            © 2024 Bloom. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
