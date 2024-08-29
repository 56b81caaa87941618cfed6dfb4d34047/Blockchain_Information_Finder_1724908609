<template>
  <div>
    <section class="leading-relaxed max-w-screen-xl mt-12 mx-auto px-4 md:px-8 bg-gradient-to-br from-pink-500 to-purple-600 rounded-lg shadow-lg">
      <div class="space-y-3 text-center py-10">
        <h1 class="text-4xl text-white font-semibold">Frequently Asked Questions</h1>
        <p class="text-pink-100 max-w-lg mx-auto text-lg">Get answers to common queries about our blockchain information discovery app</p>
      </div>
      <div class="mt-14 max-w-2xl mx-auto">
        <div v-for="(item, index) in faqs" :key="index" class="space-y-5 mt-5 overflow-hidden border-b border-pink-300 hover:bg-white hover:bg-opacity-10 cursor-pointer rounded-lg backdrop-filter backdrop-blur-lg transition duration-300 ease-in-out" @click="toggleFaq(index)">
          <h4 class="cursor-pointer pb-5 flex items-center justify-between text-lg text-white font-medium p-4">
            {{ item.q }}
            <svg v-if="selectedFaq === index" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-pink-200 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"/>
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-pink-200 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>
            </svg>
          </h4>
          <div v-show="selectedFaq === index" style="overflow: hidden; transition: max-height 0.5s ease-in-out, opacity 0.5s ease-in-out;" :style="{ maxHeight: selectedFaq === index ? '1000px' : '0px', opacity: selectedFaq === index ? 1 : 0 }">
            <div class="px-4 py-6">
              <p class="text-pink-100 pb-4 max-w-full text-lg">{{ item.a }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'FaqAccordion',
  data() {
    return {
      selectedFaq: null,
      faqs: [
        { q: "What is this blockchain information discovery app?", a: "Our app is a cutting-edge tool designed to help users find and explore new blockchain information effortlessly. It aggregates data from various blockchain networks, providing real-time updates on new projects, tokens, and emerging trends in the crypto space." },
        { q: "How does the app find new blockchain information?", a: "The app utilizes advanced algorithms and AI to scan multiple blockchain networks, crypto forums, social media platforms, and reputable news sources. It then filters and organizes this information, presenting users with the most relevant and recent blockchain developments." },
        { q: "Is the app suitable for both beginners and experienced crypto enthusiasts?", a: "Absolutely! Our app is designed with an intuitive interface that caters to users of all experience levels. Beginners can easily navigate through curated content, while advanced users can access in-depth analysis and technical information." },
        { q: "Can I customize the type of blockchain information I receive?", a: "Yes, you can! Our app allows you to set preferences for specific blockchain networks, project types, or topics of interest. This ensures that you receive personalized updates tailored to your unique interests in the blockchain space." },
        { q: "How often is the blockchain information updated?", a: "Our app provides real-time updates, ensuring you have access to the latest blockchain information as soon as it becomes available. You can also set custom notification preferences to stay informed about significant developments in your areas of interest." }
      ]
    }
  },
  methods: {
    toggleFaq(index) {
      this.selectedFaq = this.selectedFaq === index ? null : index;
    }
  }
}
</script>

<style scoped>
/* Add any desired scoped CSS here */
</style>
