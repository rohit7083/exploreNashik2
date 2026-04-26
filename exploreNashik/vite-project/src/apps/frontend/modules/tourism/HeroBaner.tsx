import { Button } from "@/components/ui/button";
import tourism from "../../../../assets/tourism.png";

function HeroBaner() {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "60vh",
        minHeight: "380px",
        backgroundImage: `url(${tourism})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Content */}
      <div className="relative h-full flex items-center justify-center text-center px-5">
        <div className="max-w-xl">
          <h1
            style={{ fontSize: "clamp(32px, 6vw, 70px)" }}
            className="text-white mb-2.5"
          >
            Explore Tourism
          </h1>
          <p
            style={{ fontSize: "clamp(14px, 2vw, 20px)" }}
            className="text-white mb-7"
          >
            Discover the beauty, culture, and heritage of Nashik{" "}
          </p>
          <Button size="lg">Explore</Button>
        </div>
      </div>
    </div>
  );
}

export default HeroBaner;
