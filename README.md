# ꙮꙮꙮ  Node Webstreams Demo ꙮꙮꙮ

This is a silly little demo I've made to show how Node.JS webstreams work, and why you might chose to use them over more traditional ways of fetching and processing data.

It was made for [DDD Perth 2024](https://dddperth.com/).


In this example, we are trying to parse an absurdly large text file. We are searching for the presence of my favourite unicode character - the multiocular O (ꙮ). Prior to being included in Unicode, it had appeared exactly ONCE in all written history - in a 15th century slavic text. It's a very special character - that's why we're looking for it!

# ꙮꙮꙮ


## Components

### File Generator
This creates an absurdly large .csv file. You will need to run this before doing the demo - via the following command:

`pnpm run generate`

### Server
A very uninteresting server. You will need to start it with:

`pnpm run server`

### Bad Client
An example of why a more naive approach (parsing the entire file into memory as a string) may not always work. You can try this approach via:

`pnpm run bad-client`


### Good client
An example of how you can succeed using web streams! It can be run with:

`pnpm run client`
