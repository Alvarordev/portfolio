"use client";

import { useEffect } from "react";

const Canvas = () => {
  useEffect(() => {
    const canvas = document.querySelector("canvas") as HTMLCanvasElement | null;
    const c = canvas?.getContext("2d");
    const style = window.getComputedStyle(
      document.getElementById("stars") as HTMLElement
    );
    const circles: Circle[] = [];

    // Ajusta el tamaño del canvas al tamaño real
    if (canvas) {
      canvas.width = parseInt(style.getPropertyValue("width"));
      canvas.height = parseInt(style.getPropertyValue("height"));
    }

    interface Circle {
      x: number;
      y: number;
      initialX: number;
      initialY: number;
      speedX: number;
      speedY: number;
      draw: () => void;
      update: () => void;
    }

    function Circle(
      x: number,
      y: number,
      speedX: number,
      speedY: number
    ): Circle {
      return {
        x,
        y,
        initialX: x,
        initialY: y,
        speedX,
        speedY,

        draw() {
          if (c) {
            c.beginPath();
            c.arc(this.x, this.y, 1.2, 0, Math.PI * 2, false);
        
            // Establece un relleno blanco con opacidad
            c.fillStyle = "rgb(255, 255, 255)";
        
            // Establece la sombra
            c.shadowColor = "#fff"; // Color de la sombra
            c.shadowBlur = 20; // Radio del desenfoque de la sombra
            
            // Dibuja el círculo con el relleno y la sombra
            c.fill();
            c.closePath();
        
            // Restaura las propiedades de sombra para que no afecten a otros elementos
            c.shadowColor = "transparent";
            c.shadowBlur = 0;
          }
        },

        update() {
          // Actualiza las coordenadas para la animación
          this.x += this.speedX;
          this.y += this.speedY;

          // Limita el movimiento al radio de 10 píxeles
          const distanceX = this.x - this.initialX;
          const distanceY = this.y - this.initialY;
          const distance = Math.sqrt(
            distanceX * distanceX + distanceY * distanceY
          );

          if (distance > 15) {
            // Restringe el movimiento al radio y invierte la dirección
            const angle = Math.atan2(distanceY, distanceX);
            this.x = this.initialX + 15 * Math.cos(angle);
            this.y = this.initialY + 15 * Math.sin(angle);
            this.speedX *= -1;
            this.speedY *= -1;
          }
        },
      };
    }

    // Función para calcular la distancia entre dos puntos
    function calculateDistance(
      x1: number,
      y1: number,
      x2: number,
      y2: number
    ): number {
      const distanceX = x2 - x1;
      const distanceY = y2 - y1;
      return Math.sqrt(distanceX * distanceX + distanceY * distanceY);
    }

    // Inicializa los círculos con posiciones y velocidades aleatorias
    for (let i = 0; i < 30; i++) {
      let x:number, y:number;
      let isOverlap;

      do {
        // Genera nuevas posiciones
        x = Math.random() * (canvas?.width || 0);
        y = Math.random() * (canvas?.height || 0);

        // Verifica si hay superposición con otros círculos
        isOverlap = circles.some(
          (circle) => calculateDistance(x, y, circle.x, circle.y) < 120
        );
      } while (isOverlap);

      const speedX = (Math.random() - 0.5) * 0.2; // Velocidad en el eje X
      const speedY = (Math.random() - 0.5) * 0.2; // Velocidad en el eje Y

      circles.push(Circle(x, y, speedX, speedY));
    }

    function animate() {
      // Limpia el canvas en cada fotograma
      c?.clearRect(0, 0, canvas?.width || 0, canvas?.height || 0);

      // Actualiza y dibuja cada círculo
      circles.forEach((circle) => {
        circle.update();
        circle.draw();
      });

      // Solicita el próximo fotograma de animación
      requestAnimationFrame(animate);
    }

    // Inicia la animación
    animate();
  }, []);

  return (
    <canvas
      id="stars"
      className="fixed h-full w-full mx-auto inset-0 opacity-0 fade-in -z-10"
    />
  );
};

export default Canvas;
