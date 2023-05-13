Currently, there are 3 primary selectors you will call methods from on Blackstone.
These selectors currently work for:
- if statements
- actions
- events

## Player
This selector encompasses players. 

Example:
```
event player.join {
  player.sendMessage("Hello!");
}
```

## Entity
This selector encompasses mobs and entitities.

Example:
```
event entity.entityDmg {
  plot.cancelEvent();
}
```

## Plot
This selector - seen in the example above - handles game actions & if game statements.
Example:
```
event player.onJoin {
  plot.setBlock(loc(10, 100, 10), item(stone))
}
```

## Selection
**Warning: This feature is not implemented yet!**
This allows you to use the current selection. You will have to specify what action you're doing, though.
Example:
```
event player.onJoin {
  local name = "%default";
  select new::nil()
    ->allPlayers::nil() {
    selection.sendMessage("%var(name) has joined!");
  }
}
```
Using the `selection` selector outside of a select block will throw a compile error.
Notice the `nil` in the select operators. In the first example, the `New` and `AllPlayers` are the primary actions, while the `nil`s are sub-actions. For example:
```
// ...
select while::isGrounded()
// ...
```
will translate to a repeat block that runs while an entity is grounded.
## Custom Selectors
**Warning: This feature is not implemented yet!**

You can define your own selectors using the `type` keyword.
Example:
```
type victim as event.victim;
```
After the `as`, you can specify one of these:
- `event.default` The default in the event.
- `event.victim` The victim in damage events.
- `event.killer` The killer in death events.
- `event.damager` The damager in damage events.
- `event.entity` Get the primary entity in the event.
- `event.projectile` Get the projectile in the event.
- `event.shooter` Get the shooter in the event.

Note you have to use the `type` keyword to define these.
```
✅ type victim as event.victim; victim.sendMessage("rip");
❌ event.victim.sendMessage("rip");
```