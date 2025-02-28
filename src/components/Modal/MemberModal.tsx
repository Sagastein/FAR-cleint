import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface MemberModalProps {
  isOpen: boolean;
  onClose: () => void;
  member: {
    company_name: string;
    company_profile: string;
    logo: string;
    segment: string;
  };
}

const MemberModal = ({ isOpen, onClose, member }: MemberModalProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="relative p-6">
                <button
                  onClick={onClose}
                  className="absolute right-4 top-4 p-2 hover:bg-gray-100 rounded-full"
                >
                  <X className="w-6 h-6" />
                </button>

                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={member.logo}
                    alt={member.company_name}
                    className="w-24 h-24 rounded-full bg-secondary ring ring-primary object-cover"
                  />
                  <div>
                    <h2 className="text-2xl font-bold">
                      {member.company_name}
                    </h2>
                    <p className="text-gray-600">{member.segment}</p>
                  </div>
                </div>

                <div className="prose max-w-none">
                  <p className="text-gray-700 whitespace-pre-wrap">
                    {member.company_profile}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MemberModal;
