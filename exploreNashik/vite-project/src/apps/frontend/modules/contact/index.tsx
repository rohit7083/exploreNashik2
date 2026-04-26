import { motion } from "framer-motion";
import { useForm } from "react-hook-form";

// Define form data type
type ContactFormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    try {
      console.log("Form Data:", data);
      await new Promise((resolve) => setTimeout(resolve, 1500));
      alert("Message sent successfully!");
      reset();
    } catch (error) {
      alert("Something went wrong");
    }
  };

  return (
    <div className="flex items-center justify-center p-4">
      <div className="grid md:grid-cols-2 border rounded-2xl shadow-md overflow-hidden max-w-4xl w-full md:h-[420px]">

        {/* LEFT SIDE IMAGE */}
        <div className="relative h-full max-h-[420px] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=1200"
            alt="Nashik"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center p-4 text-white">
            <h2 className="text-xl font-bold">Nashik</h2>
            <p className="text-xs opacity-90">Wine Capital • Spiritual City</p>
          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="p-4 flex flex-col justify-center md:overflow-hidden overflow-y-auto">
          <h2 className="text-xl font-semibold mb-4 text-center">Contact Us</h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">

            {/* Name */}
            <div>
              <input
                type="text"
                placeholder="Name"
                {...register("name", {
                  required: "Name is required",
                  minLength: { value: 3, message: "Minimum 3 characters" },
                })}
                className="w-full border rounded-md p-2 text-sm focus:ring-2 focus:ring-blue-400 outline-none"
              />
              {errors.name && (
                <p className="text-red-500 text-xs">{errors.name.message}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <input
                type="email"
                placeholder="Email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Invalid email",
                  },
                })}
                className="w-full border rounded-md p-2 text-sm focus:ring-2 focus:ring-blue-400 outline-none"
              />
              {errors.email && (
                <p className="text-red-500 text-xs">{errors.email.message}</p>
              )}
            </div>

            {/* Subject */}
            <div>
              <input
                type="text"
                placeholder="Subject"
                {...register("subject", { required: "Subject is required" })}
                className="w-full border rounded-md p-2 text-sm focus:ring-2 focus:ring-blue-400 outline-none"
              />
              {errors.subject && (
                <p className="text-red-500 text-xs">{errors.subject.message}</p>
              )}
            </div>

            {/* Message */}
            <div>
              <textarea
                placeholder="Message"
                {...register("message", {
                  required: "Message is required",
                  minLength: { value: 10, message: "Minimum 10 characters" },
                })}
                className="w-full border rounded-md p-2 text-sm focus:ring-2 focus:ring-blue-400 outline-none"
                rows={3}
              />
              {errors.message && (
                <p className="text-red-500 text-xs">{errors.message.message}</p>
              )}
            </div>

            {/* Submit */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 text-white py-2 rounded-md text-sm hover:bg-blue-700 transition disabled:opacity-50"
            >
              {isSubmitting ? "Sending..." : "Send"}
            </motion.button>
          </form>
        </div>
      </div>
    </div>
  );
}
