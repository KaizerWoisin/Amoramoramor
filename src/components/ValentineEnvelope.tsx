import { motion } from 'motion/react';
import { Heart, Mail } from 'lucide-react';

interface ValentineEnvelopeProps {
  onClick: () => void;
}

export function ValentineEnvelope({ onClick }: ValentineEnvelopeProps) {
  return (
    <motion.div
      initial={{ scale: 0, rotate: -10, opacity: 0 }}
      animate={{ scale: 1, rotate: 0, opacity: 1 }}
      transition={{ 
        type: "spring", 
        stiffness: 260, 
        damping: 20,
        delay: 0.1 
      }}
      className="relative cursor-pointer"
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Brillo pulsante */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: [0.3, 0.6, 0.3],
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5
        }}
        className="absolute inset-0 bg-red-400 rounded-2xl blur-2xl"
      />

      {/* Sobre principal */}
      <div className="relative bg-gradient-to-br from-red-500 to-red-600 rounded-2xl shadow-2xl p-8 w-80 h-64">
        {/* Textura del sobre */}
        <div className="absolute inset-0 bg-red-600 opacity-10 rounded-2xl" 
             style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,.05) 10px, rgba(255,255,255,.05) 20px)' }} 
        />

        {/* Contenido del sobre */}
        <div className="relative h-full flex flex-col items-center justify-end pb-8 text-white">
          {/* Para y De */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="absolute -top-6 -left-2 text-left leading-none"
          >
            <p className="text-lg font-light">Para: Genesis&lt;3</p>
            <p className="text-lg font-light -mt-2">De: Su noviecito uwu</p>
          </motion.div>

          <motion.div
            animate={{ 
              y: [0, -10, 0],
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="mb-0"
          >
            <Mail size={60} strokeWidth={1.5} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-center"
          >
            <p className="text-xl font-light mb-2">Te llegó un mensaje uwu</p>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ 
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Heart size={30} fill="white" className="mx-auto" />
            </motion.div>
          </motion.div>
        </div>

        {/* Sello decorativo */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ 
            delay: 0.8,
            type: "spring",
            stiffness: 200
          }}
          className="absolute top-4 right-4 bg-pink-200 rounded-full w-16 h-16 flex items-center justify-center border-4 border-red-400"
        >
          <Heart size={24} fill="#ef4444" className="text-red-500" />
        </motion.div>
      </div>
    </motion.div>
  );
}