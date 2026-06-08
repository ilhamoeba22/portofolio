import { HeroContent } from "@/components/sub/hero-content";
import { ASSET_PREFIX } from "@/constants/config";

export const Hero = () => {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-hidden">
      <video
        aria-hidden="true"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="pointer-events-none absolute left-0 top-[-260px] -z-20 hidden h-full w-full rotate-180 object-cover opacity-80 md:block lg:top-[-340px]"
      >
        <source src={`${ASSET_PREFIX}/videos/blackhole.webm`} type="video/webm" />
      </video>

      <div className="absolute inset-0 -z-30 bg-[radial-gradient(circle_at_top,#2A0E61_0%,#030014_52%,#030014_100%)] md:hidden" />

      <HeroContent />
    </div>
  );
};
