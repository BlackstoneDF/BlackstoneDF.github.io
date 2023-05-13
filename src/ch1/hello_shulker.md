# Hello, Blackstone!
The first thing you will want to do is create a new Blackstone project.
```shell
$ bl init
```
This will initialize a new Blackstone project with some files:
- `Blackstone.toml`
- `/scripts` directory
Blackstone.toml will hold the metadeta of your project, and will look something like this:
```toml
[box]
name = "unnamed"
author = "unnamed"
```
Don't worry too much about the `Blackstone.toml` right now. Go into the `/scripts` directory and create a new file.
```shell
$ cd scripts
$ touch main.bls
```
This will create a new file in the scripts directory named `main.bls`. This is where your code will be placed. Add the following code:
```
event player.join() {
    player.sendMessage("Hello from Blackstone!");
}
```
Next, you will want to compile the code. It will automatically send through Recode.
```shell
$ bl build
```
Wait a moment and it should appear ingame for you to place. And now, you just built your first program in Blackstone! Congratulations!

# Code Explanation
Let's review exactly what is going on in this example.
```
event
```
Right off the bat, we are telling the compiler we want to create an event. We specify that it is a player event with the Join event with
```
event player.join
```
However, what code should go inside of the event? We will use brackets to denote a series of code blocks.
```
event player.join {

}
```
And now, we need to send a message with "Hello, world!" inside. We want to specify that we are doing this action on the player and that we will send a message.
```
player.sendMessage
```
To specify what arguments an action has, you will want to add a Text to the action. We can do this by wrapping our text in quotes (").
```
"Hello world!"
```
Now, let's combine them into one action.
```
player.sendMessage("Hello world!);
```
Notice the semicolon. Semicolons dictate whenever there's a new action. Not using semicolons will result in a syntax error, and the compiler will be unable to parse your code. If your familiar with programming on DF, you will notice that all of the actions (sendMessage, giveItems) are just like DF's actions but in camel case. This is intentional to keep the code familiar and usuable. But after all of this, you now have a working program. Let's do something more advanced.
