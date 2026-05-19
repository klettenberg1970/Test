
import {handleTodo} from "./handleTodo.js"
import { todoFormular } from "./formularTodo.js";

const main = async () => {
await handleTodo();
await todoFormular();
}
 

main();