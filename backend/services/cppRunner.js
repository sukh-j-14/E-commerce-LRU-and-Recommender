const { exec } = require("child_process");
const path = require("path");

function getTopKRecommendations(k) {
  return new Promise((resolve, reject) => {
    const exePath = path.join(__dirname, "../cpp/recommend");

    exec(`${exePath} ${k}`, (error, stdout, stderr) => {
      if (error) return reject(error);

      try {
        resolve(JSON.parse(stdout));
      } catch {
        reject("Invalid JSON from C++");
      }
    });
  });
}

module.exports = { getTopKRecommendations };
