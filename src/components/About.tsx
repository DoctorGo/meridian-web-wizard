import { Button } from "@/components/ui/button";
import { ArrowRight, Target, Users, TrendingUp } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Story
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Founded in 2022, Meridian Consulting emerged from a vision to help businesses 
            navigate the digital landscape with cutting-edge strategies and AI-powered solutions.
          </p>
        </div>

        {/* Story Content */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-lg p-8 md:p-12 shadow-soft mb-12">
            <h2 className="text-3xl font-bold text-primary mb-6">How We Started</h2>
            <div className="prose prose-lg max-w-none text-foreground">
              <p className="mb-6">
                In early 2022, our founders recognized a critical gap in the digital marketing landscape. 
                While businesses were struggling to maintain visibility in increasingly competitive search 
                results, traditional SEO approaches were becoming less effective. The rise of AI and machine 
                learning was fundamentally changing how search engines ranked content, yet most consultants 
                were still using outdated strategies from the previous decade.
              </p>
              
              <p className="mb-6">
                We launched Meridian Consulting with a bold mission: to pioneer advanced SEO strategies that 
                leverage artificial intelligence and data-driven insights. Our team combined decades of 
                digital marketing experience with cutting-edge AI tools to create unprecedented results 
                for our clients.
              </p>

              <p className="mb-8">
                What started as a two-person operation quickly grew as word spread about our innovative 
                approach. We weren't just optimizing websites—we were reimagining how businesses could 
                connect with their audiences in the digital age. Our advanced strategies consistently 
                delivered 300-500% increases in organic traffic and helped clients dominate their local markets.
              </p>
            </div>
          </div>

          {/* Our Approach */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Advanced Targeting</h3>
              <p className="text-muted-foreground">
                We use AI-powered analytics to identify high-value opportunities others miss.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Proven Results</h3>
              <p className="text-muted-foreground">
                Our strategies consistently deliver measurable growth and ROI for clients.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Client-Focused</h3>
              <p className="text-muted-foreground">
                Every strategy is tailored to your unique business goals and market position.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Digital Presence?</h3>
            <p className="text-muted-foreground mb-8">
              Join the businesses that have already experienced extraordinary growth with our advanced strategies.
            </p>
            <Button variant="accent" size="lg" className="group">
              Get Started Today
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;