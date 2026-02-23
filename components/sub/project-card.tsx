import { motion } from "framer-motion";
import Image from "next/image";

import { ASSET_PREFIX } from "@/constants/config";

type ProjectCardProps = {
  src: string;
  title: string;
  description: string;
  tech?: string;
  onClick: () => void;
};

export const ProjectCard = ({
  src,
  title,
  description,
  tech,
  onClick,
}: ProjectCardProps) => {
  return (
    <motion.div
      onClick={onClick}
      whileHover={{ y: -5 }}
      className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] hover:border-[#7042f8] transition-all duration-300 group cursor-pointer bg-[#0300145e] backdrop-blur-md"
    >
      <div className="relative overflow-hidden">
        <Image
          src={`${ASSET_PREFIX}${src}`}
          alt={title}
          width={1000}
          height={1000}
          className="w-full object-cover aspect-video group-hover:scale-105 transition-transform duration-500"
          style={{ height: "auto" }}
        />
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <span className="text-white font-medium px-4 py-2 border border-white/30 rounded-full bg-white/10 backdrop-blur-sm">
            View Details
          </span>
        </div>
      </div>

      <div className="relative p-4">
        <h1 className="text-xl font-semibold text-white group-hover:text-purple-400 transition-colors">
          {title}
        </h1>
        <p className="mt-2 text-gray-300 text-sm line-clamp-2">{description}</p>
        {tech && (
          <div className="mt-4 flex flex-wrap gap-2">
            {tech.split(", ").slice(0, 3).map((t) => (
              <span
                key={t}
                className="px-2 py-0.5 text-[10px] uppercase tracking-wider font-medium rounded-full bg-[#7042f815] border border-[#7042f88b] text-purple-300"
              >
                {t}
              </span>
            ))}
            {tech.split(", ").length > 3 && (
              <span className="text-[10px] text-gray-500 self-center">
                +{tech.split(", ").length - 3} more
              </span>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
};
