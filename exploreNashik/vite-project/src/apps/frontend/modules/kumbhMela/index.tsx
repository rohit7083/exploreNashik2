// import { Badge } from "@/components/ui/badge";
// import { Card, CardContent } from "@/components/ui/card";
// import { CalendarDays, MapPin, Users } from "lucide-react";

// function KumbhMela() {
//   const schedule = [
//     {
//       date: "31 Oct 2026",
//       title: "Dhwajarohan (Flag Hoisting)",
//       desc: "The Simhastha Kumbh Mela begins with a ceremonial flag hoisting at Ramkund, Nashik and Trimbakeshwar.",
//     },
//     {
//       date: "29 July 2027",
//       title: "Nagar Parikrama",
//       desc: "Devotees and saints perform a sacred procession around Nashik city.",
//     },
//     {
//       date: "2 Aug 2027",
//       title: "First Amrit Snan",
//       desc: "First holy dip in the Godavari river during Ashadha Amavasya.",
//     },
//     {
//       date: "31 Aug 2027",
//       title: "Second Amrit Snan",
//       desc: "Shravan Amavasya holy dip attended by millions of devotees.",
//     },
//     {
//       date: "11 Sep 2027",
//       title: "Third Amrit Snan",
//       desc: "Bhadrapada Ekadashi holy dip at Ramkund Nashik.",
//     },
//     {
//       date: "24 July 2028",
//       title: "Conclusion Ceremony",
//       desc: "Official conclusion of the Simhastha Kumbh Mela.",
//     },
//   ];

//   return (
//     <div className="space-y-20">
//       {/* HERO SECTION */}
//       <div
//         className="pt-8 pb-6 px-4  text-white"
//         style={{ background: "black" }}
//       >
//         <div className="max-w-6xl mx-auto space-y-5">
//           <Badge className="bg-white text-orange-700 w-fit">
//             World's Largest Spiritual Gathering
//           </Badge>

//           <h1 className="text-4xl md:text-5xl font-bold leading-tight">
//             Nashik Kumbh Mela 🕉️
//           </h1>

//           <p className="text-orange-100 text-lg max-w-2xl">
//             Experience one of the largest religious gatherings where millions
//             take a sacred dip in the holy Godavari River.
//           </p>
//         </div>
//       </div>
//       {/* INFO CARDS */}
//       <section className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-6">
//         <Card className="hover:shadow-xl hover:-translate-y-1 transition border">
//           <CardContent className="p-6 space-y-3 text-center">
//             <MapPin className="mx-auto text-orange-500 w-8 h-8" />
//             <h3 className="font-semibold text-lg">Location</h3>
//             <p className="text-sm text-muted-foreground">
//               Ramkund, Nashik & Trimbakeshwar where Godavari originates.
//             </p>
//           </CardContent>
//         </Card>

//         <Card className="hover:shadow-xl hover:-translate-y-1 transition border">
//           <CardContent className="p-6 space-y-3 text-center">
//             <CalendarDays className="mx-auto text-orange-500 w-8 h-8" />
//             <h3 className="font-semibold text-lg">Occurs Every 12 Years</h3>
//             <p className="text-sm text-muted-foreground">
//               Happens when Jupiter enters Leo (Simha).
//             </p>
//           </CardContent>
//         </Card>

//         <Card className="hover:shadow-xl hover:-translate-y-1 transition border">
//           <CardContent className="p-6 space-y-3 text-center">
//             <Users className="mx-auto text-orange-500 w-8 h-8" />
//             <h3 className="font-semibold text-lg">Millions of Pilgrims</h3>
//             <p className="text-sm text-muted-foreground">
//               Over 30 million devotees attended in 2015.
//             </p>
//           </CardContent>
//         </Card>
//       </section>

//       {/* TIMELINE */}
//       <section className="max-w-5xl mx-auto px-4 space-y-10">
//         <h2 className="text-3xl font-bold text-center">Kumbh Mela Timeline</h2>

//         <div className="relative border-l-2 border-orange-300 pl-6 space-y-10">
//           {schedule.map((event, index) => (
//             <div key={index} className="relative">
//               <span className="absolute -left-3 top-2 w-6 h-6 bg-orange-500 rounded-full"></span>

//               <Card className="hover:shadow-lg transition">
//                 <CardContent className="p-5 space-y-2">
//                   <p className="text-sm text-orange-500 font-medium">
//                     {event.date}
//                   </p>
//                   <h3 className="font-semibold text-lg">{event.title}</h3>
//                   <p className="text-sm text-muted-foreground">{event.desc}</p>
//                 </CardContent>
//               </Card>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* RITUALS */}
//       <section className="max-w-6xl mx-auto px-4 space-y-10">
//         <h2 className="text-3xl font-bold text-center">Major Rituals</h2>

//         <div className="grid md:grid-cols-3 gap-6">
//           <Card className="hover:shadow-lg transition border-l-4 border-orange-500">
//             <CardContent className="p-6 space-y-2">
//               <h3 className="font-semibold text-lg">Shahi Snan</h3>
//               <p className="text-sm text-muted-foreground">
//                 Royal bath led by saints and akhadas.
//               </p>
//             </CardContent>
//           </Card>

//           <Card className="hover:shadow-lg transition border-l-4 border-orange-500">
//             <CardContent className="p-6 space-y-2">
//               <h3 className="font-semibold text-lg">Akhada Procession</h3>
//               <p className="text-sm text-muted-foreground">
//                 Sacred marches with elephants and chariots.
//               </p>
//             </CardContent>
//           </Card>

//           <Card className="hover:shadow-lg transition border-l-4 border-orange-500">
//             <CardContent className="p-6 space-y-2">
//               <h3 className="font-semibold text-lg">Holy Dip</h3>
//               <p className="text-sm text-muted-foreground">
//                 Bathing in Godavari is believed to cleanse sins.
//               </p>
//             </CardContent>
//           </Card>
//         </div>
//       </section>

//       {/* TRAVEL */}
//       <section className="max-w-4xl mx-auto px-4 text-center space-y-6 pb-16">
//         <h2 className="text-3xl font-bold">
//           Visiting Nashik During Kumbh Mela
//         </h2>

//         <p className="text-muted-foreground">
//           Nashik is well connected by road and rail from Mumbai, Pune, and other
//           cities. During Kumbh Mela, special transport, accommodation, and
//           medical facilities are arranged for millions of visitors.
//         </p>
//       </section>
//     </div>
//   );
// }

// export default KumbhMela;



import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { CalendarDays, MapPin, Users, Waves } from "lucide-react";
import { Helmet } from "react-helmet-async";

function KumbhMela() {
  const schedule = [
    {
      date: "31 Oct 2026",
      title: "Dhwajarohan (Flag Hoisting)",
      desc: "The Simhastha Kumbh Mela begins with a ceremonial flag hoisting at Ramkund, Nashik and Trimbakeshwar.",
    },
    {
      date: "29 Jul 2027",
      title: "Nagar Parikrama",
      desc: "Devotees and saints perform a sacred procession around Nashik city. (Date subject to final confirmation by the Akhada Parishad.)",
    },
    {
      date: "2 Aug 2027",
      title: "First Amrit Snan",
      desc: "First holy dip in the Godavari river during Shravan Shuddha, marking the formal opening of the bathing phase.",
    },
    {
      date: "31 Aug 2027",
      title: "Second Amrit Snan",
      desc: "Shravan Amavasya holy dip — regarded as the most spiritually potent bathing day, attended by millions of devotees.",
    },
    {
      date: "11 Sep 2027",
      title: "Third Amrit Snan",
      desc: "Bhadrapada Shukla Ekadashi holy dip at Ramkund, Nashik, concluding the royal bathing cycle.",
    },
    {
      date: "24 Jul 2028",
      title: "Conclusion Ceremony",
      desc: "Official conclusion of the Simhastha Kumbh Mela, after a sacred cycle of nearly 21 months.",
    },
  ];

  const faqs = [
    {
      q: "Why is it called Simhastha?",
      a: 'The name comes from "Simha," the Leo zodiac sign. The Mela is held when Jupiter enters Leo — an alignment that occurs roughly once every 12 years.',
    },
    {
      q: "Do I need a pass to attend?",
      a: "No. Entry to the Kumbh Mela is free for all pilgrims. Special arrangements are made for the Amrit Snan days due to the scale of the crowds.",
    },
    {
      q: "Are the Amrit Snan dates final?",
      a: "The dates listed follow current astrological calculations and government notifications. Final muhurtas are confirmed closer to the event by the Akhada Parishad.",
    },
    {
      q: "How do I get to Nashik?",
      a: "Nashik is well connected by rail and road from Mumbai (~180 km) and Pune (~210 km). During the Mela, the state runs additional trains, buses, and shuttle services to Trimbakeshwar.",
    },
  ];

  return (

    <>
    
    <Helmet>
<title>Nashik Kumbh Mela | Explore Nashik</title>

<meta
name="description"
content="Everything about Nashik Kumbh Mela including history, importance and travel guide."
/>
</Helmet>
    <div className="bg-orange-50 dark:bg-gray-900">
      {/* HERO */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1561361058-c24cecae35ca?w=1600&auto=format&fit=crop"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-stone-900/80 via-stone-900/70 to-stone-900 dark:from-black/85 dark:via-black/75 dark:to-black" />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 pt-20 pb-16 space-y-6">
          <Badge className="bg-amber-400 text-stone-900 hover:bg-amber-400 dark:bg-amber-500 dark:text-stone-900 w-fit font-medium">
            World's Largest Spiritual Gathering
          </Badge>

          <h1 className="text-5xl md:text-6xl font-serif font-bold leading-tight text-orange-50">
            Nashik–Trimbakeshwar
            <br />
            <span className="text-orange-500 dark:text-orange-400">
              Simhastha Kumbh Mela
            </span>
          </h1>

          <p className="text-orange-50/80 text-lg max-w-2xl leading-relaxed">
            Once every twelve years, when Jupiter enters Leo, millions gather on
            the banks of the Godavari to take a sacred dip — a ritual unbroken
            since legend says drops of celestial nectar fell here.
          </p>

          <div className="flex flex-wrap gap-6 pt-4 text-orange-50/90 text-sm">
            <span className="flex items-center gap-2">
              <CalendarDays className="w-4 h-4 text-orange-400" />
              31 Oct 2026 — 24 Jul 2028
            </span>
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-orange-400" />
              Ramkund &amp; Kushavarta Kund
            </span>
          </div>
        </div>
      </div>

      {/* INFO CARDS */}
      <section className="max-w-6xl mx-auto px-4 -mt-10 relative grid md:grid-cols-3 gap-5">
        <Card className="border-none shadow-lg bg-white dark:bg-gray-800">
          <CardContent className="p-6 space-y-2">
            <MapPin className="text-orange-500 dark:text-orange-400 w-7 h-7" />
            <h3 className="font-semibold text-lg text-stone-900 dark:text-white">
              Two Sacred Sites
            </h3>
            <p className="text-sm text-stone-600 dark:text-gray-400">
              Ramkund in Nashik city, and Kushavarta Kund at Trimbakeshwar, 30
              km away — where the Godavari is born.
            </p>
          </CardContent>
        </Card>

        <Card className="border-none shadow-lg bg-white dark:bg-gray-800">
          <CardContent className="p-6 space-y-2">
            <CalendarDays className="text-orange-500 dark:text-orange-400 w-7 h-7" />
            <h3 className="font-semibold text-lg text-stone-900 dark:text-white">
              Once Every 12 Years
            </h3>
            <p className="text-sm text-stone-600 dark:text-gray-400">
              Timed to Jupiter's entry into Leo — this cycle runs an unusually
              long 21 months, ending July 2028.
            </p>
          </CardContent>
        </Card>

        <Card className="border-none shadow-lg bg-white dark:bg-gray-800">
          <CardContent className="p-6 space-y-2">
            <Users className="text-orange-500 dark:text-orange-400 w-7 h-7" />
            <h3 className="font-semibold text-lg text-stone-900 dark:text-white">
              Millions of Pilgrims
            </h3>
            <p className="text-sm text-stone-600 dark:text-gray-400">
              Over 30 million devotees attended in 2015 — 2027 is expected to
              draw even larger crowds.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* THE TWO SITES */}
      <section className="max-w-6xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-8">
        <div className="space-y-3">
          <div className="overflow-hidden rounded-xl">
            <img
              src="https://res.cloudinary.com/dq7re39ys/image/upload/v1781953286/places/ho16ohej07zc7u1tp1px.jpg"
              alt="Ramkund, Nashik"
              className="w-full h-56 object-cover"
            />
          </div>
          <h3 className="font-serif text-2xl font-bold text-stone-900 dark:text-white">
            Ramkund, Nashik
          </h3>
          <p className="text-stone-600 dark:text-gray-400 leading-relaxed">
            The river city of ritual memory. Tradition holds that Lord Rama
            bathed here during his exile — giving Ramkund its name and its place
            at the heart of the Vaishnavite Amrit Snan.
          </p>
        </div>

        <div className="space-y-3">
          <div className="overflow-hidden rounded-xl">
            <img
              src="https://res.cloudinary.com/dq7re39ys/image/upload/v1781953232/tourism-app/xos2aomfsj9ctkoxg3gu.png"
              alt="Trimbakeshwar Temple"
              className="w-full h-56 object-cover"
            />
          </div>
          <h3 className="font-serif text-2xl font-bold text-stone-900 dark:text-white">
            Trimbakeshwar
          </h3>
          <p className="text-stone-600 dark:text-gray-400 leading-relaxed">
            Home to one of the twelve Jyotirlingas of Shiva, and the source of
            the Godavari itself. The Shaivite akharas hold Trimbakeshwar as the
            original seat of the Mela.
          </p>
        </div>
      </section>

      {/* HISTORY & SIGNIFICANCE */}
      <section className="max-w-4xl mx-auto px-4 py-20 space-y-8">
        <div className="text-center space-y-2">
          <p className="text-orange-500 dark:text-orange-400 text-sm font-medium tracking-wide uppercase">
            Why it's celebrated
          </p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 dark:text-white">
            History &amp; Mythology
          </h2>
        </div>

        <div className="space-y-6 text-stone-600 dark:text-gray-400 leading-relaxed">
          <p>
            The story begins long before Nashik existed as a city. According to
            the Puranas, the gods and demons once joined forces to churn the
            cosmic ocean in search of Amrit, the nectar of immortality. They
            used Mount Mandara as the churning rod and the serpent Vasuki as the
            rope, with Vishnu himself, in the form of a giant tortoise,
            steadying the mountain beneath the waves. As the ocean turned, it
            released both poison and treasure — Shiva drank the poison to save
            creation, and eventually the Kumbh, a pot brimming with Amrit, rose
            out of the water.
          </p>

          <p>
            What followed was a chase, not a celebration. Gods and demons fought
            over the pot for twelve divine days — which, in human time,
            stretched to twelve years. As Garuda carried the Kumbh across the
            sky, four drops of nectar spilled to Earth, landing at Prayagraj,
            Haridwar, Ujjain, and Nashik. Each place absorbed a measure of that
            power, and each has held a Kumbh Mela ever since, roughly once every
            twelve years, timed to the same planetary rhythm that marked the
            original chase.
          </p>

          <p>
            <strong className="text-stone-900 dark:text-white">
              Why "Simhastha," specifically?
            </strong>{" "}
            The Mela is named for the moment it occurs, not the place. It falls
            when Jupiter — Guru, the teacher of the gods — moves into Leo
            (Simha) in Vedic astrology, an alignment that recurs roughly once
            every twelve years. Nashik and Ujjain share this particular
            alignment, which is why their Kumbh Melas both carry the name
            Simhastha, distinct from the Haridwar and Prayagraj gatherings.
          </p>

          <p>
            Nashik's claim to the tradition runs deeper than astrology alone.
            The region is part of the Dandakaranya forest where the Ramayana
            places Rama, Sita, and Lakshmana during their years of exile — which
            is why the bathing spot in Nashik city is named Ramkund, "Rama's
            pool." Thirty kilometres away, Trimbakeshwar holds one of the twelve
            Jyotirlingas of Shiva and marks the source of the Godavari river
            itself — giving the Simhastha its dual character, shared between a
            Vaishnavite city and a Shaivite source.
          </p>

          <p>
            Today, the ritual stays remarkably close to what it has always been.
            Pilgrims bathe in the Godavari believing it dissolves the weight of
            past karma; akharas process through the streets ahead of each Amrit
            Snan; and for a few months, caste, region, and background fall away
            in a crowd united by nothing but the river and the calendar.
          </p>
          <p>
            <strong className="text-stone-900 dark:text-white">
              Why does it happen every twelve years?
            </strong>{" "}
            The answer lies in both mythology and astronomy. According to
            tradition, the struggle between the gods and demons for the Kumbh of
            Amrit lasted twelve divine days, which came to symbolize twelve
            human years. In astronomical terms, Jupiter — known as Guru or
            Brihaspati in Vedic astrology — takes nearly twelve years to
            complete one journey through the zodiac. Simhastha is celebrated
            when Jupiter returns to Leo (Simha Rashi) and aligns with specific
            positions of the Sun and Moon, recreating the celestial conditions
            associated with the original legend. This rare alignment is why
            Nashik's Simhastha Kumbh Mela is held only once every twelve years.
          </p>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="bg-stone-900 dark:bg-black py-20">
        <div className="max-w-4xl mx-auto px-4 space-y-12">
          <div className="text-center space-y-2">
            <p className="text-orange-400 text-sm font-medium tracking-wide uppercase">
              The 21-month cycle
            </p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-orange-50">
              Kumbh Mela Timeline
            </h2>
          </div>

          <div className="relative pl-8 space-y-10">
            <div className="absolute left-[7px] top-2 bottom-2 w-px bg-teal-600 dark:bg-teal-500" />

            {schedule.map((event, index) => (
              <div key={index} className="relative">
                <span className="absolute -left-8 top-1.5 w-3.5 h-3.5 rounded-full bg-teal-600 dark:bg-teal-500 ring-4 ring-stone-900 dark:ring-black" />

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
            ))}
          </div>
        </div>
      </section>

      {/* RITUALS */}
      <section className="max-w-6xl mx-auto px-4 py-20 space-y-10">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-center text-stone-900 dark:text-white">
          Major Rituals
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="border-t-2 border-orange-500 dark:border-orange-400 pt-4 space-y-2">
            <h3 className="font-semibold text-lg text-stone-900 dark:text-white">
              Amrit Snan
            </h3>
            <p className="text-sm text-stone-600 dark:text-gray-400 leading-relaxed">
              The royal bath, led by the akharas in order of precedence — the
              most sacred and most crowded ritual of the Mela.
            </p>
          </div>

          <div className="border-t-2 border-orange-500 dark:border-orange-400 pt-4 space-y-2">
            <h3 className="font-semibold text-lg text-stone-900 dark:text-white">
              Akhada Procession
            </h3>
            <p className="text-sm text-stone-600 dark:text-gray-400 leading-relaxed">
              Sacred marches of sadhus, elephants, and chariots toward the river
              ahead of each Amrit Snan.
            </p>
          </div>

          <div className="border-t-2 border-orange-500 dark:border-orange-400 pt-4 space-y-2">
            <h3 className="font-semibold text-lg text-stone-900 dark:text-white">
              Holy Dip
            </h3>
            <p className="text-sm text-stone-600 dark:text-gray-400 leading-relaxed">
              Open to every pilgrim throughout the Parva days — bathing in the
              Godavari is believed to cleanse karmic sin.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white dark:bg-gray-800 py-20">
        <div className="max-w-3xl mx-auto px-4 space-y-10">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center text-stone-900 dark:text-white">
            Good to Know
          </h2>

          <div className="space-y-6">
            {faqs.map((item, i) => (
              <div
                key={i}
                className="flex gap-4 pb-6 border-b border-stone-200 dark:border-gray-700 last:border-none last:pb-0"
              >
                <Waves className="w-5 h-5 text-teal-600 dark:text-teal-400 flex-shrink-0 mt-1" />
                <div className="space-y-1">
                  <h3 className="font-semibold text-stone-900 dark:text-white">
                    {item.q}
                  </h3>
                  <p className="text-sm text-stone-600 dark:text-gray-400 leading-relaxed">
                    {item.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRAVEL */}
      <section className="max-w-3xl mx-auto px-4 py-20 text-center space-y-4">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-stone-900 dark:text-white">
          Planning Your Visit
        </h2>
        <p className="text-stone-600 dark:text-gray-400 leading-relaxed">
          Nashik is well connected by road and rail from Mumbai and Pune. During
          the Mela, special trains, buses, and shuttle services run to
          Trimbakeshwar, alongside expanded medical and accommodation facilities
          for the millions of expected visitors.
        </p>
      </section>
    </div></>
  );
}

export default KumbhMela;