# Overview
This is an overview of how to represent each bloick in Blackstone.

## Events
### Player Event
```blst
PlayerEvent(Join) {
    // ...
}
```
### Entity Event
```blst
EntityEvent(EntityDmg) {
    // ...
}
```
## Actions
### Player Action
```blst
player.SendMessage("Hello world!");
```

### Game Action
```blst
player.SetBlock(loc(25,50,25), item(gold_block));
```

## Ifs
### If Player
```blst
if player.IsGrounded() {
    // ...
};
```

### If Variable
```
if var x = 10 {
    // ...
};
```


## Functions
```blst
func MyFunction() {
    // ...
}

PlayerEvent(Join) {
    func MyFunction();
}
```

## Processes
```blst
proc MyProcess() {
    // ...
}

PlayerEvent(Join) {
    proc MyProcess();
}
```

