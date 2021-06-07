module.exports = {
  purge: ['./components/**/*.js', './pages/**/*.js'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter'],
      },
    },
  },
  variants: {},
  plugins: [require('@tailwindcss/forms')],
};
