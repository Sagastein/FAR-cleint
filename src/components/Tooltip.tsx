import { motion, AnimatePresence } from "framer-motion";

interface TooltipProps {
  content: string;
  children: React.ReactNode;
}

const Tooltip = ({ content, children }: TooltipProps) => {
  return (
    <div className="relative group">
      {children}
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          className="absolute z-50 invisible group-hover:visible bg-primary p-4 rounded-xl 
                     shadow-xl border border-gray-100 sm:w-[280px] -left-2 bottom-0 
                     transform translate-y-full"
        >
          <p className="text-sm text-white leading-relaxed">{content}</p>
          <div
            className="absolute -top-2 left-4 w-4 h-4 bg-primary border-t border-l 
                          border-gray-100 transform rotate-45"
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Tooltip;
