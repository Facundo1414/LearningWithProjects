/* Make a program that filters a list of strings and returns a list with only your friends name in it.

If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"] */

function friend(friends){
    let trueFriends = []
    friends.forEach(element => {
        if (element.length == 4) {
            trueFriends.push(element);
        }
    });
    return trueFriends;
}

console.log(friend(["Ryan", "Kieran", "Jason", "Yous"]));

function friendv2(friends){
    return friends.filter(name => name.length === 4)
  }

  console.log(friendv2(["Ryan", "Kieran", "Jason", "Yous"]));