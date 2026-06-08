import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import axios from "axios";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { Toaster, toast } from "sonner";

type ContactForm = {
  name: string;
  email: string;
  message: string;
};

const stats = [
  { num: "500+", label: "Places listed" },
  { num: "12+", label: "Categories" },
  { num: "2", label: "Core developers" },
];

const team = [
  { name: "Rohit", initials: "R", color: "bg-violet-100 text-violet-800" },
  { name: "Gautami", initials: "G", color: "bg-emerald-100 text-emerald-800" },
];

export default function AboutUs() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactForm>();

  const onSubmit = async (data: ContactForm) => {
    try {
      await axios.post("http://localhost:5000/api/about", data);
      reset();
      toast("Message sent successfully", { position: "top-right" });
    } catch (error) {
      console.error(error);
      toast.error("Failed to send message. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground px-4 md:px-10 py-10">
      <Toaster />

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative text-center max-w-3xl mx-auto mb-12 bg-gradient-to-br from-violet-50 to-emerald-50 rounded-3xl px-8 py-14 overflow-hidden"
      >
        <div className="absolute -top-10 -right-10 w-44 h-44 bg-violet-200 rounded-full opacity-20" />
        <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-emerald-200 rounded-full opacity-20" />
        <span className="inline-block bg-violet-700 text-white text-xs px-4 py-1 rounded-full mb-4 tracking-wide">
          📍 Nashik, Maharashtra
        </span>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
          About Explore Nashik
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Your complete digital guide to Nashik's culture, heritage, food,
          spirituality, and tourism — all in one place.
        </p>
      </motion.section>

      {/* Stats Row */}
      <section className="grid grid-cols-3 gap-4 max-w-2xl mx-auto mb-12">
        {stats.map((s, i) => (
          <div
            key={i}
            className="bg-muted rounded-xl p-4 text-center"
          >
            <span className="block text-2xl font-bold text-violet-700">
              {s.num}
            </span>
            <span className="text-sm text-muted-foreground mt-1 block">
              {s.label}
            </span>
          </div>
        ))}
      </section>

      {/* Main Layout */}
      <section className="grid md:grid-cols-[1.1fr_0.9fr] gap-10 max-w-6xl mx-auto">
        {/* LEFT — Mission, Vision, Team */}
        <div className="space-y-10">
          {/* Mission & Vision */}
          <div>
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              🎯 Mission & Vision
            </h2>
            <div className="grid sm:grid-cols-2 gap-5">
              <Card className="rounded-2xl shadow-sm border">
                <CardContent className="p-6">
                  <div className="w-9 h-9 rounded-lg bg-violet-100 text-violet-700 flex items-center justify-center text-lg mb-3">
                    🚀
                  </div>
                  <h3 className="font-semibold text-base mb-2">Our Mission</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Make discovering Nashik simple and enjoyable — restaurants,
                    temples, hotels, and attractions, all in one platform.
                  </p>
                </CardContent>
              </Card>

              <Card className="rounded-2xl shadow-sm border">
                <CardContent className="p-6">
                  <div className="w-9 h-9 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center text-lg mb-3">
                    👁️
                  </div>
                  <h3 className="font-semibold text-base mb-2">Our Vision</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Become the most trusted digital guide, promoting local
                    businesses and helping the world discover Nashik's true
                    essence.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Team */}
          <div>
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              👥 Our Team
            </h2>
            <div className="grid sm:grid-cols-2 gap-5">
              {team.map((member, i) => (
                <Card key={i} className="rounded-2xl shadow-sm border">
                  <CardContent className="p-6 text-center">
                    <div
                      className={`w-16 h-16 rounded-full mx-auto mb-3 flex items-center justify-center text-xl font-semibold ${member.color}`}
                    >
                      {member.initials}
                    </div>
                    <h3 className="font-semibold text-base">{member.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      Full Stack Developer
                    </p>
                    <span className="inline-block mt-2 text-xs bg-muted text-muted-foreground px-3 py-1 rounded-full">
                      Frontend + Backend
                    </span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT — Contact Form */}
        <div>
          <Card className="rounded-2xl shadow-sm border sticky top-6">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-1 flex items-center gap-2">
                ✉️ Contact Us
              </h2>
              <p className="text-sm text-muted-foreground mb-5">
                Have a question or suggestion? We'd love to hear from you.
              </p>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                {/* Name */}
                <div>
                  <label className="text-sm text-muted-foreground mb-1 block">
                    Your name
                  </label>
                  <Input
                    placeholder="e.g. Priya Sharma"
                    {...register("name", { required: "Name is required" })}
                  />
                  {errors.name && (
                    <p className="text-xs text-red-500 mt-1">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="text-sm text-muted-foreground mb-1 block">
                    Email address
                  </label>
                  <Input
                    type="email"
                    placeholder="you@example.com"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^\S+@\S+$/i,
                        message: "Invalid email address",
                      },
                    })}
                  />
                  {errors.email && (
                    <p className="text-xs text-red-500 mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label className="text-sm text-muted-foreground mb-1 block">
                    Message
                  </label>
                  <Textarea
                    placeholder="Tell us how we can help..."
                    className="min-h-[100px]"
                    {...register("message", {
                      required: "Message is required",
                      minLength: {
                        value: 10,
                        message: "Message must be at least 10 characters",
                      },
                    })}
                  />
                  {errors.message && (
                    <p className="text-xs text-red-500 mt-1">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  className="w-full rounded-xl bg-violet-700 hover:bg-violet-800 text-white"
                >
                  Send Message
                </Button>
              </form>

              {/* Contact Info */}
              <div className="mt-5 pt-4 border-t space-y-2">
                <p className="text-sm text-muted-foreground flex items-center gap-2">
                  📍 Nashik, Maharashtra, India
                </p>
                <p className="text-sm text-muted-foreground flex items-center gap-2">
                  📧 hello@explorenashik.in
                </p>
                <p className="text-sm text-muted-foreground flex items-center gap-2">
                  🕐 Mon–Sat, 9am–6pm IST
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
} 