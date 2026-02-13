import { useState } from 'react';
import { motion } from 'motion/react';
import { Heart } from 'lucide-react';
import { ValentineEnvelope } from '../components/ValentineEnvelope';
import { ValentineCard } from '../components/ValentineCard';
import catImage from 'figma:asset/bfda80da96e6c2e9ac6ecf997c9a8ce4e3863087.png';
import emojiLoveImage from 'figma:asset/0f8681309b32d28e7cadee162d87e4980f19a839.png';
import catHeartImage from 'figma:asset/d62d11cac5b139f4e4af106616c8e13b583b804a.png';
import flowerEmojiImage from 'figma:asset/12c3a77b34fe996cdcc874cf7d24e2256ef2acc2.png';
import surpriseEmojiImage from 'figma:asset/f9fdc33a60376393326d163dac587b34311f5e77.png';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [hearts, setHearts] = useState<Array<{ id: number; x: number; delay: number }>>([]);
  const [showImages, setShowImages] = useState(false);

  const handleEnvelopeClick = () => {
    // Crear 250 corazones en posiciones aleatorias
    const newHearts = Array.from({ length: 250 }, (_, i) => ({
      id: Date.now() + i,
      x: Math.random() * 100, // Posición horizontal aleatoria (0-100%)
      delay: Math.random() * 3, // Delay aleatorio para efecto escalonado (hasta 3 segundos)
    }));
    
    setHearts(prev => [...prev, ...newHearts]);
    
    // Limpiar corazones después de la animación
    setTimeout(() => {
      setHearts(prev => prev.filter(h => !newHearts.find(nh => nh.id === h.id)));
    }, 6000);
    
    // Abrir el sobre
    setIsOpen(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-200 via-red-100 to-pink-300 p-4 overflow-hidden">
      {/* Corazones flotantes de fondo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute text-pink-300 opacity-20 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`,
              fontSize: `${20 + Math.random() * 30}px`,
            }}
          >
            ♥
          </div>
        ))}
      </div>

      {/* Corazones que llueven al hacer click */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-50">
        {hearts.map(heart => (
          <motion.div
            key={heart.id}
            initial={{ 
              x: `${heart.x}vw`,
              y: -50, 
              opacity: 1,
              scale: 1
            }}
            animate={{ 
              y: '100vh', 
              opacity: 0,
              scale: [1, 1.5, 0.5]
            }}
            transition={{ 
              delay: heart.delay, 
              duration: 2.5, 
              ease: "easeIn" 
            }}
            className="absolute top-0"
          >
            <Heart 
              size={Math.random() * 20 + 20} 
              fill={Math.random() > 0.5 ? "#ef4444" : "#ec4899"} 
              className="text-red-500" 
            />
          </motion.div>
        ))}
      </div>

      {/* Emoji de sorpresa - Antes de abrir la carta */}
      {!isOpen && (
        <>
          {/* Emoji de ojos */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, type: "spring", stiffness: 200, damping: 15 }}
            className="absolute right-10 top-1/2 -translate-y-1/2 z-40 pointer-events-none"
          >
            <motion.img
              src={surpriseEmojiImage}
              alt="Surprise emoji"
              className="w-40 h-40 md:w-48 md:h-48"
              animate={{ 
                rotate: [-5, 5, -5],
                y: [0, -10, 0]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>

          {/* Decoraciones flotantes izquierda */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
            className="absolute left-10 top-1/4 z-30 pointer-events-none"
          >
            <motion.div
              animate={{ 
                y: [0, -15, 0],
                rotate: [0, 10, 0]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="text-6xl"
            >
              💕
            </motion.div>
          </motion.div>

          {/* Decoraciones flotantes arriba */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="absolute left-1/4 top-10 z-30 pointer-events-none"
          >
            <motion.div
              animate={{ 
                y: [0, -10, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 2.5, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="text-4xl"
            >
              ✨💫
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4 }}
            className="absolute right-1/4 top-20 z-30 pointer-events-none"
          >
            <motion.div
              animate={{ 
                y: [0, -15, 0],
                rotate: [0, 20, 0]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
              className="text-5xl"
            >
              💝
            </motion.div>
          </motion.div>

          {/* Más decoraciones en espacios vacíos */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 2 }}
            className="absolute left-1/2 top-16 z-30 pointer-events-none"
          >
            <motion.div
              animate={{ 
                y: [0, -8, 0],
                rotate: [0, 15, 0]
              }}
              transition={{ 
                duration: 3.2, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="text-5xl"
            >
              💘
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 2.4 }}
            className="absolute right-16 top-1/2 z-30 pointer-events-none"
          >
            <motion.div
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, -12, 0]
              }}
              transition={{ 
                duration: 3.1, 
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.6
              }}
              className="text-5xl"
            >
              💓
            </motion.div>
          </motion.div>

          {/* Más corazones abajo para llenar el espacio */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8 }}
            className="absolute bottom-20 left-1/3 z-30 pointer-events-none"
          >
            <motion.div
              animate={{ 
                y: [0, -8, 0],
                scale: [1, 1.15, 1]
              }}
              transition={{ 
                duration: 2.4, 
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.2
              }}
              className="text-5xl"
            >
              💞
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.2 }}
            className="absolute bottom-32 right-1/3 z-30 pointer-events-none"
          >
            <motion.div
              animate={{ 
                y: [0, 10, 0],
                rotate: [0, 15, 0]
              }}
              transition={{ 
                duration: 2.9, 
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.4
              }}
              className="text-5xl"
            >
              💌
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.6 }}
            className="absolute bottom-24 left-1/4 z-30 pointer-events-none"
          >
            <motion.div
              animate={{ 
                y: [0, -12, 0],
                rotate: [0, -10, 0]
              }}
              transition={{ 
                duration: 3.2, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="text-5xl"
            >
              💖
            </motion.div>
          </motion.div>
        </>
      )}

      {/* Imágenes que aparecen cuando dice "Sí" */}
      {showImages && (
        <>
          {/* Imagen izquierda superior - Gato con corazón rosa */}
          <motion.div
            initial={{ x: -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.2 }}
            className="absolute top-10 left-10 z-40 pointer-events-none"
          >
            <motion.img
              src={catHeartImage}
              alt="Cat with heart"
              className="w-32 h-32 md:w-40 md:h-40 rounded-2xl shadow-lg"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </motion.div>

          {/* Imagen derecha superior - Gato con rosa */}
          <motion.div
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.4 }}
            className="absolute top-10 right-10 z-40 pointer-events-none"
          >
            <motion.img
              src={catImage}
              alt="Cat with rose"
              className="w-32 h-32 md:w-40 md:h-40 rounded-2xl shadow-lg"
              animate={{ rotate: [0, -5, 5, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
            />
          </motion.div>

          {/* Imagen izquierda inferior - Emoji enamorado */}
          <motion.div
            initial={{ x: -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.6 }}
            className="absolute bottom-10 left-10 z-40 pointer-events-none"
          >
            <motion.img
              src={emojiLoveImage}
              alt="Love emoji"
              className="w-32 h-32 md:w-40 md:h-40 rounded-2xl shadow-lg"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </motion.div>

          {/* Imagen derecha inferior - Emoji flor */}
          <motion.div
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.8 }}
            className="absolute bottom-10 right-10 z-40 pointer-events-none"
          >
            <motion.img
              src={flowerEmojiImage}
              alt="Flower emoji"
              className="w-32 h-32 md:w-40 md:h-40 rounded-2xl shadow-lg"
              animate={{ rotate: [0, -10, 10, -10, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 0.5 }}
            />
          </motion.div>
        </>
      )}

      {/* Contenido principal */}
      <div className="relative z-10">
        {!isOpen ? (
          <ValentineEnvelope onClick={handleEnvelopeClick} />
        ) : (
          <ValentineCard onYesClick={() => setShowImages(true)} />
        )}
      </div>
    </div>
  );
}
