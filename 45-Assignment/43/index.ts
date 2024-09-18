function make_Sandwich (...items: string[]) {
    console.log("\nMaking a sandwich with the given items: \n");
    
    items.forEach(singleItem => console.log(singleItem));

    console.log("\nNow enjoy the delicious sandwich... \n");
        
}

make_Sandwich("chicken", "cheese", "tomato", "bread");

make_Sandwich("Paneer", "cheese", "egg", "bread");

make_Sandwich("Fish", "cheese", "cucumber", "bread", "mayo", "butter");