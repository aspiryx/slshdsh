<template>
  <main class="flex flex-col bg-black text-white min-h-screen">
    <app-header />
    <div class="h-full flex-grow">
      <slot />
    </div>
    <app-footer />
  </main>
</template>
