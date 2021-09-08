let friends = ['Kj', 'Will', 'Davion', 'Cartier', 'Jamal'];

for (f = 0; f < friends.length; f++) {
    let friend = friends[f]; {
        console.log(friends[f] + ":")
        for (s = 99; s > 0; s--) {
            let minusOne = s - 1;
            if (s > 1) {
                console.log(s + " lines of code in the file, " + s + " lines of code; " + friend + " strikes one out, clears it all out, " + minusOne + " lines of code in the file");
            } else {
                console.log("1 line of code in the file, 1 line of code; " + friend + " strikes one out, clears it all out, no more lines of code in the file");
            }
        }
    }
}