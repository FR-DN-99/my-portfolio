<template>
  <div class="min-h-screen bg-slate-950 text-slate-100 relative">
    <!-- Animated Background Global - Fixed -->
    <div class="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/70 to-slate-950/80"></div>
      <div v-for="n in 20" :key="'shape-' + n" :class="['shape', shapeType(n)]" :style="randomStyle()"></div>
    </div>

    <!-- Hero Section -->
    <section class="relative min-h-screen flex items-center px-6 md:px-12 lg:px-24 z-10">
      <div class="max-w-7xl mx-auto w-full">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <!-- Left Column -->
          <div
            class="space-y-8 bg-slate-900/60 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-slate-800/50 mt-8">
            <div class="mb-8">
              <img src="/profile-picture.jpeg" alt="Your profile photo"
                class="w-64 h-64 rounded-full border-4 border-teal-400/20 hover:border-teal-400/40 transition-all shadow-xl" />
            </div>

            <div class="space-y-4">
              <h1 class="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance">
                Franco Dendi
              </h1>
              <p class="text-xl md:text-2xl text-slate-400">Technical Lead & Software Engineer</p>
              <p class="text-lg text-slate-500 leading-relaxed">
                I build accessible, pixel-perfect digital experiences for the web.
              </p>
            </div>

            <!-- Navigation Links -->
            <nav class="flex flex-col space-y-3 text-slate-400">
              <a href="#about" class="group flex items-center space-x-3 hover:text-teal-400 transition-colors">
                <span class="h-px w-12 bg-slate-600 group-hover:w-16 group-hover:bg-teal-400 transition-all"></span>
                <span class="uppercase text-sm tracking-wider font-medium">About</span>
              </a>
              <a href="#experience" class="group flex items-center space-x-3 hover:text-teal-400 transition-colors">
                <span class="h-px w-12 bg-slate-600 group-hover:w-16 group-hover:bg-teal-400 transition-all"></span>
                <span class="uppercase text-sm tracking-wider font-medium">Experience</span>
              </a>
              <a href="#projects" class="group flex items-center space-x-3 hover:text-teal-400 transition-colors">
                <span class="h-px w-12 bg-slate-600 group-hover:w-16 group-hover:bg-teal-400 transition-all"></span>
                <span class="uppercase text-sm tracking-wider font-medium">Projects</span>
              </a>
            </nav>

            <!-- Social Links -->
            <div class="flex space-x-6 text-slate-400">
              <a href="https://github.com/FR-DN-99" target="_blank" class="hover:text-teal-400 transition-colors">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/franco-dendi-bele-49605b26a" target="_blank"
                class="hover:text-teal-400 transition-colors">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>

          <!-- Right Column - About -->
          <div
            class="space-y-6 text-slate-400 leading-relaxed bg-slate-900/60 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-slate-800/50 mt-8">
            <p class="text-balance">
              I lead a small software development team while remaining hands-on in coding and code
              reviews. I define project roadmaps, make key architectural decisions, and ensure that
              our solutions are scalable, maintainable, and aligned with business goals.
            </p>
            <p class="text-balance">
              My expertise is strongest in backend development with Laravel (PHP), including MySQL
              optimization and API design, while also building responsive and dynamic frontend
              interfaces using Vue 3, Vite, Inertia.js, and PrimeVue.
            </p>
            <p class="text-balance">
              Experienced in agile environments and Git-based workflows, I focus on delivering
              high-performance solutions and fostering a collaborative, efficient, and high-quality
              development process.
            </p>
            <p class="text-balance">
              Proactive and team-oriented, I continuously seek to improve both the codebase and the
              skills of the team, driving projects that generate real business value.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Experience Section -->
    <section id="experience" class="relative min-h-screen px-6 md:px-12 lg:px-24 py-24 z-10">
      <div
        class="max-w-7xl mx-auto bg-slate-900/60 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-slate-800/50">
        <h2 class="text-sm uppercase tracking-widest text-slate-400 mb-12 font-medium">
          Experience
        </h2>

        <div class="space-y-12">
          <!-- Experience Item -->
          <div class="group grid lg:grid-cols-4 gap-4 hover:bg-slate-900/50 p-6 rounded-lg transition-all -ml-6">
            <div class="text-slate-500 text-sm font-medium">
              <div class="lg:col-span-1">
                <img src="/logo-aixa.png" alt="Project screenshot"
                  class="rounded border border-slate-800 group-hover:border-slate-700 transition-colors border-0"
                  style="width: 225px; height: 225px" />
              </div>
            </div>
            <div class="lg:col-span-3 space-y-4">
              <h3 class="text-xl font-medium text-slate-200 group-hover:text-teal-400 transition-colors">
                Engineering lead · 2025 — PRESENT
              </h3>
              <p class="text-slate-400 leading-relaxed">
                I lead the software development team, defining our yearly roadmap and shaping the
                technical direction of each project. I balance leadership and hands-on work —
                managing priorities, designing scalable solutions, and staying involved in
                development and code reviews. My focus is on building efficient workflows, promoting
                clean code practices, and ensuring that every project delivers real, long-term
                value.
              </p>
              <div class="flex flex-wrap gap-2">
                <span class="px-3 py-1 text-xs font-medium rounded-full bg-teal-400/10 text-teal-400">
                  Agile project management
                </span>
                <span class="px-3 py-1 text-xs font-medium rounded-full bg-teal-400/10 text-teal-400">
                  Technical leadership
                </span>
                <span class="px-3 py-1 text-xs font-medium rounded-full bg-teal-400/10 text-teal-400">
                  Laravel
                </span>
                <span class="px-3 py-1 text-xs font-medium rounded-full bg-teal-400/10 text-teal-400">
                  API RESTs
                </span>
              </div>
            </div>
          </div>

          <!-- Experience Item -->
          <div class="group grid lg:grid-cols-4 gap-4 hover:bg-slate-900/50 p-6 rounded-lg transition-all -ml-6">
            <div class="text-slate-500 text-sm font-medium">
              <div class="lg:col-span-1">
                <img src="/logo-aixa.png" alt="Project screenshot"
                  class="rounded border border-slate-800 group-hover:border-slate-700 transition-colors border-0"
                  style="width: 225px; height: 225px" />
              </div>
            </div>
            <div class="lg:col-span-3 space-y-4">
              <h3 class="text-xl font-medium text-slate-200 group-hover:text-teal-400 transition-colors">
                Junior Software Developer · 2024 — 2025<br />(1 year & 3 months)
              </h3>
              <p class="text-slate-400 leading-relaxed">
                Web application development and maintenance using Laravel (PHP) for the backend, and
                Vue 3 with Vite, Inertia.js, and PrimeVue for the frontend. I design responsive
                interfaces with HTML5, CSS, and Tailwind, manage and optimize MySQL databases, and
                integrate external services via APIs. Additionally, I maintain the main CRM built
                with Zend Framework, using Git for version control in an agile and collaborative
                environment.
              </p>
              <div class="flex flex-wrap gap-2">
                <span class="px-3 py-1 text-xs font-medium rounded-full bg-teal-400/10 text-teal-400">
                  Vue.js
                </span>
                <span class="px-3 py-1 text-xs font-medium rounded-full bg-teal-400/10 text-teal-400">
                  Php
                </span>
                <span class="px-3 py-1 text-xs font-medium rounded-full bg-teal-400/10 text-teal-400">
                  MySQL
                </span>
                <span class="px-3 py-1 text-xs font-medium rounded-full bg-teal-400/10 text-teal-400">
                  Full Stack
                </span>
              </div>
            </div>
          </div>

          <!-- Experience Item -->
          <div class="group grid lg:grid-cols-4 gap-4 hover:bg-slate-900/50 p-6 rounded-lg transition-all -ml-6">
            <div class="text-slate-500 text-sm font-medium">
              <div class="lg:col-span-1">
                <img src="/kode-logo.png" alt="Project screenshot"
                  class="rounded border border-slate-800 group-hover:border-slate-700 transition-colors border-0"
                  style="width: 225px; height: 225px" />
              </div>
            </div>
            <div class="lg:col-span-3 space-y-4">
              <h3 class="text-xl font-medium text-slate-200 group-hover:text-teal-400 transition-colors">
                Frontend Developer · 2021 — 2021 <br />(5 months)
              </h3>
              <p class="text-slate-400 leading-relaxed">
                Contributed to the development and maintenance of web interfaces using Svelte,
                implementing responsive and functional designs. Worked with Git version control,
                following best practices in an agile and collaborative environment. Gained hands-on
                experience with HTML, CSS, JavaScript, and Svelte, as well as team workflows and
                task management.
              </p>
              <div class="flex flex-wrap gap-2">
                <span class="px-3 py-1 text-xs font-medium rounded-full bg-teal-400/10 text-teal-400">
                  GIT
                </span>
                <span class="px-3 py-1 text-xs font-medium rounded-full bg-teal-400/10 text-teal-400">
                  JS
                </span>
                <span class="px-3 py-1 text-xs font-medium rounded-full bg-teal-400/10 text-teal-400">
                  SVELTE
                </span>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-12">
          <a href="/resume.pdf"
            class="inline-flex items-center text-slate-200 hover:text-teal-400 transition-colors group">
            <span class="font-medium">View Full Resume</span>
            <svg class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor"
              viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="relative min-h-screen px-6 md:px-12 lg:px-24 py-24 z-10">
      <div
        class="max-w-7xl mx-auto bg-slate-900/60 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-slate-800/50">
        <h2 class="text-sm uppercase tracking-widest text-slate-400 mb-12 font-medium">
          Featured Projects
        </h2>
        <div class="space-y-12">
          <!-- Project Item -->
          <router-link to="/project/privatearea"
            class="group grid lg:grid-cols-4 gap-4 hover:bg-slate-900/50 p-6 rounded-lg transition-all -ml-6">
            <div class="lg:col-span-1" style="width: 250px">
              <img data-v-933e9cdf="" src="/private-area.png" alt="Project screenshot"
                class="rounded border-slate-800 group-hover:border-slate-700 transition-colors"
                style="height: 190px; width: 250px" />
            </div>
            <div class="lg:col-span-3 space-y-4">
              <h3
                class="text-xl font-medium text-slate-200 group-hover:text-teal-400 transition-colors flex items-center">
                Client portal (In Progress)
                <svg class="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                  fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </h3>
              <p class="text-slate-400 leading-relaxed">
                Led the full-stack migration of the company’s private area, redesigning the
                architecture, modernizing the tech stack, and ensuring a smoother, more maintainable
                experience for both users and the development team.
              </p>
              <div class="flex flex-wrap gap-2">
                <span class="px-3 py-1 text-xs font-medium rounded-full bg-teal-400/10 text-teal-400">
                  Laravel
                </span>
                <span class="px-3 py-1 text-xs font-medium rounded-full bg-teal-400/10 text-teal-400">
                  Vue 3
                </span>
                <span class="px-3 py-1 text-xs font-medium rounded-full bg-teal-400/10 text-teal-400">
                  MySQL
                </span>
                <span class="px-3 py-1 text-xs font-medium rounded-full bg-teal-400/10 text-teal-400">
                  Wordpress
                </span>
                <span class="px-3 py-1 text-xs font-medium rounded-full bg-teal-400/10 text-teal-400">
                  Zend Framework
                </span>
                <span class="px-3 py-1 text-xs font-medium rounded-full bg-teal-400/10 text-teal-400">
                  Claude
                </span>
              </div>
            </div>
          </router-link>
        </div>
        <div class="space-y-12">
          <!-- Project Item -->
          <router-link to="/project/filemanager"
            class="group grid lg:grid-cols-4 gap-4 hover:bg-slate-900/50 p-6 rounded-lg transition-all -ml-6">
            <div class="lg:col-span-1">
              <img src="/elfinder.jpeg" alt="Project screenshot"
                class="rounded border border-slate-800 group-hover:border-slate-700 transition-colors"
                style="height: 190px; width: 250px" />
            </div>
            <div class="lg:col-span-3 space-y-4">
              <h3
                class="text-xl font-medium text-slate-200 group-hover:text-teal-400 transition-colors flex items-center">
                Embedded Browser File Navigation
                <svg class="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                  fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </h3>
              <p class="text-slate-400 leading-relaxed">
                Developed a custom driver and API to manage folder access and permissions in a
                simulated environment, showcasing advanced system integration and secure handling of
                complex workflows.
              </p>
              <div class="flex flex-wrap gap-2">
                <span class="px-3 py-1 text-xs font-medium rounded-full bg-teal-400/10 text-teal-400">
                  JWT
                </span>
                <span class="px-3 py-1 text-xs font-medium rounded-full bg-teal-400/10 text-teal-400">
                  API Rest
                </span>
                <span class="px-3 py-1 text-xs font-medium rounded-full bg-teal-400/10 text-teal-400">
                  Elfinder
                </span>
                <span class="px-3 py-1 text-xs font-medium rounded-full bg-teal-400/10 text-teal-400">
                  Php
                </span>
              </div>
            </div>
          </router-link>
        </div>
        <div class="space-y-12">
          <!-- Project Item -->
          <router-link to="/project/routeplanner"
            class="group grid lg:grid-cols-4 gap-4 hover:bg-slate-900/50 p-6 rounded-lg transition-all -ml-6">
            <div class="lg:col-span-1">
              <img src="/route-planner-logo.png" alt="Project screenshot"
                class="rounded border border-slate-800 group-hover:border-slate-700 transition-colors"
                style="height: 190px; width: 250px" />
            </div>
            <div class="lg:col-span-3 space-y-4">
              <h3
                class="text-xl font-medium text-slate-200 group-hover:text-teal-400 transition-colors flex items-center">
                Route Planner
                <svg class="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                  fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </h3>
              <p class="text-slate-400 leading-relaxed">
                Developed a route planning tool integrated into the company CRM, optimizing on-site
                visit scheduling for consultants. Features include map-based visualization, priority
                sorting via drag-and-drop, and an intelligent “suggest visits” function that filters
                and recommends visits based on multiple parameters, reducing route planning time by
                over 30 minutes per consultant.
              </p>
              <div class="flex flex-wrap gap-2">
                <span class="px-3 py-1 text-xs font-medium rounded-full bg-teal-400/10 text-teal-400">
                  Zend Framework
                </span>
                <span class="px-3 py-1 text-xs font-medium rounded-full bg-teal-400/10 text-teal-400">
                  PHP
                </span>
                <span class="px-3 py-1 text-xs font-medium rounded-full bg-teal-400/10 text-teal-400">
                  MySQL
                </span>
                <span class="px-3 py-1 text-xs font-medium rounded-full bg-teal-400/10 text-teal-400">
                  Ajax
                </span>
                <span class="px-3 py-1 text-xs font-medium rounded-full bg-teal-400/10 text-teal-400">
                  HTML / JS
                </span>
                <span class="px-3 py-1 text-xs font-medium rounded-full bg-teal-400/10 text-teal-400">
                  CSS / Tailwind
                </span>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="relative px-6 md:px-12 lg:px-24 py-12 border-t border-slate-800 z-10">
      <div class="max-w-7xl mx-auto">
        <p class="text-slate-500 text-sm">
          Built with Vue 3 and Tailwind CSS. Design inspired by modern portfolio aesthetics.
        </p>
      </div>
    </footer>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';

export default defineComponent({
  name: 'Home',
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
      // Limpiar estilos del body que puedan venir de otras páginas
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.height = '';
      document.body.style.overflow = '';

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
            complete: animateShape
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

<style scoped>
.shape {
  position: fixed;
  pointer-events: none;
  will-change: transform;
}

.square {
  background: rgba(28, 217, 157, 0.4);
  /* teal semi-transparente */
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