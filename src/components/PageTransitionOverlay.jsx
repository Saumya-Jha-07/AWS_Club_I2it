/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';

export default function PageTransitionOverlay({ children }) {
  return (
    <>
      {/* Page Content */}
      <div className="w-full h-full relative z-10">
        {children}
      </div>

      {/* Enter Panel (Slides off right revealing new page) */}
      <motion.div
        className="fixed inset-0 z-40 bg-[#0f1b29]/60 backdrop-blur-md shadow-[0_0_40px_rgba(255,153,0,0.1)] border-l border-white/10"
        initial={{ x: '0%' }}
        animate={{ x: '100%' }}
        exit={{ x: '100%', opacity: 0 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      />

      {/* Exit Panel (Slides in from left covering old page) */}
      <motion.div
        className="fixed inset-0 z-[41] bg-[#0f1b29]/60 backdrop-blur-md shadow-[0_0_40px_rgba(255,153,0,0.1)] border-r border-[#FF9900]/30"
        initial={{ x: '-100%' }}
        animate={{ x: '-100%' }}
        exit={{ x: '0%' }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      />
    </>
  );
}
