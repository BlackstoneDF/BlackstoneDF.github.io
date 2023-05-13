# Diamond Fire
Now we will recreate the DiamondFire tutorial in Blackstone. In their tutorial, they give you a diamond that launches a fireball. Let's recreate this behavior. Here's the code skeleton if you want to skip ahead:
```
event player.join {
    player.giveItems(item(diamond));
}

event player.rightClick {
    player.launchProj(item(fire_charge));
}
```
Let's break this code down into it's individual components.
```
event player.join {
    player.giveItems(item(diamond));
}
```
This is similar to our first example. When the player joins, give them a diamond. However, notice the `item(...)` syntax. This syntax represents creating a vanilla item. 
You can also use `items(...)` syntax - it accepts two fields, an item ID and the amount of items you want to give. Both of those assume the item(s) has no special NBT except what it comes with in vanilla.
```
event player.rightClick {
    player.launchProj(item(fire_charge));
}
```
On this one, we tell the compiler we want to register an event that activates when a player right clicks. When that event occurs, have the player launch a fireball. You can tell as it's in a `launchProj` action and the item is a `fire_charge` representing a fireball ingame.

As you can see, Blackstone is quite similar to DF coding. But don't let this fool you. Blackstone has a lot of extra features that DF doesn't have. But we'll go over those later.