//Fetch

fetch("https://randomuser.me/api/?results=10", {});

//first property is a url and the second is an object

//fetch always returns a promise that means you can use async await or then and catch

fetch("https://randomuser.me/api/?results=10", { method: "GET" })
  .then((res) => {
    console.log(res.json());
    if (!res.ok) {
      throw new Error("Something went wrong");
    }
  })
  .catch((err) => {
    console.log(err);
  });

//object passed to fetch 

{
    method:"POST" //wich method of request to the backend (POST,PUT,GET,DELETE)
    headers:{ //you need to set a header
        'Content-Type':'application/json' 
    }
    body:JSON.stringify({ //always when posting or putting use JSON.stingyfy or the api is not gonna work
        name:"walter white"
    })
}

//Chat GBT

/*
fetch() is a method in JavaScript that allows you to send an HTTP request to a server and receive a response. It is part of the Web API and is available in most modern web browsers.

fetch() returns a Promise that resolves to the Response object representing the response to the request. You can use various methods on the Response object to extract data from the response, such as json(), text(), blob(), and arrayBuffer().
*/

//Here's an example of how to use fetch() to retrieve JSON data from a server:

fetch('https://example.com/data.json')
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error(error);
  });

  /*
In this example, fetch() sends a GET request to the URL 'https://example.com/data.json'. The then() method is used to handle the response, where response.json() returns a Promise that resolves to the JSON data from the response. Finally, the data is logged to the console.

You can also use fetch() to send data to a server using methods such as POST, PUT, and DELETE. You can pass an optional configuration object as the second argument to fetch(), where you can set options such as the method, headers, and body of the request.
  */

fetch('https://example.com/api/user', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    name: 'John Doe',
    email: 'john.doe@example.com'
  })
})
.then(response => response.json())
.then(data => {
  console.log(data);
})
.catch(error => {
  console.error(error);
});

/*
In this example, fetch() sends a POST request to the URL 'https://example.com/api/user' with a JSON payload in the request body. The Content-Type header is set to application/json to indicate the content type of the request. The response is then handled in the same way as the previous example.
*/