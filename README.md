### REFACTORING PROCESS EXPLANATION
Hi :). Thanks again for your time to review my refactoring. I just want to explain my thinking process. When I first looked at the code, I saw there are Operations that have common functionality so here where Polymorphism comes handy. 
I thought I could create a base Operation class that have "calculate", "toString" methods and then there will 4 subclasses for each operation (Sum, Subtruct, Multiply, Divide) that extends this class's behaviours and make their calculation, toString conversion on their own.
After making those, I have to make use of them. Inside Node function, there are 2 switch expressions that checking the same stuff so I thought we need a factory code here to decide operation. That way we got rid of the duplicate codes checking the operation,
and we could call the calculate, tostring method of the operation and get the result of it and return. 

This is my refactoring solution that first comes to my mind.

To run the solution, make sure you have node installed then run inside the folder
```
$ node tree.js
```




