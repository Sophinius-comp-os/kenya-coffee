"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  useSelectedLayoutSegment,
  useSelectedLayoutSegments,
} from "next/navigation";
import { ElementRef, forwardRef, useEffect, useState } from "react";
import FrozenRouter from "../components/provider/FrozenRoute";

const Child = forwardRef<
  ElementRef<typeof motion.div>,
  { children: React.ReactNode }
>((props, ref) => {
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 100 }}
    >
      <FrozenRouter>{props.children}</FrozenRouter>
    </motion.div>
  );
});

Child.displayName = "Child";

export default function ClientLayout(props: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  const segment = useSelectedLayoutSegment();

  return (
    <>
      <AnimatePresence mode="popLayout" initial={false}>
        <Child key={segment}>{props.children}</Child>
      </AnimatePresence>
    </>
  );
}
