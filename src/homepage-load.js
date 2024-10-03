import homepageImage from "./images/homepage.jpg";

export function homepageLoad() {
  const contentDiv = document.getElementById("content");

  const title = document.createElement("h1");
  title.textContent = "Welcome to B's Place";
  title.className = "title";
  contentDiv.appendChild(title);

  const welcome = document.createElement("p");
  welcome.textContent =
    "Welcome to B's Place, where home-style comfort meets delicious cuisine! Nestled in the heart \
        of the community, B's Place offers a warm and inviting atmosphere that feels just like \
        coming home. Whether you're gathering with family or \
        catching up with friends, our friendly staff are dedicated to making your dining experience \
        truly special. Come and see why B's Place is the go-to spot for hearty meals and heartfelt \
        hospitality!";
  welcome.className = "welcome";
  contentDiv.appendChild(welcome);

  const homeImage = document.createElement("img");
  homeImage.classList = "home-image";
  homeImage.src = homepageImage;
  homeImage.alt = "Image of a chill restaurant";
  contentDiv.appendChild(homeImage);
}
