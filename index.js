import * as wasm from "tarpc-wasm-example";

let message = wasm.ping();
console.log(message);

let key = wasm.key_gen();
console.log(key);
