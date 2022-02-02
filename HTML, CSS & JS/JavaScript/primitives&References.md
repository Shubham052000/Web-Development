# Primitives and Reference Types  
  


## Primitives 
 --- 

`const number = 1;`  
`const num = number;`  
`console.log(num);` 
      
will output 1

What Primitive types mean is the num will copy the value of the first variable `number`  
**Numbers, Strings and Booleans** are Primitve types
    

---
## Reference
---
`const person = {  
    name: 'Shubham'  
};`  
`const secondPerson = person`  
`console.log(secondPerson.name)`  

will output Shubham  
But, 

`const person = {  
    name: 'Shubham'  
};`  
`const secondPerson = person`  
`person.name = 'Yashasvi'`  
`console.log(secondPerson.name)`  

will output Yashasvi even though we have changed the value of `person` object and not of `secondPerson`  
This behavior is because `secondPerson` just copied the pointer and pointed to the same location as to where the value of `person.name` is
  
will be same for **Arrays and Objects**  
To really copy an array or an Object we need to use the `...` (spread operator)