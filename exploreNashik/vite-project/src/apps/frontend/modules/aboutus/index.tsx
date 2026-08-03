

// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import axios from "axios";
// import { motion } from "framer-motion";
// import { useForm } from "react-hook-form";
// import { Toaster, toast } from "sonner";
// import SEO from "../../../../components/seo/SEO";

// type ContactForm = {
//   name: string;
//   email: string;
//   message: string;
// };

// const stats = [
//   { num: "500+", label: "Places listed" },
//   { num: "12+", label: "Categories" },
//   { num: "2", label: "People building it" },
// ];

// // const team = [
// //   {
// //     name: "Rohit",
// //     role: "Full Stack Developer",
// //     focus: "Backend, data & infrastructure",
// //     initials: "R",
// //     bg: "bg-orange-600 dark:bg-orange-500",
// //   },
// //   {
// //     name: "Gautami",
// //     role: "Full Stack Developer",
// //     focus: "Frontend & design",
// //     initials: "G",
// //     bg: "bg-teal-600 dark:bg-teal-500",
// //   },
// // ];

// export default function AboutUs() {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     reset,
//   } = useForm<ContactForm>();

//   const onSubmit = async (data: ContactForm) => {
//     try {
//       const csrfToken = crypto.randomUUID();
//       sessionStorage.setItem("csrfToken", csrfToken);
//       await axios.post("http://localhost:5000/api/about", data, {
//         headers: { "X-CSRF-Token": csrfToken },
//       });
//       reset();
//       toast("Message sent successfully", { position: "top-right" });
//     } catch {
//       toast.error("Failed to send message. Please try again.");
//     }
//   };

//   return (
//     <>
// <SEO
// title="About Explore Nashik"
// description="Know more about Explore Nashik and our mission."
// url="https://explorenashik.in/about"
// />
//     <div className="min-h-screen bg-orange-50 dark:bg-gray-900 text-stone-900 dark:text-white px-4 md:px-10 py-12">
//       <Toaster />

//       {/* Hero */}
//       <motion.section
//         initial={{ opacity: 0, y: -16 }}
//         animate={{ opacity: 1, y: 0 }}
//         className="max-w-3xl mx-auto mb-14 text-center"
//       >
//         <p className="font-mono text-xs tracking-[0.2em] uppercase text-orange-600 dark:text-orange-400 mb-4">
//           Nashik, Maharashtra · Built by two people
//         </p>
//         <h1 className="text-4xl md:text-5xl font-serif font-bold mb-5 leading-tight text-stone-900 dark:text-white">
//           About Explore Nashik
//         </h1>
//         <p className="text-lg text-stone-600 dark:text-gray-400 leading-relaxed max-w-xl mx-auto">
//           A digital guide to Nashik's temples, vineyards, food, and hidden
//           corners — built by two people who wanted one place that actually
//           covers all of it.
//         </p>
//       </motion.section>

//       {/* Stats */}
//       <section className="grid grid-cols-3 gap-3 max-w-lg mx-auto mb-16">
//         {stats.map((s, i) => (
//           <div key={i} className="text-center">
//             <span className="block text-3xl font-serif font-bold text-orange-600 dark:text-orange-400">
//               {s.num}
//             </span>
//             <span className="text-xs text-stone-500 dark:text-gray-500 mt-1 block">
//               {s.label}
//             </span>
//           </div>
//         ))}
//       </section>

//       {/* Main Layout */}
//       <section className="grid md:grid-cols-[1.1fr_0.9fr] gap-12 max-w-5xl mx-auto">
//         {/* LEFT — Founders' note + team */}
//         <div className="space-y-12">
//           {/* Founders' note, replacing generic mission/vision cards */}
//           <div>
//             <p className="font-mono text-xs uppercase tracking-wide text-stone-400 dark:text-gray-500 mb-3">
//               Why this exists
//             </p>
//             <div className="space-y-4 text-stone-600 dark:text-gray-400 leading-relaxed">
//               <p>
//                 We kept noticing the same thing: information about Nashik was
//                 scattered across ten different blogs, none of them current,
//                 half of them written for a city that's changed since. The
//                 temple hours were wrong, the "hidden gem" cafés had closed
//                 down, and nobody mentioned that the wine tour and the Kumbh
//                 Mela calendar might matter to the same traveler.
//               </p>
//               <p>
//                 So we're building the version we wanted to find — one place
//                 for heritage, food, travel logistics, and the practical stuff
//                 like distances and emergency numbers. No ads deciding what
//                 you see first, no listicle padding. Just what's actually
//                 useful, kept up to date by two people who live here.
//               </p>
//             </div>
//           </div>

//           {/* Team — byline style instead of avatar cards */}
//           {/* <div>
//             <p className="font-mono text-xs uppercase tracking-wide text-stone-400 dark:text-gray-500 mb-4">
//               Who's building it
//             </p>
//             <div className="space-y-4">
//               {team.map((member, i) => (
//                 <div
//                   key={i}
//                   className="flex items-center gap-4 bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm"
//                 >
//                   <div
//                     className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-serif font-bold text-lg flex-shrink-0 ${member.bg}`}
//                   >
//                     {member.initials}
//                   </div>
//                   <div className="min-w-0">
//                     <h3 className="font-semibold text-stone-900 dark:text-white">
//                       {member.name}
//                       <span className="text-stone-400 dark:text-gray-500 font-normal">
//                         {" "}
//                         — {member.role}
//                       </span>
//                     </h3>
//                     <p className="text-sm text-stone-500 dark:text-gray-400">
//                       {member.focus}
//                     </p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div> */}
//         </div>

//         {/* RIGHT — Contact Form */}
//         <div>
//           <Card className="rounded-2xl shadow-sm border-none sticky top-6 bg-white dark:bg-gray-800">
//             <CardContent className="p-6">
//               <h2 className="text-xl font-serif font-bold mb-1 text-stone-900 dark:text-white">
//                 Get in touch
//               </h2>
//               <p className="text-sm text-stone-500 dark:text-gray-400 mb-5">
//                 Spotted something wrong, or have a place we should know
//                 about? Tell us.
//               </p>

//               <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
//                 {/* Name */}
//                 <div>
//                   <label className="text-sm text-stone-500 dark:text-gray-400 mb-1 block">
//                     Your name
//                   </label>
//                   <Input
//                     placeholder="e.g. Priya Sharma"
//                     {...register("name", { required: "Name is required" })}
//                   />
//                   {errors.name && (
//                     <p className="text-xs text-red-500 mt-1">
//                       {errors.name.message}
//                     </p>
//                   )}
//                 </div>

//                 {/* Email */}
//                 <div>
//                   <label className="text-sm text-stone-500 dark:text-gray-400 mb-1 block">
//                     Email address
//                   </label>
//                   <Input
//                     type="email"
//                     placeholder="you@example.com"
//                     {...register("email", {
//                       required: "Email is required",
//                       pattern: {
//                         value: /^\S+@\S+$/i,
//                         message: "Invalid email address",
//                       },
//                     })}
//                   />
//                   {errors.email && (
//                     <p className="text-xs text-red-500 mt-1">
//                       {errors.email.message}
//                     </p>
//                   )}
//                 </div>

//                 {/* Message */}
//                 <div>
//                   <label className="text-sm text-stone-500 dark:text-gray-400 mb-1 block">
//                     Message
//                   </label>
//                   <Textarea
//                     placeholder="Tell us how we can help..."
//                     className="min-h-[100px]"
//                     {...register("message", {
//                       required: "Message is required",
//                       minLength: {
//                         value: 10,
//                         message: "Message must be at least 10 characters",
//                       },
//                     })}
//                   />
//                   {errors.message && (
//                     <p className="text-xs text-red-500 mt-1">
//                       {errors.message.message}
//                     </p>
//                   )}
//                 </div>

//                 <Button
//                   type="submit"
//                   className="w-full rounded-xl bg-orange-600 hover:bg-orange-700 dark:bg-orange-500 dark:hover:bg-orange-600 text-white"
//                 >
//                   Send Message
//                 </Button>
//               </form>

//               {/* Contact Info */}
//               <div className="mt-5 pt-4 border-t border-stone-200 dark:border-gray-700 space-y-2">
//                 <p className="text-sm text-stone-500 dark:text-gray-400">
//                   Nashik, Maharashtra, India
//                 </p>
//                 {/* <p className="text-sm text-stone-500 dark:text-gray-400">
//                   hello@explorenashik.in
//                 </p> */}
//                 <p className="text-sm text-stone-500 dark:text-gray-400">
//                   Mon–Sat, 9am–6pm IST
//                 </p>
//               </div>
//             </CardContent>
//           </Card>
//         </div>
//       </section>
//     </div>
//     </>
//   );
// }




import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import axios from "axios";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { Toaster, toast } from "sonner";
import SEO from "../../../../components/seo/SEO";

type ContactForm = {
  name: string;
  email: string;
  message: string;
};

export default function AboutUs() {
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactForm>();

  const stats = [
    { num: "92+", label: t("aboutUs.stats.places") },
    { num: "30+", label: t("aboutUs.stats.categories") },
    { num: "2", label: t("aboutUs.stats.people") },
  ];

  const onSubmit = async (data: ContactForm) => {
    try {
      const csrfToken = crypto.randomUUID();
      sessionStorage.setItem("csrfToken", csrfToken);
      await axios.post(`${import.meta.env.VITE_API_URL}/api/about`, data, {
        headers: { "X-CSRF-Token": csrfToken },
      });
      reset();
      toast(t("aboutUs.form.success"), { position: "top-right" });
    } catch {
      toast.error(t("aboutUs.form.error"));
    }
  };

  return (
    <>
      <SEO
        title={t("aboutUs.seo.title")}
        description={t("aboutUs.seo.description")}
        url="https://explorenashik.in/about"
      />
      <div className="min-h-screen bg-orange-50 dark:bg-gray-900 text-stone-900 dark:text-white px-4 md:px-10 py-12">
        <Toaster />

        {/* Hero */}
        <motion.section
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto mb-14 text-center"
        >
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-orange-600 dark:text-orange-400 mb-4">
            {t("aboutUs.hero.badge")}
          </p>
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-5 leading-tight text-stone-900 dark:text-white">
            {t("aboutUs.hero.title")}
          </h1>
          <p className="text-lg text-stone-600 dark:text-gray-400 leading-relaxed max-w-xl mx-auto">
            {t("aboutUs.hero.description")}
          </p>
        </motion.section>

        {/* Stats */}
        <section className="grid grid-cols-3 gap-3 max-w-lg mx-auto mb-16">
          {stats.map((s, i) => (
            <div key={i} className="text-center">
              <span className="block text-3xl font-serif font-bold text-orange-600 dark:text-orange-400">
                {s.num}
              </span>
              <span className="text-xs text-stone-500 dark:text-gray-500 mt-1 block">
                {s.label}
              </span>
            </div>
          ))}
        </section>

        {/* Main Layout */}
        <section className="grid md:grid-cols-[1.1fr_0.9fr] gap-12 max-w-5xl mx-auto">
          {/* LEFT — Founders' note */}
          <div className="space-y-12">
            <div>
              <p className="font-mono text-xs uppercase tracking-wide text-stone-400 dark:text-gray-500 mb-3">
                {t("aboutUs.whyExists.label")}
              </p>
              <div className="space-y-4 text-stone-600 dark:text-gray-400 leading-relaxed">
                <p>{t("aboutUs.whyExists.paragraph1")}</p>
                <p>{t("aboutUs.whyExists.paragraph2")}</p>
              </div>
            </div>
          </div>

          {/* RIGHT — Contact Form */}
          <div>
            <Card className="rounded-2xl shadow-sm border-none sticky top-6 bg-white dark:bg-gray-800">
              <CardContent className="p-6">
                <h2 className="text-xl font-serif font-bold mb-1 text-stone-900 dark:text-white">
                  {t("aboutUs.contact.title")}
                </h2>
                <p className="text-sm text-stone-500 dark:text-gray-400 mb-5">
                  {t("aboutUs.contact.subtitle")}
                </p>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  {/* Name */}
                  <div>
                    <label className="text-sm text-stone-500 dark:text-gray-400 mb-1 block">
                      {t("aboutUs.form.nameLabel")}
                    </label>
                    <Input
                      placeholder={t("aboutUs.form.namePlaceholder")}
                      {...register("name", {
                        required: t("aboutUs.form.nameRequired"),
                      })}
                    />
                    {errors.name && (
                      <p className="text-xs text-red-500 mt-1">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="text-sm text-stone-500 dark:text-gray-400 mb-1 block">
                      {t("aboutUs.form.emailLabel")}
                    </label>
                    <Input
                      type="email"
                      placeholder={t("aboutUs.form.emailPlaceholder")}
                      {...register("email", {
                        required: t("aboutUs.form.emailRequired"),
                        pattern: {
                          value: /^\S+@\S+$/i,
                          message: t("aboutUs.form.emailInvalid"),
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
                    <label className="text-sm text-stone-500 dark:text-gray-400 mb-1 block">
                      {t("aboutUs.form.messageLabel")}
                    </label>
                    <Textarea
                      placeholder={t("aboutUs.form.messagePlaceholder")}
                      className="min-h-[100px]"
                      {...register("message", {
                        required: t("aboutUs.form.messageRequired"),
                        minLength: {
                          value: 10,
                          message: t("aboutUs.form.messageMinLength"),
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
                    className="w-full rounded-xl bg-orange-600 hover:bg-orange-700 dark:bg-orange-500 dark:hover:bg-orange-600 text-white"
                  >
                    {t("aboutUs.form.submit")}
                  </Button>
                </form>

                {/* Contact Info */}
                <div className="mt-5 pt-4 border-t border-stone-200 dark:border-gray-700 space-y-2">
                  <p className="text-sm text-stone-500 dark:text-gray-400">
                    {t("aboutUs.contact.location")}
                  </p>
                  <p className="text-sm text-stone-500 dark:text-gray-400">
                    {t("aboutUs.contact.hours")}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </>
  );
}