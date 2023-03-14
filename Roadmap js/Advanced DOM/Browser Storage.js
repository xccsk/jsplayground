//Browser Storage
/*
The Data is stored in the secific browser a user uses so that means the data is not shared across the browser
*/

//Cookies
/*
Capacity: 4kb
Browsers: HTML4/5
Accessible from: Any window
Expiers: Manually set
Storage Location: Brwoser and Server
Sent with request: yes
*/

/*
you only use Cookies when you need to send data to a sever 
*/

//Local Strorage
/*
Capacity: 10mb
Browsers: HTML5
Accessible from: Any window
Expiers: Never
Storage Location: Brwoser only
Sent with request: No
*/

//Session Storage
/*
Capacity: 5mB
Browsers: HTML5
Accessible from: Same Tab
Expiers: On tab close
Storage Location: Brwoser only
Sent with request: No
*/

//Setting local stroage

localStorage.setItem('name','Bob') //you need to set it like a key value pair 

localStorage.getItem('name') //here you can get a 

localStorage.removeItem('name') //removes the item with the key of name 

//sessionStorage

sessionStorage.setItem('name','John') //same commands like 


//Cookies

/*The only way i can interact with cookies is threw the document.cookie object  */
/*
Cookies stores a few importent informations
name=key
vlaue= what you set
domain=wich domain set this cookie
path = on wich path of the domain the cookie was set
Expiring date
*/

document.cookie = "name=Kyle; expires=" + new Date(2025,1,2).toUTCString()

//only way to really acces cookies is 

console.log(document.cookie)