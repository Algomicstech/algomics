import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

export function QuickContactSection() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) {
      toast.error("Please write a short message.");
      return;
    }
    const subject = "Quick message from Algomics website";
    const body = `From: ${email || "(no email provided)"}\n\n${message}`;
    window.location.href = `mailto:algomics@gmail.com?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    toast.success("Opening your email app…");
    setEmail("");
    setMessage("");
  };

  return (
    <section className="border-t border-border">
      <div className="container mx-auto px-4 lg:px-8 py-20 md:py-28">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-3">
              Send us a quick note
            </h2>
            <p className="text-muted-foreground text-base">
              Drop a message and we'll get back to you at{" "}
              <span className="text-primary">algomics@gmail.com</span>
            </p>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4"
          >
            <Input
              type="email"
              placeholder="your@email.com (optional)"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-12 bg-card border-border"
            />
            <Textarea
              placeholder="What can we help you with?"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              rows={5}
              className="bg-card border-border resize-none"
            />
            <div className="flex justify-center">
              <Button type="submit" size="lg" className="gap-2">
                Send message <Send size={16} />
              </Button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
