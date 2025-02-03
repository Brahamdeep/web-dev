import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([
    {
      message: "Enter a URL",
      name: "url", // This will store the user's input in `answers.url`
    },
  ])
  .then((answers) => {
    const url = answers.url; // Get the entered URL
    const qr_svg = qr.image(url); // Generate a QR code for the entered URL

    // Save the QR code image as a file
    qr_svg.pipe(fs.createWriteStream("qr_image.png"));

    // Save the URL to a text file
    fs.writeFile("url.txt", url, (err) => {
      if (err) {
        console.error("Error saving the URL:", err);
      } else {
        console.log("URL and QR code saved successfully!");
      }
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.error("Prompt couldn't be rendered in the current environment.");
    } else {
      console.error("Something went wrong:", error);
    }
  });
