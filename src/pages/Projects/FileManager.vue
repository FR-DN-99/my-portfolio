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
          Embedded Browser File Navigation
        </h1>

        <p class="text-xl text-slate-400 leading-relaxed mb-8">
          Embedded browser file navigation with Elfinder and JWT, demonstrating secure remote folder
          access.
        </p>

        <div class="flex flex-wrap gap-3 mb-12">
          <span class="px-4 py-2 text-xs font-medium rounded-full bg-teal-400/10 text-teal-400">
            Elfinder
          </span>
          <span class="px-4 py-2 text-xs font-medium rounded-full bg-teal-400/10 text-teal-400">
            JWT
          </span>
          <span class="px-4 py-2 text-xs font-medium rounded-full bg-teal-400/10 text-teal-400">
            REST API
          </span>
          <span class="px-4 py-2 text-xs font-medium rounded-full bg-teal-400/10 text-teal-400">
            PHP
          </span>
          <span class="px-4 py-2 text-xs font-medium rounded-full bg-teal-400/10 text-teal-400">
            HTML / JS
          </span>
          <span class="px-4 py-2 text-xs font-medium rounded-full bg-teal-400/10 text-teal-400">
            CSS / Tailwind
          </span>
          <span class="px-4 py-2 text-xs font-medium rounded-full bg-teal-400/10 text-teal-400">
            Zend Framework
          </span>
          <span class="px-4 py-2 text-xs font-medium rounded-full bg-teal-400/10 text-teal-400">
            Samba Server
          </span>
        </div>

        <!-- Demo Image inside header card -->
        <div class="max-w-5xl mx-auto">
          <div class="rounded-lg border border-slate-800 overflow-hidden shadow-2xl">
            <img src="/elfinder.png" alt="Embedded Browser File Navigation Demo" class="w-full h-auto" />
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
              Implemented a solution that allows browsing and managing directories and files stored
              on a remote server, simulating integration with an internal CRM. The implementation
              includes:
            </p>

            <ul class="list-disc list-inside text-slate-400 leading-relaxed space-y-2">
              <li>A custom Elfinder driver handling folder access permissions.</li>
              <li>JWT authentication for user validation.</li>
              <li>REST API in PHP for backend communication and validation.</li>
            </ul>

            <p>
              The main goal of this implementation is to preserve the security of the client
              portfolio: access restrictions to individual folders are controlled by the CRM, and
              the Elfinder instance is configured to prevent directory traversal beyond the assigned
              root path.
            </p>

            <p>
              A test environment with fictitious data was created to demonstrate functionality,
              including folder navigation, permission management, and file upload, without exposing
              any real company or client information.
            </p>

            <p>
              This project showcases advanced skills in system integration, permission control, and
              API design, as well as the ability to adapt complex solutions to safe, public-facing
              demonstrations.
            </p>
          </div>
        </div>

        <div class="bg-slate-900/60 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-slate-800/50">
          <h2 class="text-3xl font-bold mb-6">Stack & Technologies</h2>
          <div class="flex flex-wrap gap-3">
            <span class="px-4 py-2 text-sm font-medium rounded-full bg-teal-400/10 text-teal-400">
              Elfinder
            </span>
            <span class="px-4 py-2 text-sm font-medium rounded-full bg-teal-400/10 text-teal-400">
              JWT
            </span>
            <span class="px-4 py-2 text-sm font-medium rounded-full bg-teal-400/10 text-teal-400">
              REST API
            </span>
            <span class="px-4 py-2 text-sm font-medium rounded-full bg-teal-400/10 text-teal-400">
              PHP
            </span>
            <span class="px-4 py-2 text-sm font-medium rounded-full bg-teal-400/10 text-teal-400">
              HTML / JS
            </span>
            <span class="px-4 py-2 text-sm font-medium rounded-full bg-teal-400/10 text-teal-400">
              CSS / Tailwind
            </span>
            <span class="px-4 py-2 text-sm font-medium rounded-full bg-teal-400/10 text-teal-400">
              Zend Framework
            </span>
            <span class="px-4 py-2 text-sm font-medium rounded-full bg-teal-400/10 text-teal-400">
              Samba Server
            </span>
          </div>
        </div>

        <!-- Process Section -->
        <div class="bg-slate-900/60 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-slate-800/50">
          <h2 class="text-3xl font-bold mb-6">Process</h2>
          <div class="space-y-8">
            <!-- Step 1 -->
            <div class="flex gap-6">
              <div class="flex-shrink-0">
                <div
                  class="w-12 h-12 rounded-full bg-teal-400/10 border-2 border-teal-400 flex items-center justify-center text-teal-400 font-bold">
                  1
                </div>
              </div>
              <div>
                <h3 class="text-xl font-medium text-slate-200 mb-2">
                  Analysis and test environment setup
                </h3>
                <p class="text-slate-400 leading-relaxed mb-3">
                  The project began with an analysis of the existing CRM to identify the
                  technologies required for deployment, focusing on those best aligned with the
                  current architecture and user experience.
                </p>
                <p class="text-slate-400 leading-relaxed">
                  A dedicated test virtual machine was created with a directory structure mirroring
                  the production SMB server, allowing safe simulation of real-world scenarios
                  without affecting production data.
                </p>
              </div>
            </div>

            <!-- Step 2 -->
            <div class="flex gap-6">
              <div class="flex-shrink-0">
                <div
                  class="w-12 h-12 rounded-full bg-teal-400/10 border-2 border-teal-400 flex items-center justify-center text-teal-400 font-bold">
                  2
                </div>
              </div>
              <div>
                <h3 class="text-xl font-medium text-slate-200 mb-2">Elfinder CRUD customization</h3>
                <p class="text-slate-400 leading-relaxed mb-3">
                  A custom Elfinder driver was implemented, tailored to the SMB-based storage layer,
                  providing full control over file operations.
                </p>
                <ul class="list-disc list-inside text-slate-400 leading-relaxed space-y-2">
                  <li>
                    Overrides default create, update, delete, and read behaviours to follow CRM
                    rules and folder-level permissions.
                  </li>
                  <li>
                    Restricts folder navigation so users cannot browse beyond their assigned root
                    directory.
                  </li>
                  <li>Disables direct URL-based navigation to prevent manual path manipulation.</li>
                </ul>
              </div>
            </div>

            <!-- Step 3 -->
            <div class="flex gap-6">
              <div class="flex-shrink-0">
                <div
                  class="w-12 h-12 rounded-full bg-teal-400/10 border-2 border-teal-400 flex items-center justify-center text-teal-400 font-bold">
                  3
                </div>
              </div>
              <div>
                <h3 class="text-xl font-medium text-slate-200 mb-2">
                  REST API & JWT-based Backend
                </h3>
                <p class="text-slate-400 leading-relaxed mb-3">
                  A PHP-based REST API was implemented to serve as the backend for the file
                  management system. Its responsibilities include validating user sessions using a
                  JWT-based authentication system:
                </p>
                <ul class="list-disc list-inside text-slate-400 leading-relaxed space-y-2 mb-3">
                  <li>Token generation</li>
                  <li>Token validation</li>
                  <li>Token refresh mechanisms</li>
                  <li>Session expiration</li>
                </ul>
                <p class="text-slate-400 leading-relaxed">
                  The API determines user access based on roles, enforcing folder-level permissions
                  by sending the appropriate access level—full or restricted—to the embedded
                  Elfinder browser. It mediates all requests between the browser and the SMB
                  storage, ensuring compliance with CRM rules while providing a secure, centralized
                  point of control for all interactions.
                </p>
              </div>
            </div>

            <!-- Step 4 -->
            <div class="flex gap-6">
              <div class="flex-shrink-0">
                <div
                  class="w-12 h-12 rounded-full bg-teal-400/10 border-2 border-teal-400 flex items-center justify-center text-teal-400 font-bold">
                  4
                </div>
              </div>
              <div>
                <h3 class="text-xl font-medium text-slate-200 mb-2">
                  Final testing and validation
                </h3>
                <p class="text-slate-400 leading-relaxed mb-3">
                  Once the custom Elfinder driver and REST API backend were implemented, the full
                  system was thoroughly tested in the dedicated test environment.
                </p>
                <ul class="list-disc list-inside text-slate-400 leading-relaxed space-y-2 mb-3">
                  <li>Verified folder-level permissions and role-based access.</li>
                  <li>Tested token-based authentication and session expiration.</li>
                  <li>
                    Validated file operation workflows, including create, read, update, and delete.
                  </li>
                </ul>
                <p class="text-slate-400 leading-relaxed">
                  The testing phase ensured that all components interact correctly, that security
                  measures prevent unauthorized access, and that the simulated environment
                  faithfully represents production conditions. The system was then documented and
                  prepared for deployment, demonstrating a secure and reliable file management
                  solution.
                </p>
              </div>
            </div>
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
import { defineComponent, onMounted } from 'vue';

export default defineComponent({
  name: 'ElfinderProject',
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
        currentSpeed = 3;

        clearTimeout(scrollTimeout);

        scrollTimeout = window.setTimeout(() => {
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