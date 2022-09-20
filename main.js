const menu = [
    {
        id: 1,
        title: "Toast",
        category: "breakfast",
        price: "$ 15.99",
        img: "https://img.freepik.com/premium-photo/dessert-cakes-with-mango-coconut-with-sweets-top-view-rustic-style_187166-52293.jpg?w=740",
        desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis modi nihil laboriosam tempore, quod omnis nam ipsam mollitia eum totam quasi earum placeat dolores fugit?"
    },
    {
        id: 2,
        title: "Bahubali Thali",
        category: "lunch",
        price: "$ 15.78",
        img: "https://img.freepik.com/premium-photo/indian-thali-selection-various-dishes-served-round-wooden-platter-white-table-assorted-indian-vegetarian-meze-with-chapati-bread-paneer-dal-chutney-bowls-top-view-space-text_92134-2122.jpg?w=740",
        desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis modi nihil laboriosam tempore, quod omnis nam ipsam mollitia eum totam quasi earum placeat dolores fugit?"
    },
    {
        id: 3,
        title: "Pasta",
        category: "snakes",
        price: "$ 11.10",
        img: "https://img.freepik.com/free-photo/penne-pasta-tomato-sauce-with-chicken-tomatoes-wooden-table_2829-19744.jpg?w=740&t=st=1663584225~exp=1663584825~hmac=67b784827673735538c15a878c4ab15b9c5a289917f3ff00fab6f6efe09daadb",
        desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis modi nihil laboriosam tempore, quod omnis nam ipsam mollitia eum totam quasi earum placeat dolores fugit?"
    },
    {
        id: 5,
        title: "Sp. Maincource",
        category: "dinner",
        price: "$ 10.77",
        img: "https://img.freepik.com/free-photo/view-traditional-food-arrangement_23-2148734675.jpg?w=740&t=st=1663529137~exp=1663529737~hmac=e7b54945264554d23f730de89ceb0b91a180f241d8a08d752443f9ff1adaec61",
        desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis modi nihil laboriosam tempore, quod omnis nam ipsam mollitia eum totam quasi earum placeat dolores fugit?"
    },
    {
        id: 6,
        title: "Vegitable Role",
        category: "dinner",
        price: "$ 8.88",
        img: "https://img.freepik.com/free-photo/tortilla-with-added-ink-cuttlefish-with-chicken-vegetables_2829-10963.jpg?w=740&t=st=1663523798~exp=1663524398~hmac=dc490724210c4ac9e7a93a39e17f1931529d0159f2881ade8cb9882951b3722f",
        desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis modi nihil laboriosam tempore, quod omnis nam ipsam mollitia eum totam quasi earum placeat dolores fugit?"
    },
    {
        id: 7,
        title: "Paw Bhaji",
        category: "dinner",
        price: "$ 19.88",
        img: "https://img.freepik.com/free-photo/misal-pav-is-popular-maharashtrian-street-food-usal-sprouts-curry-topped-with-onions-tomatoes-farsan-chutney_466689-74237.jpg?t=st=1663523757~exp=1663524357~hmac=91e9a69f3cfa15b4838cad888c3ac1e1a7933c641957c766d8a9c1efa3666386",
        desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis modi nihil laboriosam tempore, quod omnis nam ipsam mollitia eum totam quasi earum placeat dolores fugit?"
    },
    {
        id: 8,
        title: "Special Juice",
        category: "breckfast",
        price: "$ 9.44",
        img: "https://img.freepik.com/free-photo/cocktail-glasses_144627-34955.jpg?w=740&t=st=1663582854~exp=1663583454~hmac=039b6a491e08b451126d58e82b0ac1ebbe46095276861d7d1f3840bcb443bb77",
        desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis modi nihil laboriosam tempore, quod omnis nam ipsam mollitia eum totam quasi earum placeat dolores fugit?"
    },
    {
        id: 9,
        title: "Green Salad",
        category: "breckfast",
        price: "$ 11.68",
        img: "https://img.freepik.com/free-photo/white-sliced-cheese-marinated-olives-sliced-cucumbers_114579-5978.jpg?t=st=1663583017~exp=1663583617~hmac=412d7fe4c6a7ac568c4eee93cf7b5d27769fba632b9f7d6874627215a359496a",
        desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis modi nihil laboriosam tempore, quod omnis nam ipsam mollitia eum totam quasi earum placeat dolores fugit?"
    },
    {
        id: 10,
        title: "Khaman Dhokla",
        category: "breckfast",
        price: "$ 8.78",
        img: "https://img.freepik.com/premium-photo/dessert-cakes-with-mango-coconut-with-sweets-top-view-rustic-style_187166-52293.jpg?w=740",
        desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis modi nihil laboriosam tempore, quod omnis nam ipsam mollitia eum totam quasi earum placeat dolores fugit?"
    },
    {
        id: 11,
        title: "Full Lunch",
        category: "lunch",
        price: "$ 14.98",
        img: "https://img.freepik.com/free-photo/top-view-bowls-with-indian-food_23-2148723454.jpg?w=740&t=st=1663528069~exp=1663528669~hmac=f2777c9414b73084eb1050439516a2db2154f6141c450279f6c5020effc15c1e",
        desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis modi nihil laboriosam tempore, quod omnis nam ipsam mollitia eum totam quasi earum placeat dolores fugit?"
    },
    {
        id: 12,
        title: "Finger Chips",
        category: "snakes",
        price: "$ 6.88",
        img: "https://img.freepik.com/free-photo/fresh-potatoes-fri-with-souce_144627-5503.jpg?t=st=1663529194~exp=1663529794~hmac=8a6d99bbe9f89c7b18fce6491a760975d369762a844a7daf1a3e905b40789194",
        desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis modi nihil laboriosam tempore, quod omnis nam ipsam mollitia eum totam quasi earum placeat dolores fugit?"
    },
    {
        id: 13,
        title: "Gulab Jamun",
        category: "sweet",
        price: "$ 11.88",
        img: "https://img.freepik.com/free-photo/indian-sweet-food-gulab-jamun-served-round-ceramic-bowl_466689-71987.jpg?w=740&t=st=1663585210~exp=1663585810~hmac=41061cac7213517cbd832e8cc0c9ea71ba62c4ba02e3b74ab5269218d7aabde5",
        desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis modi nihil laboriosam tempore, quod omnis nam ipsam mollitia eum totam quasi earum placeat dolores fugit?"
    },
    {
        id: 14,
        title: "Motichur Laddu",
        category: "sweet",
        price: "$ 10.56",
        img: "https://img.freepik.com/free-photo/indian-sweet-motichoor-laddooa-bundi-laddu-made-gram-flour-very-small-balls-boondis-which-are-deep-fried-soaked-sugar-syrup-before-making-balls_466689-72392.jpg?w=740&t=st=1663596710~exp=1663597310~hmac=5133ecd7a2cd791ab5e2a82aede9cb4fa945bbb8d90eca48650a79e49ff306b7",
        desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis modi nihil laboriosam tempore, quod omnis nam ipsam mollitia eum totam quasi earum placeat dolores fugit?"
    },
    {
        id: 15,
        title: "Badam Barfi",
        category: "sweet",
        price: "$ 213.78",
        img: "https://img.freepik.com/free-photo/indian-sweet-food-badam-barfi-katli-also-known-as-almond-sweet-burfi-mithai-barfee_466689-72293.jpg?w=740&t=st=1663585356~exp=1663585956~hmac=c9d1ad783c6470856df63ca9e0e303e80619b1e19a514c20b08b2bacf8a44998",
        desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis modi nihil laboriosam tempore, quod omnis nam ipsam mollitia eum totam quasi earum placeat dolores fugit?"
    },
    {
        id: 16,
        title: "Anguri Rasmalai",
        category: "sweet",
        price: "$ 12.05",
        img: "https://img.freepik.com/free-photo/angoori-rasmalai-is-indian-dessert-sweet-with-dry-fruits-saffron-toppings-served-bowl-moody-background-selective-focus_466689-72203.jpg?w=740&t=st=1663585469~exp=1663586069~hmac=b3eb0388ef9b25a28a411641a8b9457f31adc29efc880bfbd7e49d78637cc7d6",
        desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis modi nihil laboriosam tempore, quod omnis nam ipsam mollitia eum totam quasi earum placeat dolores fugit?"
    }
]


let btn = document.querySelectorAll("button");
const  sectionCenter = document.querySelector("section");

// ..load item..
window.addEventListener("DOMContentLoaded", () =>{
   displayMenuItem(menu);
});

//..filter item..
for(let i = 0; i < btn.length; i++){

    btn[i].addEventListener("click", (e) =>{
        const category = e.currentTarget.dataset.id;
        const menuCategory = menu.filter(function(menuItem){
            if (menuItem.category === category) {
                return menuItem;
            }
        });
        if (category === "all") {
            return displayMenuItem(menu)
        }else{
            displayMenuItem(menuCategory);
        }
    });
}


function displayMenuItem(menuItem){
    let displayMenu = menuItem.map(function(item){
        // console.log(item);

        return `
        <div class="item"> 
        <img src=${item.img} alt="${item.title}">
        <div class="card-right-side">
        <div class="item-price">
            <h3>${item.title}</h3>
            <h4>${item.price}</h4>
        </div>
        <div><hr></div>
        <p>${item.desc}</p>
        </div>
        </div>`;
    });
    displayMenu = displayMenu.join("");
    sectionCenter.innerHTML = displayMenu;
}