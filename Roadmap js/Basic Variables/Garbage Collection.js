//Garbage Collection

/*
Garbage collection (GC) in JavaScript is the process of automatically managing memory by identifying and deallocating memory that is no longer needed or in use by the program. This helps prevent memory leaks and ensures that the application runs efficiently without consuming more memory than necessary.

In JavaScript, memory is managed by the JavaScript engine, which runs in the browser or other environments like Node.js. The engine allocates memory when objects are created and deallocates (reclaims) memory when they are no longer needed.

Garbage collection works mainly based on the concept of "reachability." An object is considered "reachable" if there's a way to access it through a chain of references, starting from the global object (e.g., window in a browser). Objects that are not reachable are considered "garbage" and are eligible for memory deallocation.

Here's a simplified overview of how garbage collection works in JavaScript:

Marking phase: The garbage collector traverses the object graph, starting from the root objects (e.g., global object, objects in the call stack), and marks all objects that are reachable as "alive."
Sweeping phase: The garbage collector deallocates memory for all objects that are not marked as "alive." These objects are considered "garbage" since they are no longer reachable and thus not in use by the program.
Compacting phase (optional): The garbage collector may rearrange the remaining "alive" objects in memory to minimize fragmentation and optimize memory usage.
Garbage collection in JavaScript is generally non-deterministic, which means you cannot predict exactly when it will occur. The JavaScript engine decides when to perform garbage collection based on factors like memory pressure and CPU usage.

As a JavaScript developer, you usually don't have to worry about memory management, as the engine handles it for you. However, it's essential to understand the concept of garbage collection to avoid creating memory leaks, especially in large applications or long-running processes like server-side applications using Node.js.
*/