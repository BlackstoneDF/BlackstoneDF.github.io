## Actions
Actions are called like functions.
Example:
```
// Calling a player action.
player.sendMessage("Hello!");
```

Actions do not have to be exact maps to DF actions. Here are some rule of thumbs to making sure your action is valid:
- It should be similar to a DF action on the sign.
- The first letter does not have to be uppercase. It can be lowercase to fit with camelCase in Blackstone.
- There are some aliases available! (e.g `sendMessageSequence` => `SendMessageSeq` on the sign)

A list of valid aliases:
- `sendMessageSequence` => `SendMessageSeq`


If your action is not present, the compiler will warn you **(Unimplemented)** stating that the action is not valid.
## Events
Events have special syntax that allow you to define them.
Example:
```
event player.join {
  // code here...
}
```
Lines of code in event blocks are seperated by semicolons (`;`). The specifier for what event (join, leave, etc) has the same rules as the actions.

## Functions
Functions are defined using the `func` keyword.
Example:
```
func myFunction() {

}
```
In DF, this will translate to a new line of code with a function. It is a good rule of thumb to keep one function per file, with some exceptions.

You can also specify arguments in functions.
```
func myFunction(arg1: text) {
  // ...
}
```
This will require the user to pass in a text into the function. Not doing so, or passing in the incorrect arguments, will result in a warning **(Unimplemented)**.

## Processes
Similar to functions, processes are defined with the `proc` keyword.
Example:
```
proc myProcess() {

}
``
This will translate to a new line of code with a process.

