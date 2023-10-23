import { getImages } from "icloud-shared-album";
import fs from "fs";
import axios from "axios";
import albumData from "../src/data/albumsData.js";
import { Spinner } from "cli-spinner";

// Set base path for album storage
const basePath = "./public/assets/albums";

// Create an object to store image data for the album
const imagesData = [];

// Function to download an individual album
async function downloadAlbum(album) {
  // Extract the token from the album URL
  const urlParts = album.url.split("#");
  const token = urlParts[urlParts.length - 1];

  // Format album name and create a path for the album
  const albumName = album.name.toLowerCase().replace(/\s+/g, "-");
  const albumPath = `${basePath}/${albumName}`;

  // Create an array to store the images paths of the album
  imagesData.push({album:albumName, images:[]});

  try {
    // Retrieve album images using the token
    const data = await getImages(token);

    // Create album directory if it doesn't exist
    fs.mkdirSync(albumPath, { recursive: true });

    // Create a counter for the number of photos downloaded on each album
    let downloadedPhotos = 0;

    // Initialize the spinner
    const spinner = new Spinner(
      `📥 Downloading photos for album "${albumName}"... %s`
    );
    spinner.setSpinnerString("|/-\\");
    spinner.start();

    // Download each photo in the album
    for (const [index, photo] of data.photos.entries()) {
      // Get the URL of the photo in the preferred size
      const size = Object.keys(photo.derivatives)[1];
      const image = photo.derivatives[size];
      const url = image.url;

      // Create a filename for the photo
      const imageName = `${albumName}_${index+1}`;

      // Create a filename for the photo
      const imagePath = `${albumPath}/${imageName}.jpg`;

      // Download the photo and save it to the album directory
      try {
        const response = await axios.get(url, { responseType: "stream" });
        const file = fs.createWriteStream(imagePath);
        response.data.pipe(file);

        // Store path of image in the array value from the object key of the album
        imagesData[imagesData.length-1].images.push(imagePath)

        // Log successful photo download
        file.on("finish", function () {
          downloadedPhotos++;

          if (downloadedPhotos === data.photos.length) {
            spinner.stop(); // Stop the spinner first
            process.stdout.clearLine(); // Clear the spinner character
            process.stdout.cursorTo(0); // Move the cursor to the beginning of the line
            // Log message when all photos of album are downloaded
            console.log(
              `✅ Album "${albumName}" downloaded successfully with ${downloadedPhotos} photos`
            );

            // When all downdloads are done (we are in the last album)
            if (album === albumData[albumData.length - 1]) {
              // Log message when all donwlaoads are completed
              console.log("🎉 All photos downloaded! Your are good to go! 🎉");
              // Write the imagesData object to the file
              fs.writeFile(
                "./src/data/imagesData.js",
                `const imagesData = ${JSON.stringify(
                  imagesData
                )};\nexport default imagesData;`,
                (err) => {
                  if (err) throw err;
                  console.log("📝 imagesData file updated!");
                }
              );
            }
          }
        });

        // Log error during process of writting the photo downloaded to the local file system (if exists)
        file.on("error", function (err) {
          console.error(
            `❌ Error downloading album "${albumName}", photo ${index} (${size}): ${err.message}`
          );
        });
      } catch (err) {
        // Log error related to downloading an individual photo
        console.error(
          `❌ Error downloading album "${albumName}", photo ${index} (${size}): ${err.message}`
        );
      }
    }
  } catch (err) {
    // Log error related to getting images from the iCloud shared album
    console.error(
      `❌ Error getting images for album "${albumName}": ${err.message}`
    );
  }
}

// Function to download all albums in the albumData
async function downloadAllAlbums(albumData) {
  for (let i = 0; i < albumData.length; i++) {
    const album = albumData[i];
    await downloadAlbum(album);
  }
}

// Start the download process for all albums
downloadAllAlbums(albumData);
