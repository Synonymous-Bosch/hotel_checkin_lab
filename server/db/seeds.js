use checkins
db.dropDatabase();

db.checkins.insertMany([

    {name: "Zuhayr",
    email: "zuhayr@zoohair.com",
    status: true},

    {name: "Paul",
    email: "paul@theball.com",
    status: false},
    
    {name: "Steve",
    email: "steven@evens.com",
    status: true}
]);