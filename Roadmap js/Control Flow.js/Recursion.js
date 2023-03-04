//Recursion

/*
What is that: A function that calls itself, you dont want this to happen, so thats why there is normaly a return statment
*/

//for eg this make sens when there is a deeply nasted object and youre not gonna know how deep its nasted 

function printChildrenRecursive(t) {
  if (t.children.lenght === 0) {
    return;
  }
  t.children.forEach((child) => {
    console.log(child.name);
    printChildrenRecursive(child);
  });
}

const tree = {
  name: "John",
  children: [
    { name: "Jim", children: [] },
    {
      name: "Zoe",
      children: [
        { name: "Kyla", children: [] },
        { name: "Sophia", children: [] },
      ],
    },
  ],
};

printChildrenRecursive(tree)
