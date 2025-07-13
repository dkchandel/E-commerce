import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // ⚠️ Ye missing tha
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: "/react-ecommerce/", // 🔁 Yeh repo name hona चाहिए (bilkul sahi hai)
  plugins: [
    react(), // ✅ React plugin
    tailwindcss() // ✅ Tailwind plugin
  ],
})


/** @type {import('tailwindcss').Config} */
// export default {
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
//   theme: {
//     extend: {
//       colors:{
//         primary:"#4263eb",
//         secondary:"#63e6be",
//       },
//       container:{
//         center:true,
//         padding:{
//           DEFAULT:"1rem",
//           sm:"3rem",
//         },
//       },
//     },
//   },
//   darkMode:"selector",
//   plugins: [],
// };

