import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";

// Form Types
type ContactForm = {
  name: string;
  email: string;
  message: string;
};

export default function AboutUs() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactForm>();

  const onSubmit = (data: ContactForm) => {
    console.log("Form Data:", data);
    reset();
  };

  return (
    <div className="min-h-screen bg-background text-foreground px-4 md:px-10 py-10">
      {/* Hero Section */}
      <section className="text-center max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          About Us
        </motion.h1>
        <p className="text-lg text-muted-foreground">
          We are passionate about building modern, scalable, and user-friendly
          applications that make a difference.
        </p>
      </section>

      {/* Main Layout */}
      <section className="mt-16 grid md:grid-cols-2 gap-10">
        {/* LEFT SIDE - About Us Full UI */}
        <div className="space-y-8">
          {/* Mission & Vision */}
          <div className="grid sm:grid-cols-2 gap-6">
            <Card className="rounded-2xl shadow-md">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-2">Our Mission</h2>
                <p className="text-muted-foreground">
                  To deliver high-quality solutions that empower businesses and
                  individuals through technology.
                </p>
              </CardContent>
            </Card>

            <Card className="rounded-2xl shadow-md">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-2">Our Vision</h2>
                <p className="text-muted-foreground">
                  To become a leading tech innovator known for excellence,
                  reliability, and creativity.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Team Section */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Our Team</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {["Rohit", "Gautami"].map((name, i) => (
                <Card key={i} className="rounded-2xl shadow-md">
                  <CardContent className="p-6 text-center">
                    <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-muted" />
                    <h3 className="font-semibold text-lg">{name}</h3>
                    <p className="text-sm text-muted-foreground">
                      Full Stack Developer
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT SIDE - Contact Form */}
        <Card className="rounded-2xl shadow-md h-fit">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              {/* Name */}
              <div>
                <Input
                  placeholder="Your Name"
                  {...register("name", { required: "Name is required" })}
                />
                {errors.name && (
                  <p className="text-sm text-red-500 mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <Input
                  type="email"
                  placeholder="Your Email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Invalid email address",
                    },
                  })}
                />
                {errors.email && (
                  <p className="text-sm text-red-500 mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <Textarea
                  placeholder="Your Message"
                  {...register("message", {
                    required: "Message is required",
                    minLength: {
                      value: 10,
                      message: "Message must be at least 10 characters",
                    },
                  })}
                />
                {errors.message && (
                  <p className="text-sm text-red-500 mt-1">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <Button type="submit" className="w-full rounded-2xl">
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
