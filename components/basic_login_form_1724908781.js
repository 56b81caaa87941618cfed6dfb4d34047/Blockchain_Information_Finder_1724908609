<template>
  <main class="h-7/12 flex items-center justify-center bg-gradient-to-br from-pink-500 to-purple-600">
    <div class="p-10 flex flex-col items-center justify-center bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg w-full max-w-md rounded-lg shadow-lg">
      <div class="text-white w-full">
        <div class="w-full mb-5">
          <h3 class="text-3xl font-bold mb-5 text-center">Log in to your account</h3>
          <div class="flex justify-center mb-5">
            <p class="mr-2 mt-1.5">Don't have an account?</p>
            <button class="bg-pink-600 hover:bg-pink-500 active:bg-pink-700 text-white font-medium text-sm px-2 py-1 rounded-lg transition duration-300">Sign up</button>
          </div>
        </div>
        <form @submit.prevent="handleSubmit" class="space-y-5 w-full">
          <div>
            <label class="font-medium">Email</label>
            <input type="email" required class="w-full mt-2 px-3 py-2 text-white bg-purple-600 bg-opacity-30 outline-none border border-pink-300 focus:border-pink-500 rounded-lg transition duration-300" />
          </div>
          <div>
            <label class="font-medium">Password</label>
            <input type="password" required class="w-full mt-2 px-3 py-2 text-white bg-purple-600 bg-opacity-30 outline-none border border-pink-300 focus:border-pink-500 rounded-lg transition duration-300" />
          </div>
          <button class="w-full px-4 py-2 text-white font-medium bg-pink-600 hover:bg-pink-500 active:bg-pink-700 rounded-lg transition duration-300">Sign in</button>
          <div class="text-center">
            <button class="bg-purple-600 hover:bg-purple-500 active:bg-purple-700 text-white font-medium text-sm p-3 rounded-lg transition duration-300">Forgot password?</button>
          </div>
          <div class="text-center mt-4">
            <button class="bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 text-white font-medium text-sm px-4 py-2 rounded-lg shadow-md transition duration-300">
              Hello World
            </button>
          </div>
        </form>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'BasicLoginForm',
  data() {
    return {
      expanded: false,
      data: null
    };
  },
  methods: {
    handleSubmit() {
      // This method should contain logic for form submission.
    }
  }
};
</script>
