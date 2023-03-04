//Async and Defer 

//optimizing page loading speed when there are more and more features

<script src="whatever.js"/>

/*When parsing html it reads the file from top to bottom, but if there is a script tag at the top the parser stops and awaits the code thats why you set them on the bottom of your file */

// Async tag in the JS source

<script async src="whatver.js" />

/*when there is a async attribute in the source file the file will be donloaded while the html is parsed and ecexuted as soon as the complete js file is loaded no matter where the html parser is */

//defer tag 

<script defer src="whatever.js"></script>

/*as soon as it hits the js soruce like its starts the js file download in the backround while the html is parsing and it waits til this is done before it executes the js file */