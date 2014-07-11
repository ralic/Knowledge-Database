[![Stories in Ready](https://badge.waffle.io/huei90/neo4jquery.png?label=ready&title=Ready)](https://waffle.io/huei90/neo4jquery)
#neo4jquery

For the user:
> The main purpose of creating neo4jquery.js is available developer uses jquery ajax method through REST with CYPHER in the easiet way to implement neo4j graph database

For the developer: 
> Who don't use node.js, only jquery.js <br/>
> If you love using with node.js, you can check the alternatives in github <br/>
> Alternatives - neo4js

For the contributor:
> Thanks for your help, i need a better coding style and many useful functions in neo4jquery plugin
> Here's the contributor list:
> HueiTan 
> (waiting for your support)
> 
> If anyone interest on it or any suggestion, feel free to  contact me by mail:huei90@gmail.com
> If you need other useful functions, also please contact me and i will work for it ASAP

#Documentation

    Before using neo4jquery awesome functions, please remember to include jquery.js and neo4jquery.js 
    Initialization by using $().neo4jquery() in your header <script>awesome script</script>
    
###$().neo4jquery([options]) 
```javascript
//simply initialization (or constructor)
$().neo4jquery();
//using port 8181 as neo4j database port
$().neo4jquery({host : "http://localhost:8181/db/data"});
```
[options]<br/>
host - setting your neo4j database host , default in http://localhost:7474/db/data
      
###$([selector]).cypher(query[,options])
```javascript
//use Cypher Query Language
$().cypher("start n = node(*) return n;");
//output the result in DOM selector id 'output' in 'txt' data type
$("#output").cypher("start n = node(*) return n;", { dataType : "txt" });
```
[selector]<br/>
DOM - leave it blank without return value after calling cypher

query - your Cypher Query Language here<br/>

[options]<br/>
dataType - setting return datatype (xml, json, script, text, html) with default json

###$().createNode([options])
```javascript
//create a node w/o properties
$().createNode();
//create a node with properties name:"HueiTan" and index "contributor"
$().createNode( { properties : { "name" : "HueiTan" }, index : "contributor" } );
```
[options]<br/>
properties - set the properties of a new node<br/>
index - set the node index<br/>
index_key - set the index key<br/>
index_value - set the index value<br/>
