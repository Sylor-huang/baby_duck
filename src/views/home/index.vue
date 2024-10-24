<template>
  <div class="min-h-screen bg-gradient-to-b from-yellow-300 to-green-300">
    <section class="max-w-6xl mx-auto py-16 px-4">
      <div class="flex flex-col md:flex-row items-center justify-between">
        <div class="md:w-1/2 mt-8 md:mt-0">
          <div class="relative">
            <div
              class="absolute inset-0 bg-yellow-400 rounded-full blur-2xl opacity-20"
            ></div>
            <img
              src="@/assets/bg-xl.jpeg"
              alt="Baby Duck Hero"
              class="relative w-96 h-96 object-contain"
            />
          </div>
        </div>
        <div class="md:w-1/2 space-y-6">
          <h1 class="text-5xl font-bold text-gray-800">
            Welcome to Baby Duck Community
          </h1>
          <p class="text-xl text-gray-700">
            Join our awesome community of duck enthusiasts! We're all about fun,
            friendship, and amazing adventures.
          </p>
          <p class="text-xl text-gray-700">
            Our goal is the stars and the sea!
          </p>
          <p
            class="border-2 border-black px-6 py-3 rounded-lg hover:bg-black hover:text-white"
          >
            <el-space>
              <span>CA:</span>
              <h3>0x93e56051f65a75b78a9ea4fddb5f9bcc44ce0bca</h3>
            </el-space>
          </p>
          <div class="space-x-4">
            <a
              href="https://t.me/babyduckcommunity"
              target="_blank"
              class="border-2 border-black px-6 py-3 rounded-lg hover:bg-black hover:text-white"
            >
              <el-space>
                <img
                  src="@/assets/icons8-telegram-250.svg"
                  alt="Telegram"
                  class="w-4 h-4"
                />
                <span>Join Telegram</span>
              </el-space>
            </a>
            <a
              href="https://x.com/babyduck_bsc"
              target="_blank"
              class="border-2 border-black px-6 py-3 rounded-lg hover:bg-black hover:text-white"
            >
              <el-space>
                <img
                  src="@/assets/icons8-twitter-288.svg"
                  alt="Twitter"
                  class="w-4 h-4"
                />
                <span>Join Twitter</span>
              </el-space>
            </a>
            <a
              href="https://dexscreener.com/bsc/0x93e56051f65a75b78a9ea4fddb5f9bcc44ce0bca"
              target="_blank"
              class="border-2 border-black px-6 py-3 rounded-lg hover:bg-black hover:text-white"
            >
              Price chart
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="max-w-6xl mx-auto py-16 px-4">
      <h1 class="text-5xl font-bold text-center mb-12">Why Join Baby Duck?</h1>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="bg-white p-6 rounded-xl shadow-lg">
          <h3 class="text-xl font-bold mb-2">Total Circulation</h3>
          <p class="text-gray-600 mb-4">
            - Total: 420,690,000,000,000 (fully circulated)
          </p>
          <p class="text-gray-600 mb-4">
            - 97%: Add 1 BNB to the liquidity pool.
          </p>
          <p class="text-gray-600 mb-4">
            - 1%: Airdrop to Graduck snapshot addresses.
          </p>
          <p class="text-gray-600 mb-4">
            - 2%: Airdrop to hundreds of thousands of active addresses on the
            BSC chain.
          </p>
          <p class="text-gray-600">- LP all has been burned.</p>
        </div>
        <div class="bg-white p-6 rounded-xl shadow-lg">
          <h3 class="text-xl font-bold mb-2">Innovative play</h3>
          <p class="text-gray-600 mb-4">- Buy/Sell: 2% transaction slippage.</p>
          <p class="text-gray-600 mb-4">- 1%: to marketing treasury.</p>
          <p class="text-gray-600 mb-4">- 1%: for token holder dividends.</p>
          <p class="text-gray-600 mb-4">
            - Smart profit-sharing mechanism. Records gold standard. Loss on
            selling is normal 2% slippage.
          </p>
          <p class="text-gray-600 mb-4">
            - Profit triggers 10% deduction to reward fund for token holder
            dividends.
          </p>
        </div>
        <div class="bg-white p-6 rounded-xl shadow-lg">
          <h3 class="text-xl font-bold mb-2">Grand plan</h3>
          <p class="text-gray-600 mb-4">
            - Build quality BabyDuck ip, fill the void for the Meme King of the
            bsc.
          </p>
          <p class="text-gray-600 mb-4">
            - Major exchange listings: Launch $BabyDuck on OKX, KuCoin, and
            other centralized exchanges (CEXs).
          </p>
          <p class="text-gray-600 mb-4">
            - Token Staking: Launch of staking platform, allowing users to earn
            rewards by staking $BabyDuck.
          </p>
          <p class="text-gray-600 mb-4">- Ongoing buyback and destruction.</p>
          <p class="text-gray-600 mb-4">
            - Develop Duck Battle Royale game on Telegram.
          </p>
        </div>
      </div>
    </section>

    <!-- Community Section -->
    <section class="max-w-6xl mx-auto py-16 px-4">
      <div class="text-center mb-12">
        <h1 class="text-5xl font-bold text-gray-800">
          More are planned, Please wait patiently...
        </h1>
        <h1 class="text-5xl font-bold text-gray-800">
          We won't let you down!
        </h1>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-800 text-white py-8">
      <div class="max-w-6xl mx-auto px-4">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <div class="mb-4 md:mb-0">
            <img
              src="@/assets/duck-logo.svg"
              alt="Baby Duck Logo"
              class="w-10 h-10 inline-block"
            />
            <span class="ml-2 text-xl font-bold">Baby Duck</span>
          </div>
          <div class="text-sm text-gray-400">
            © 2024 Baby Duck Community. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      // Add reactive data here if needed
    };
  },
};
</script>