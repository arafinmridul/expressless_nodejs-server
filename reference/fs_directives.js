const fs = require("fs");
const path = require("path");

// Create folder
fs.mkdir(path.join(__dirname, "/test"), {}, (err) => {
  if (err) throw err;
  console.log("Folder created...");
});

// Create and Write to file
fs.writeFile(
  path.join(__dirname, "/test", "hello.txt"),
  "What's good?",
  (err) => {
    if (err) throw err;
    console.log("File written to...");

    // File append
    fs.appendFile(
      path.join(__dirname, "/test", "hello.txt"),
      " I'm doing well.",
      (err) => {
        if (err) throw err;
        console.log("File written to...");
      }
    );
  }
);

// Read File
fs.readFile(path.join(__dirname, "/test", "hello.txt"), "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});

// Rename File
fs.rename(
  path.join(__dirname, "/test", "hello.txt"),
  path.join(__dirname, "/test", "heyHey.txt"),
  (err) => {
    if (err) throw err;
    console.log("File renamed...");
  }
);

// Delete File
fs.unlink(path.join(__dirname, "/test", "heyHey.txt"), (err) => {
  if (err) throw err;
  console.log("File deleted...");
});

// Delete Folder
fs.rmdir(path.join(__dirname, "/test"), (err) => {
  if (err) throw err;
  console.log("Folder deleted...");
});

// Write the Following Users Name in a File and Then Display Them in the Console
const users = [
  { name: "Cruijff" },
  { name: "Casillas" },
  { name: "Torres" },
  { name: "Zidane" },
];

// create folder
fs.mkdir(path.join(__dirname, "/data"), {}, (err) => {
  if (err) throw err;

  console.log("Folder created ...");

  // create file and write json data
  fs.writeFile(
    path.join(__dirname, "/data", "name.json"),
    JSON.stringify(users),
    (err) => {
      if (err) throw err;

      console.log("File created and data written ...");

      //read file
      fs.readFile(
        path.join(__dirname, "/data", "name.json"),
        "utf8",
        (err, users) => {
          if (err) throw err;

          // display user name
          JSON.parse(users).forEach((user) => {
            console.log(user.name);
          });

          // display successful message
          console.log("Users name displayed ...");

          // rename the file
          fs.rename(
            path.join(__dirname, "/data", "name.json"),
            path.join(__dirname, "/data", "users.json"),
            (err) => {
              if (err) throw err;

              // display successful message
              console.log("File rename completed ...");
            }
          );
        }
      );
    }
  );
});
