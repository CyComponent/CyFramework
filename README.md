# CyFramework
The CyFramework orchestrates CyStores and CyComponents. 
A new instance of the CyFramework is created by supplying CyStores and CyFrameworks that want the CyFramework
to manage their data models:

```html
  #The CyFramework is managing the data models for NDExStore and NDExValet.
  var cyto = CyFramework([NDExStore, NDExValet])
```

You can optionally provide default values for the data model, or load the state of a previous Framework instance
using a second arguement.

```html
  #Override a piece of the state. This object provided in the second parameter will be merged
  with the default state tree:
  var cyto = CyFramework([NDExStore], {
  ndex: {
    lucene: {
      searching: true
    }
  }
  
  #If a previous Frameworks state was saved using var previousState = cyto.getState(), it can be reloaded
  into the framework like so:
  var cyto = CyFramework([NDExStore], previousState)
```
