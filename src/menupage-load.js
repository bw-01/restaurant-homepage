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

  const menuSections = [
    {
      category: "Appetizers",
      items: [
        { name: "Garlic Bread", price: "$5.99" },
        { name: "Tomato Basil Bruschetta", price: "$8.99" },
        { name: "Chicken Wings", price: "$11.99" },
      ],
    },
    {
      category: "Mains",
      items: [
        { name: "Vegetable Curry", price: "$15.99" },
        { name: "Grilled Chicken Alfredo", price: "$19.99" },
        { name: "Beef Rib Eye Steak", price: "$25.99" },
        { name: "B's Special Burger", price: "$18.99" },
      ],
    },
    {
      category: "Desserts",
      items: [
        { name: "Chocolate Lava Cake", price: "$8.99" },
        { name: "New York Style Cheesecake", price: "$9.99" },
        { name: "Sticky Toffee Pudding", price: "$8.49" },
      ],
    },
  ];

  menuSections.forEach((section) => {
    const sectionTitle = document.createElement("h2");
    sectionTitle.textContent = section.category;
    contentDiv.appendChild(sectionTitle);

    section.items.forEach((item) => {
      const itemDiv = document.createElement("div");
      itemDiv.className = "menu-item";

      const itemName = document.createElement("span");
      itemName.textContent = item.name;
      itemName.className = "item-name";

      const itemPrice = document.createElement("span");
      itemPrice.textContent = item.price;
      itemPrice.className = "item-price";

      itemDiv.appendChild(itemName);
      itemDiv.appendChild(itemPrice);
      contentDiv.appendChild(itemDiv);
    });
  });
}
