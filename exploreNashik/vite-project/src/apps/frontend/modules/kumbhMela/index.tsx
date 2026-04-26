import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { CalendarDays, MapPin, Users } from "lucide-react";

function KumbhMela() {
  const schedule = [
    {
      date: "31 Oct 2026",
      title: "Dhwajarohan (Flag Hoisting)",
      desc: "The Simhastha Kumbh Mela begins with a ceremonial flag hoisting at Ramkund, Nashik and Trimbakeshwar.",
    },
    {
      date: "29 July 2027",
      title: "Nagar Parikrama",
      desc: "Devotees and saints perform a sacred procession around Nashik city.",
    },
    {
      date: "2 Aug 2027",
      title: "First Amrit Snan",
      desc: "First holy dip in the Godavari river during Ashadha Amavasya.",
    },
    {
      date: "31 Aug 2027",
      title: "Second Amrit Snan",
      desc: "Shravan Amavasya holy dip attended by millions of devotees.",
    },
    {
      date: "11 Sep 2027",
      title: "Third Amrit Snan",
      desc: "Bhadrapada Ekadashi holy dip at Ramkund Nashik.",
    },
    {
      date: "24 July 2028",
      title: "Conclusion Ceremony",
      desc: "Official conclusion of the Simhastha Kumbh Mela.",
    },
  ];

  return (
    <div className="space-y-20">
      {/* HERO SECTION */}
      <div
        className="pt-8 pb-6 px-4  text-white"
        style={{ background: "black" }}
      >
        <div className="max-w-6xl mx-auto space-y-5">
          <Badge className="bg-white text-orange-700 w-fit">
            World's Largest Spiritual Gathering
          </Badge>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Nashik Kumbh Mela 🕉️
          </h1>

          <p className="text-orange-100 text-lg max-w-2xl">
            Experience one of the largest religious gatherings where millions
            take a sacred dip in the holy Godavari River.
          </p>
        </div>
      </div>
      {/* INFO CARDS */}
      <section className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-6">
        <Card className="hover:shadow-xl hover:-translate-y-1 transition border">
          <CardContent className="p-6 space-y-3 text-center">
            <MapPin className="mx-auto text-orange-500 w-8 h-8" />
            <h3 className="font-semibold text-lg">Location</h3>
            <p className="text-sm text-muted-foreground">
              Ramkund, Nashik & Trimbakeshwar where Godavari originates.
            </p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-xl hover:-translate-y-1 transition border">
          <CardContent className="p-6 space-y-3 text-center">
            <CalendarDays className="mx-auto text-orange-500 w-8 h-8" />
            <h3 className="font-semibold text-lg">Occurs Every 12 Years</h3>
            <p className="text-sm text-muted-foreground">
              Happens when Jupiter enters Leo (Simha).
            </p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-xl hover:-translate-y-1 transition border">
          <CardContent className="p-6 space-y-3 text-center">
            <Users className="mx-auto text-orange-500 w-8 h-8" />
            <h3 className="font-semibold text-lg">Millions of Pilgrims</h3>
            <p className="text-sm text-muted-foreground">
              Over 30 million devotees attended in 2015.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* TIMELINE */}
      <section className="max-w-5xl mx-auto px-4 space-y-10">
        <h2 className="text-3xl font-bold text-center">Kumbh Mela Timeline</h2>

        <div className="relative border-l-2 border-orange-300 pl-6 space-y-10">
          {schedule.map((event, index) => (
            <div key={index} className="relative">
              <span className="absolute -left-3 top-2 w-6 h-6 bg-orange-500 rounded-full"></span>

              <Card className="hover:shadow-lg transition">
                <CardContent className="p-5 space-y-2">
                  <p className="text-sm text-orange-500 font-medium">
                    {event.date}
                  </p>
                  <h3 className="font-semibold text-lg">{event.title}</h3>
                  <p className="text-sm text-muted-foreground">{event.desc}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </section>

      {/* RITUALS */}
      <section className="max-w-6xl mx-auto px-4 space-y-10">
        <h2 className="text-3xl font-bold text-center">Major Rituals</h2>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="hover:shadow-lg transition border-l-4 border-orange-500">
            <CardContent className="p-6 space-y-2">
              <h3 className="font-semibold text-lg">Shahi Snan</h3>
              <p className="text-sm text-muted-foreground">
                Royal bath led by saints and akhadas.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition border-l-4 border-orange-500">
            <CardContent className="p-6 space-y-2">
              <h3 className="font-semibold text-lg">Akhada Procession</h3>
              <p className="text-sm text-muted-foreground">
                Sacred marches with elephants and chariots.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition border-l-4 border-orange-500">
            <CardContent className="p-6 space-y-2">
              <h3 className="font-semibold text-lg">Holy Dip</h3>
              <p className="text-sm text-muted-foreground">
                Bathing in Godavari is believed to cleanse sins.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* TRAVEL */}
      <section className="max-w-4xl mx-auto px-4 text-center space-y-6 pb-16">
        <h2 className="text-3xl font-bold">
          Visiting Nashik During Kumbh Mela
        </h2>

        <p className="text-muted-foreground">
          Nashik is well connected by road and rail from Mumbai, Pune, and other
          cities. During Kumbh Mela, special transport, accommodation, and
          medical facilities are arranged for millions of visitors.
        </p>
      </section>
    </div>
  );
}

export default KumbhMela;
