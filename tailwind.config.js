export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],

  theme: {
    extend: {
      keyframes: {
        wiggle: {
          "0%": {
            borderRadius:
              "60% 40% 30% 70% / 60% 30% 70% 40%",
          },

          "50%": {
            borderRadius:
              "30% 60% 70% 40% / 50% 60% 30% 60%",
          },

          "100%": {
            borderRadius:
              "60% 40% 30% 70% / 60% 30% 70% 40%",
          },
        },
      },

      animation: {
        wiggle: "wiggle 8s ease-in-out infinite",
      },
    },
  },

  plugins: [],
};