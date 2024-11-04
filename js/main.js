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
  const dayCountdown = "11/10/";
  const dateCalendar = "11/10/2024";

  const audio = document.getElementById("backgroundAudio");

  (function () {
    const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;

    //I'm adding this section so I don't have to keep updating this pen every year :-)
    //remove this if you don't need it
    let today = new Date(),
      dd = String(today.getDate()).padStart(2, "0"),
      mm = String(today.getMonth() + 1).padStart(2, "0"),
      yyyy = today.getFullYear(),
      nextYear = yyyy,
      birthday = dayCountdown + yyyy;

    today = mm + "/" + dd + "/" + yyyy;
    if (today > birthday) {
      birthday = dayCountdown + nextYear;
    }
    //end

    const countDown = new Date(birthday).getTime(),
      x = setInterval(function () {
        const now = new Date().getTime(),
          distance = countDown - now;

        (document.getElementById("days").innerText = Math.floor(
          distance / day
        )),
          (document.getElementById("hours").innerText = Math.floor(
            (distance % day) / hour
          )),
          (document.getElementById("minutes").innerText = Math.floor(
            (distance % hour) / minute
          )),
          (document.getElementById("seconds").innerText = Math.floor(
            (distance % minute) / second
          ));

        //do something later when date is reached
        if (distance < 0) {
          document.getElementById("headline").innerText = "It's my birthday!";
          document.getElementById("countdown").style.display = "none";
          document.getElementById("content").style.display = "block";
          clearInterval(x);
        }
        //seconds
      }, 0);
  })();

  function generateCalendar() {
    const inputDate = new Date(dateCalendar);
    const year = inputDate.getFullYear();
    const month = inputDate.getMonth(); // Tháng (0 = Tháng 1, 11 = Tháng 12)
    const activeDay = inputDate.getDate();
    const dateNow = new Date().getDate();

    // Lấy ngày đầu tiên và ngày cuối cùng của tháng
    const firstDayOfMonth = new Date(year, month, 1);
    const lastDayOfMonth = new Date(year, month + 1, 0);

    // Tạo các nhãn ngày trong tuần
    const daysOfWeek = ["CN", "T2", "T3", "T4", "T5", "T6", "T7"];
    const calendar = document.getElementById("calendar");
    calendar.innerHTML = "";

    // Thêm các nhãn ngày vào lịch
    daysOfWeek.forEach((day) => {
      const dayElement = document.createElement("div");
      dayElement.classList.add("day", "header");
      dayElement.innerText = day;
      calendar.appendChild(dayElement);
    });

    // Điền các ngày trống trước ngày đầu tiên của tháng
    for (let i = 0; i < firstDayOfMonth.getDay(); i++) {
      const emptyDay = document.createElement("div");
      emptyDay.classList.add("day");
      calendar.appendChild(emptyDay);
    }

    // Điền các ngày trong tháng
    for (let day = 1; day <= lastDayOfMonth.getDate(); day++) {
      const dayElement = document.createElement("div");
      dayElement.classList.add("day");
      dayElement.innerText = day;

      // Nếu là ngày nhập vào, thêm class "active"
      if (day === activeDay) {
        dayElement.classList.add("active");
      }
      if (day === dateNow) {
        dayElement.classList.add("date-now");
      }

      calendar.appendChild(dayElement);
    }
  }
  generateCalendar();
});
