<!--
INSTRUCTION: Summary: This component contains the app's logo and name in a large, bold font, and on the same line.
INSTRUCTION: There is an additional line of subtext underneath the first line.
INSTRUCTION: Both of these lines are center aligned.
-->

<template>
    <div class="flex">
        <!-- Sidebar -->
        <div class="w-64 bg-gray-100 dark:bg-gray-700 h-screen">
            <nav class="mt-10">
                <a href="#" class="flex items-center px-6 py-2 text-gray-700 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600">
                    <i class='bx bxs-home mr-3'></i>
                    Home
                </a>
                <a href="#" class="flex items-center px-6 py-2 mt-4 text-gray-700 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600">
                    <i class='bx bxs-info-circle mr-3'></i>
                    About
                </a>
                <a href="#" class="flex items-center px-6 py-2 mt-4 text-gray-700 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600">
                    <i class='bx bxs-contact mr-3'></i>
                    Contact
                </a>
            </nav>
        </div>

        <!-- Main Content -->
        <div class="flex-1">
            <footer id="footer-section" style="min-height: 350px" class="flex-1 bg-white dark:bg-gray-800">
                <div id="footer-container" class="max-w-screen-xl p-4 py-6 mx-auto lg:py-16 md:p-8 lg:p-10">
                    <hr id="footer-divider" class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8">
                    <div id="footer-content" class="text-center">
                        <div class="flex">
                            <a id="footer-logo-link" href="#" class="flex-1 flex items-center justify-center mb-5 text-2xl font-semibold text-gray-900 dark:text-white">
                                <img id="footer-logo" src="./images/logo.svg" class="h-6 mr-3 sm:h-9" alt="Landwind Logo" />
                                BlockScout: Your Blockchain Intelligence Hub
                            </a>
                        </div>
                    </div>
                    <div class="flex">
                        <div id="footer-text" class="flex-1 block text-sm text-center text-gray-500 dark:text-gray-400">
                            © 2023 BlockScout. Empowering blockchain discovery and analysis.
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SimpleFooterComponent',
    data() {
        return {
            expanded: false,
            tab: null,
        };
    },
}
</script>
