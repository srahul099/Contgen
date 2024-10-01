"use client";
import React, { useState } from "react";
import { TEMPLATE } from "./TemplateListSection";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import Link from "next/link";

function TemplateCard({ name, desc, icon, slug }: TEMPLATE) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link href={`/dashboard/content/${slug}`}>
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={`p-5 cursor-pointer shadow-md rounded-md ${
          hovered
            ? "bg-none"
            : "h-full w-full bg-gray-800 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-60 "
        } border-grey border flex flex-col h-full overflow-hidden relative`}
      >
        {/* CanvasRevealEffect with AnimatePresence triggered on hover */}
        <AnimatePresence>
          {hovered && (
            <motion.div
              key="canvas"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 z-0"
            >
              <CanvasRevealEffect
                animationSpeed={5}
                containerClassName="bg-transparent"
                colors={[
                  [59, 130, 246],
                  [139, 92, 246],
                ]}
                opacities={[0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.4, 0.4, 0.4, 1]}
                dotSize={2}
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Static content */}
        <div className="relative z-10">
          <Image
            src={icon}
            alt="icon"
            width={50}
            height={50}
            className="py-1"
          />
          <h2 className="font-medium text-lg mt-7">{name}</h2>
          <p className="text-smoke line-clamp-3">{desc}</p>
        </div>
      </div>
    </Link>
  );
}

export default TemplateCard;
