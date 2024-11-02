// window.onload = function () {
//   const album = "1pb9W9H6WXRuXX2YcrXGR8JarNEeCAkT4";
//   const CLIENT_ID =
//     "105438724692-copdd31l459r34o95rqkv39vq8fpm2kc.apps.googleusercontent.com";
//   const API_KEY = "AIzaSyAtATf-o_BXKl-QqMNehnIr53ayJsu1jqA";
//   const DISCOVERY_DOCS = [
//     "https://www.googleapis.com/discovery/v1/apis/drive/v3/rest",
//   ];
//   const SCOPES = "https://www.googleapis.com/auth/drive.readonly";
//   function initClient() {
//     gapi.client.init({
//       apiKey: API_KEY,
//       clientId: CLIENT_ID,
//       discoveryDocs: DISCOVERY_DOCS,
//       scope: SCOPES,
//     });
//   }
//   function handleClientLoad() {
//     gapi.load("client:auth2", initClient);
//   }
//   function handleSubmit() {
//     if (album) {
//       loadPhotosFromFolder(album);
//     } else {
//     }
//   }
//   console.log("aaa");
//   function loadPhotosFromFolder(album) {
//     console.log("aaa");
//     // Function to fetch files and handle pagination
//     const fetchFiles = (pageToken) => {
//       gapi.client.drive.files
//         .list({
//           q: `'${album}' in parents and mimeType contains 'image/' and trashed = false`,
//           fields:
//             "nextPageToken, files(id, name, thumbnailLink, webContentLink, webViewLink)",
//           pageToken: pageToken,
//         })
//         .then((response) => {
//           const files = response.result.files;
//           console.log(files);
//           // If files are found, process them
//           if (files && files.length > 0) {
//             console.log(files);
//           } else {
//           }
//         })
//         .catch((error) => {});
//     };
//     // Start fetching files without a page token
//     fetchFiles();
//   }
//   handleClientLoad();
//   setTimeout(() => {
//     handleSubmit();
//   }, 1000);
// };

$(document).ready(function () {
  console.log("a");
  const audio = document.getElementById("backgroundAudio");

  $(window).on("scroll", function () {
    console.log(audio.muted);
    audio.muted ? (audio.muted = false) : null;
  });
});
