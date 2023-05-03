# juice-benchmarks

Benchmarks for experimenting with Juice, with [hyperfine](https://github.com/sharkdp/hyperfine).

## Usage

This tiny script runs a benchmark against [Juice](https://github.com/Automattic/juice) for testing changes.

```sh
npm install
hyperfine --warmup 5 --runs 100 'node .'
```
