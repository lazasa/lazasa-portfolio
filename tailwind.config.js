/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: '#F5F5DC',      // Beige background color
        violet: '#723185',       // Main brand color (purple)
        secondary: '#E8E5D5',    // Light beige variant
        text: '#2C1810',         // Main text color (dark brown)
        subText: '#2C1810CC',    // Subtitle text with opacity
        paragraphText: '#4A3427', // Paragraph text (medium brown)
        hover: '#EAE7DD',        // Hover state background
        border: '#2C181022',     // Border color with opacity
        pseudos: '#2C1810',      // Color for pseudo elements
        react: '#61dbfb'         // React blue (if needed)
      },
      backgroundColor: {
        gradient: 'bg-gradient-to-b from-[#723185] to-[#4C2882]'
      },
      boxShadow: {
        custom: '0px 1px 8px 0px #2c181080'
      },
      fontFamily: {
        'sans': ['Atkinson', 'system-ui', 'sans-serif'],
        'atkinson': ['Atkinson', 'system-ui', 'sans-serif'],
      },
    }
  },
  plugins: []
};