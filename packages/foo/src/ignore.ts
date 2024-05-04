// does not warn in CLI but warns in the editor
import { Foo } from "./types";

const arr: Foo[] = ["foo"];

// does not warn in CLI but warns in the editor
arr.forEach((item) => console.log(item));
