# Mongoose TypeScript Repository Pattern with vscode debug feature 
This project is based on the [ErickWendel NodeJSWithTypescript](https://github.com/ErickWendel/NodeJSWithTypescript)   
For learning typescript, this project describes the application, at  Spartans and Heroes as users of system. The Spartans describes amount of death peoples and Heroes amount of saved peoples. 


#### Patterns and Principles in this project:
- Generic Repository Pattern
- Singleton Pattern
- Multi-layer Architecture Pattern

#### Addtional feature:
- Fast compile and reload
- Debug typescript option using vscode

#### Tools:
- NodeJS
- TypeScript
- ExpressJS
- MongoDB
- Mongoose
- GulpJS
- VSCode Task Runners

#### Convention Refs:  
   [Coding guidelines Typescript - Microsoft](https://github.com/Microsoft/TypeScript/wiki/Coding-guidelines) 

#### How to use?
Run:  
> npm install 
    
if not executing from VSCode:  
> gulp 

## REST API Definitions:

### CREATE   
``` 
  > METHOD: POST    
  > PARAMS: {"name":"Leonidas King","amountPeopleKilled":120,"folk":"agoge"}  
  > URL: http://localhost:5000/spartans    
  > RETURN: success or error    


  > METHOD: POST 
  > PARAMS: {"name":"Goku God","power":"sayan","amountPeopleSaved":2000 } 
  > URL: http://localhost:5000/heroes 
  > RETURN: success or error 
```
      

### RETRIEVE  
``` 
  > METHOD: GET 
  > URL: http://localhost:5000/heroes/ 
  > RETURN: [{"name":"Goku God","power":"sayan","amountPeopleSaved":2000 


  > METHOD: GET 
  > URL: http://localhost:5000/spartans/ 
  > RETURN: [{"name":"Leonidas King","amountPeopleKilled":120,"folk":"agoge"}] 
  
```

### GET ONE   
```
  > METHOD: GET 
  > URL: http://localhost:5000/heroes/56800b6b01c67c194e603e23 
  > RETURN: {"name":"Goku God","power":"sayan","amountPeopleSaved":2000 } 
  > OBSERVATIONS: for this request, use item id in url (56800b6b01c67c194e603e23) `


  > METHOD: GET 
  > URL: http://localhost:5000/spartans/568564361cc5056325f52c3c 
  > RETURN: {"name":"Leonidas King","amountPeopleKilled":120,"folk":"agoge"} 
  > OBSERVATIONS: for this request, use item id in url (568564361cc5056325f52c3c) `

```  

### UPDATE
```   
   > METHOD: PUT 
   > PARAMS: {"name":"UPDATED","power":"sayan","amountPeopleSaved":200 } 
   > URL: http://localhost:5000/heroes/56800afbf34739a94da174f0 
   > RETURN: success or error 
   > OBSERVATIONS: for this request, use item id in url (56800afbf34739a94da174f0) `
  
  
   > METHOD: PUT 
   > PARAMS: {"name":"UPDATED","amountPeopleKilled":2,"folk":"agoge" } 
   > URL: http://localhost:5000/heroes/56800afbf34739a94da174f0 
   > RETURN: success or error 
   > OBSERVATIONS: for this request, use item id in url (56800afbf34739a94da174f0) `
  
```

### DELETE  
```
   > METHOD: DELETE 
   > URL: http://localhost:5000/heroes/56800afbf34739a94da174f0 
   > RETURN: success or error 
  
   > METHOD: DELETE 
   > URL: http://localhost:5000/spartans/568564361cc5056325f52c3c 
   > RETURN: success or error 
   > OBSERVATIONS: for this request, use item id in url (568564361cc5056325f52c3c) `
   
```  
