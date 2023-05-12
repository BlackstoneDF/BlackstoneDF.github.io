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

## Events
Events have special syntax that allow you to define them.
Example:
```
event player.join {
  // code here...
}
```
Lines of code in event blocks are seperated by semicolons (`;`). The specifier for what event (join, leave, etc) has similar rules to the actions.