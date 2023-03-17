//ES6 Modules

/*
The Main idear behind modules is to import and export code from diffrent files
*/

/*
you only can export default values for 1 time other things need to be exported with "export"

when you use the end result with "module" you can say it t the html doc
*/

<html>

    <script type="module" src="fileThatUsesModule.js"></script>
</html>

//when importing not default things
import {} from "./nondefault"

//when importing default things

import User from "./default"