import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Phone, Mail, MapPin, Linkedin, Clock } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { AbstractShapes } from "@/components/shared/AbstractShapes";
import { GlowCard } from "@/components/shared/GlowCard";
import { toast } from "sonner";
const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "+92 3176364092",
    href: "tel:+923176364092",
  },
  {
    icon: Mail,
    label: "Email",
    value: "algomics@gmail.com",
    href: "mailto:algomics@gmail.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Barakahu, Islamabad, Pakistan",
    href: "#",
  },
  {
    icon: Clock,
    label: "Working Hours",
    value: "Mon - Fri, 9:00 AM - 6:00 PM PKT",
    href: "#",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast.success("Message sent successfully! We'll get back to you soon.");
    setFormData({
      name: "",
      email: "",
      organization: "",
      service: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden hero-gradient">
        <AbstractShapes variant="hero" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            >
              <span className="text-foreground">Get in </span>
              <span className="gradient-text">Touch</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg md:text-xl text-muted-foreground leading-relaxed"
            >
              Ready to transform your research with data-driven insights? 
              We'd love to hear about your project.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <SectionWrapper>
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <GlowCard className="p-8">
                <h2 className="font-heading text-2xl font-bold text-foreground mb-6">
                  Send Us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Full Name *
                      </label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                        className="bg-background/50 border-border/50 focus:border-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Email *
                      </label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="john@example.com"
                        className="bg-background/50 border-border/50 focus:border-primary"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Organization
                    </label>
                    <Input
                      name="organization"
                      value={formData.organization}
                      onChange={handleChange}
                      placeholder="Your organization or university"
                      className="bg-background/50 border-border/50 focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Service of Interest
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full h-10 px-3 rounded-lg bg-background/50 border border-border/50 text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    >
                      <option value="">Select a service</option>
                      <option value="ngs">NGS Analysis</option>
                      <option value="ml">Machine Learning</option>
                      <option value="docking">Molecular Docking</option>
                      <option value="multiomics">Multi-omics Integration</option>
                      <option value="neuro">Neuroinformatics</option>
                      <option value="custom">Custom Development</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Message *
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Tell us about your project..."
                      rows={5}
                      className="bg-background/50 border-border/50 focus:border-primary resize-none"
                    />
                  </div>
                  <Button
                    type="submit"
                    variant="hero"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message
                        <Send size={18} />
                      </>
                    )}
                  </Button>
                </form>
              </GlowCard>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div>
                <h2 className="font-heading text-2xl font-bold text-foreground mb-6">
                  Contact Information
                </h2>
                <div className="space-y-4">
                  {contactInfo.map((item, index) => (
                    <motion.a
                      key={item.label}
                      href={item.href}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-start gap-4 p-4 rounded-xl bg-card/30 border border-border/50 hover:border-primary/30 hover:bg-card/50 transition-all group"
                    >
                      <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                        <item.icon size={20} />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground mb-1">
                          {item.label}
                        </div>
                        <div className="text-foreground font-medium">
                          {item.value}
                        </div>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Social */}
              <div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-4">
                  Connect With Us
                </h3>
                <div className="flex gap-3">
                  <a
                    href="https://www.linkedin.com/company/algomics/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg bg-card/30 border border-border/50 text-muted-foreground hover:bg-primary/20 hover:text-primary hover:border-primary/30 transition-all"
                  >
                    <Linkedin size={24} />
                  </a>
                  <a
                    href="mailto:algomics@gmail.com"
                    className="p-3 rounded-lg bg-card/30 border border-border/50 text-muted-foreground hover:bg-primary/20 hover:text-primary hover:border-primary/30 transition-all"
                  >
                    <Mail size={24} />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </SectionWrapper>

      <Footer />
    </div>
  );
};

export default Contact;
