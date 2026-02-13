import { useState } from 'react';
import { motion } from 'motion/react';
import { Heart, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router';

interface ValentineCardProps {
  onYesClick: () => void;
}

export function ValentineCard({ onYesClick }: ValentineCardProps) {
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const [noClickCount, setNoClickCount] = useState(0);
  const [showResponse, setShowResponse] = useState(false);
  const navigate = useNavigate();

  const handleNoHover = (e: React.MouseEvent) => {
    // Obtener dimensiones de la ventana
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    
    // Obtener posición del mouse
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    
    // Generar posición aleatoria lejos del mouse
    let randomX, randomY;
    const minDistance = 200; // Distancia mínima del mouse
    
    do {
      // Generar posición aleatoria en la ventana
      randomX = Math.random() * (windowWidth - 200) - (windowWidth / 2);
      randomY = Math.random() * (windowHeight - 200) - (windowHeight / 2);
      
      // Calcular distancia del mouse
      const distance = Math.sqrt(
        Math.pow(randomX - (mouseX - windowWidth / 2), 2) + 
        Math.pow(randomY - (mouseY - windowHeight / 2), 2)
      );
      
      // Repetir si está muy cerca del mouse
      if (distance > minDistance) break;
    } while (true);
    
    setNoButtonPosition({ x: randomX, y: randomY });
    setNoClickCount(prev => prev + 1);
  };

  const handleYes = () => {
    setShowResponse(true);
    onYesClick();
  };

  const noMessages = [
    "que...",
    "q HaCES!!!",
    "PQ QUIERES PONER QUE NO?",
    "Ya no me amas oq...........",
    "Yaaaaa:CCC",
    "bastaaaa",
    "No lo vas alcanzar jmmmmm",
    "Pq lo sigues intentandoooo",
    "Literalmente esta programado para no ser alcanzado",
    "amor k asesssssssssss",
    "JMMMMMMMMMM"
  ];

  if (showResponse) {
    return (
      <>
        <motion.div
          initial={{ scale: 0, rotate: 180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="bg-white rounded-3xl shadow-2xl p-12 max-w-lg text-center relative"
        >
          {/* Corazones flotantes de celebración - FUERA de la card */}
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

          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.1 }}
            className="fixed top-1/2 left-5 pointer-events-none z-50"
          >
            <motion.div
              animate={{ 
                x: [0, -8, 0],
                rotate: [0, -12, 0],
                scale: [1, 1.15, 1]
              }}
              transition={{ 
                duration: 2.8, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="text-6xl"
            >
              💘
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.3 }}
            className="fixed top-1/2 right-5 pointer-events-none z-50"
          >
            <motion.div
              animate={{ 
                x: [0, 8, 0],
                rotate: [0, 12, 0],
                scale: [1, 1.2, 1]
              }}
              transition={{ 
                duration: 2.6, 
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.3
              }}
              className="text-6xl"
            >
              💞
            </motion.div>
          </motion.div>

          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 10, -10, 0]
            }}
            transition={{ 
              duration: 0.5,
              repeat: Infinity,
              repeatDelay: 1
            }}
          >
            <Heart size={100} fill="#ef4444" className="text-red-500 mx-auto mb-6" />
          </motion.div>

          <h2 className="text-4xl mb-4 text-red-500">Yupiiiii, sabía que me amabas uwu yo también te amo mucho muakata</h2>
          <p className="text-xl text-gray-700 mb-6">
            Mañana se come yoniroke gentee muaaaaa
          </p>

          {/* Corazones latiendo en fila */}
          <div className="flex justify-center gap-6">
            <motion.div
              animate={{ 
                scale: [1, 1.3, 1]
              }}
              transition={{ 
                duration: 0.8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Heart size={50} fill="#ef4444" className="text-red-500" />
            </motion.div>
            <motion.div
              animate={{ 
                scale: [1, 1.3, 1]
              }}
              transition={{ 
                duration: 0.8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.15
              }}
            >
              <Heart size={50} fill="#ec4899" className="text-pink-500" />
            </motion.div>
            <motion.div
              animate={{ 
                scale: [1, 1.3, 1]
              }}
              transition={{ 
                duration: 0.8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.3
              }}
            >
              <Heart size={50} fill="#ef4444" className="text-red-500" />
            </motion.div>
            <motion.div
              animate={{ 
                scale: [1, 1.3, 1]
              }}
              transition={{ 
                duration: 0.8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.45
              }}
            >
              <Heart size={50} fill="#ec4899" className="text-pink-500" />
            </motion.div>
            <motion.div
              animate={{ 
                scale: [1, 1.3, 1]
              }}
              transition={{ 
                duration: 0.8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.6
              }}
            >
              <Heart size={50} fill="#ef4444" className="text-red-500" />
            </motion.div>
          </div>
        </motion.div>

        {/* Botón Easter Egg - Pequeño y discreto FUERA de la card */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.65 }}
          whileHover={{ opacity: 1, scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ delay: 2 }}
          onClick={() => navigate('/galeria')}
          className="fixed bottom-6 right-6 bg-gray-900/80 hover:bg-gray-800/95 text-gray-400 hover:text-gray-200 text-xs px-3 py-2 rounded-lg shadow-lg backdrop-blur-sm z-50"
        >
          ¿¿¿¿????
        </motion.button>
      </>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 max-w-2xl relative"
    >
      {/* Decoraciones flotantes distribuidas por toda la pantalla - FUERA de la card */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="fixed top-10 left-10 pointer-events-none z-50"
      >
        <motion.div
          animate={{ 
            y: [0, -10, 0],
            rotate: [0, 15, 0]
          }}
          transition={{ 
            duration: 2.5, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="text-5xl"
        >
          💕
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="fixed top-10 right-10 pointer-events-none z-50"
      >
        <motion.div
          animate={{ 
            y: [0, -12, 0],
            rotate: [0, -15, 0]
          }}
          transition={{ 
            duration: 2.8, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.3
          }}
          className="text-5xl"
        >
          💖
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="fixed bottom-10 left-20 pointer-events-none z-50"
      >
        <motion.div
          animate={{ 
            y: [0, 8, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 2.3, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
          className="text-5xl"
        >
          💝
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
        className="fixed bottom-10 right-20 pointer-events-none z-50"
      >
        <motion.div
          animate={{ 
            y: [0, 10, 0],
            rotate: [0, 12, 0]
          }}
          transition={{ 
            duration: 2.6, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.7
          }}
          className="text-5xl"
        >
          💗
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1 }}
        className="fixed top-1/2 left-5 pointer-events-none z-50"
      >
        <motion.div
          animate={{ 
            x: [0, -5, 0],
            rotate: [0, -10, 0]
          }}
          transition={{ 
            duration: 3, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="text-5xl"
        >
          💘
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3 }}
        className="fixed top-1/2 right-5 pointer-events-none z-50"
      >
        <motion.div
          animate={{ 
            x: [0, 5, 0],
            rotate: [0, 10, 0]
          }}
          transition={{ 
            duration: 3.2, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.4
          }}
          className="text-5xl"
        >
          💞
        </motion.div>
      </motion.div>

      {/* Confeti decorativo */}
      <div className="absolute -top-4 -left-4">
        <Sparkles className="text-yellow-400" size={32} />
      </div>
      <div className="absolute -top-4 -right-4">
        <Sparkles className="text-pink-400" size={32} />
      </div>
      <div className="absolute -bottom-4 -left-4">
        <Sparkles className="text-red-400" size={32} />
      </div>
      <div className="absolute -bottom-4 -right-4">
        <Sparkles className="text-purple-400" size={32} />
      </div>

      {/* Corazón principal */}
      <motion.div
        animate={{ 
          scale: [1, 1.1, 1],
        }}
        transition={{ 
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="mb-6"
      >
        <Heart size={80} fill="#ef4444" className="text-red-500 mx-auto" />
      </motion.div>

      {/* Mensaje principal */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-4xl md:text-5xl text-center mb-8 text-red-500"
      >
        ¿Quieres ser mi valentín? uwu 💕💖
      </motion.h1>

      {/* Mensaje si intenta clickear "No" */}
      {noClickCount > 0 && (
        <motion.p
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center text-pink-500 mb-4 text-lg"
        >
          {noMessages[Math.min(noClickCount - 1, noMessages.length - 1)]}
        </motion.p>
      )}

      {/* Botones */}
      <div className="flex gap-4 justify-center items-center mt-8 relative h-16">
        {/* Botón Sí */}
        <motion.button
          whileHover={{ scale: (1 + (noClickCount * 0.15)) * 1.1 }}
          whileTap={{ scale: (1 + (noClickCount * 0.15)) * 0.95 }}
          animate={{ 
            scale: 1 + (noClickCount * 0.15)
          }}
          transition={{ 
            type: "spring",
            stiffness: 300,
            damping: 20
          }}
          onClick={handleYes}
          className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-10 py-3 rounded-full text-xl shadow-lg hover:shadow-xl transition-shadow min-w-[120px]"
        >
          Sí
        </motion.button>

        {/* Botón No (que se mueve) */}
        <motion.button
          animate={noButtonPosition}
          transition={{ duration: 0 }}
          onMouseEnter={handleNoHover}
          onClick={handleNoHover}
          className="bg-gray-300 text-gray-700 px-10 py-3 rounded-full text-xl shadow-lg min-w-[120px]"
        >
          No
        </motion.button>
      </div>

      {/* Texto decorativo */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="text-center text-gray-500 mt-8 italic"
      >
        elige bnn u.u
      </motion.p>
    </motion.div>
  );
}