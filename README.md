# CyFramework
The CyFramework orchestrates CyStores and CyComponents. 

##Static Methods
### config(Stores, DefaultState)
A new instance of the CyFramework is created by supplying CyStores and CyFrameworks that want the CyFramework
to manage their data models:

```javascript
  #The CyFramework is managing the data models for NDExStore and NDExValet.
  var cyto = CyFramework.config([NDExStore, NDExValet])
```

Override a piece of the state. This object provided in the second parameter will be merged
with the default state tree:

```javascript
  
  var cyto = CyFramework.config([NDExStore], {
  ndex: {
    lucene: {
      searching: true
    }
  }
```
  
  #If a previous Frameworks state was saved using var previousState = cyto.getState(), it can be reloaded
  into the framework like so:
  
```javascript
  var cyto = CyFramework([NDExStore], previousState)
```
##Instance Methods
###render(component, node, parameters, children)
