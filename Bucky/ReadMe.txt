This project demonstrate the [Shared module]

Whenever you use modules in nodeJS the default behavior is to share the module (Here should be the movies.js) among
every other file that imports it. Now what that means is - Emily she is actually changing the object (the object in
movies.js) directly and then Bucky gets the same changes as well.

So Emily and Bucky don't each get a copy of the module. You're actually all referencing the exactly same module.

It is obviously the functionality that we want. We imagine this is a chat room and Emily & Bucky are the users in the
chat room. The Movies.js would be the chat log. They can check the same chat log at the same time, which is much better
for performance and memory, because instead of every single different user making a copy, they all just reference the
same one.