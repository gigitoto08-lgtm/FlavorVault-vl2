export interface Recipe {
  id: number;
  title: string;
  description: string;
  category: string;
  ingredients: string[];
  steps: string[];
  image: string;
  extraImages: string[];
  prepTime: number;
  cookTime: number;
  servings: number;
  difficulty: "Easy" | "Medium" | "Hard";
}

// Unsplash optimized images for each recipe
const img = (id: string, w = 600, h = 400) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&fit=crop&auto=format&q=75`;

export const categories = [
  "All", "Breakfast", "Lunch", "Dinner", "Desserts", "Salads", "Soups", "Appetizers", "Drinks", "Vegetarian", "Seafood"
];

export const recipes: Recipe[] = [
  // ===== BREAKFAST (1-10) =====
  {
    id: 1, title: "Classic Fluffy Pancakes", description: "Light and fluffy pancakes with maple syrup and fresh berries.", category: "Breakfast",
    ingredients: ["2 cups all-purpose flour", "2 tbsp sugar", "2 tsp baking powder", "1 tsp salt", "2 eggs", "1¾ cups milk", "¼ cup melted butter", "1 tsp vanilla extract"],
    steps: ["Mix dry ingredients in a bowl.", "Whisk eggs, milk, butter, and vanilla separately.", "Combine wet and dry ingredients until just mixed.", "Heat a griddle over medium heat, grease lightly.", "Pour ¼ cup batter per pancake, cook until bubbles form.", "Flip and cook until golden brown.", "Serve with maple syrup and berries."],
    image: img("1565299624946-b28f40a0ae38"), extraImages: [img("1528207776546-365bb710ee93"), img("1567620905732-2d1ec7ab7445"), img("1506084868230-bb9d95c24759")],
    prepTime: 10, cookTime: 15, servings: 4, difficulty: "Easy"
  },
  {
    id: 2, title: "Avocado Toast with Poached Eggs", description: "Crispy toast topped with creamy avocado and perfectly poached eggs.", category: "Breakfast",
    ingredients: ["2 slices sourdough bread", "1 ripe avocado", "2 eggs", "1 tbsp white vinegar", "Salt and pepper", "Red pepper flakes", "Lemon juice"],
    steps: ["Toast bread until golden and crispy.", "Mash avocado with lemon juice, salt, and pepper.", "Bring water to a gentle simmer, add vinegar.", "Create a whirlpool, gently drop eggs in.", "Poach for 3-4 minutes.", "Spread avocado on toast, top with eggs.", "Sprinkle with red pepper flakes."],
    image: img("1525351484163-7529414344d8"), extraImages: [img("1482049016688-2d3e1b311543"), img("1484723091739-30a097e8f929")],
    prepTime: 5, cookTime: 10, servings: 2, difficulty: "Medium"
  },
  {
    id: 3, title: "Berry Smoothie Bowl", description: "Thick and vibrant smoothie bowl topped with granola and fresh fruit.", category: "Breakfast",
    ingredients: ["1 cup frozen mixed berries", "1 frozen banana", "½ cup Greek yogurt", "¼ cup almond milk", "Granola", "Fresh berries", "Chia seeds", "Honey"],
    steps: ["Blend frozen berries, banana, yogurt, and almond milk until thick.", "Pour into a bowl.", "Top with granola, fresh berries, chia seeds.", "Drizzle with honey.", "Serve immediately."],
    image: img("1590301157890-4810ed352733"), extraImages: [img("1511690743698-d9d18f7e20f1"), img("1494597564530-871f2b93ac55")],
    prepTime: 5, cookTime: 0, servings: 1, difficulty: "Easy"
  },
  {
    id: 4, title: "French Toast with Cinnamon", description: "Golden French toast with warm cinnamon and powdered sugar.", category: "Breakfast",
    ingredients: ["4 slices thick bread", "3 eggs", "¾ cup milk", "1 tsp cinnamon", "1 tsp vanilla", "2 tbsp butter", "Powdered sugar", "Maple syrup"],
    steps: ["Whisk eggs, milk, cinnamon, and vanilla.", "Dip bread slices into the mixture.", "Melt butter in a skillet over medium heat.", "Cook each slice 2-3 minutes per side until golden.", "Dust with powdered sugar.", "Serve with maple syrup."],
    image: img("1484723091739-30a097e8f929"), extraImages: [img("1506084868230-bb9d95c24759"), img("1567620905732-2d1ec7ab7445")],
    prepTime: 5, cookTime: 10, servings: 2, difficulty: "Easy"
  },
  {
    id: 5, title: "Eggs Benedict", description: "Poached eggs and ham on English muffins with rich hollandaise sauce.", category: "Breakfast",
    ingredients: ["2 English muffins", "4 slices Canadian bacon", "4 eggs", "3 egg yolks", "1 tbsp lemon juice", "½ cup melted butter", "Pinch cayenne", "White vinegar"],
    steps: ["Make hollandaise: whisk yolks and lemon juice over double boiler.", "Slowly drizzle in melted butter while whisking.", "Season with cayenne and salt.", "Toast muffins and warm Canadian bacon.", "Poach eggs in simmering water with vinegar.", "Assemble: muffin, bacon, egg, hollandaise.", "Serve immediately."],
    image: img("1608039829572-215b59e52831"), extraImages: [img("1525351484163-7529414344d8"), img("1482049016688-2d3e1b311543")],
    prepTime: 15, cookTime: 20, servings: 2, difficulty: "Hard"
  },
  {
    id: 6, title: "Overnight Oats with Mango", description: "Creamy overnight oats topped with fresh mango and coconut.", category: "Breakfast",
    ingredients: ["½ cup rolled oats", "½ cup milk", "¼ cup yogurt", "1 tbsp chia seeds", "1 tbsp honey", "1 mango diced", "Shredded coconut"],
    steps: ["Combine oats, milk, yogurt, chia seeds, and honey.", "Stir well and refrigerate overnight.", "In the morning, top with diced mango.", "Sprinkle shredded coconut.", "Enjoy cold or at room temperature."],
    image: img("1511690743698-d9d18f7e20f1"), extraImages: [img("1494597564530-871f2b93ac55"), img("1590301157890-4810ed352733")],
    prepTime: 5, cookTime: 0, servings: 1, difficulty: "Easy"
  },
  {
    id: 7, title: "Mushroom and Cheese Omelette", description: "Fluffy omelette filled with sautéed mushrooms and melted cheese.", category: "Breakfast",
    ingredients: ["3 eggs", "¼ cup sliced mushrooms", "¼ cup shredded cheese", "1 tbsp butter", "Salt and pepper", "Fresh chives"],
    steps: ["Beat eggs with salt and pepper.", "Sauté mushrooms in butter until soft.", "Pour eggs over mushrooms.", "Cook until edges set, sprinkle cheese on half.", "Fold omelette over, cook 1 more minute.", "Garnish with chives."],
    image: img("1510693206972-df098062cb71"), extraImages: [img("1482049016688-2d3e1b311543"), img("1525351484163-7529414344d8")],
    prepTime: 5, cookTime: 8, servings: 1, difficulty: "Easy"
  },
  {
    id: 8, title: "Banana Walnut Muffins", description: "Moist banana muffins studded with crunchy walnuts.", category: "Breakfast",
    ingredients: ["3 ripe bananas", "⅓ cup melted butter", "¾ cup sugar", "1 egg", "1 tsp vanilla", "1 tsp baking soda", "1½ cups flour", "½ cup chopped walnuts"],
    steps: ["Preheat oven to 350°F.", "Mash bananas, mix in melted butter.", "Add sugar, egg, and vanilla.", "Stir in baking soda and flour until combined.", "Fold in walnuts.", "Fill muffin cups ¾ full.", "Bake 20-25 minutes."],
    image: img("1558401391-7899b4bd5bbf"), extraImages: [img("1506084868230-bb9d95c24759"), img("1567620905732-2d1ec7ab7445")],
    prepTime: 10, cookTime: 25, servings: 12, difficulty: "Easy"
  },
  {
    id: 9, title: "Greek Yogurt Parfait", description: "Layered Greek yogurt with granola, honey, and seasonal fruits.", category: "Breakfast",
    ingredients: ["1 cup Greek yogurt", "½ cup granola", "¼ cup mixed berries", "2 tbsp honey", "1 tbsp sliced almonds"],
    steps: ["Layer yogurt in a glass.", "Add a layer of granola.", "Add mixed berries.", "Repeat layers.", "Drizzle with honey and almonds.", "Serve immediately."],
    image: img("1488477181946-6428a0291777"), extraImages: [img("1494597564530-871f2b93ac55"), img("1590301157890-4810ed352733")],
    prepTime: 5, cookTime: 0, servings: 1, difficulty: "Easy"
  },
  {
    id: 10, title: "Breakfast Burrito", description: "Hearty burrito stuffed with scrambled eggs, cheese, and salsa.", category: "Breakfast",
    ingredients: ["2 large tortillas", "4 eggs scrambled", "½ cup black beans", "½ cup cheese", "¼ cup salsa", "1 avocado sliced", "Sour cream"],
    steps: ["Scramble eggs with salt and pepper.", "Warm tortillas in a skillet.", "Layer eggs, beans, cheese, salsa, and avocado.", "Fold into burritos.", "Serve with sour cream."],
    image: img("1626700051175-6818013e1d4f"), extraImages: [img("1482049016688-2d3e1b311543"), img("1525351484163-7529414344d8")],
    prepTime: 10, cookTime: 10, servings: 2, difficulty: "Easy"
  },

  // ===== LUNCH (11-20) =====
  {
    id: 11, title: "Grilled Chicken Caesar Salad", description: "Crisp romaine lettuce with grilled chicken and classic Caesar dressing.", category: "Lunch",
    ingredients: ["2 chicken breasts", "1 head romaine lettuce", "½ cup croutons", "¼ cup Parmesan", "Caesar dressing", "Lemon juice", "Olive oil", "Salt and pepper"],
    steps: ["Season chicken with olive oil, salt, and pepper.", "Grill 6-7 minutes per side until cooked through.", "Chop romaine and place in a large bowl.", "Slice grilled chicken.", "Add croutons and Parmesan.", "Toss with Caesar dressing.", "Serve with lemon wedges."],
    image: img("1546793665-c74683f339c1"), extraImages: [img("1512621776951-a57141f2eefd"), img("1550304943-4f24f54ddde9")],
    prepTime: 10, cookTime: 15, servings: 2, difficulty: "Easy"
  },
  {
    id: 12, title: "Turkey Club Sandwich", description: "Triple-decker sandwich with turkey, bacon, lettuce, and tomato.", category: "Lunch",
    ingredients: ["3 slices bread", "4 slices turkey", "4 slices bacon", "Lettuce leaves", "Tomato slices", "Mayonnaise", "Toothpicks"],
    steps: ["Toast bread until golden.", "Cook bacon until crispy.", "Spread mayo on all bread slices.", "Layer turkey, bacon, lettuce, tomato on first slice.", "Add second slice, repeat layers.", "Top with third slice.", "Cut diagonally, secure with toothpicks."],
    image: img("1528735602780-2552fd46c7af"), extraImages: [img("1553909489-cd47e0907980"), img("1509722747-c0a6bff435e0")],
    prepTime: 10, cookTime: 10, servings: 1, difficulty: "Easy"
  },
  {
    id: 13, title: "Mediterranean Quinoa Bowl", description: "Nutritious quinoa bowl with roasted vegetables, feta, and hummus.", category: "Lunch",
    ingredients: ["1 cup quinoa", "1 cucumber diced", "1 cup cherry tomatoes", "½ cup feta cheese", "¼ cup olives", "Hummus", "Olive oil", "Lemon juice"],
    steps: ["Cook quinoa according to package.", "Dice cucumber and halve tomatoes.", "Assemble bowls with quinoa base.", "Top with vegetables, feta, and olives.", "Add a dollop of hummus.", "Drizzle with olive oil and lemon juice."],
    image: img("1512621776951-a57141f2eefd"), extraImages: [img("1546793665-c74683f339c1"), img("1550304943-4f24f54ddde9")],
    prepTime: 10, cookTime: 15, servings: 2, difficulty: "Easy"
  },
  {
    id: 14, title: "Chicken Tikka Wrap", description: "Spiced chicken tikka in a warm flatbread with yogurt sauce.", category: "Lunch",
    ingredients: ["2 chicken breasts cubed", "2 tbsp tikka paste", "¼ cup yogurt", "4 flatbreads", "Lettuce", "Tomato", "Cucumber", "Mint sauce"],
    steps: ["Marinate chicken in tikka paste and yogurt for 30 min.", "Grill or pan-fry chicken until cooked.", "Warm flatbreads.", "Layer lettuce, tomato, cucumber on flatbread.", "Add chicken tikka.", "Drizzle with mint sauce and wrap."],
    image: img("1626700051175-6818013e1d4f"), extraImages: [img("1553909489-cd47e0907980"), img("1528735602780-2552fd46c7af")],
    prepTime: 35, cookTime: 12, servings: 4, difficulty: "Medium"
  },
  {
    id: 15, title: "Caprese Panini", description: "Pressed sandwich with fresh mozzarella, tomato, and basil pesto.", category: "Lunch",
    ingredients: ["2 ciabatta rolls", "Fresh mozzarella", "2 tomatoes sliced", "Basil pesto", "Olive oil", "Balsamic glaze"],
    steps: ["Slice ciabatta rolls in half.", "Spread pesto on both halves.", "Layer mozzarella and tomato slices.", "Drizzle with balsamic glaze.", "Press in a panini maker or skillet.", "Cook until cheese melts and bread is crispy."],
    image: img("1509722747-c0a6bff435e0"), extraImages: [img("1553909489-cd47e0907980"), img("1528735602780-2552fd46c7af")],
    prepTime: 5, cookTime: 8, servings: 2, difficulty: "Easy"
  },
  {
    id: 16, title: "Asian Noodle Salad", description: "Cold noodle salad with crunchy vegetables and sesame dressing.", category: "Lunch",
    ingredients: ["200g soba noodles", "1 carrot julienned", "1 cucumber julienned", "1 red pepper sliced", "Edamame", "Sesame oil", "Soy sauce", "Rice vinegar", "Sesame seeds"],
    steps: ["Cook noodles according to package, rinse with cold water.", "Prepare vegetables.", "Make dressing: sesame oil, soy sauce, rice vinegar.", "Toss noodles with vegetables.", "Pour dressing over and mix well.", "Top with sesame seeds."],
    image: img("1569718212165-3a8922ada9e5"), extraImages: [img("1512621776951-a57141f2eefd"), img("1546793665-c74683f339c1")],
    prepTime: 15, cookTime: 10, servings: 3, difficulty: "Easy"
  },
  {
    id: 17, title: "Black Bean Tacos", description: "Flavorful black bean tacos with avocado crema and pickled onions.", category: "Lunch",
    ingredients: ["1 can black beans", "8 small tortillas", "1 avocado", "Sour cream", "Lime juice", "Pickled red onions", "Cilantro", "Cumin", "Chili powder"],
    steps: ["Heat black beans with cumin and chili powder.", "Make avocado crema: blend avocado, sour cream, lime.", "Warm tortillas.", "Fill with seasoned black beans.", "Top with avocado crema and pickled onions.", "Garnish with cilantro."],
    image: img("1551504734-5ee1c4a1479b"), extraImages: [img("1565299585-bdd6a61a3a17"), img("1626700051175-6818013e1d4f")],
    prepTime: 10, cookTime: 10, servings: 4, difficulty: "Easy"
  },
  {
    id: 18, title: "Tom Yum Soup", description: "Spicy and sour Thai soup with shrimp and aromatic herbs.", category: "Lunch",
    ingredients: ["500ml chicken broth", "200g shrimp", "Lemongrass", "Galangal", "Kaffir lime leaves", "Fish sauce", "Lime juice", "Chili paste", "Mushrooms"],
    steps: ["Bring broth to a boil.", "Add lemongrass, galangal, and lime leaves.", "Simmer for 10 minutes.", "Add mushrooms and shrimp.", "Cook until shrimp turn pink.", "Season with fish sauce, lime juice, chili paste.", "Serve hot."],
    image: img("1547592166-23ac45744acd"), extraImages: [img("1569718212165-3a8922ada9e5"), img("1512621776951-a57141f2eefd")],
    prepTime: 10, cookTime: 20, servings: 3, difficulty: "Medium"
  },
  {
    id: 19, title: "Falafel Bowl", description: "Crispy falafel with hummus, tabbouleh, and tahini dressing.", category: "Lunch",
    ingredients: ["1 can chickpeas", "½ onion", "3 garlic cloves", "Fresh parsley", "Cumin", "Flour", "Hummus", "Tahini", "Pita bread"],
    steps: ["Pulse chickpeas, onion, garlic, parsley in food processor.", "Season with cumin, salt, pepper.", "Form into balls, coat lightly in flour.", "Fry in oil until golden on all sides.", "Assemble bowls with hummus and tabbouleh.", "Drizzle with tahini."],
    image: img("1558024920-418585b5e222"), extraImages: [img("1512621776951-a57141f2eefd"), img("1546793665-c74683f339c1")],
    prepTime: 20, cookTime: 15, servings: 4, difficulty: "Medium"
  },
  {
    id: 20, title: "BLT with Avocado", description: "Classic BLT sandwich elevated with ripe avocado slices.", category: "Lunch",
    ingredients: ["4 slices bread", "8 strips bacon", "Lettuce", "2 tomatoes", "1 avocado", "Mayonnaise", "Salt and pepper"],
    steps: ["Cook bacon until crispy.", "Toast bread.", "Spread mayo on toast.", "Layer lettuce, tomato, bacon, avocado.", "Season with salt and pepper.", "Close sandwich and cut diagonally."],
    image: img("1553909489-cd47e0907980"), extraImages: [img("1528735602780-2552fd46c7af"), img("1509722747-c0a6bff435e0")],
    prepTime: 5, cookTime: 10, servings: 2, difficulty: "Easy"
  },

  // ===== DINNER (21-35) =====
  {
    id: 21, title: "Spaghetti Carbonara", description: "Classic Italian pasta with creamy egg sauce, pancetta, and Parmesan.", category: "Dinner",
    ingredients: ["400g spaghetti", "200g pancetta", "4 egg yolks", "1 cup Parmesan", "Black pepper", "2 garlic cloves", "Olive oil"],
    steps: ["Cook spaghetti in salted water until al dente.", "Fry pancetta until crispy.", "Whisk egg yolks with Parmesan and pepper.", "Drain pasta, reserve 1 cup pasta water.", "Toss hot pasta with pancetta.", "Remove from heat, add egg mixture and toss quickly.", "Add pasta water as needed for creamy consistency."],
    image: img("1621996346565-e3dbc646d9a9"), extraImages: [img("1551183053-d0a57e3b1f0c"), img("1563379926898-05f4575a45d8")],
    prepTime: 10, cookTime: 20, servings: 4, difficulty: "Medium"
  },
  {
    id: 22, title: "Butter Chicken", description: "Rich and creamy Indian butter chicken in tomato-based sauce.", category: "Dinner",
    ingredients: ["500g chicken thighs", "1 cup tomato puree", "½ cup heavy cream", "2 tbsp butter", "Garam masala", "Turmeric", "Ginger paste", "Garlic paste", "Yogurt"],
    steps: ["Marinate chicken in yogurt and spices for 1 hour.", "Sear chicken in butter until browned.", "Add ginger, garlic paste, cook 2 minutes.", "Add tomato puree, garam masala, turmeric.", "Simmer 20 minutes.", "Stir in cream, cook 5 more minutes.", "Serve with basmati rice."],
    image: img("1603894584373-5ac82b2ae7d3"), extraImages: [img("1585937421612-70a008356fbe"), img("1631452180519-c014fe946bc7")],
    prepTime: 65, cookTime: 30, servings: 4, difficulty: "Medium"
  },
  {
    id: 23, title: "Grilled Salmon with Asparagus", description: "Perfectly grilled salmon fillet with roasted asparagus and lemon.", category: "Dinner",
    ingredients: ["4 salmon fillets", "1 bunch asparagus", "2 lemons", "3 tbsp olive oil", "2 garlic cloves", "Fresh dill", "Salt and pepper"],
    steps: ["Preheat grill to medium-high.", "Season salmon with olive oil, salt, pepper, garlic.", "Toss asparagus with olive oil and salt.", "Grill salmon 4-5 minutes per side.", "Grill asparagus 3-4 minutes.", "Squeeze lemon over fish.", "Garnish with fresh dill."],
    image: img("1467003909585-2f8a72700288"), extraImages: [img("1519708227418-b060153beabd"), img("1504674900247-0877df9cc836")],
    prepTime: 10, cookTime: 12, servings: 4, difficulty: "Medium"
  },
  {
    id: 24, title: "Beef Stir-Fry", description: "Quick beef stir-fry with colorful vegetables in savory sauce.", category: "Dinner",
    ingredients: ["400g beef sirloin sliced", "1 red pepper", "1 broccoli head", "2 carrots", "3 tbsp soy sauce", "1 tbsp oyster sauce", "Ginger", "Garlic", "Sesame oil"],
    steps: ["Slice beef thinly against the grain.", "Cut vegetables into bite-sized pieces.", "Heat sesame oil in a wok over high heat.", "Stir-fry beef 2-3 minutes, remove.", "Stir-fry vegetables 3-4 minutes.", "Return beef, add soy sauce and oyster sauce.", "Serve over steamed rice."],
    image: img("1603133872878-684f208fb84b"), extraImages: [img("1569718212165-3a8922ada9e5"), img("1551183053-d0a57e3b1f0c")],
    prepTime: 15, cookTime: 10, servings: 3, difficulty: "Easy"
  },
  {
    id: 25, title: "Chicken Parmesan", description: "Breaded chicken cutlets baked with marinara sauce and melted mozzarella.", category: "Dinner",
    ingredients: ["4 chicken breasts", "1 cup breadcrumbs", "½ cup Parmesan", "2 eggs", "2 cups marinara sauce", "1 cup mozzarella", "Fresh basil", "Olive oil"],
    steps: ["Pound chicken breasts to even thickness.", "Dip in beaten eggs, then breadcrumb-Parmesan mixture.", "Pan-fry in olive oil until golden, about 4 min per side.", "Place in baking dish, top with marinara and mozzarella.", "Bake at 400°F for 15 minutes.", "Garnish with fresh basil.", "Serve with spaghetti."],
    image: img("1632778149955-e80f8ceca2e8"), extraImages: [img("1551183053-d0a57e3b1f0c"), img("1563379926898-05f4575a45d8")],
    prepTime: 15, cookTime: 25, servings: 4, difficulty: "Medium"
  },
  {
    id: 26, title: "Thai Green Curry", description: "Aromatic Thai green curry with chicken, bamboo shoots, and basil.", category: "Dinner",
    ingredients: ["500g chicken breast", "1 can coconut milk", "3 tbsp green curry paste", "Bamboo shoots", "Thai basil", "Fish sauce", "Sugar", "Kaffir lime leaves"],
    steps: ["Heat a splash of coconut cream in a pan.", "Add curry paste, cook until fragrant.", "Add chicken, cook until sealed.", "Pour in remaining coconut milk.", "Add bamboo shoots and lime leaves.", "Season with fish sauce and sugar.", "Garnish with Thai basil, serve with rice."],
    image: img("1455619452474-d2be8b1e70cd"), extraImages: [img("1547592166-23ac45744acd"), img("1569718212165-3a8922ada9e5")],
    prepTime: 10, cookTime: 25, servings: 4, difficulty: "Medium"
  },
  {
    id: 27, title: "Homemade Margherita Pizza", description: "Classic pizza with San Marzano tomatoes, fresh mozzarella, and basil.", category: "Dinner",
    ingredients: ["Pizza dough", "½ cup San Marzano tomatoes", "Fresh mozzarella", "Fresh basil", "Olive oil", "Salt", "Garlic"],
    steps: ["Preheat oven to 475°F with pizza stone.", "Stretch dough into a circle.", "Crush tomatoes and spread over dough.", "Tear mozzarella and distribute evenly.", "Drizzle with olive oil.", "Bake 10-12 minutes until crust is golden.", "Top with fresh basil."],
    image: img("1565299624946-b28f40a0ae38"), extraImages: [img("1551183053-d0a57e3b1f0c"), img("1563379926898-05f4575a45d8")],
    prepTime: 20, cookTime: 12, servings: 2, difficulty: "Medium"
  },
  {
    id: 28, title: "Lamb Chops with Rosemary", description: "Herb-crusted lamb chops seared to perfection with roasted potatoes.", category: "Dinner",
    ingredients: ["8 lamb chops", "3 tbsp olive oil", "Fresh rosemary", "4 garlic cloves", "1 lb baby potatoes", "Salt and pepper", "Dijon mustard"],
    steps: ["Season lamb chops with salt, pepper, and rosemary.", "Heat oil in a cast-iron skillet over high heat.", "Sear lamb 3-4 minutes per side for medium-rare.", "Rest for 5 minutes.", "Roast potatoes at 400°F with olive oil and garlic.", "Serve lamb with potatoes and Dijon."],
    image: img("1504674900247-0877df9cc836"), extraImages: [img("1467003909585-2f8a72700288"), img("1519708227418-b060153beabd")],
    prepTime: 10, cookTime: 30, servings: 4, difficulty: "Medium"
  },
  {
    id: 29, title: "Shrimp Scampi", description: "Garlicky shrimp in white wine butter sauce over linguine.", category: "Dinner",
    ingredients: ["1 lb large shrimp", "400g linguine", "4 garlic cloves", "½ cup white wine", "3 tbsp butter", "Red pepper flakes", "Parsley", "Lemon"],
    steps: ["Cook linguine al dente.", "Sauté garlic in butter until fragrant.", "Add shrimp, cook 2 minutes per side.", "Deglaze with white wine.", "Add red pepper flakes and lemon juice.", "Toss with linguine.", "Garnish with parsley."],
    image: img("1563379926898-05f4575a45d8"), extraImages: [img("1551183053-d0a57e3b1f0c"), img("1621996346565-e3dbc646d9a9")],
    prepTime: 10, cookTime: 15, servings: 4, difficulty: "Easy"
  },
  {
    id: 30, title: "Stuffed Bell Peppers", description: "Colorful bell peppers stuffed with seasoned rice, beef, and cheese.", category: "Dinner",
    ingredients: ["4 bell peppers", "1 lb ground beef", "1 cup cooked rice", "1 cup tomato sauce", "1 cup shredded cheese", "1 onion diced", "Garlic", "Italian seasoning"],
    steps: ["Cut tops off peppers, remove seeds.", "Brown beef with onion and garlic.", "Mix with rice, tomato sauce, and seasoning.", "Stuff peppers with the mixture.", "Top with cheese.", "Bake at 375°F for 30 minutes.", "Serve hot."],
    image: img("1596797038530-2c107229654b"), extraImages: [img("1563379926898-05f4575a45d8"), img("1551183053-d0a57e3b1f0c")],
    prepTime: 15, cookTime: 35, servings: 4, difficulty: "Medium"
  },
  {
    id: 31, title: "Chicken Alfredo", description: "Creamy fettuccine Alfredo with tender grilled chicken breast.", category: "Dinner",
    ingredients: ["400g fettuccine", "2 chicken breasts", "2 cups heavy cream", "1 cup Parmesan", "3 garlic cloves", "2 tbsp butter", "Parsley", "Salt and pepper"],
    steps: ["Cook fettuccine al dente.", "Season and grill chicken, slice.", "Melt butter, sauté garlic.", "Add cream, simmer until thickened.", "Stir in Parmesan.", "Toss with fettuccine.", "Top with sliced chicken and parsley."],
    image: img("1551183053-d0a57e3b1f0c"), extraImages: [img("1621996346565-e3dbc646d9a9"), img("1563379926898-05f4575a45d8")],
    prepTime: 10, cookTime: 25, servings: 4, difficulty: "Easy"
  },
  {
    id: 32, title: "Korean Bibimbap", description: "Korean rice bowl with assorted vegetables, beef, and gochujang.", category: "Dinner",
    ingredients: ["2 cups cooked rice", "200g beef bulgogi", "Spinach", "Carrots", "Zucchini", "Bean sprouts", "Fried egg", "Gochujang", "Sesame oil"],
    steps: ["Prepare each vegetable: blanch spinach, sauté carrots and zucchini.", "Cook beef bulgogi.", "Place rice in bowls.", "Arrange vegetables and beef on top.", "Top with a fried egg.", "Serve with gochujang and sesame oil.", "Mix before eating."],
    image: img("1553163147-622ab57be1c7"), extraImages: [img("1569718212165-3a8922ada9e5"), img("1603133872878-684f208fb84b")],
    prepTime: 20, cookTime: 20, servings: 2, difficulty: "Medium"
  },
  {
    id: 33, title: "Beef Tacos", description: "Seasoned ground beef tacos with fresh salsa and guacamole.", category: "Dinner",
    ingredients: ["500g ground beef", "Taco seasoning", "8 taco shells", "Lettuce shredded", "Tomatoes diced", "Cheese", "Sour cream", "Salsa"],
    steps: ["Brown ground beef, drain fat.", "Add taco seasoning and water, simmer.", "Warm taco shells.", "Fill with seasoned beef.", "Top with lettuce, tomatoes, cheese.", "Add sour cream and salsa.", "Serve immediately."],
    image: img("1565299585-bdd6a61a3a17"), extraImages: [img("1551504734-5ee1c4a1479b"), img("1626700051175-6818013e1d4f")],
    prepTime: 10, cookTime: 15, servings: 4, difficulty: "Easy"
  },
  {
    id: 34, title: "Mushroom Risotto", description: "Creamy Italian risotto with mixed mushrooms and Parmesan.", category: "Dinner",
    ingredients: ["1½ cups arborio rice", "300g mixed mushrooms", "1L warm chicken broth", "½ cup white wine", "1 onion diced", "3 tbsp butter", "½ cup Parmesan", "Fresh thyme"],
    steps: ["Sauté onion in butter until soft.", "Add mushrooms, cook until golden.", "Add rice, toast for 2 minutes.", "Pour in wine, stir until absorbed.", "Add broth one ladle at a time, stirring.", "Continue until rice is creamy (about 18 min).", "Stir in Parmesan and butter."],
    image: img("1476124369491-e7addf5db371"), extraImages: [img("1551183053-d0a57e3b1f0c"), img("1510693206972-df098062cb71")],
    prepTime: 10, cookTime: 30, servings: 4, difficulty: "Hard"
  },
  {
    id: 35, title: "Fish and Chips", description: "Crispy beer-battered fish with golden fries and tartar sauce.", category: "Dinner",
    ingredients: ["4 cod fillets", "1 cup flour", "1 cup beer", "1 egg", "Potatoes for frying", "Salt", "Malt vinegar", "Tartar sauce"],
    steps: ["Cut potatoes into thick fries, soak in water.", "Make batter: whisk flour, beer, egg, salt.", "Heat oil to 375°F.", "Fry potatoes until golden, season with salt.", "Dip fish in batter, fry 5-6 minutes.", "Drain on paper towels.", "Serve with tartar sauce and vinegar."],
    image: img("1519708227418-b060153beabd"), extraImages: [img("1467003909585-2f8a72700288"), img("1504674900247-0877df9cc836")],
    prepTime: 20, cookTime: 20, servings: 4, difficulty: "Medium"
  },

  // ===== DESSERTS (36-50) =====
  {
    id: 36, title: "Chocolate Lava Cake", description: "Decadent chocolate cake with a molten center, served warm.", category: "Desserts",
    ingredients: ["200g dark chocolate", "½ cup butter", "3 eggs", "3 egg yolks", "¼ cup sugar", "2 tbsp flour", "Cocoa powder", "Vanilla ice cream"],
    steps: ["Preheat oven to 425°F.", "Melt chocolate and butter together.", "Whisk eggs, yolks, and sugar until thick.", "Fold chocolate into egg mixture.", "Add flour, fold gently.", "Pour into greased ramekins.", "Bake 12-14 minutes, center should be soft.", "Invert onto plates, serve with ice cream."],
    image: img("1563805042-7684c019e1cb"), extraImages: [img("1578985545062-69928b1d9587"), img("1551024601-824cc3df1b1e")],
    prepTime: 15, cookTime: 14, servings: 4, difficulty: "Hard"
  },
  {
    id: 37, title: "New York Cheesecake", description: "Rich and creamy classic New York-style cheesecake.", category: "Desserts",
    ingredients: ["2 lbs cream cheese", "1 cup sugar", "5 eggs", "2 tsp vanilla", "¼ cup flour", "1 cup sour cream", "Graham cracker crust"],
    steps: ["Preheat oven to 325°F.", "Beat cream cheese and sugar until smooth.", "Add eggs one at a time.", "Mix in vanilla, flour, sour cream.", "Pour into graham cracker crust.", "Bake 60-70 minutes until set with slight jiggle.", "Cool in oven with door cracked.", "Refrigerate overnight."],
    image: img("1578985545062-69928b1d9587"), extraImages: [img("1563805042-7684c019e1cb"), img("1551024601-824cc3df1b1e")],
    prepTime: 20, cookTime: 70, servings: 12, difficulty: "Hard"
  },
  {
    id: 38, title: "Tiramisu", description: "Classic Italian dessert with espresso-soaked ladyfingers and mascarpone.", category: "Desserts",
    ingredients: ["6 egg yolks", "¾ cup sugar", "500g mascarpone", "2 cups strong espresso", "3 tbsp coffee liqueur", "Ladyfinger cookies", "Cocoa powder"],
    steps: ["Whisk egg yolks and sugar until thick and pale.", "Add mascarpone, fold gently.", "Mix espresso with coffee liqueur.", "Dip ladyfingers briefly in coffee mixture.", "Layer in a dish: cookies, then cream.", "Repeat layers.", "Refrigerate 4+ hours.", "Dust with cocoa powder before serving."],
    image: img("1571877227200-a36d1d8bd9c8"), extraImages: [img("1563805042-7684c019e1cb"), img("1578985545062-69928b1d9587")],
    prepTime: 30, cookTime: 0, servings: 8, difficulty: "Medium"
  },
  {
    id: 39, title: "Apple Pie", description: "Classic double-crust apple pie with warm cinnamon filling.", category: "Desserts",
    ingredients: ["6 apples peeled and sliced", "¾ cup sugar", "2 tbsp flour", "1 tsp cinnamon", "¼ tsp nutmeg", "1 tbsp butter", "Double pie crust", "1 egg for wash"],
    steps: ["Preheat oven to 375°F.", "Toss apples with sugar, flour, cinnamon, nutmeg.", "Place bottom crust in pie dish.", "Fill with apple mixture, dot with butter.", "Cover with top crust, crimp edges.", "Cut slits in top, brush with egg wash.", "Bake 45-50 minutes until golden.", "Cool before slicing."],
    image: img("1535920527002-b35e96722eb9"), extraImages: [img("1551024601-824cc3df1b1e"), img("1563805042-7684c019e1cb")],
    prepTime: 25, cookTime: 50, servings: 8, difficulty: "Medium"
  },
  {
    id: 40, title: "Crème Brûlée", description: "Silky vanilla custard with a perfectly caramelized sugar crust.", category: "Desserts",
    ingredients: ["2 cups heavy cream", "5 egg yolks", "½ cup sugar", "1 tsp vanilla extract", "Extra sugar for topping"],
    steps: ["Preheat oven to 325°F.", "Heat cream until simmering.", "Whisk yolks with sugar and vanilla.", "Slowly pour hot cream into yolks, whisking.", "Strain into ramekins.", "Place in water bath, bake 40-45 minutes.", "Chill completely.", "Sprinkle sugar on top, torch until caramelized."],
    image: img("1551024601-824cc3df1b1e"), extraImages: [img("1563805042-7684c019e1cb"), img("1578985545062-69928b1d9587")],
    prepTime: 15, cookTime: 45, servings: 4, difficulty: "Hard"
  },
  {
    id: 41, title: "Chocolate Chip Cookies", description: "Chewy and golden chocolate chip cookies with crispy edges.", category: "Desserts",
    ingredients: ["2¼ cups flour", "1 cup butter softened", "¾ cup sugar", "¾ cup brown sugar", "2 eggs", "1 tsp vanilla", "1 tsp baking soda", "2 cups chocolate chips"],
    steps: ["Preheat oven to 375°F.", "Cream butter and sugars until fluffy.", "Add eggs and vanilla.", "Mix in flour and baking soda.", "Fold in chocolate chips.", "Drop by tablespoons onto baking sheets.", "Bake 9-11 minutes until golden edges.", "Cool on wire rack."],
    image: img("1499636136210-6f4ee915583e"), extraImages: [img("1558961363-fa8fdf82db35"), img("1551024601-824cc3df1b1e")],
    prepTime: 15, cookTime: 11, servings: 36, difficulty: "Easy"
  },
  {
    id: 42, title: "Strawberry Shortcake", description: "Light biscuits with whipped cream and fresh macerated strawberries.", category: "Desserts",
    ingredients: ["2 cups flour", "⅓ cup sugar", "1 tbsp baking powder", "½ cup cold butter", "⅔ cup milk", "1 lb strawberries", "Whipped cream"],
    steps: ["Make biscuits: cut butter into flour, sugar, baking powder.", "Add milk, mix until just combined.", "Bake at 425°F for 12-15 minutes.", "Slice strawberries, toss with sugar.", "Let macerate 30 minutes.", "Split biscuits, layer with berries and cream."],
    image: img("1488477181946-6428a0291777"), extraImages: [img("1563805042-7684c019e1cb"), img("1578985545062-69928b1d9587")],
    prepTime: 15, cookTime: 15, servings: 6, difficulty: "Easy"
  },
  {
    id: 43, title: "Lemon Tart", description: "Buttery tart shell filled with tangy lemon curd and meringue.", category: "Desserts",
    ingredients: ["1 tart shell baked", "4 lemons juiced", "4 eggs", "1 cup sugar", "½ cup butter", "3 egg whites", "¼ cup sugar for meringue"],
    steps: ["Make lemon curd: whisk juice, eggs, sugar over heat.", "Add butter, cook until thick.", "Pour into baked tart shell.", "Chill until set.", "Whip egg whites with sugar for meringue.", "Pipe meringue on top.", "Torch until golden."],
    image: img("1519915028121-7d3463d20b13"), extraImages: [img("1551024601-824cc3df1b1e"), img("1563805042-7684c019e1cb")],
    prepTime: 30, cookTime: 20, servings: 8, difficulty: "Hard"
  },
  {
    id: 44, title: "Banana Bread", description: "Moist and tender banana bread with a golden crust.", category: "Desserts",
    ingredients: ["3 ripe bananas", "⅓ cup melted butter", "1 cup sugar", "1 egg", "1 tsp vanilla", "1 tsp baking soda", "1½ cups flour", "Pinch of salt"],
    steps: ["Preheat oven to 350°F.", "Mash bananas, mix in melted butter.", "Add sugar, egg, and vanilla.", "Stir in baking soda, salt, and flour.", "Pour into greased loaf pan.", "Bake 55-65 minutes.", "Cool before slicing."],
    image: img("1558401391-7899b4bd5bbf"), extraImages: [img("1499636136210-6f4ee915583e"), img("1558961363-fa8fdf82db35")],
    prepTime: 10, cookTime: 60, servings: 10, difficulty: "Easy"
  },
  {
    id: 45, title: "Panna Cotta", description: "Silky Italian panna cotta with berry coulis.", category: "Desserts",
    ingredients: ["2 cups heavy cream", "⅓ cup sugar", "1 tsp vanilla", "1 packet gelatin", "3 tbsp water", "Mixed berries", "2 tbsp sugar for coulis"],
    steps: ["Bloom gelatin in water.", "Heat cream with sugar and vanilla until simmering.", "Remove from heat, stir in gelatin until dissolved.", "Pour into molds, refrigerate 4+ hours.", "Make coulis: cook berries with sugar, strain.", "Unmold panna cotta.", "Drizzle with berry coulis."],
    image: img("1488477181946-6428a0291777"), extraImages: [img("1551024601-824cc3df1b1e"), img("1563805042-7684c019e1cb")],
    prepTime: 10, cookTime: 5, servings: 4, difficulty: "Easy"
  },
  {
    id: 46, title: "Red Velvet Cupcakes", description: "Moist red velvet cupcakes with cream cheese frosting.", category: "Desserts",
    ingredients: ["1½ cups flour", "1 cup sugar", "1 egg", "½ cup buttermilk", "½ cup oil", "Red food coloring", "1 tsp vanilla", "Cream cheese frosting"],
    steps: ["Preheat oven to 350°F.", "Mix flour, sugar, cocoa powder.", "Whisk egg, buttermilk, oil, food coloring, vanilla.", "Combine wet and dry ingredients.", "Fill cupcake liners ⅔ full.", "Bake 18-20 minutes.", "Cool completely, frost with cream cheese frosting."],
    image: img("1563805042-7684c019e1cb"), extraImages: [img("1578985545062-69928b1d9587"), img("1551024601-824cc3df1b1e")],
    prepTime: 15, cookTime: 20, servings: 12, difficulty: "Easy"
  },
  {
    id: 47, title: "Mango Sticky Rice", description: "Thai dessert of sweet sticky rice with fresh mango and coconut cream.", category: "Desserts",
    ingredients: ["1 cup glutinous rice", "1 can coconut milk", "½ cup sugar", "Pinch salt", "2 ripe mangos", "Sesame seeds"],
    steps: ["Soak sticky rice 4+ hours, then steam.", "Heat coconut milk with sugar and salt.", "Mix half the sauce into cooked rice.", "Let rice absorb sauce for 30 minutes.", "Slice mangos.", "Serve rice with mango, drizzle remaining sauce.", "Top with sesame seeds."],
    image: img("1494597564530-871f2b93ac55"), extraImages: [img("1488477181946-6428a0291777"), img("1590301157890-4810ed352733")],
    prepTime: 240, cookTime: 30, servings: 4, difficulty: "Medium"
  },
  {
    id: 48, title: "Brownies", description: "Fudgy chocolate brownies with a crackly top.", category: "Desserts",
    ingredients: ["½ cup butter", "1 cup sugar", "2 eggs", "⅓ cup cocoa powder", "½ cup flour", "¼ tsp salt", "¼ tsp baking powder", "1 tsp vanilla"],
    steps: ["Preheat oven to 350°F.", "Melt butter, stir in sugar.", "Add eggs and vanilla, mix well.", "Stir in cocoa, flour, salt, baking powder.", "Pour into greased 8x8 pan.", "Bake 20-25 minutes.", "Cool before cutting."],
    image: img("1558961363-fa8fdf82db35"), extraImages: [img("1499636136210-6f4ee915583e"), img("1563805042-7684c019e1cb")],
    prepTime: 10, cookTime: 25, servings: 9, difficulty: "Easy"
  },
  {
    id: 49, title: "Churros with Chocolate Sauce", description: "Crispy Spanish churros dusted with cinnamon sugar and chocolate dip.", category: "Desserts",
    ingredients: ["1 cup water", "2 tbsp sugar", "½ tsp salt", "2 tbsp oil", "1 cup flour", "Oil for frying", "Cinnamon sugar", "Chocolate sauce"],
    steps: ["Boil water with sugar, salt, and oil.", "Remove from heat, stir in flour until a ball forms.", "Pipe dough into hot oil using a star tip.", "Fry until golden brown.", "Roll in cinnamon sugar.", "Melt chocolate for dipping sauce.", "Serve warm."],
    image: img("1551024601-824cc3df1b1e"), extraImages: [img("1563805042-7684c019e1cb"), img("1558961363-fa8fdf82db35")],
    prepTime: 10, cookTime: 15, servings: 6, difficulty: "Medium"
  },
  {
    id: 50, title: "Matcha Ice Cream", description: "Smooth and earthy Japanese matcha green tea ice cream.", category: "Desserts",
    ingredients: ["2 cups heavy cream", "1 cup whole milk", "¾ cup sugar", "3 tbsp matcha powder", "4 egg yolks", "Pinch salt"],
    steps: ["Whisk matcha with a little warm milk until smooth.", "Heat cream, milk, and half the sugar.", "Whisk yolks with remaining sugar.", "Temper yolks with hot cream.", "Cook until mixture coats a spoon.", "Stir in matcha paste.", "Chill, then churn in ice cream maker.", "Freeze 4+ hours."],
    image: img("1590301157890-4810ed352733"), extraImages: [img("1494597564530-871f2b93ac55"), img("1488477181946-6428a0291777")],
    prepTime: 20, cookTime: 10, servings: 6, difficulty: "Medium"
  },

  // ===== SALADS (51-60) =====
  {
    id: 51, title: "Greek Salad", description: "Fresh Mediterranean salad with feta, olives, and crisp vegetables.", category: "Salads",
    ingredients: ["2 cucumbers", "4 tomatoes", "1 red onion", "200g feta cheese", "Kalamata olives", "Olive oil", "Red wine vinegar", "Oregano"],
    steps: ["Cut cucumbers and tomatoes into chunks.", "Thinly slice red onion.", "Combine in a large bowl.", "Add olives and crumbled feta.", "Drizzle with olive oil and vinegar.", "Sprinkle with oregano.", "Toss gently and serve."],
    image: img("1540189549336-e6e99c3679fe"), extraImages: [img("1512621776951-a57141f2eefd"), img("1546793665-c74683f339c1")],
    prepTime: 10, cookTime: 0, servings: 4, difficulty: "Easy"
  },
  {
    id: 52, title: "Kale Caesar Salad", description: "Hearty kale salad with creamy Caesar dressing and crunchy croutons.", category: "Salads",
    ingredients: ["1 bunch kale", "Caesar dressing", "Croutons", "Parmesan shaved", "Lemon juice", "Olive oil"],
    steps: ["Remove kale stems, chop leaves.", "Massage kale with olive oil and lemon juice.", "Toss with Caesar dressing.", "Top with croutons and shaved Parmesan.", "Serve immediately."],
    image: img("1546793665-c74683f339c1"), extraImages: [img("1512621776951-a57141f2eefd"), img("1540189549336-e6e99c3679fe")],
    prepTime: 10, cookTime: 0, servings: 3, difficulty: "Easy"
  },
  {
    id: 53, title: "Watermelon Feta Salad", description: "Refreshing summer salad with sweet watermelon, salty feta, and mint.", category: "Salads",
    ingredients: ["4 cups watermelon cubed", "200g feta cheese", "Fresh mint leaves", "Balsamic glaze", "Olive oil", "Black pepper"],
    steps: ["Cube watermelon into bite-sized pieces.", "Crumble feta over watermelon.", "Tear mint leaves and scatter.", "Drizzle with balsamic glaze and olive oil.", "Crack black pepper over top.", "Serve chilled."],
    image: img("1512621776951-a57141f2eefd"), extraImages: [img("1540189549336-e6e99c3679fe"), img("1546793665-c74683f339c1")],
    prepTime: 10, cookTime: 0, servings: 4, difficulty: "Easy"
  },
  {
    id: 54, title: "Cobb Salad", description: "Classic American salad with chicken, bacon, egg, and blue cheese.", category: "Salads",
    ingredients: ["Mixed greens", "Grilled chicken", "4 strips bacon", "2 hard-boiled eggs", "1 avocado", "Cherry tomatoes", "Blue cheese", "Ranch dressing"],
    steps: ["Arrange greens on a platter.", "Dice chicken, bacon, eggs, avocado.", "Halve cherry tomatoes.", "Arrange all toppings in rows.", "Crumble blue cheese on top.", "Serve with ranch dressing."],
    image: img("1550304943-4f24f54ddde9"), extraImages: [img("1546793665-c74683f339c1"), img("1512621776951-a57141f2eefd")],
    prepTime: 15, cookTime: 15, servings: 4, difficulty: "Easy"
  },
  {
    id: 55, title: "Thai Papaya Salad", description: "Spicy and tangy green papaya salad with peanuts and lime.", category: "Salads",
    ingredients: ["1 green papaya shredded", "Cherry tomatoes", "Green beans", "Peanuts", "Dried shrimp", "Fish sauce", "Lime juice", "Chili", "Palm sugar"],
    steps: ["Shred green papaya finely.", "Pound garlic and chili in mortar.", "Add green beans and tomatoes, bruise lightly.", "Add papaya, fish sauce, lime juice, sugar.", "Toss everything together.", "Top with peanuts and dried shrimp."],
    image: img("1540189549336-e6e99c3679fe"), extraImages: [img("1569718212165-3a8922ada9e5"), img("1512621776951-a57141f2eefd")],
    prepTime: 15, cookTime: 0, servings: 3, difficulty: "Medium"
  },
  {
    id: 56, title: "Caprese Salad", description: "Simple Italian salad of fresh mozzarella, tomatoes, and basil.", category: "Salads",
    ingredients: ["Fresh mozzarella", "4 ripe tomatoes", "Fresh basil", "Extra virgin olive oil", "Balsamic vinegar", "Salt and pepper"],
    steps: ["Slice mozzarella and tomatoes evenly.", "Alternate slices on a platter.", "Tuck basil leaves between slices.", "Drizzle with olive oil and balsamic.", "Season with salt and pepper.", "Serve at room temperature."],
    image: img("1550304943-4f24f54ddde9"), extraImages: [img("1540189549336-e6e99c3679fe"), img("1512621776951-a57141f2eefd")],
    prepTime: 10, cookTime: 0, servings: 4, difficulty: "Easy"
  },
  {
    id: 57, title: "Waldorf Salad", description: "Classic salad with apples, celery, walnuts, and creamy dressing.", category: "Salads",
    ingredients: ["2 apples diced", "2 celery stalks", "½ cup walnuts", "½ cup grapes", "⅓ cup mayonnaise", "1 tbsp lemon juice", "Lettuce leaves"],
    steps: ["Dice apples and toss with lemon juice.", "Slice celery thinly.", "Halve grapes.", "Combine apples, celery, grapes, walnuts.", "Toss with mayonnaise.", "Serve on lettuce leaves."],
    image: img("1512621776951-a57141f2eefd"), extraImages: [img("1546793665-c74683f339c1"), img("1550304943-4f24f54ddde9")],
    prepTime: 15, cookTime: 0, servings: 4, difficulty: "Easy"
  },
  {
    id: 58, title: "Roasted Beet Salad", description: "Earthy roasted beets with goat cheese, arugula, and candied pecans.", category: "Salads",
    ingredients: ["4 beets", "Arugula", "Goat cheese", "Candied pecans", "Balsamic vinaigrette", "Olive oil", "Salt and pepper"],
    steps: ["Wrap beets in foil, roast at 400°F for 45 min.", "Cool and peel beets, cut into wedges.", "Arrange arugula on plates.", "Top with beet wedges.", "Crumble goat cheese over top.", "Add candied pecans.", "Drizzle with balsamic vinaigrette."],
    image: img("1540189549336-e6e99c3679fe"), extraImages: [img("1512621776951-a57141f2eefd"), img("1550304943-4f24f54ddde9")],
    prepTime: 10, cookTime: 45, servings: 4, difficulty: "Medium"
  },
  {
    id: 59, title: "Tuna Niçoise Salad", description: "French composed salad with seared tuna, green beans, and olives.", category: "Salads",
    ingredients: ["2 tuna steaks", "Green beans blanched", "Baby potatoes boiled", "Hard-boiled eggs", "Niçoise olives", "Cherry tomatoes", "Dijon vinaigrette"],
    steps: ["Sear tuna 2 minutes per side for rare.", "Blanch green beans, shock in ice water.", "Boil and halve baby potatoes.", "Arrange all components on a platter.", "Slice tuna and place on top.", "Drizzle with Dijon vinaigrette."],
    image: img("1546793665-c74683f339c1"), extraImages: [img("1550304943-4f24f54ddde9"), img("1540189549336-e6e99c3679fe")],
    prepTime: 15, cookTime: 20, servings: 4, difficulty: "Medium"
  },
  {
    id: 60, title: "Asian Sesame Chicken Salad", description: "Crunchy salad with grilled chicken, mandarin oranges, and sesame dressing.", category: "Salads",
    ingredients: ["Mixed greens", "Grilled chicken sliced", "Mandarin oranges", "Crispy wonton strips", "Sliced almonds", "Sesame dressing", "Green onions"],
    steps: ["Arrange greens in bowls.", "Top with sliced chicken.", "Add mandarin segments.", "Sprinkle wonton strips and almonds.", "Drizzle with sesame dressing.", "Garnish with green onions."],
    image: img("1550304943-4f24f54ddde9"), extraImages: [img("1546793665-c74683f339c1"), img("1512621776951-a57141f2eefd")],
    prepTime: 10, cookTime: 12, servings: 3, difficulty: "Easy"
  },

  // ===== SOUPS (61-70) =====
  {
    id: 61, title: "Classic Tomato Soup", description: "Velvety smooth tomato soup with fresh basil and cream.", category: "Soups",
    ingredients: ["2 lbs tomatoes", "1 onion", "3 garlic cloves", "2 cups vegetable broth", "½ cup heavy cream", "Fresh basil", "Olive oil", "Salt and pepper"],
    steps: ["Halve tomatoes, roast at 400°F for 25 min.", "Sauté onion and garlic in olive oil.", "Add roasted tomatoes and broth.", "Simmer 15 minutes.", "Blend until smooth.", "Stir in cream.", "Season and garnish with basil."],
    image: img("1547592166-23ac45744acd"), extraImages: [img("1476718406336-bb5a9690ee2a"), img("1604152135912-04a022e23696")],
    prepTime: 10, cookTime: 40, servings: 4, difficulty: "Easy"
  },
  {
    id: 62, title: "French Onion Soup", description: "Caramelized onion soup topped with crusty bread and melted Gruyère.", category: "Soups",
    ingredients: ["4 large onions", "3 tbsp butter", "1 cup white wine", "4 cups beef broth", "French bread slices", "1 cup Gruyère", "Fresh thyme"],
    steps: ["Slice onions thinly.", "Cook in butter over low heat 40 minutes until deeply caramelized.", "Add wine, simmer until reduced.", "Add broth and thyme, simmer 20 minutes.", "Ladle into oven-safe bowls.", "Top with bread and Gruyère.", "Broil until cheese is bubbly."],
    image: img("1476718406336-bb5a9690ee2a"), extraImages: [img("1547592166-23ac45744acd"), img("1604152135912-04a022e23696")],
    prepTime: 10, cookTime: 65, servings: 4, difficulty: "Medium"
  },
  {
    id: 63, title: "Chicken Noodle Soup", description: "Comforting homemade chicken noodle soup with tender vegetables.", category: "Soups",
    ingredients: ["1 whole chicken", "8 cups water", "3 carrots", "3 celery stalks", "1 onion", "Egg noodles", "Fresh dill", "Salt and pepper"],
    steps: ["Simmer chicken in water for 1 hour.", "Remove chicken, shred meat.", "Dice carrots, celery, onion.", "Add vegetables to broth, cook 15 min.", "Add noodles, cook until tender.", "Return shredded chicken.", "Season and garnish with dill."],
    image: img("1604152135912-04a022e23696"), extraImages: [img("1547592166-23ac45744acd"), img("1476718406336-bb5a9690ee2a")],
    prepTime: 15, cookTime: 80, servings: 6, difficulty: "Easy"
  },
  {
    id: 64, title: "Butternut Squash Soup", description: "Creamy butternut squash soup with nutmeg and toasted seeds.", category: "Soups",
    ingredients: ["1 butternut squash", "1 onion", "2 garlic cloves", "3 cups vegetable broth", "½ cup cream", "Nutmeg", "Pumpkin seeds", "Olive oil"],
    steps: ["Peel and cube squash.", "Sauté onion and garlic.", "Add squash and broth, simmer 20 min.", "Blend until smooth.", "Stir in cream and nutmeg.", "Toast pumpkin seeds.", "Serve soup topped with seeds."],
    image: img("1547592166-23ac45744acd"), extraImages: [img("1476718406336-bb5a9690ee2a"), img("1604152135912-04a022e23696")],
    prepTime: 15, cookTime: 30, servings: 4, difficulty: "Easy"
  },
  {
    id: 65, title: "Minestrone Soup", description: "Hearty Italian vegetable soup with pasta and cannellini beans.", category: "Soups",
    ingredients: ["2 carrots", "2 celery stalks", "1 zucchini", "1 can cannellini beans", "1 can diced tomatoes", "Small pasta", "Vegetable broth", "Italian seasoning", "Parmesan"],
    steps: ["Dice all vegetables.", "Sauté carrots, celery in olive oil.", "Add zucchini, tomatoes, beans, broth.", "Simmer 15 minutes.", "Add pasta, cook until tender.", "Season with Italian herbs.", "Serve with grated Parmesan."],
    image: img("1604152135912-04a022e23696"), extraImages: [img("1547592166-23ac45744acd"), img("1476718406336-bb5a9690ee2a")],
    prepTime: 15, cookTime: 30, servings: 6, difficulty: "Easy"
  },
  {
    id: 66, title: "Clam Chowder", description: "Rich New England clam chowder with potatoes and bacon.", category: "Soups",
    ingredients: ["2 cans clams", "4 slices bacon", "2 potatoes diced", "1 onion", "2 cups milk", "1 cup cream", "2 tbsp flour", "Fresh thyme"],
    steps: ["Cook bacon until crispy, crumble.", "Sauté onion in bacon fat.", "Add flour, cook 1 minute.", "Add potatoes, clam juice, milk.", "Simmer until potatoes are tender.", "Add clams and cream.", "Season and serve with crumbled bacon."],
    image: img("1476718406336-bb5a9690ee2a"), extraImages: [img("1604152135912-04a022e23696"), img("1547592166-23ac45744acd")],
    prepTime: 10, cookTime: 30, servings: 4, difficulty: "Medium"
  },
  {
    id: 67, title: "Lentil Soup", description: "Nutritious and warming red lentil soup with cumin and lemon.", category: "Soups",
    ingredients: ["1½ cups red lentils", "1 onion", "3 garlic cloves", "1 tsp cumin", "½ tsp turmeric", "4 cups broth", "Lemon juice", "Olive oil"],
    steps: ["Sauté onion and garlic in olive oil.", "Add cumin and turmeric, cook 1 minute.", "Add lentils and broth.", "Simmer 20-25 minutes until lentils are soft.", "Blend partially for texture.", "Season with lemon juice, salt, pepper.", "Drizzle with olive oil to serve."],
    image: img("1547592166-23ac45744acd"), extraImages: [img("1476718406336-bb5a9690ee2a"), img("1604152135912-04a022e23696")],
    prepTime: 10, cookTime: 25, servings: 4, difficulty: "Easy"
  },
  {
    id: 68, title: "Miso Soup", description: "Traditional Japanese miso soup with tofu, seaweed, and scallions.", category: "Soups",
    ingredients: ["4 cups dashi stock", "3 tbsp miso paste", "Silken tofu cubed", "Wakame seaweed", "Green onions", "Sesame seeds"],
    steps: ["Bring dashi to a simmer.", "Soak wakame in water until soft.", "Add tofu cubes to broth.", "Remove from heat.", "Dissolve miso paste in a ladleful of broth.", "Stir miso back into soup.", "Serve with scallions and sesame seeds."],
    image: img("1547592166-23ac45744acd"), extraImages: [img("1569718212165-3a8922ada9e5"), img("1476718406336-bb5a9690ee2a")],
    prepTime: 5, cookTime: 10, servings: 4, difficulty: "Easy"
  },
  {
    id: 69, title: "Lobster Bisque", description: "Luxurious creamy lobster soup with sherry and tarragon.", category: "Soups",
    ingredients: ["2 lobster tails", "2 tbsp butter", "1 onion", "1 carrot", "2 tbsp tomato paste", "¼ cup sherry", "2 cups cream", "Tarragon", "Paprika"],
    steps: ["Cook lobster tails, remove meat and chop.", "Sauté shells with onion and carrot.", "Add tomato paste and paprika.", "Deglaze with sherry.", "Add broth, simmer 30 minutes.", "Strain, add cream.", "Return lobster meat to soup.", "Garnish with tarragon."],
    image: img("1476718406336-bb5a9690ee2a"), extraImages: [img("1547592166-23ac45744acd"), img("1604152135912-04a022e23696")],
    prepTime: 15, cookTime: 45, servings: 4, difficulty: "Hard"
  },
  {
    id: 70, title: "Gazpacho", description: "Chilled Spanish tomato soup — refreshing and vibrant.", category: "Soups",
    ingredients: ["6 ripe tomatoes", "1 cucumber", "1 red pepper", "1 garlic clove", "3 tbsp olive oil", "2 tbsp red wine vinegar", "Stale bread", "Salt"],
    steps: ["Roughly chop all vegetables.", "Soak bread in water.", "Blend vegetables, bread, olive oil, and vinegar.", "Season with salt.", "Strain for smooth texture if desired.", "Refrigerate at least 2 hours.", "Serve chilled with diced vegetables on top."],
    image: img("1547592166-23ac45744acd"), extraImages: [img("1604152135912-04a022e23696"), img("1476718406336-bb5a9690ee2a")],
    prepTime: 15, cookTime: 0, servings: 4, difficulty: "Easy"
  },

  // ===== APPETIZERS (71-80) =====
  {
    id: 71, title: "Bruschetta", description: "Toasted bread topped with fresh tomato, basil, and garlic.", category: "Appetizers",
    ingredients: ["1 baguette", "4 tomatoes diced", "Fresh basil", "3 garlic cloves", "Olive oil", "Balsamic vinegar", "Salt and pepper"],
    steps: ["Slice baguette, brush with olive oil.", "Toast until golden.", "Rub with garlic clove.", "Mix diced tomatoes, basil, olive oil, vinegar.", "Season with salt and pepper.", "Spoon mixture onto toasted bread.", "Serve immediately."],
    image: img("1572695157366-5e585ab2b69f"), extraImages: [img("1541014741-ef18e6753048"), img("1509722747-c0a6bff435e0")],
    prepTime: 10, cookTime: 5, servings: 6, difficulty: "Easy"
  },
  {
    id: 72, title: "Stuffed Mushrooms", description: "Baked mushroom caps filled with herbed cream cheese and breadcrumbs.", category: "Appetizers",
    ingredients: ["24 button mushrooms", "8 oz cream cheese", "¼ cup breadcrumbs", "2 garlic cloves minced", "Fresh parsley", "Parmesan", "Olive oil"],
    steps: ["Remove mushroom stems, hollow caps.", "Mix cream cheese, garlic, parsley, Parmesan.", "Fill mushroom caps with mixture.", "Top with breadcrumbs.", "Drizzle with olive oil.", "Bake at 375°F for 20 minutes.", "Serve warm."],
    image: img("1510693206972-df098062cb71"), extraImages: [img("1572695157366-5e585ab2b69f"), img("1541014741-ef18e6753048")],
    prepTime: 15, cookTime: 20, servings: 8, difficulty: "Easy"
  },
  {
    id: 73, title: "Shrimp Cocktail", description: "Chilled poached shrimp with zesty cocktail sauce.", category: "Appetizers",
    ingredients: ["1 lb large shrimp", "Lemon slices", "Bay leaves", "Cocktail sauce", "Horseradish", "Lemon wedges", "Parsley"],
    steps: ["Bring water to boil with lemon and bay leaves.", "Add shrimp, cook 2-3 minutes until pink.", "Transfer to ice bath immediately.", "Make cocktail sauce: ketchup, horseradish, lemon.", "Arrange shrimp on ice.", "Serve with cocktail sauce and lemon wedges."],
    image: img("1519708227418-b060153beabd"), extraImages: [img("1572695157366-5e585ab2b69f"), img("1541014741-ef18e6753048")],
    prepTime: 10, cookTime: 5, servings: 6, difficulty: "Easy"
  },
  {
    id: 74, title: "Spinach Artichoke Dip", description: "Warm and cheesy spinach artichoke dip served with tortilla chips.", category: "Appetizers",
    ingredients: ["10 oz frozen spinach", "1 can artichoke hearts", "8 oz cream cheese", "½ cup sour cream", "1 cup mozzarella", "½ cup Parmesan", "Garlic", "Tortilla chips"],
    steps: ["Thaw and drain spinach well.", "Chop artichoke hearts.", "Mix cream cheese, sour cream, cheeses.", "Add spinach, artichokes, garlic.", "Transfer to baking dish.", "Bake at 350°F for 25 minutes.", "Serve hot with chips."],
    image: img("1541014741-ef18e6753048"), extraImages: [img("1572695157366-5e585ab2b69f"), img("1510693206972-df098062cb71")],
    prepTime: 10, cookTime: 25, servings: 8, difficulty: "Easy"
  },
  {
    id: 75, title: "Crispy Spring Rolls", description: "Golden fried spring rolls with sweet chili dipping sauce.", category: "Appetizers",
    ingredients: ["Spring roll wrappers", "200g glass noodles", "1 carrot shredded", "1 cup cabbage shredded", "Soy sauce", "Sesame oil", "Sweet chili sauce", "Oil for frying"],
    steps: ["Soak noodles, drain and chop.", "Mix with vegetables, soy sauce, sesame oil.", "Place filling on wrapper, roll tightly.", "Seal with water.", "Fry in hot oil until golden.", "Drain on paper towels.", "Serve with sweet chili sauce."],
    image: img("1569718212165-3a8922ada9e5"), extraImages: [img("1572695157366-5e585ab2b69f"), img("1541014741-ef18e6753048")],
    prepTime: 20, cookTime: 10, servings: 6, difficulty: "Medium"
  },
  {
    id: 76, title: "Deviled Eggs", description: "Classic deviled eggs with a smooth creamy filling and paprika.", category: "Appetizers",
    ingredients: ["12 eggs", "¼ cup mayonnaise", "1 tsp mustard", "1 tbsp relish", "Salt and pepper", "Paprika", "Fresh chives"],
    steps: ["Hard-boil eggs, cool and peel.", "Halve eggs, remove yolks.", "Mash yolks with mayo, mustard, relish.", "Season with salt and pepper.", "Pipe or spoon filling into whites.", "Sprinkle with paprika.", "Garnish with chives."],
    image: img("1482049016688-2d3e1b311543"), extraImages: [img("1572695157366-5e585ab2b69f"), img("1541014741-ef18e6753048")],
    prepTime: 20, cookTime: 12, servings: 12, difficulty: "Easy"
  },
  {
    id: 77, title: "Caprese Skewers", description: "Cherry tomato, mozzarella, and basil skewers with balsamic glaze.", category: "Appetizers",
    ingredients: ["Cherry tomatoes", "Mini mozzarella balls", "Fresh basil leaves", "Balsamic glaze", "Olive oil", "Salt and pepper", "Wooden skewers"],
    steps: ["Thread tomato, basil, and mozzarella on skewers.", "Arrange on a platter.", "Drizzle with olive oil.", "Season with salt and pepper.", "Drizzle balsamic glaze over top.", "Serve at room temperature."],
    image: img("1550304943-4f24f54ddde9"), extraImages: [img("1572695157366-5e585ab2b69f"), img("1509722747-c0a6bff435e0")],
    prepTime: 15, cookTime: 0, servings: 8, difficulty: "Easy"
  },
  {
    id: 78, title: "Guacamole", description: "Fresh chunky guacamole with lime, cilantro, and jalapeño.", category: "Appetizers",
    ingredients: ["3 ripe avocados", "1 lime juiced", "½ red onion diced", "1 jalapeño minced", "Fresh cilantro", "1 tomato diced", "Salt", "Tortilla chips"],
    steps: ["Halve avocados, remove pit.", "Mash to desired consistency.", "Add lime juice, onion, jalapeño.", "Fold in tomato and cilantro.", "Season with salt.", "Serve immediately with chips."],
    image: img("1565299585-bdd6a61a3a17"), extraImages: [img("1551504734-5ee1c4a1479b"), img("1541014741-ef18e6753048")],
    prepTime: 10, cookTime: 0, servings: 6, difficulty: "Easy"
  },
  {
    id: 79, title: "Baked Brie with Honey", description: "Warm baked brie topped with honey, walnuts, and fresh thyme.", category: "Appetizers",
    ingredients: ["1 wheel brie cheese", "3 tbsp honey", "¼ cup walnuts", "Fresh thyme", "Crackers", "Sliced baguette"],
    steps: ["Preheat oven to 350°F.", "Place brie on parchment-lined baking sheet.", "Score the top of the rind.", "Bake 12-15 minutes until soft.", "Drizzle with honey.", "Top with walnuts and thyme.", "Serve with crackers and bread."],
    image: img("1509722747-c0a6bff435e0"), extraImages: [img("1572695157366-5e585ab2b69f"), img("1510693206972-df098062cb71")],
    prepTime: 5, cookTime: 15, servings: 6, difficulty: "Easy"
  },
  {
    id: 80, title: "Hummus Platter", description: "Creamy homemade hummus served with pita and crudités.", category: "Appetizers",
    ingredients: ["1 can chickpeas", "3 tbsp tahini", "2 garlic cloves", "Lemon juice", "Olive oil", "Paprika", "Cumin", "Pita bread", "Vegetables"],
    steps: ["Blend chickpeas, tahini, garlic, lemon juice.", "Add olive oil while blending until smooth.", "Season with salt and cumin.", "Transfer to serving bowl.", "Drizzle with olive oil and paprika.", "Serve with pita and fresh vegetables."],
    image: img("1558024920-418585b5e222"), extraImages: [img("1541014741-ef18e6753048"), img("1572695157366-5e585ab2b69f")],
    prepTime: 10, cookTime: 0, servings: 6, difficulty: "Easy"
  },

  // ===== DRINKS (81-85) =====
  {
    id: 81, title: "Mango Lassi", description: "Creamy Indian mango yogurt drink — sweet and refreshing.", category: "Drinks",
    ingredients: ["1 cup mango pulp", "1 cup yogurt", "½ cup milk", "2 tbsp sugar", "Pinch cardamom", "Ice cubes"],
    steps: ["Combine mango, yogurt, milk, sugar in blender.", "Add cardamom and ice.", "Blend until smooth and frothy.", "Pour into glasses.", "Serve chilled."],
    image: img("1494597564530-871f2b93ac55"), extraImages: [img("1590301157890-4810ed352733"), img("1488477181946-6428a0291777")],
    prepTime: 5, cookTime: 0, servings: 2, difficulty: "Easy"
  },
  {
    id: 82, title: "Classic Mojito", description: "Refreshing Cuban cocktail with lime, mint, and sparkling water.", category: "Drinks",
    ingredients: ["2 oz white rum", "1 oz lime juice", "2 tsp sugar", "Fresh mint leaves", "Soda water", "Ice", "Lime wedge"],
    steps: ["Muddle mint with sugar and lime juice.", "Add rum and ice.", "Top with soda water.", "Stir gently.", "Garnish with mint and lime wedge.", "Serve immediately."],
    image: img("1551538827-9c037cb4f32a"), extraImages: [img("1494597564530-871f2b93ac55"), img("1590301157890-4810ed352733")],
    prepTime: 5, cookTime: 0, servings: 1, difficulty: "Easy"
  },
  {
    id: 83, title: "Matcha Latte", description: "Smooth and creamy Japanese matcha green tea latte.", category: "Drinks",
    ingredients: ["2 tsp matcha powder", "2 tbsp hot water", "1 cup steamed milk", "1 tbsp honey", "Ice (optional)"],
    steps: ["Sift matcha into a cup.", "Add hot water, whisk until smooth.", "Steam and froth milk.", "Pour milk over matcha.", "Sweeten with honey.", "Serve hot or over ice."],
    image: img("1590301157890-4810ed352733"), extraImages: [img("1494597564530-871f2b93ac55"), img("1551538827-9c037cb4f32a")],
    prepTime: 3, cookTime: 2, servings: 1, difficulty: "Easy"
  },
  {
    id: 84, title: "Strawberry Lemonade", description: "Fresh homemade lemonade blended with sweet strawberries.", category: "Drinks",
    ingredients: ["1 cup strawberries", "1 cup lemon juice", "¾ cup sugar", "4 cups cold water", "Ice", "Lemon slices", "Mint"],
    steps: ["Make simple syrup: dissolve sugar in 1 cup hot water.", "Blend strawberries until smooth.", "Combine lemon juice, strawberry puree, syrup.", "Add cold water, stir well.", "Serve over ice.", "Garnish with lemon slices and mint."],
    image: img("1494597564530-871f2b93ac55"), extraImages: [img("1551538827-9c037cb4f32a"), img("1590301157890-4810ed352733")],
    prepTime: 10, cookTime: 5, servings: 4, difficulty: "Easy"
  },
  {
    id: 85, title: "Hot Chocolate", description: "Rich and velvety hot chocolate topped with whipped cream.", category: "Drinks",
    ingredients: ["2 cups whole milk", "⅓ cup dark chocolate chips", "2 tbsp cocoa powder", "2 tbsp sugar", "Whipped cream", "Marshmallows", "Pinch salt"],
    steps: ["Heat milk in a saucepan over medium heat.", "Add chocolate chips and cocoa powder.", "Whisk until chocolate is melted and smooth.", "Add sugar and salt.", "Pour into mugs.", "Top with whipped cream and marshmallows."],
    image: img("1551538827-9c037cb4f32a"), extraImages: [img("1590301157890-4810ed352733"), img("1494597564530-871f2b93ac55")],
    prepTime: 2, cookTime: 5, servings: 2, difficulty: "Easy"
  },

  // ===== VEGETARIAN (86-95) =====
  {
    id: 86, title: "Vegetable Pad Thai", description: "Stir-fried rice noodles with vegetables, peanuts, and tamarind sauce.", category: "Vegetarian",
    ingredients: ["200g rice noodles", "2 eggs", "Bean sprouts", "Carrots", "Green onions", "Peanuts", "Tamarind paste", "Soy sauce", "Lime"],
    steps: ["Soak noodles in hot water until soft.", "Scramble eggs in a wok.", "Add vegetables, stir-fry 2 minutes.", "Add noodles, tamarind, soy sauce.", "Toss until well coated.", "Top with peanuts and bean sprouts.", "Serve with lime wedges."],
    image: img("1569718212165-3a8922ada9e5"), extraImages: [img("1603133872878-684f208fb84b"), img("1551183053-d0a57e3b1f0c")],
    prepTime: 15, cookTime: 10, servings: 3, difficulty: "Medium"
  },
  {
    id: 87, title: "Eggplant Parmesan", description: "Breaded eggplant slices baked with marinara and melted mozzarella.", category: "Vegetarian",
    ingredients: ["2 eggplants", "2 cups marinara sauce", "2 cups mozzarella", "1 cup breadcrumbs", "½ cup Parmesan", "2 eggs", "Olive oil", "Fresh basil"],
    steps: ["Slice eggplant ½ inch thick, salt and rest 30 min.", "Pat dry, dip in egg then breadcrumbs.", "Fry until golden on both sides.", "Layer in baking dish: sauce, eggplant, cheese.", "Repeat layers.", "Bake at 375°F for 25 minutes.", "Garnish with basil."],
    image: img("1596797038530-2c107229654b"), extraImages: [img("1551183053-d0a57e3b1f0c"), img("1563379926898-05f4575a45d8")],
    prepTime: 40, cookTime: 35, servings: 6, difficulty: "Medium"
  },
  {
    id: 88, title: "Vegetable Curry", description: "Creamy coconut vegetable curry with aromatic spices.", category: "Vegetarian",
    ingredients: ["1 can coconut milk", "2 potatoes", "1 cauliflower head", "1 can chickpeas", "Curry paste", "Spinach", "Onion", "Garlic", "Ginger"],
    steps: ["Sauté onion, garlic, ginger.", "Add curry paste, cook 1 minute.", "Add potatoes and cauliflower, stir.", "Pour in coconut milk, simmer 20 min.", "Add chickpeas and spinach.", "Cook until spinach wilts.", "Serve over basmati rice."],
    image: img("1585937421612-70a008356fbe"), extraImages: [img("1455619452474-d2be8b1e70cd"), img("1603894584373-5ac82b2ae7d3")],
    prepTime: 15, cookTime: 25, servings: 4, difficulty: "Easy"
  },
  {
    id: 89, title: "Margherita Flatbread", description: "Quick flatbread pizza with tomato, mozzarella, and fresh basil.", category: "Vegetarian",
    ingredients: ["Naan or flatbread", "Marinara sauce", "Fresh mozzarella", "Cherry tomatoes", "Fresh basil", "Olive oil", "Garlic powder"],
    steps: ["Preheat oven to 425°F.", "Place flatbread on baking sheet.", "Spread marinara sauce.", "Add torn mozzarella and halved tomatoes.", "Sprinkle with garlic powder.", "Bake 8-10 minutes.", "Top with fresh basil and olive oil."],
    image: img("1565299624946-b28f40a0ae38"), extraImages: [img("1509722747-c0a6bff435e0"), img("1563379926898-05f4575a45d8")],
    prepTime: 5, cookTime: 10, servings: 2, difficulty: "Easy"
  },
  {
    id: 90, title: "Stuffed Zucchini Boats", description: "Baked zucchini halves filled with quinoa, tomatoes, and cheese.", category: "Vegetarian",
    ingredients: ["4 zucchini", "1 cup cooked quinoa", "1 cup diced tomatoes", "½ cup corn", "1 cup shredded cheese", "Italian seasoning", "Olive oil"],
    steps: ["Halve zucchini lengthwise, scoop out centers.", "Mix quinoa, tomatoes, corn, half the cheese.", "Season with Italian herbs.", "Fill zucchini halves.", "Top with remaining cheese.", "Bake at 375°F for 25 minutes.", "Serve hot."],
    image: img("1596797038530-2c107229654b"), extraImages: [img("1551183053-d0a57e3b1f0c"), img("1512621776951-a57141f2eefd")],
    prepTime: 15, cookTime: 25, servings: 4, difficulty: "Easy"
  },
  {
    id: 91, title: "Mushroom Stroganoff", description: "Creamy mushroom stroganoff served over egg noodles.", category: "Vegetarian",
    ingredients: ["500g mixed mushrooms", "1 onion", "3 garlic cloves", "1 cup sour cream", "2 tbsp butter", "1 cup vegetable broth", "Egg noodles", "Paprika", "Fresh parsley"],
    steps: ["Cook egg noodles al dente.", "Sauté onion and garlic in butter.", "Add mushrooms, cook until golden.", "Sprinkle with paprika and flour.", "Add broth, simmer until thickened.", "Remove from heat, stir in sour cream.", "Serve over noodles with parsley."],
    image: img("1510693206972-df098062cb71"), extraImages: [img("1476124369491-e7addf5db371"), img("1551183053-d0a57e3b1f0c")],
    prepTime: 10, cookTime: 20, servings: 4, difficulty: "Easy"
  },
  {
    id: 92, title: "Roasted Cauliflower Steaks", description: "Thick-cut cauliflower steaks roasted with herbs and tahini drizzle.", category: "Vegetarian",
    ingredients: ["1 large cauliflower", "3 tbsp olive oil", "Cumin", "Smoked paprika", "Garlic powder", "Tahini", "Lemon juice", "Fresh parsley"],
    steps: ["Slice cauliflower into 1-inch thick steaks.", "Brush with olive oil, season with spices.", "Roast at 425°F for 25-30 minutes.", "Flip halfway through.", "Make tahini sauce: thin tahini with lemon and water.", "Drizzle over roasted cauliflower.", "Garnish with parsley."],
    image: img("1512621776951-a57141f2eefd"), extraImages: [img("1546793665-c74683f339c1"), img("1550304943-4f24f54ddde9")],
    prepTime: 10, cookTime: 30, servings: 2, difficulty: "Easy"
  },
  {
    id: 93, title: "Spanakopita", description: "Flaky phyllo pastry filled with spinach and feta cheese.", category: "Vegetarian",
    ingredients: ["1 lb spinach", "200g feta cheese", "1 onion", "3 eggs", "Phyllo dough", "Butter melted", "Dill", "Nutmeg"],
    steps: ["Sauté onion, add spinach until wilted.", "Cool and squeeze out moisture.", "Mix with feta, eggs, dill, nutmeg.", "Brush phyllo sheets with butter, layer.", "Spread filling, top with more buttered phyllo.", "Score top into diamonds.", "Bake at 350°F for 40 minutes until golden."],
    image: img("1541014741-ef18e6753048"), extraImages: [img("1510693206972-df098062cb71"), img("1572695157366-5e585ab2b69f")],
    prepTime: 25, cookTime: 40, servings: 8, difficulty: "Medium"
  },
  {
    id: 94, title: "Sweet Potato Buddha Bowl", description: "Nourishing bowl with roasted sweet potato, quinoa, and tahini.", category: "Vegetarian",
    ingredients: ["2 sweet potatoes", "1 cup quinoa", "1 can chickpeas", "Kale", "Avocado", "Tahini", "Lemon", "Olive oil"],
    steps: ["Cube sweet potatoes, roast at 400°F for 25 min.", "Cook quinoa.", "Roast chickpeas with cumin and paprika.", "Massage kale with olive oil.", "Assemble bowls: quinoa, sweet potato, chickpeas, kale.", "Add sliced avocado.", "Drizzle with lemon tahini dressing."],
    image: img("1512621776951-a57141f2eefd"), extraImages: [img("1550304943-4f24f54ddde9"), img("1546793665-c74683f339c1")],
    prepTime: 15, cookTime: 25, servings: 3, difficulty: "Easy"
  },
  {
    id: 95, title: "Vegetable Fried Rice", description: "Quick and easy vegetable fried rice with soy sauce and sesame.", category: "Vegetarian",
    ingredients: ["3 cups cooked rice (day-old)", "2 eggs", "1 cup mixed vegetables", "3 tbsp soy sauce", "1 tbsp sesame oil", "Green onions", "Garlic", "Ginger"],
    steps: ["Heat sesame oil in a wok over high heat.", "Scramble eggs, set aside.", "Sauté garlic, ginger, and vegetables.", "Add cold rice, stir-fry 3-4 minutes.", "Add soy sauce, toss well.", "Return eggs to wok.", "Garnish with green onions."],
    image: img("1603133872878-684f208fb84b"), extraImages: [img("1569718212165-3a8922ada9e5"), img("1553163147-622ab57be1c7")],
    prepTime: 5, cookTime: 10, servings: 3, difficulty: "Easy"
  },

  // ===== SEAFOOD (96-100) =====
  {
    id: 96, title: "Garlic Butter Shrimp", description: "Succulent shrimp sautéed in garlic butter with white wine.", category: "Seafood",
    ingredients: ["1 lb large shrimp", "4 tbsp butter", "5 garlic cloves", "¼ cup white wine", "Red pepper flakes", "Parsley", "Lemon juice"],
    steps: ["Peel and devein shrimp.", "Melt butter, sauté minced garlic.", "Add shrimp, cook 2 minutes per side.", "Add white wine and pepper flakes.", "Squeeze in lemon juice.", "Garnish with parsley.", "Serve with crusty bread."],
    image: img("1519708227418-b060153beabd"), extraImages: [img("1563379926898-05f4575a45d8"), img("1467003909585-2f8a72700288")],
    prepTime: 10, cookTime: 8, servings: 3, difficulty: "Easy"
  },
  {
    id: 97, title: "Tuna Poke Bowl", description: "Hawaiian-style raw tuna bowl with rice, avocado, and soy dressing.", category: "Seafood",
    ingredients: ["300g sushi-grade tuna", "2 cups sushi rice", "1 avocado", "Cucumber", "Edamame", "Soy sauce", "Sesame oil", "Rice vinegar", "Nori strips"],
    steps: ["Cook sushi rice, season with rice vinegar.", "Cube tuna into bite-sized pieces.", "Marinate in soy sauce and sesame oil.", "Assemble bowls with rice base.", "Top with tuna, avocado, cucumber, edamame.", "Garnish with nori strips and sesame seeds."],
    image: img("1553163147-622ab57be1c7"), extraImages: [img("1569718212165-3a8922ada9e5"), img("1519708227418-b060153beabd")],
    prepTime: 15, cookTime: 20, servings: 2, difficulty: "Medium"
  },
  {
    id: 98, title: "Pan-Seared Sea Bass", description: "Crispy-skinned sea bass with lemon caper butter sauce.", category: "Seafood",
    ingredients: ["4 sea bass fillets", "3 tbsp butter", "2 tbsp capers", "Lemon juice", "Fresh parsley", "Olive oil", "Salt and pepper"],
    steps: ["Score fish skin, season with salt and pepper.", "Heat olive oil in a pan over high heat.", "Place fish skin-side down, press flat.", "Cook 4 minutes until skin is crispy.", "Flip, cook 2 more minutes.", "Add butter, capers, and lemon juice.", "Baste fish with pan sauce, serve."],
    image: img("1467003909585-2f8a72700288"), extraImages: [img("1519708227418-b060153beabd"), img("1504674900247-0877df9cc836")],
    prepTime: 5, cookTime: 10, servings: 4, difficulty: "Medium"
  },
  {
    id: 99, title: "Seafood Paella", description: "Spanish rice dish loaded with shrimp, mussels, and saffron.", category: "Seafood",
    ingredients: ["2 cups bomba rice", "½ lb shrimp", "½ lb mussels", "½ lb squid", "Saffron threads", "4 cups fish stock", "1 onion", "1 red pepper", "Peas", "Paprika"],
    steps: ["Toast saffron in stock.", "Sauté onion and pepper in olive oil.", "Add rice and paprika, toast 2 minutes.", "Pour in saffron stock.", "Arrange seafood on top.", "Cook without stirring 18-20 minutes.", "Let rest 5 minutes.", "Serve with lemon wedges."],
    image: img("1519708227418-b060153beabd"), extraImages: [img("1467003909585-2f8a72700288"), img("1504674900247-0877df9cc836")],
    prepTime: 20, cookTime: 25, servings: 6, difficulty: "Hard"
  },
  {
    id: 100, title: "Coconut Curry Mussels", description: "Steamed mussels in fragrant coconut curry broth.", category: "Seafood",
    ingredients: ["2 lbs mussels", "1 can coconut milk", "2 tbsp red curry paste", "2 garlic cloves", "Ginger", "Lime juice", "Cilantro", "Crusty bread"],
    steps: ["Clean and debeard mussels.", "Sauté garlic and ginger.", "Add curry paste, cook 1 minute.", "Pour in coconut milk, bring to simmer.", "Add mussels, cover and cook 5-6 minutes.", "Discard any unopened mussels.", "Add lime juice and cilantro.", "Serve with crusty bread."],
    image: img("1504674900247-0877df9cc836"), extraImages: [img("1519708227418-b060153beabd"), img("1467003909585-2f8a72700288")],
    prepTime: 10, cookTime: 12, servings: 4, difficulty: "Medium"
  },
];
