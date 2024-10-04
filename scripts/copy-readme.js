const fs = require("fs");

fs.createReadStream("../../README.md").pipe(fs.createWriteStream("../ui/README.md"));
