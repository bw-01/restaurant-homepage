import locationImage from "./images/location.jpg";

export function aboutpageLoad() {
  const contentDiv = document.getElementById("content");

  const title = document.createElement("h1");
  title.textContent = "Opening Hours";
  title.className = "title";
  contentDiv.appendChild(title);

  const openingHours = document.createElement("p");
  openingHours.textContent = `Monday - Friday: 6:00 AM - 10:00 PM
    Saturday: 10:00 AM - 11:00 PM
    Sunday: Closed`;
  openingHours.className = "hours";
  contentDiv.appendChild(openingHours);

  const location = document.createElement("h1");
  location.textContent = "Location";
  location.className = "location";
  contentDiv.appendChild(location);

  const mapImage = document.createElement("img");
  mapImage.classList = "map-image";
  mapImage.src = locationImage;
  mapImage.alt = "Image of a random map pin";
  contentDiv.appendChild(mapImage);
}
