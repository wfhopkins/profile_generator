const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let survey = {
  name: "name",
  activity: "activity",
  song: "song",
  meal: "meal",
  food: "food",
  sport: "sport",
  superpower: "superpower"
};
rl.question('What do you think of Lighthouse Labs so far? ', (answer) => {
  console.log(`Thank you for your valuable feedback: ${answer}`);

  rl.question('What\'s your name? ', (name) => {
    console.log(`User's Name: ${name}`);

    rl.question('What\'s an activity you enjoy? ', (activity) => {
      console.log(`Favourite Activity: ${activity}`);

      rl.question('What\'s a song you really like? ', (song) => {
        console.log(`Song: ${song}`);

        rl.question('What\'s your favorite meal of the day? ', (meal) => {
          console.log(`Favourite Meal: ${meal}`);

          rl.question('What\'s your favorite kind of food? ', (food) => {
            console.log(`Favourite Food: ${food}`);

            rl.question('What\'s your favorite sport? ', (sport) => {
              console.log(`Favourite Sport: ${sport}`);
              
              rl.question('What would your superpower be if you had one? ', (superpower) => {
                console.log(`Superpower: ${superpower}`);
    
                rl.close();

                console.log(`${name} enjoys ${activity} and one of the favourites songs is ${song}.
Their favourite ${meal} but they always love ${food}. They enjoy ${sport}
 but would rather have ${superpower}`);
              });
            });
          });
        });
      });
    });
  });
});
