import less from 'rollup-plugin-less'
 
export default {
  input: 'entry.js',
  output: {
    file: 'bundle.js',
    format: 'cjs',
  },
  plugins: [
    less({ sourceMap: true }),
  ]
}