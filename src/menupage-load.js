export function menupageLoad() {
  const contentDiv = document.getElementById("content");

  const title = document.createElement("h1");
  title.textContent = "B's Menu";
  title.className = "title";
  contentDiv.appendChild(title);

  const welcome = document.createElement("p");
  welcome.textContent =
    "Our menu is filled with classic dishes made from fresh, locally sourced \
        ingredients, all prepared with a loving touch.";
  welcome.className = "welcome";
  contentDiv.appendChild(welcome);

  
}
