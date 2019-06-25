const { performance } = require('perf_hooks')
const fs = require('fs')
const juice = require('juice')
const path = require('path')
const ProgressBar = require('progress')

const html = fs.readFileSync(path.resolve(__dirname, './index.html')).toString()

const iterations = 100
const bar = new ProgressBar('Benchmarking [:bar] :percent :etas', { total: iterations })
let renderTime = 0

for (let i = 0; i < iterations; i += 1) {
  const before = performance.now()
  juice(html)
  const after = performance.now()

  renderTime += after - before
  bar.tick()
}

renderTime /= iterations

console.log(`Average render time: ${Math.floor(renderTime)}ms`)
