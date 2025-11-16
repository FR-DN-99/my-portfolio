<template>
  <div class="scroll-container min-h-screen bg-slate-950 text-slate-100 relative">
    <!-- Animated Background Global - Fixed -->
    <div class="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-slate-950">
      <div class="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/70 to-slate-950/80"></div>
      <div v-for="n in 20" :key="'shape-' + n" :class="['shape', shapeType(n)]" :style="randomStyle()"></div>
    </div>

    <!-- Navigation Bar -->
    <nav class="relative z-10 px-6 md:px-12 lg:px-24 py-8 border-b border-slate-800">
      <div class="max-w-7xl mx-auto">
        <router-link to="/" class="inline-flex items-center text-slate-400 hover:text-teal-400 transition-colors group">
          <svg class="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor"
            viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          <span class="font-medium">Volver al inicio</span>
        </router-link>
      </div>
    </nav>

    <!-- Project Header -->
    <section class="relative z-10 px-6 md:px-12 lg:px-24 py-16">
      <div
        class="max-w-5xl mx-auto bg-slate-900/60 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-slate-800/50">
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance mb-6">
          Client portal (private customer area)
        </h1>

        <p class="text-xl text-slate-400 leading-relaxed mb-8">
          Led the full-stack migration of the company's private area, modernizing the architecture and improving
          performance, maintainability, and developer experience.
        </p>

        <div class="flex flex-wrap gap-3 mb-12">
          <span class="px-4 py-2 text-xs font-medium rounded-full bg-teal-400/10 text-teal-400">
            Laravel
          </span>
          <span class="px-4 py-2 text-xs font-medium rounded-full bg-teal-400/10 text-teal-400">
            Vue 3
          </span>
          <span class="px-4 py-2 text-xs font-medium rounded-full bg-teal-400/10 text-teal-400">
            MySQL
          </span>
          <span class="px-4 py-2 text-xs font-medium rounded-full bg-teal-400/10 text-teal-400">
            Wordpress
          </span>
        </div>
        <!-- Demo GIF Section -->
        <div class="max-w-5xl mx-auto">
          <div class="rounded-lg border border-slate-800 overflow-hidden shadow-2xl">
            <img src="/private-area-logo.png" alt="Embedded Browser File Navigation Demo" class="w-full h-auto" />
          </div>
        </div>
      </div>
    </section>

    <!-- Project Description -->
    <section class="relative z-10 px-6 md:px-12 lg:px-24 py-16">
      <div class="max-w-5xl mx-auto space-y-12">
        <div class="bg-slate-900/60 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-slate-800/50">
          <h2 class="text-3xl font-bold mb-6">Description</h2>
          <div class="space-y-4 text-slate-400 leading-relaxed">
            <p>
              Leading the full-stack migration of the existing client portal from a WordPress-based HTML/CSS/JS project
              to a modern Laravel + Vue application, enhanced with Claude Sonnet to boost developer productivity. The
              migration focuses on:
            </p>

            <ul class="list-disc list-inside text-slate-400 leading-relaxed">
              <li>Improved scalability and code efficiency.</li>
              <li>Enhanced authentication security.</li>
              <li>Modern, responsive client-facing interface.</li>
              <li>Streamlined development workflows for maintainability.</li>
            </ul>

            <p>
              This project demonstrates expertise in full-stack development, secure authentication, and building
              scalable, maintainable client portals while preserving an intuitive user experience.
            </p>
          </div>
        </div>

        <div class="bg-slate-900/60 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-slate-800/50">
          <h2 class="text-3xl font-bold mb-6">Stack & Technologies</h2>
          <div class="flex flex-wrap gap-3">
            <span class="px-4 py-2 text-sm font-medium rounded-full bg-teal-400/10 text-teal-400">
              Laravel
            </span>
            <span class="px-4 py-2 text-sm font-medium rounded-full bg-teal-400/10 text-teal-400">
              Vue 3
            </span>
            <span class="px-4 py-2 text-sm font-medium rounded-full bg-teal-400/10 text-teal-400">
              MySQL
            </span>
            <span class="px-4 py-2 text-sm font-medium rounded-full bg-teal-400/10 text-teal-400">
              Zend Framework
            </span>
            <span class="px-4 py-2 text-sm font-medium rounded-full bg-teal-400/10 text-teal-400">
              Claude
            </span>
          </div>
        </div>

        <!-- Process Section -->
        <div class="bg-slate-900/60 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-slate-800/50">
          <h2 class="text-3xl font-bold mb-6">In Progress</h2>
          <div class="space-y-8">
            <p class="text-slate-400 leading-relaxed">
              This project is currently under active development. More details will be added as the migration
              progresses.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="relative z-10 px-6 md:px-12 lg:px-24 py-12 border-t border-slate-800 mt-24">
      <div class="max-w-5xl mx-auto">
        <router-link to="/" class="inline-flex items-center text-slate-400 hover:text-teal-400 transition-colors group">
          <svg class="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor"
            viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          <span class="font-medium">Volver a todos los proyectos</span>
        </router-link>
      </div>
    </footer>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted } from 'vue';

export default defineComponent({
  name: 'ProjectDetail',
  setup() {
    function shapeType(n: number) {
      if (n % 3 === 0) return 'square';
      if (n % 3 === 1) return 'circle';
      return 'triangle';
    }

    function randomStyle() {
      const size = Math.floor(Math.random() * 40) + 30;
      const opacity = Math.random() * 0.4 + 0.3;
      return {
        width: `${size}px`,
        height: `${size}px`,
        opacity,
      };
    }

    onMounted(() => {
      // Prevenir el bounce de Safari de forma agresiva
      const preventBounce = () => {
        document.documentElement.style.overscrollBehavior = 'none';
        document.documentElement.style.overscrollBehaviorY = 'none';
        document.body.style.overscrollBehavior = 'none';
        document.body.style.overscrollBehaviorY = 'none';
        document.body.style.backgroundColor = '#020617';
        document.documentElement.style.backgroundColor = '#020617';

        // Para iOS Safari
        document.body.style.position = 'fixed';
        document.body.style.width = '100%';
        document.body.style.height = '100%';
        document.body.style.overflow = 'hidden';

        const scrollContainer = document.querySelector('.scroll-container');
        if (scrollContainer) {
          (scrollContainer as HTMLElement).style.overflowY = 'auto';
          (scrollContainer as HTMLElement).style.height = '100vh';
          (scrollContainer as HTMLElement).style.position = 'relative';
        }
      };

      preventBounce();
      setTimeout(preventBounce, 100);

      // Verificar que anime está disponible
      if (typeof (window as any).anime === 'undefined') {
        console.error('Anime.js no está cargado. Asegúrate de incluir el script en index.html');
        return;
      }

      const anime = (window as any).anime;
      const shapes = document.querySelectorAll<HTMLElement>('.shape');
      let currentSpeed = 1;
      let targetSpeed = 1;
      let scrollTimeout: number;

      // Inicializar posiciones aleatorias de cada forma
      shapes.forEach((shape) => {
        const startX = Math.random() * window.innerWidth;
        const startY = Math.random() * window.innerHeight;
        shape.style.left = `${startX}px`;
        shape.style.top = `${startY}px`;
      });

      // Animación continua infinita para cada forma
      shapes.forEach((shape, index) => {
        const animateShape = () => {
          const duration = (8000 + Math.random() * 7000) / currentSpeed;

          anime({
            targets: shape,
            translateX: () => (Math.random() - 0.5) * 800,
            translateY: () => (Math.random() - 0.5) * 800,
            rotate: () => Math.random() * 360,
            scale: () => 0.5 + Math.random() * 1.3,
            duration: duration,
            easing: 'linear',
            complete: animateShape,
          });
        };

        // Iniciar cada animación con un pequeño delay para variar el movimiento
        setTimeout(() => animateShape(), index * 100);
      });

      // Detectar scroll
      window.addEventListener('scroll', () => {
        targetSpeed = 3;
        currentSpeed = 3;

        clearTimeout(scrollTimeout);

        scrollTimeout = window.setTimeout(() => {
          targetSpeed = 1;
          currentSpeed = 1;
        }, 150);
      });
    });

    return { shapeType, randomStyle };
  },
});
</script>

<style>
/* Estilos globales (sin scoped) */
html {
  overscroll-behavior: none;
  overscroll-behavior-y: none;
  background-color: #020617;
}

body {
  overscroll-behavior: none;
  overscroll-behavior-y: none;
  background-color: #020617;
}
</style>

<style scoped>
.shape {
  position: fixed;
  pointer-events: none;
  will-change: transform;
}

.square {
  background: rgba(28, 217, 157, 0.4);
}

.circle {
  background: rgba(28, 217, 157, 0.3);
  border-radius: 50%;
}

.triangle {
  background: rgba(245, 245, 245, 0.3);
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
  -webkit-clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
}
</style>