import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CursorFollower() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 380, damping: 32, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 380, damping: 32, mass: 0.4 });
  const [hovering, setHovering] = useState(false);
  const [enabled, setEnabled] = useState(true);

  useEffect(() => {
    if (window.matchMedia('(hover: none)').matches) { setEnabled(false); return; }
    const onMove = (e) => { x.set(e.clientX); y.set(e.clientY); };
    const onOver = (e) => {
      const interactive = e.target.closest('a, button, [data-cursor="hover"]');
      setHovering(!!interactive);
    };
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseover', onOver);
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseover', onOver);
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        className={`fixed top-0 left-0 w-1.5 h-1.5 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full pointer-events-none z-[99] mix-blend-difference ${hovering ? 'opacity-0' : 'opacity-100'}`}
        style={{ x: sx, y: sy }}
        aria-hidden="true"
      />
      <motion.div
        className={`fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 rounded-full border-[1.5px] pointer-events-none z-[99] mix-blend-difference transition-[width,height,border-color] duration-200 ease-out ${hovering ? 'w-14 h-14 border-brand-secondary' : 'w-8 h-8 border-white/55'}`}
        style={{ x: sx, y: sy }}
        aria-hidden="true"
      />
    </>
  );
}
