# Olive Test

This is a repository to test out the Olive Server and it's speed with an example of an actual use-case.

## Requirements

You need to have the Olive Server repository as a sibling folder to this repository.
```
olive/
    ...
olive-test/
    ...
    this readme.md
```

Check out the package.json to change the path.

## Running tests

I'm using the same test that fastify uses to benchmark their own.
```
autocannon -c 100 -d 40 -p 10 localhost:8000
```

The results (ran 3/22/21) are:

|Library|Req/sec|Latency (avg)|Bytes/sec|
|---|---|---|---|
|Olive|44524.8|2.18 ms|6.63 MB|
|Fastify|44076.8|2.2 ms|7.23 MB|
|Express|20167.2|4.87 ms|4.62 MB|

Running on Windows 10, Intel i7-4790 CPU, 16GB Memory, 1TB SSD

Fastify and Express examples were using the base functionality: setting up a basic server and outputting `{"hello":"world"}` to `GET: /`.