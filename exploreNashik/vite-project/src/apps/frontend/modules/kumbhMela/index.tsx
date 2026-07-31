// import { Badge } from "@/components/ui/badge";
// import { Card, CardContent } from "@/components/ui/card";
// import { CalendarDays, MapPin, Users, Waves } from "lucide-react";
// import { useTranslation } from "react-i18next";
// import SEO from "../../../../components/seo/SEO";
// function KumbhMela() {
//   const { t, i18n } = useTranslation();

//   console.log("Current language:", i18n.language);
//   console.log("Badge:", t("kumbhMela.hero.badge"));

// const schedule = [
//   {
//     date: t("kumbhMela.timeline.events.flag.date"),
//     title: t("kumbhMela.timeline.events.flag.title"),
//     desc: t("kumbhMela.timeline.events.flag.desc"),
//   },
//   {
//     date: t("kumbhMela.timeline.events.parikrama.date"),
//     title: t("kumbhMela.timeline.events.parikrama.title"),
//     desc: t("kumbhMela.timeline.events.parikrama.desc"),
//   },
//   {
//     date: t("kumbhMela.timeline.events.firstSnan.date"),
//     title: t("kumbhMela.timeline.events.firstSnan.title"),
//     desc: t("kumbhMela.timeline.events.firstSnan.desc"),
//   },
//   {
//     date: t("kumbhMela.timeline.events.secondSnan.date"),
//     title: t("kumbhMela.timeline.events.secondSnan.title"),
//     desc: t("kumbhMela.timeline.events.secondSnan.desc"),
//   },
//   {
//     date: t("kumbhMela.timeline.events.thirdSnan.date"),
//     title: t("kumbhMela.timeline.events.thirdSnan.title"),
//     desc: t("kumbhMela.timeline.events.thirdSnan.desc"),
//   },
//   {
//     date: t("kumbhMela.timeline.events.conclusion.date"),
//     title: t("kumbhMela.timeline.events.conclusion.title"),
//     desc: t("kumbhMela.timeline.events.conclusion.desc"),
//   },
// ];

// const faqs = [
//   {
//     q: t("kumbhMela.faq.items.simhastha.q"),
//     a: t("kumbhMela.faq.items.simhastha.a"),
//   },
//   {
//     q: t("kumbhMela.faq.items.pass.q"),
//     a: t("kumbhMela.faq.items.pass.a"),
//   },
//   {
//     q: t("kumbhMela.faq.items.dates.q"),
//     a: t("kumbhMela.faq.items.dates.a"),
//   },
//   {
//     q: t("kumbhMela.faq.items.travel.q"),
//     a: t("kumbhMela.faq.items.travel.a"),
//   },
// ];
//   return (
//     <>
//     <SEO
//   title={t("kumbhMela.seo.title")}
//   description={t("kumbhMela.seo.description")}
//   url="https://explorenashik.in/kumbh-mela"
// />
//       <div className="bg-orange-50 dark:bg-gray-900">
//         {/* HERO */}
//         <div className="relative overflow-hidden">
//           <div className="absolute inset-0">
//             <img
//               src="https://images.unsplash.com/photo-1561361058-c24cecae35ca?w=1600&auto=format&fit=crop"
//               alt=""
//               loading="lazy"
//               decoding="async"
//               className="w-full h-full object-cover"
//             />
//             <div className="absolute inset-0 bg-gradient-to-b from-stone-900/80 via-stone-900/70 to-stone-900 dark:from-black/85 dark:via-black/75 dark:to-black" />
//           </div>

//           <div className="relative max-w-6xl mx-auto px-4 pt-20 pb-16 space-y-6">
//             {/* <Badge className="bg-amber-400 text-stone-900 hover:bg-amber-400 dark:bg-amber-500 dark:text-stone-900 w-fit font-medium">
//               World's Largest Spiritual Gathering
//             </Badge>

//             <h1 className="text-5xl md:text-6xl font-serif font-bold leading-tight text-orange-50">
//               Nashik–Trimbakeshwar
//               <br />
//               <span className="text-orange-500 dark:text-orange-400">
//                 Simhastha Kumbh Mela
//               </span>
//             </h1>

//             <p className="text-orange-50/80 text-lg max-w-2xl leading-relaxed">
//               Once every twelve years, when Jupiter enters Leo, millions gather
//               on the banks of the Godavari to take a sacred dip — a ritual
//               unbroken since legend says drops of celestial nectar fell here.
//             </p> */}

//             <Badge className="bg-amber-400 text-stone-900 hover:bg-amber-400 dark:bg-amber-500 dark:text-stone-900 w-fit font-medium">
//               {t("kumbhMela.hero.badge")}
//             </Badge>

//             <h1 className="text-5xl md:text-6xl font-serif font-bold leading-tight text-orange-50">
//               {t("kumbhMela.hero.title")}

//               <br />

//               <span className="text-orange-500 dark:text-orange-400">
//                 {t("kumbhMela.hero.subtitle")}
//               </span>
//             </h1>

//             <p className="text-orange-50/80 text-lg max-w-2xl leading-relaxed">
//               {t("kumbhMela.hero.description")}
//             </p>

//             <div className="flex flex-wrap gap-6 pt-4 text-orange-50/90 text-sm">
//               <span className="flex items-center gap-2">
//                 <CalendarDays className="w-4 h-4 text-orange-400" />
//                 {t("kumbhMela.hero.date")}
//               </span>

//               <span className="flex items-center gap-2">
//                 <MapPin className="w-4 h-4 text-orange-400" />
//                 {t("kumbhMela.hero.location")}
//               </span>
//             </div>

//             <div className="flex flex-wrap gap-6 pt-4 text-orange-50/90 text-sm">
// <h3 className="font-semibold text-lg text-stone-900 dark:text-white">
//   {t("kumbhMela.info.sites.title")}
// </h3>

// <p className="text-sm text-stone-600 dark:text-gray-400">
//   {t("kumbhMela.info.sites.description")}
// </p>
//             </div>
//           </div>
//         </div>

//         {/* INFO CARDS */}
//         <section className="max-w-6xl mx-auto px-4 -mt-10 relative grid md:grid-cols-3 gap-5">
//           <Card className="border-none shadow-lg bg-white dark:bg-gray-800">
//             <CardContent className="p-6 space-y-2">
//               <MapPin className="text-orange-500 dark:text-orange-400 w-7 h-7" />
//              <h3 className="font-semibold text-lg text-stone-900 dark:text-white">
//   {t("kumbhMela.info.sites.title")}
// </h3>

// <p className="text-sm text-stone-600 dark:text-gray-400">
//   {t("kumbhMela.info.sites.description")}
// </p>
//             </CardContent>
//           </Card>

//           <Card className="border-none shadow-lg bg-white dark:bg-gray-800">
//             <CardContent className="p-6 space-y-2">
//               <CalendarDays className="text-orange-500 dark:text-orange-400 w-7 h-7" />
//              <h3 className="font-semibold text-lg text-stone-900 dark:text-white">
//   {t("kumbhMela.info.cycle.title")}
// </h3>

// <p className="text-sm text-stone-600 dark:text-gray-400">
//   {t("kumbhMela.info.cycle.description")}
// </p>
//             </CardContent>
//           </Card>

//           <Card className="border-none shadow-lg bg-white dark:bg-gray-800">
//             <CardContent className="p-6 space-y-2">
//               <Users className="text-orange-500 dark:text-orange-400 w-7 h-7" />
//              <h3 className="font-semibold text-lg text-stone-900 dark:text-white">
//   {t("kumbhMela.info.pilgrims.title")}
// </h3>

// <p className="text-sm text-stone-600 dark:text-gray-400">
//   {t("kumbhMela.info.pilgrims.description")}
// </p>
//             </CardContent>
//           </Card>
//         </section>

//         {/* THE TWO SITES */}
//         <section className="max-w-6xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-8">
//           <div className="space-y-3">
//             <div className="overflow-hidden rounded-xl">
//               <img
//                 src="https://res.cloudinary.com/dq7re39ys/image/upload/v1781953286/places/ho16ohej07zc7u1tp1px.jpg"
//                 loading="lazy"
//                 decoding="async"
//                 alt="Ramkund, Nashik"
//                 className="w-full h-56 object-cover"
//               />
//             </div>
//            <h3 className="font-serif text-2xl font-bold text-stone-900 dark:text-white">
//   {t("kumbhMela.sites.ramkund.title")}
// </h3>

// <p className="text-stone-600 dark:text-gray-400 leading-relaxed">
//   {t("kumbhMela.sites.ramkund.description")}
// </p>
//           </div>

//           <div className="space-y-3">
//             <div className="overflow-hidden rounded-xl">
//               <img
//                 src="https://res.cloudinary.com/dq7re39ys/image/upload/v1781953232/tourism-app/xos2aomfsj9ctkoxg3gu.png"
//                 alt="Trimbakeshwar Temple"
//                 loading="lazy"
//                 decoding="async"
//                 className="w-full h-56 object-cover"
//               />
//             </div>
//           <h3 className="font-serif text-2xl font-bold text-stone-900 dark:text-white">
//   {t("kumbhMela.sites.trimbakeshwar.title")}
// </h3>

// <p className="text-stone-600 dark:text-gray-400 leading-relaxed">
//   {t("kumbhMela.sites.trimbakeshwar.description")}
// </p>
//           </div>
//         </section>

//         {/* HISTORY & SIGNIFICANCE */}
//         <section className="max-w-4xl mx-auto px-4 py-20 space-y-8">
//           <div className="text-center space-y-2">
//           <p className="text-orange-500 dark:text-orange-400 text-sm font-medium tracking-wide uppercase">
//   {t("kumbhMela.history.label")}
// </p>

// <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 dark:text-white">
//   {t("kumbhMela.history.title")}
// </h2>
//           </div>

//       <div className="space-y-6 text-stone-600 dark:text-gray-400 leading-relaxed">
//   <p>{t("kumbhMela.history.paragraph1")}</p>

//   <p>{t("kumbhMela.history.paragraph2")}</p>

//   <p>
//     <strong className="text-stone-900 dark:text-white">
//       {t("kumbhMela.history.simhasthaQuestion")}
//     </strong>{" "}
//     {t("kumbhMela.history.simhasthaAnswer")}
//   </p>

//   <p>{t("kumbhMela.history.paragraph4")}</p>

//   <p>{t("kumbhMela.history.paragraph5")}</p>

//   <p>
//     <strong className="text-stone-900 dark:text-white">
//       {t("kumbhMela.history.twelveYearsQuestion")}
//     </strong>{" "}
//     {t("kumbhMela.history.twelveYearsAnswer")}
//   </p>

//           </div>
//         </section>

//         {/* TIMELINE */}
//         <section className="bg-stone-900 dark:bg-black py-20">
//           <div className="max-w-4xl mx-auto px-4 space-y-12">
//             <div className="text-center space-y-2">
//              <p className="text-orange-400 text-sm font-medium tracking-wide uppercase">
//   {t("kumbhMela.timeline.label")}
// </p>

// <h2 className="text-3xl md:text-4xl font-serif font-bold text-orange-50">
//   {t("kumbhMela.timeline.title")}
// </h2>
//             </div>

//             <div className="relative pl-8 space-y-10">
//               <div className="absolute left-[7px] top-2 bottom-2 w-px bg-teal-600 dark:bg-teal-500" />

//               {schedule.map((event, index) => (
//                 <div key={index} className="relative">
//                   <span className="absolute -left-8 top-1.5 w-3.5 h-3.5 rounded-full bg-teal-600 dark:bg-teal-500 ring-4 ring-stone-900 dark:ring-black" />

//                   <p className="text-sm text-orange-400 font-medium mb-1">
//                     {event.date}
//                   </p>
//                   <h3 className="font-semibold text-lg text-orange-50 mb-1">
//                     {event.title}
//                   </h3>
//                   <p className="text-sm text-orange-50/60 leading-relaxed">
//                     {event.desc}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* RITUALS */}
//         <section className="max-w-6xl mx-auto px-4 py-20 space-y-10">
//          {t("kumbhMela.rituals.title")}

//           <div className="grid md:grid-cols-3 gap-6">
//             <div className="border-t-2 border-orange-500 dark:border-orange-400 pt-4 space-y-2">
//              <h3>{t("kumbhMela.rituals.amritSnan.title")}</h3>

// <p>
//   {t("kumbhMela.rituals.amritSnan.description")}
// </p>
//             </div>

//             <div className="border-t-2 border-orange-500 dark:border-orange-400 pt-4 space-y-2">
//              <h3>{t("kumbhMela.rituals.akhada.title")}</h3>

// <p>
//   {t("kumbhMela.rituals.akhada.description")}
// </p>
//             </div>

//             <div className="border-t-2 border-orange-500 dark:border-orange-400 pt-4 space-y-2">
//             <h3>{t("kumbhMela.rituals.holyDip.title")}</h3>

// <p>
//   {t("kumbhMela.rituals.holyDip.description")}
// </p>
//             </div>
//           </div>
//         </section>

//         {/* FAQ */}
//         <section className="bg-white dark:bg-gray-800 py-20">
//           <div className="max-w-3xl mx-auto px-4 space-y-10">
//           <h2 className="text-3xl md:text-4xl font-serif font-bold text-center text-stone-900 dark:text-white">
//   {t("kumbhMela.faq.title")}
// </h2>

//             <div className="space-y-6">
//               {faqs.map((item, i) => (
//                 <div
//                   key={i}
//                   className="flex gap-4 pb-6 border-b border-stone-200 dark:border-gray-700 last:border-none last:pb-0"
//                 >
//                   <Waves className="w-5 h-5 text-teal-600 dark:text-teal-400 flex-shrink-0 mt-1" />
//                   <div className="space-y-1">
//                     <h3 className="font-semibold text-stone-900 dark:text-white">
//                       {item.q}
//                     </h3>
//                     <p className="text-sm text-stone-600 dark:text-gray-400 leading-relaxed">
//                       {item.a}
//                     </p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* TRAVEL */}
//         <section className="max-w-3xl mx-auto px-4 py-20 text-center space-y-4">
// <h2 className="text-2xl md:text-3xl font-serif font-bold text-stone-900 dark:text-white">
//   {t("kumbhMela.travel.title")}
// </h2>

// <p className="text-stone-600 dark:text-gray-400 leading-relaxed">
//   {t("kumbhMela.travel.description")}
// </p>
//         </section>
//       </div>
//     </>
//   );
// }

// export default KumbhMela;



import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { CalendarDays, ChevronDown, MapPin, Users, Waves } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import SEO from "../../../../components/seo/SEO";

function KumbhMela() {
  const { t } = useTranslation();
  const [openFaq, setOpenFaq] = useState(0);

  const schedule = [
    {
      date: t("kumbhMela.timeline.events.flag.date"),
      title: t("kumbhMela.timeline.events.flag.title"),
      desc: t("kumbhMela.timeline.events.flag.desc"),
    },
    {
      date: t("kumbhMela.timeline.events.parikrama.date"),
      title: t("kumbhMela.timeline.events.parikrama.title"),
      desc: t("kumbhMela.timeline.events.parikrama.desc"),
    },
    {
      date: t("kumbhMela.timeline.events.firstSnan.date"),
      title: t("kumbhMela.timeline.events.firstSnan.title"),
      desc: t("kumbhMela.timeline.events.firstSnan.desc"),
    },
    {
      date: t("kumbhMela.timeline.events.secondSnan.date"),
      title: t("kumbhMela.timeline.events.secondSnan.title"),
      desc: t("kumbhMela.timeline.events.secondSnan.desc"),
    },
    {
      date: t("kumbhMela.timeline.events.thirdSnan.date"),
      title: t("kumbhMela.timeline.events.thirdSnan.title"),
      desc: t("kumbhMela.timeline.events.thirdSnan.desc"),
    },
    {
      date: t("kumbhMela.timeline.events.conclusion.date"),
      title: t("kumbhMela.timeline.events.conclusion.title"),
      desc: t("kumbhMela.timeline.events.conclusion.desc"),
    },
  ];

  const faqs = [
    { q: t("kumbhMela.faq.items.simhastha.q"), a: t("kumbhMela.faq.items.simhastha.a") },
    { q: t("kumbhMela.faq.items.pass.q"), a: t("kumbhMela.faq.items.pass.a") },
    { q: t("kumbhMela.faq.items.dates.q"), a: t("kumbhMela.faq.items.dates.a") },
    { q: t("kumbhMela.faq.items.travel.q"), a: t("kumbhMela.faq.items.travel.a") },
  ];

  return (
    <>
      <SEO
        title={t("kumbhMela.seo.title")}
        description={t("kumbhMela.seo.description")}
        url="https://explorenashik.in/kumbh-mela"
      />

      <div className="bg-orange-50 dark:bg-gray-900">
        {/* HERO */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1561361058-c24cecae35ca?w=1600&auto=format&fit=crop"
              alt=""
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-stone-900/85 via-stone-900/70 to-stone-900 dark:from-black/90 dark:via-black/75 dark:to-black" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(251,146,60,0.15),transparent_55%)]" />
          </div>

          <div className="relative max-w-6xl mx-auto px-4 pt-24 pb-24 space-y-6">
            <Badge className="bg-amber-400 text-stone-900 hover:bg-amber-400 dark:bg-amber-500 dark:text-stone-900 w-fit font-medium">
              {t("kumbhMela.hero.badge")}
            </Badge>

            <h1 className="text-5xl md:text-6xl font-serif font-bold leading-tight text-orange-50">
              {t("kumbhMela.hero.title")}
              <br />
              <span className="text-orange-500 dark:text-orange-400">
                {t("kumbhMela.hero.subtitle")}
              </span>
            </h1>

            <p className="text-orange-50/80 text-lg max-w-2xl leading-relaxed">
              {t("kumbhMela.hero.description")}
            </p>

            <div className="flex flex-wrap gap-6 pt-4 text-orange-50/90 text-sm">
              <span className="flex items-center gap-2">
                <CalendarDays className="w-4 h-4 text-orange-400" />
                {t("kumbhMela.hero.date")}
              </span>
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-orange-400" />
                {t("kumbhMela.hero.location")}
              </span>
            </div>
          </div>

          <div className="relative flex justify-center pb-6">
            <span className="w-px h-10 bg-gradient-to-b from-orange-400/70 to-transparent" />
          </div>
        </div>

        {/* INFO CARDS */}
        <section className="max-w-6xl mx-auto px-4 -mt-14 relative grid md:grid-cols-3 gap-5">
          {[
            { Icon: MapPin, key: "sites" },
            { Icon: CalendarDays, key: "cycle" },
            { Icon: Users, key: "pilgrims" },
          ].map(({ Icon, key }) => (
            <Card
              key={key}
              className="border-none shadow-lg bg-white dark:bg-gray-800 transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <CardContent className="p-6 space-y-3">
                <div className="w-12 h-12 rounded-full bg-orange-100 dark:bg-orange-500/10 flex items-center justify-center">
                  <Icon className="text-orange-500 dark:text-orange-400 w-6 h-6" />
                </div>
                <h3 className="font-semibold text-lg text-stone-900 dark:text-white">
                  {t(`kumbhMela.info.${key}.title`)}
                </h3>
                <p className="text-sm text-stone-600 dark:text-gray-400">
                  {t(`kumbhMela.info.${key}.description`)}
                </p>
              </CardContent>
            </Card>
          ))}
        </section>

        {/* THE TWO SITES */}
        <section className="max-w-6xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-8">
          <div className="space-y-3 group">
            <div className="overflow-hidden rounded-xl">
              <img
                src="https://res.cloudinary.com/dq7re39ys/image/upload/v1781953286/places/ho16ohej07zc7u1tp1px.jpg"
                loading="lazy"
                decoding="async"
                alt="Ramkund, Nashik"
                className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <h3 className="font-serif text-2xl font-bold text-stone-900 dark:text-white">
              {t("kumbhMela.sites.ramkund.title")}
            </h3>
            <p className="text-stone-600 dark:text-gray-400 leading-relaxed">
              {t("kumbhMela.sites.ramkund.description")}
            </p>
          </div>

          <div className="space-y-3 group">
            <div className="overflow-hidden rounded-xl">
              <img
                src="https://res.cloudinary.com/dq7re39ys/image/upload/v1781953232/tourism-app/xos2aomfsj9ctkoxg3gu.png"
                alt="Trimbakeshwar Temple"
                loading="lazy"
                decoding="async"
                className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <h3 className="font-serif text-2xl font-bold text-stone-900 dark:text-white">
              {t("kumbhMela.sites.trimbakeshwar.title")}
            </h3>
            <p className="text-stone-600 dark:text-gray-400 leading-relaxed">
              {t("kumbhMela.sites.trimbakeshwar.description")}
            </p>
          </div>
        </section>

        {/* HISTORY & SIGNIFICANCE */}
        <section className="max-w-4xl mx-auto px-4 py-20 space-y-8">
          <div className="text-center space-y-2">
            <p className="text-orange-500 dark:text-orange-400 text-sm font-medium tracking-wide uppercase">
              {t("kumbhMela.history.label")}
            </p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 dark:text-white">
              {t("kumbhMela.history.title")}
            </h2>
          </div>

          <div className="space-y-6 text-stone-600 dark:text-gray-400 leading-relaxed">
            <p>{t("kumbhMela.history.paragraph1")}</p>
            <p>{t("kumbhMela.history.paragraph2")}</p>
            <p>
              <strong className="text-stone-900 dark:text-white">
                {t("kumbhMela.history.simhasthaQuestion")}
              </strong>{" "}
              {t("kumbhMela.history.simhasthaAnswer")}
            </p>
            <p>{t("kumbhMela.history.paragraph4")}</p>
            <p>{t("kumbhMela.history.paragraph5")}</p>
            <p>
              <strong className="text-stone-900 dark:text-white">
                {t("kumbhMela.history.twelveYearsQuestion")}
              </strong>{" "}
              {t("kumbhMela.history.twelveYearsAnswer")}
            </p>
          </div>
        </section>

        {/* TIMELINE — alternating */}
        <section className="bg-stone-900 dark:bg-black py-20">
          <div className="max-w-4xl mx-auto px-4 space-y-14">
            <div className="text-center space-y-2">
              <p className="text-orange-400 text-sm font-medium tracking-wide uppercase">
                {t("kumbhMela.timeline.label")}
              </p>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-orange-50">
                {t("kumbhMela.timeline.title")}
              </h2>
            </div>

            <div className="relative">
              <div className="absolute left-[7px] md:left-1/2 md:-translate-x-1/2 top-2 bottom-2 w-px bg-teal-600 dark:bg-teal-500" />

              <div className="space-y-10 md:space-y-14">
                {schedule.map((event, index) => {
                  const isLeft = index % 2 === 0;
                  return (
                    <div
                      key={index}
                      className="relative pl-8 md:pl-0 md:grid md:grid-cols-2 md:gap-10"
                    >
                      <span className="absolute left-[-1px] md:left-1/2 md:-translate-x-1/2 top-1.5 w-3.5 h-3.5 rounded-full bg-teal-600 dark:bg-teal-500 ring-4 ring-stone-900 dark:ring-black z-10" />

                      <div
                        className={`${isLeft ? "md:col-start-1 md:text-right md:pr-4" : "md:col-start-2 md:pl-4"}`}
                      >
                        <p className="text-sm text-orange-400 font-medium mb-1">
                          {event.date}
                        </p>
                        <h3 className="font-semibold text-lg text-orange-50 mb-1">
                          {event.title}
                        </h3>
                        <p className="text-sm text-orange-50/60 leading-relaxed">
                          {event.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* RITUALS */}
        <section className="max-w-6xl mx-auto px-4 py-20 space-y-10">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 dark:text-white text-center">
            {t("kumbhMela.rituals.title")}
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {["amritSnan", "akhada", "holyDip"].map((key) => (
              <div
                key={key}
                className="border-t-2 border-orange-500 dark:border-orange-400 pt-4 space-y-2 transition-shadow duration-300 hover:shadow-md rounded-b-lg p-4 -mt-4"
              >
                <Waves className="w-5 h-5 text-teal-600 dark:text-teal-400" />
                <h3 className="font-semibold text-stone-900 dark:text-white">
                  {t(`kumbhMela.rituals.${key}.title`)}
                </h3>
                <p className="text-sm text-stone-600 dark:text-gray-400 leading-relaxed">
                  {t(`kumbhMela.rituals.${key}.description`)}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ — accordion */}
        <section className="bg-white dark:bg-gray-800 py-20">
          <div className="max-w-3xl mx-auto px-4 space-y-10">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-center text-stone-900 dark:text-white">
              {t("kumbhMela.faq.title")}
            </h2>

            <div className="space-y-3">
              {faqs.map((item, i) => {
                const isOpen = openFaq === i;
                return (
                  <div
                    key={i}
                    className="border border-stone-200 dark:border-gray-700 rounded-xl overflow-hidden"
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? -1 : i)}
                      className="w-full flex items-center gap-4 text-left p-5 hover:bg-orange-50/50 dark:hover:bg-gray-700/50 transition-colors"
                    >
                      <Waves className="w-5 h-5 text-teal-600 dark:text-teal-400 flex-shrink-0" />
                      <span className="font-semibold text-stone-900 dark:text-white flex-1">
                        {item.q}
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 text-stone-400 flex-shrink-0 transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <div
                      className={`grid transition-all duration-300 ease-in-out ${
                        isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="text-sm text-stone-600 dark:text-gray-400 leading-relaxed px-5 pb-5 pl-14">
                          {item.a}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* TRAVEL */}
        <section className="max-w-3xl mx-auto px-4 py-20 text-center space-y-4">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-stone-900 dark:text-white">
            {t("kumbhMela.travel.title")}
          </h2>
          <p className="text-stone-600 dark:text-gray-400 leading-relaxed">
            {t("kumbhMela.travel.description")}
          </p>
        </section>
      </div>
    </>
  );
}

export default KumbhMela;