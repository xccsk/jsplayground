//Event Loop

/*
its part of the async programming

For example if you have a asycronos function ist must a call an forget event, that means it calls the function and continues executing the code after the call stack is empty it checks for a result/ callback function and if thats the case the code will get back to the async function and start to ecexute that/ thats couse javascript is singel threted
*/

//Chat GBT

/*
In JavaScript, an event loop is a mechanism that allows the execution of multiple tasks or events in a single thread, ensuring that each task is executed in a timely and efficient manner without blocking the execution of other tasks.

The event loop works by continuously monitoring the execution stack for any pending tasks. When a task is completed, it is removed from the stack, and the event loop checks if there are any pending tasks in the queue. If there are any tasks, the event loop takes the next task and pushes it onto the execution stack.

Tasks that are typically queued in the event loop include user interactions such as mouse clicks, keypresses, and other events, as well as network requests, timers, and other asynchronous operations.

When a task is added to the event loop, it is assigned a priority level based on the type of task and its importance. Higher priority tasks are executed before lower priority tasks.

The event loop also handles error events by catching any errors that occur during the execution of a task and handling them appropriately.

In summary, the event loop is a key part of JavaScript's single-threaded model, ensuring that the execution of multiple tasks and events is managed in an efficient and non-blocking manner.
*/