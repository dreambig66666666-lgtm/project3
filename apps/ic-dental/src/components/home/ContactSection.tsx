import { motion } from "framer-motion";
import { Phone, MapPin, MessageCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useSubmitContactForm } from "@workspace/api-client-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required").max(100),
  phone: z.string().min(1, "Phone number is required").max(20),
  message: z.string().max(1000).optional(),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function ContactSection() {
  const { toast } = useToast();
  const submitForm = useSubmitContactForm();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = (values: ContactFormValues) => {
    submitForm.mutate(
      { data: values },
      {
        onSuccess: () => {
          toast({
            title: "Message Sent",
            description: "We'll get back to you shortly. Thank you!",
          });
          form.reset();
        },
        onError: () => {
          toast({
            title: "Something went wrong",
            description: "Please try again or call us directly.",
            variant: "destructive",
          });
        },
      }
    );
  };

  const whatsappUrl = `https://wa.me/+9109820600844?text=${encodeURIComponent("Hi, I want to book an appointment")}`;

  return (
    <section id="contact" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold text-sm tracking-wider uppercase">Get In Touch</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-3 mb-4">
            Book Your Appointment
          </h2>
          <p className="text-muted-foreground text-lg">
            Reach out to us for any queries or to schedule your visit. We are here to help you achieve the smile you deserve.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            <div className="flex flex-col gap-4">
              <a
                href="tel:+9109820600844"
                className="flex items-center gap-4 p-5 rounded-2xl bg-background border border-border/50 hover:border-primary/30 hover:shadow-md transition-all group"
                data-testid="link-call"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 group-hover:bg-primary flex items-center justify-center transition-all">
                  <Phone className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm text-muted-foreground font-medium">Call Us Now</span>
                  <span className="text-lg font-display font-bold text-foreground">+91 09820600844</span>
                </div>
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 rounded-2xl bg-background border border-border/50 hover:border-[#25D366]/30 hover:shadow-md transition-all group"
                data-testid="link-whatsapp"
              >
                <div className="w-14 h-14 rounded-xl bg-[#25D366]/10 group-hover:bg-[#25D366] flex items-center justify-center transition-all">
                  <MessageCircle className="w-6 h-6 text-[#25D366] group-hover:text-white transition-colors" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm text-muted-foreground font-medium">WhatsApp Us</span>
                  <span className="text-lg font-display font-bold text-foreground">Chat Now</span>
                </div>
              </a>

              <div className="flex gap-4 p-5 rounded-2xl bg-background border border-border/50">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm text-muted-foreground font-medium">Visit Us</span>
                  <span className="text-sm font-medium text-foreground leading-relaxed">
                    Raj Sebastian Kinny society, Shop11, IC Colony Cross Rd Number 4, next to Silvercoin restaurant, I C Colony, Borivali West, Mumbai, Maharashtra 400103
                  </span>
                </div>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden h-[250px] bg-muted/30 border border-border/50">
              <iframe
                src="https://maps.google.com/maps?q=IC+Dental+ic+colony+Borivali+Mumbai&ll=19.2455311,72.8483104&z=17&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="IC Dental Clinic Location"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="p-8 rounded-2xl bg-background border border-border/50 shadow-sm">
              <h3 className="text-xl font-display font-bold text-foreground mb-6">Send Us a Message</h3>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-5">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Your Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your name" {...field} data-testid="input-name" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your phone number" {...field} data-testid="input-phone" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message (optional)</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell us about your dental concern..."
                            rows={4}
                            {...field}
                            data-testid="input-message"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full rounded-full font-semibold text-base h-14 shadow-lg shadow-primary/20 hover:shadow-xl mt-2"
                    disabled={submitForm.isPending}
                    data-testid="button-submit-contact"
                  >
                    {submitForm.isPending ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message
                        <Send className="w-5 h-5 ml-2" />
                      </>
                    )}
                  </Button>
                </form>
              </Form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
