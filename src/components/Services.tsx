import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Search, Bot, ArrowRight } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: MapPin,
      title: "Local SEO",
      description: "Dominate your local market with Google My Business optimization, local citations, and location-based keyword strategies.",
      features: [
        "Google My Business optimization",
        "Local citation building",
        "Review management",
        "Local keyword research"
      ]
    },
    {
      icon: Search,
      title: "Organic SEO",
      description: "Boost your search rankings with comprehensive on-page and off-page SEO strategies that drive long-term organic growth.",
      features: [
        "Technical SEO audits",
        "Content optimization",
        "Link building campaigns",
        "Keyword strategy & research"
      ]
    },
    {
      icon: Bot,
      title: "AI Integration",
      description: "Leverage cutting-edge AI tools and automation to streamline your business processes and gain competitive advantages.",
      features: [
        "AI workflow automation",
        "Chatbot implementation",
        "AI-powered content creation",
        "Custom AI solutions"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
            Services that drive real results
          </h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive digital solutions tailored to accelerate your business growth
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <Card 
              key={service.title} 
              className="hover-lift border-0 bg-background shadow-soft hover:shadow-medium transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <service.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl font-semibold">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-muted-foreground">
                      <div className="mr-2 h-1.5 w-1.5 rounded-full bg-accent" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full group">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-4 rounded-lg bg-accent/10 p-6 border border-accent/20">
            <div className="flex-1 text-left">
              <h3 className="font-semibold text-foreground">
                Not sure which service is right for you?
              </h3>
              <p className="text-sm text-muted-foreground">
                Get a free consultation and custom strategy for your business.
              </p>
            </div>
            <Button variant="accent">
              Free Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;