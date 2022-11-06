/* split code over many files import code from oder fildes*/
/*Code aus einer Javascript datei muss exportiert werden um diese in einer andern wieder zu importieren */
import mayname from "./vars";
import arrowfunc from "./arrowfunc"

console.log(mayname)

console.log(arrowfunc('an import'))

/*Wenn kein export defaul angegeben ist sondern nur export von conts,func etc. */

import { lenny } from "./arrowfunc";

console.log(lenny)

/*Man kann auch als alias importiern  */