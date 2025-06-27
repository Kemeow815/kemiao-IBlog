<template>
  <div :class="['min-h-screen transition-colors duration-300', isDark ? 'dark bg-gray-900' : 'bg-gray-50']">
    <main class="container mx-auto px-4 py-12 flex flex-col items-center justify-center min-h-screen">
      <!-- Profile Card -->
      <div :class="[
        'w-full max-w-md p-8 rounded-2xl shadow-lg transition-all duration-300 transform hover:scale-102',
        isDark ? 'bg-gray-800' : 'bg-white'
      ]">
        <!-- Avatar -->
        <div class="relative w-32 h-32 mx-auto mb-6">
          <img
            src="/src/assets/kemiao.jpg"
            alt="EastWind Profile"
            class="rounded-full object-cover w-full h-full shadow-lg ring-4 ring-opacity-50 transition-all duration-300"
            :class="isDark ? 'ring-purple-400' : 'ring-purple-200'"
          />
        </div>

        <!-- Name -->
        <h1 :class="['text-3xl font-bold text-center mb-4', isDark ? 'text-white' : 'text-gray-800']">
          克喵爱吃卤面
        </h1>

        <!-- Social Links -->
        <div class="flex flex-col gap-3 mb-6">
          <a
            v-for="(link, index) in socialLinks"
            :key="index"
            :href="link.url"
            target="_blank"
            rel="noopener noreferrer"
            :class="[
              'flex items-center gap-3 p-3 rounded-lg transition-all duration-200',
              isDark ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-600 hover:bg-gray-100'
            ]"
          >
            <component :is="link.icon" class="w-5 h-5" />
            <span>{{ link.label }}</span>
          </a>
        </div>

        <!-- Theme Toggle -->
        <div class="flex justify-center">
          <button
            @click="toggleTheme"
            :class="[
              'p-2 rounded-lg transition-colors duration-200',
              isDark ? 'text-yellow-400 hover:bg-gray-700' : 'text-gray-600 hover:bg-gray-100'
            ]"
          >
            <Sun v-if="isDark" class="w-6 h-6" />
            <Moon v-else class="w-6 h-6" />
          </button>
        </div>
      </div>

      <!-- Footer -->
      <footer :class="['mt-8 text-sm', isDark ? 'text-gray-400' : 'text-gray-600']">
        All Rights Reserved To ©克喵爱吃卤面 2025
      </footer>
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { Github, Mail, Globe, Send, Notebook, Image, Sun, Moon } from 'lucide-vue-next'

const isDark = ref(false)

const socialLinks = [
  {
    icon: Github,
    label: 'GitHub',
    url: 'https://github.com/Kemeow815'
  },
  {
    icon: Send,
    label: 'Telegram',
    url: 'https://t.me/KemiaoJun'
  },
  {
    icon: Notebook,
    label: 'pyq',
    url: 'https://pyq.kemiao.online'
  },
  {
    icon: Image,
    label: 'Photo',
    url: 'https://photos.050815.xyz'
  },
  {
    icon: Mail,
    label: 'Email',
    url: 'mailto:me@kemiaosw.top'
  },
  {
    icon: Globe,
    label: 'Blog',
    url: 'https://blog-v3.kemeow.top'
  }
]

const toggleTheme = () => {
  isDark.value = !isDark.value
  updateTheme()
}

const updateTheme = () => {
  document.documentElement.classList.toggle('dark', isDark.value)
}

// 检测系统主题
const checkSystemTheme = () => {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  isDark.value = prefersDark
  updateTheme()
}

onMounted(() => {
  checkSystemTheme()
  // 监听系统主题变化
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', checkSystemTheme)
})
</script>

<style>
:root {
  --transition-duration: 300ms;
}

.transform {
  transition: transform var(--transition-duration) ease;
}

.hover\:scale-102:hover {
  transform: scale(1.02);
}

/* 确保过渡效果平滑 */
* {
  transition-property: background-color, border-color, color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: var(--transition-duration);
}
</style>