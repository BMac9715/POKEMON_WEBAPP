/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  darkMode: 'media',
  theme: {
    extend: {},
  },
  plugins: [
    /*plugin(function({addUtilities, addComponents, addBase, theme}) {
      //Estilo de Utilidades
      const newTypography = {
        '.footer': {
          fontFamily: 'Poppins',
          fontWeight: '600',
          fontSize: '16px',
          color: '#868686'
        }
      }

      addUtilities(newTypography)
    })*/
  ],
}
