/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {       
            "primary": "#0FCFEC",                   
            "secondary": "#19D3AE",                   
            "accent": "#37CDBE",                   
            "neutral": "#3A4256",                   
            "base-100": "#FFFFFF",                   
            "info": "#3ABFF8",                   
            "success": "#36D399",                   
            "warning": "#FBBD23",                   
            "error": "#F87272",
        },
      },
    ],
  },

  plugins: [require("daisyui")],

}