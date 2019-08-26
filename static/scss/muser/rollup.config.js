import scss from 'rollup-plugin-scss'
 
export default {
  input: 'entry.js',
  output: {
    file: 'bundle.js',
    format: 'cjs',
  },
  plugins: [
    scss({ sourceMap: true }),
  ]
}