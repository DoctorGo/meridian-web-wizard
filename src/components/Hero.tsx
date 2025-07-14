import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, TrendingUp, Zap } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-hero py-20 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
      
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          {/* Announcement Badge */}
          <div className="mb-8 animate-fade-up">
            <div className="inline-flex items-center space-x-2 rounded-full bg-accent/10 px-4 py-2 text-sm font-medium text-accent border border-accent/20">
              <Zap className="h-4 w-4" />
              <span>New AI Integration Services Available</span>
            </div>
          </div>

          {/* Main Headline */}
          <div className="mb-8 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
              Grow smarter.{" "}
              <span className="text-transparent bg-gradient-to-r from-primary to-accent bg-clip-text">
                Rank higher.
              </span>
            </h1>
          </div>

          {/* Subheadline */}
          <div className="mb-12 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground sm:text-xl">
              Professional Local & Organic SEO services and AI integration consulting 
              to accelerate your business growth — trusted by forward-thinking companies.
            </p>
          </div>

          {/* CTA Section */}
          <div className="mb-16 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <div className="flex w-full max-w-sm space-x-2">
                <Input
                  type="email"
                  placeholder="Enter your business email"
                  className="flex-1"
                />
                <Button variant="accent" size="default">
                  Get Started
                </Button>
              </div>
            </div>
            
            <div className="mt-4 flex items-center justify-center space-x-1 text-sm text-muted-foreground">
              <button className="flex items-center space-x-1 hover:text-accent transition-colors">
                <span>See our case studies</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <p className="mb-8 text-sm font-medium text-muted-foreground">
              Trusted by 100+ growing businesses.
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-8 opacity-60">
              {/* Placeholder company logos - replace with actual client logos */}
              <div className="flex items-center space-x-2">
                <TrendingUp className="h-6 w-6 text-primary" />
                <span className="text-sm font-medium">TechCorp</span>
              </div>
              <div className="flex items-center space-x-2">
                <TrendingUp className="h-6 w-6 text-primary" />
                <span className="text-sm font-medium">GrowthCo</span>
              </div>
              <div className="flex items-center space-x-2">
                <TrendingUp className="h-6 w-6 text-primary" />
                <span className="text-sm font-medium">ScaleUp</span>
              </div>
              <div className="flex items-center space-x-2">
                <TrendingUp className="h-6 w-6 text-primary" />
                <span className="text-sm font-medium">InnovateInc</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;