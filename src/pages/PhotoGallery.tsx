import { motion } from 'motion/react';
import { Heart } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import photo1 from 'figma:asset/c2abfbf9d6077a17dc60f7d240c243683fd083ca.png';
import photo2 from 'figma:asset/3f3c6252cfd21502a20a4b0572eb519cfa3b751f.png';
import photo3 from 'figma:asset/89a37fb5067275e52a49378021d98cb8f100e2e0.png';
import photo4 from 'figma:asset/d06a64d4cee6c94228ae82731613e89c39b6eb7b.png';

export default function PhotoGallery() {
  const photos = [
    { src: photo1, delay: 0.2 },
    { src: photo2, delay: 0.4 },
    { src: photo3, delay: 0.6 },
    { src: photo4, delay: 0.8 },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-200 via-red-100 to-pink-300 p-8 overflow-hidden">
      {/* Corazones flotantes de fondo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
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

      {/* Corazones flotantes decorativos */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3 }}
        className="fixed top-10 left-10 pointer-events-none z-50"
      >
        <motion.div
          animate={{ 
            y: [0, -15, 0],
            rotate: [0, 20, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="text-6xl"
        >
          💕
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
        className="fixed top-10 right-10 pointer-events-none z-50"
      >
        <motion.div
          animate={{ 
            y: [0, -12, 0],
            rotate: [0, -20, 0],
            scale: [1, 1.15, 1]
          }}
          transition={{ 
            duration: 2.3, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.2
          }}
          className="text-6xl"
        >
          💖
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.7 }}
        className="fixed bottom-10 left-20 pointer-events-none z-50"
      >
        <motion.div
          animate={{ 
            y: [0, 10, 0],
            rotate: [0, 15, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 2.5, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.4
          }}
          className="text-6xl"
        >
          💝
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.9 }}
        className="fixed bottom-10 right-20 pointer-events-none z-50"
      >
        <motion.div
          animate={{ 
            y: [0, -10, 0],
            rotate: [0, -15, 0],
            scale: [1, 1.18, 1]
          }}
          transition={{ 
            duration: 2.2, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.6
          }}
          className="text-6xl"
        >
          💗
        </motion.div>
      </motion.div>

      {/* Contenido principal */}
      <div className="relative z-10 w-full max-w-7xl">
        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="text-center mb-12"
        >
          <motion.div
            animate={{ 
              scale: [1, 1.1, 1],
            }}
            transition={{ 
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Heart size={60} fill="#ef4444" className="text-red-500 mx-auto mb-4" />
          </motion.div>
          <h1 className="text-5xl md:text-6xl text-red-500 mb-2">Te amo mucho mi amor uwu</h1>
          <p className="text-2xl text-pink-600">Nuestros momentos bonitos uwu💕</p>
        </motion.div>

        {/* Galería de fotos */}
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          {photos.map((photo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 100, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                type: "spring", 
                stiffness: 100, 
                damping: 15,
                delay: photo.delay 
              }}
              whileHover={{ 
                scale: 1.05,
                rotate: Math.random() > 0.5 ? 2 : -2,
                transition: { duration: 0.3 }
              }}
              className="relative group"
            >
              {/* Brillo alrededor */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                className="absolute -inset-1 bg-gradient-to-r from-red-500 to-pink-500 rounded-3xl blur-lg opacity-0 group-hover:opacity-75 transition duration-300"
              />
              
              {/* Foto */}
              <div className="relative">
                <ImageWithFallback
                  src={photo.src}
                  alt={`Momento ${index + 1}`}
                  className="w-64 h-96 object-cover rounded-3xl shadow-2xl border-4 border-white"
                />
                
                {/* Corazón flotante en hover */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileHover={{ opacity: 1, scale: 1 }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                >
                  <Heart size={80} fill="#ef4444" className="text-red-500 opacity-80" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mensaje final */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, type: "spring", stiffness: 200, damping: 20 }}
          className="text-center mt-12 bg-white/80 rounded-3xl p-8 shadow-2xl backdrop-blur-sm"
        >
          <p className="text-2xl text-red-500 leading-relaxed">
            Por una vida eterna a tu lado por siempre y para siempre uwu mi princesa hermosa bella preciosa perfecta, te amo un montón no lo olvides nunca &lt;3 gracias por ser mi san valentin muakataaaa
          </p>
        </motion.div>
      </div>
    </div>
  );
}