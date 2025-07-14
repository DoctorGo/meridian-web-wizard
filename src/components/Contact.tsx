import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });

  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    toast({
      title: "Message sent!",
      description: "Thank you for your interest. We'll get back to you within 24 hours.",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      company: "",
      message: ""
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      details: "hello@meridianconsulting.com",
      subtitle: "We'll respond within 24 hours"
    },
    {
      icon: Phone,
      title: "Phone",
      details: "+1 (555) 123-4567",
      subtitle: "Mon-Fri 9AM-6PM EST"
    },
    {
      icon: MapPin,
      title: "Office",
      details: "New York, NY",
      subtitle: "Available for remote consultations"
    }
  ];

  return (
    <section id="contact" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
            Ready to grow your business?
          </h2>
          <p className="text-lg text-muted-foreground">
            Get in touch with our team to discuss your SEO and AI integration needs
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Contact Form */}
          <Card className="shadow-soft border-0">
            <CardHeader>
              <CardTitle>Send us a message</CardTitle>
              <CardDescription>
                Tell us about your project and we'll get back to you with a custom strategy.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-foreground">
                      Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your full name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-foreground">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="company" className="text-sm font-medium text-foreground">
                    Company
                  </label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your company name"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    placeholder="Tell us about your project goals and challenges..."
                  />
                </div>

                <Button type="submit" variant="accent" className="w-full">
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">
                Get in touch
              </h3>
              <p className="text-muted-foreground">
                Prefer to talk directly? We're here to help you succeed.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info) => (
                <div
                  key={info.title}
                  className="flex items-start space-x-4 p-4 rounded-lg bg-muted/50 hover:bg-muted/70 transition-colors"
                >
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <info.icon className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-foreground">{info.title}</h4>
                    <p className="text-sm font-medium text-foreground">{info.details}</p>
                    <p className="text-xs text-muted-foreground">{info.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-lg bg-gradient-to-br from-accent/10 to-primary/10 p-6 border border-accent/20">
              <h4 className="font-semibold text-foreground mb-2">
                Free Strategy Session
              </h4>
              <p className="text-sm text-muted-foreground mb-4">
                Book a 30-minute consultation to discuss your digital growth goals.
              </p>
              <Button variant="outline" className="w-full">
                Schedule a Call
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;