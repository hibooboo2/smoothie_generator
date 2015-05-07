greens= {"Ingredients": [
    {"Name": "Spinach", "Amount": "2 cups"},
    {"Name": "Kale", "Amount": "1 Cup"},
    {"Name": "Romain Lettuce", "Amount": "1/2 Head or 1 Heart"},
    {"Name": "Broccoli", "Amount": "3/4 Cup"},
    {"Name": "Bibb or Boston Lettuce", "Amount": "1 Small Head"}
    ],
    "Name": "Greens"
}
fruit= {"Ingredients": [
    {"Name": "Grapes", "Amount": "1 Cup"},
    {"Name": "Apple", "Amount": "1"},
    {"Name": "Orange", "Amount": "1 peeled"},
    {"Name": "Melon", "Amount": "1 Cup peeled"},
    {"Name": "Papaya", "Amount": "1/2 Cup peeled"},
    {"Name": "Pineapple", "Amount": "1 cup"},
    {"Name": "Berries", "Amount": "1 cup"},
    {"Name": "Banana", "Amount": "1 peeled"},
    {"Name": "Mango", "Amount": "1 cup peeled"},
    {"Name": "Celery", "Amount": "2 stocks"},
    {"Name": "Kiwi", "Amount": "1 peeled"},
    {"Name": "Carrot", "Amount": "1"},
    {"Name": "Peaches", "Amount": "1 cup"},
    {"Name": "Cucumber", "Amount": "1/2 cup peeled or unpeeled"},
    {"Name": "Pear", "Amount": "1"},
    ],
    "Name": "Fruits"
}
liquid= {"Ingredients":[
    {"Name": "Soy Milk", "Amount": "1 Cup flavored or plain"},
    {"Name": "Yogurt", "Amount": "1 Cup flavored or plain"},
    {"Name": "Juice", "Amount": "1 Cup"},
    {"Name": "Water", "Amount": "1 Cup"}
    ],
    "Name": "Liquids"
}
thickener= {
    "Name": "Thickeners",
    "Ingredients":[
    {"Name": "Ice", "Amount": "1 Cup ice"}
    ]
}
types = [
    {"type": greens, "pick": 1},
    {"type": fruit, "pick": 2},
    {"type": liquid, "pick": 1},
    {"type": thickener, "pick": 1}
]
function selectIngredient(x){
    for (var i = 0; i< x.pick; i++){
        console.log(x.type.Name);
        console.log(x.type.Ingredients[Math.floor(Math.random()* x.type.Ingredients.length)]);
    }
}
types.forEach(selectIngredient)
