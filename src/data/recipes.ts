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
  // ===== BREAKFAST (1-12) =====
  {
    id: 1, title: "Classic Fluffy Pancakes", description: "These classic fluffy pancakes are the ultimate weekend breakfast treat — golden on the outside, soft and airy on the inside. Made from a simple batter of flour, eggs, milk, and butter, they come together in under 30 minutes. The secret to extra-fluffy pancakes is not overmixing the batter; a few lumps are perfectly fine. Serve them stacked high with a drizzle of warm maple syrup, a pat of butter, and a handful of fresh blueberries or strawberries. Whether you're cooking for the family on a lazy Saturday morning or meal-prepping for the week, these pancakes never disappoint. They also freeze beautifully — just pop them in the toaster to reheat.", category: "Breakfast",
    ingredients: ["2 cups all-purpose flour", "2 tbsp sugar", "2 tsp baking powder", "1 tsp salt", "2 eggs", "1¾ cups milk", "¼ cup melted butter", "1 tsp vanilla extract"],
    steps: ["Mix dry ingredients in a bowl.", "Whisk eggs, milk, butter, and vanilla separately.", "Combine wet and dry ingredients until just mixed.", "Heat a griddle over medium heat, grease lightly.", "Pour ¼ cup batter per pancake, cook until bubbles form.", "Flip and cook until golden brown.", "Serve with maple syrup and berries."],
    image: img("1565299624946-b28f40a0ae38"), extraImages: [img("1528207776546-365bb710ee93"), img("1567620905732-2d1ec7ab7445"), img("1506084868230-bb9d95c24759")],
    prepTime: 10, cookTime: 15, servings: 4, difficulty: "Easy"
  },
  {
    id: 2, title: "Avocado Toast with Poached Eggs", description: "Avocado toast with poached eggs is the iconic modern breakfast that's as nutritious as it is photogenic. Crispy sourdough bread provides the perfect crunchy base for creamy mashed avocado seasoned with lemon juice, salt, and a kick of red pepper flakes. The crowning glory is a perfectly poached egg with a runny golden yolk that creates a luscious sauce when broken. This recipe is packed with healthy fats, protein, and fiber to keep you energized all morning. It takes just 15 minutes from start to plate, making it ideal for busy mornings when you still want something special. Add everything bagel seasoning or microgreens for extra flair.", category: "Breakfast",
    ingredients: ["2 slices sourdough bread", "1 ripe avocado", "2 eggs", "1 tbsp white vinegar", "Salt and pepper", "Red pepper flakes", "Lemon juice"],
    steps: ["Toast bread until golden and crispy.", "Mash avocado with lemon juice, salt, and pepper.", "Bring water to a gentle simmer, add vinegar.", "Create a whirlpool, gently drop eggs in.", "Poach for 3-4 minutes.", "Spread avocado on toast, top with eggs.", "Sprinkle with red pepper flakes."],
    image: img("1525351484163-7529414344d8"), extraImages: [img("1482049016688-2d3e1b311543"), img("1484723091739-30a097e8f929")],
    prepTime: 5, cookTime: 10, servings: 2, difficulty: "Medium"
  },
  {
    id: 3, title: "Berry Smoothie Bowl", description: "Start your day with a vibrant berry smoothie bowl that's as beautiful as it is delicious. This thick, creamy blend of frozen mixed berries, banana, and Greek yogurt creates a gorgeous purple base that's loaded with antioxidants, vitamins, and probiotics. Unlike a regular smoothie you drink, a smoothie bowl is thick enough to eat with a spoon, making it the perfect canvas for your favorite toppings. Layer on crunchy granola, fresh berries, chia seeds, sliced banana, coconut flakes, and a drizzle of honey for a breakfast that looks like it came from a trendy café. Ready in just 5 minutes with zero cooking required — perfect for hot summer mornings or post-workout fuel.", category: "Breakfast",
    ingredients: ["1 cup frozen mixed berries", "1 frozen banana", "½ cup Greek yogurt", "¼ cup almond milk", "Granola", "Fresh berries", "Chia seeds", "Honey"],
    steps: ["Blend frozen berries, banana, yogurt, and almond milk until thick.", "Pour into a bowl.", "Top with granola, fresh berries, chia seeds.", "Drizzle with honey.", "Serve immediately."],
    image: img("1590301157890-4810ed352733"), extraImages: [img("1511690743698-d9d18f7e20f1"), img("1494597564530-871f2b93ac55")],
    prepTime: 5, cookTime: 0, servings: 1, difficulty: "Easy"
  },
  {
    id: 4, title: "French Toast with Cinnamon", description: "Golden French toast with warm cinnamon is the breakfast comfort food you'll crave every weekend. Thick slices of bread are soaked in a rich custard of eggs, milk, vanilla, and cinnamon, then pan-fried in butter until perfectly golden and slightly crispy on the outside while remaining custardy and tender inside. The warm cinnamon aroma fills your kitchen and makes mornings feel special. Top with a generous dusting of powdered sugar, a pour of real maple syrup, fresh berries, or even a dollop of whipped cream for an indulgent treat. Use day-old brioche or challah bread for the best texture — their slightly dry, dense crumb absorbs the custard beautifully without falling apart.", category: "Breakfast",
    ingredients: ["4 slices thick bread", "3 eggs", "¾ cup milk", "1 tsp cinnamon", "1 tsp vanilla", "2 tbsp butter", "Powdered sugar", "Maple syrup"],
    steps: ["Whisk eggs, milk, cinnamon, and vanilla.", "Dip bread slices into the mixture.", "Melt butter in a skillet over medium heat.", "Cook each slice 2-3 minutes per side until golden.", "Dust with powdered sugar.", "Serve with maple syrup."],
    image: img("1484723091739-30a097e8f929"), extraImages: [img("1506084868230-bb9d95c24759"), img("1567620905732-2d1ec7ab7445")],
    prepTime: 5, cookTime: 10, servings: 2, difficulty: "Easy"
  },
  {
    id: 5, title: "Eggs Benedict with Hollandaise", description: "Eggs Benedict is the crown jewel of brunch — toasted English muffins topped with savory Canadian bacon, perfectly poached eggs, and a velvety hollandaise sauce that's rich, buttery, and tangy with just a hint of lemon. While it may look restaurant-level fancy, this classic dish is absolutely achievable at home with a bit of practice. The hollandaise is the star: a warm emulsion of egg yolks and melted butter whisked over gentle heat until thick and glossy. The poached eggs should have firm whites and gloriously runny yolks that cascade over the muffin when you cut in. Serve for a special occasion brunch or impress weekend guests with this timeless recipe.", category: "Breakfast",
    ingredients: ["2 English muffins", "4 slices Canadian bacon", "4 eggs", "3 egg yolks", "1 tbsp lemon juice", "½ cup melted butter", "Pinch cayenne", "White vinegar"],
    steps: ["Make hollandaise: whisk yolks and lemon juice over double boiler.", "Slowly drizzle in melted butter while whisking.", "Season with cayenne and salt.", "Toast muffins and warm Canadian bacon.", "Poach eggs in simmering water with vinegar.", "Assemble: muffin, bacon, egg, hollandaise.", "Serve immediately."],
    image: img("1608039829572-215b59e52831"), extraImages: [img("1525351484163-7529414344d8"), img("1482049016688-2d3e1b311543")],
    prepTime: 15, cookTime: 20, servings: 2, difficulty: "Hard"
  },
  {
    id: 6, title: "Overnight Oats with Mango", description: "Overnight oats with mango are the ultimate make-ahead breakfast for busy mornings. Simply combine rolled oats, milk, Greek yogurt, chia seeds, and a touch of honey in a jar, stir, and let the refrigerator do the work while you sleep. By morning, the oats have absorbed the liquid and transformed into a creamy, pudding-like texture that's ready to eat straight from the fridge. Top with fresh diced mango, shredded coconut, and a drizzle of honey for a tropical twist that tastes like vacation. This no-cook recipe is endlessly customizable — swap the mango for berries, peaches, or banana, and adjust sweetness to your liking. High in fiber and protein, it keeps you full until lunch.", category: "Breakfast",
    ingredients: ["½ cup rolled oats", "½ cup milk", "¼ cup yogurt", "1 tbsp chia seeds", "1 tbsp honey", "1 mango diced", "Shredded coconut"],
    steps: ["Combine oats, milk, yogurt, chia seeds, and honey.", "Stir well and refrigerate overnight.", "In the morning, top with diced mango.", "Sprinkle shredded coconut.", "Enjoy cold or at room temperature."],
    image: img("1511690743698-d9d18f7e20f1"), extraImages: [img("1494597564530-871f2b93ac55"), img("1590301157890-4810ed352733")],
    prepTime: 5, cookTime: 0, servings: 1, difficulty: "Easy"
  },
  {
    id: 7, title: "Mushroom and Cheese Omelette", description: "A fluffy mushroom and cheese omelette is a protein-packed breakfast that's quick, satisfying, and endlessly versatile. Beaten eggs are cooked in butter until just set, then filled with sautéed mushrooms that have been cooked until golden and fragrant, and a generous handful of melted cheese that stretches beautifully when you fold the omelette in half. The key to a perfect omelette is controlling the heat — medium-low ensures the eggs stay tender and custardy rather than rubbery. Fresh chives add a mild onion flavor and a pop of green color. This recipe takes under 10 minutes from cracking eggs to sitting down at the table, making it ideal for weekday mornings when you need something quick and nutritious.", category: "Breakfast",
    ingredients: ["3 eggs", "¼ cup sliced mushrooms", "¼ cup shredded cheese", "1 tbsp butter", "Salt and pepper", "Fresh chives"],
    steps: ["Beat eggs with salt and pepper.", "Sauté mushrooms in butter until soft.", "Pour eggs over mushrooms.", "Cook until edges set, sprinkle cheese on half.", "Fold omelette over, cook 1 more minute.", "Garnish with chives."],
    image: img("1510693206972-df098062cb71"), extraImages: [img("1482049016688-2d3e1b311543"), img("1525351484163-7529414344d8")],
    prepTime: 5, cookTime: 8, servings: 1, difficulty: "Easy"
  },
  {
    id: 8, title: "Banana Walnut Muffins", description: "Moist, tender banana walnut muffins are the perfect grab-and-go breakfast or afternoon snack. Made with overripe bananas that add natural sweetness and incredible moisture, these muffins are studded with crunchy walnuts for a satisfying texture contrast. The recipe is beautifully simple — no mixer required, just a bowl and a spoon. The bananas caramelize slightly during baking, creating golden-topped muffins with an irresistible aroma that fills the entire house. Make a batch on Sunday and enjoy them all week long; they stay fresh in an airtight container for up to 4 days or freeze for up to 3 months. Kids and adults alike love these wholesome treats, and they're a smart way to use up those brown bananas sitting on your counter.", category: "Breakfast",
    ingredients: ["3 ripe bananas", "⅓ cup melted butter", "¾ cup sugar", "1 egg", "1 tsp vanilla", "1 tsp baking soda", "1½ cups flour", "½ cup chopped walnuts"],
    steps: ["Preheat oven to 350°F.", "Mash bananas, mix in melted butter.", "Add sugar, egg, and vanilla.", "Stir in baking soda and flour until combined.", "Fold in walnuts.", "Fill muffin cups ¾ full.", "Bake 20-25 minutes."],
    image: img("1558401391-7899b4bd5bbf"), extraImages: [img("1506084868230-bb9d95c24759"), img("1567620905732-2d1ec7ab7445")],
    prepTime: 10, cookTime: 25, servings: 12, difficulty: "Easy"
  },
  {
    id: 9, title: "Greek Yogurt Parfait", description: "A Greek yogurt parfait is a fresh, healthy breakfast that looks as beautiful as it tastes. Layers of thick, protein-rich Greek yogurt alternate with crunchy granola and colorful mixed berries in a glass, creating a stunning visual presentation and a symphony of textures and flavors. A drizzle of golden honey and a sprinkle of sliced almonds add sweetness and crunch. This no-cook recipe is ready in under 5 minutes, making it the ultimate quick breakfast. Greek yogurt provides a hefty dose of protein and probiotics for gut health, while the berries deliver antioxidants and vitamins. Customize your parfait with seasonal fruits, different nuts, or a sprinkle of dark chocolate chips for a slightly indulgent twist.", category: "Breakfast",
    ingredients: ["1 cup Greek yogurt", "½ cup granola", "¼ cup mixed berries", "2 tbsp honey", "1 tbsp sliced almonds"],
    steps: ["Layer yogurt in a glass.", "Add a layer of granola.", "Add mixed berries.", "Repeat layers.", "Drizzle with honey and almonds.", "Serve immediately."],
    image: img("1488477181946-6428a0291777"), extraImages: [img("1494597564530-871f2b93ac55"), img("1590301157890-4810ed352733")],
    prepTime: 5, cookTime: 0, servings: 1, difficulty: "Easy"
  },
  {
    id: 10, title: "Breakfast Burrito", description: "A hearty breakfast burrito is the handheld morning meal that has everything you crave rolled into one warm tortilla. Fluffy scrambled eggs, savory black beans, melted cheese, fresh salsa, and creamy avocado slices all come together in a flavor-packed wrap that's filling enough to power you through the entire morning. This recipe is endlessly customizable — add crispy bacon or sausage for extra protein, toss in sautéed peppers and onions for more veggies, or spice it up with jalapeños and hot sauce. Breakfast burritos are also perfect for meal prep: wrap them tightly in foil, freeze them, and reheat in the oven or microwave for a quick breakfast on busy weekdays. A crowd-pleasing recipe that works for breakfast, brunch, or even dinner.", category: "Breakfast",
    ingredients: ["2 large tortillas", "4 eggs scrambled", "½ cup black beans", "½ cup cheese", "¼ cup salsa", "1 avocado sliced", "Sour cream"],
    steps: ["Scramble eggs with salt and pepper.", "Warm tortillas in a skillet.", "Layer eggs, beans, cheese, salsa, and avocado.", "Fold into burritos.", "Serve with sour cream."],
    image: img("1626700051175-6818013e1d4f"), extraImages: [img("1482049016688-2d3e1b311543"), img("1525351484163-7529414344d8")],
    prepTime: 10, cookTime: 10, servings: 2, difficulty: "Easy"
  },
  {
    id: 11, title: "Shakshuka — Eggs in Tomato Sauce", description: "Shakshuka is a beloved Middle Eastern and North African dish of eggs gently poached in a spiced, chunky tomato and pepper sauce. The vibrant red sauce is seasoned with cumin, paprika, and a touch of chili for warmth, while the eggs cook until the whites are set but the yolks remain deliciously runny. Tear off a piece of warm crusty bread, scoop up some egg and sauce, and you'll understand why this one-pan wonder has become a global breakfast sensation. It's incredibly easy to make, comes together in about 25 minutes, and the ingredients are pantry staples you likely already have on hand. Shakshuka is equally perfect for breakfast, brunch, or a light dinner, and it's naturally gluten-free and vegetarian.", category: "Breakfast",
    ingredients: ["1 can crushed tomatoes", "1 red pepper diced", "1 onion diced", "4 eggs", "3 garlic cloves", "1 tsp cumin", "1 tsp paprika", "Olive oil", "Fresh cilantro", "Crusty bread"],
    steps: ["Sauté onion and pepper in olive oil until soft.", "Add garlic, cumin, and paprika, cook 1 minute.", "Pour in crushed tomatoes, simmer 10 minutes.", "Make 4 wells in the sauce, crack an egg into each.", "Cover and cook 5-7 minutes until whites are set.", "Garnish with cilantro.", "Serve with crusty bread for dipping."],
    image: img("1482049016688-2d3e1b311543"), extraImages: [img("1525351484163-7529414344d8"), img("1608039829572-215b59e52831")],
    prepTime: 10, cookTime: 20, servings: 2, difficulty: "Easy"
  },
  {
    id: 12, title: "Acai Bowl", description: "An acai bowl is the ultimate superfood breakfast — a thick, frosty blend of acai berry puree, banana, and almond milk that's loaded with antioxidants, fiber, and natural energy. The deep purple base has a subtly sweet, berry-like flavor that pairs beautifully with almost any topping you can imagine. Layer on fresh sliced banana, crunchy granola, chia seeds, coconut flakes, drizzled honey, and a handful of fresh berries for a bowl that's Instagram-worthy and incredibly nutritious. Originally from Brazil, acai bowls have become one of the most popular healthy breakfast trends worldwide. They're naturally dairy-free and vegan-friendly, and you can customize them endlessly. The key is blending the acai thick — you want it spoonable, not drinkable.", category: "Breakfast",
    ingredients: ["2 packets frozen acai puree", "1 frozen banana", "½ cup almond milk", "Granola", "Fresh banana slices", "Blueberries", "Coconut flakes", "Honey", "Chia seeds"],
    steps: ["Break frozen acai packets into chunks.", "Blend acai, banana, and almond milk until thick and smooth.", "Pour into a bowl.", "Arrange toppings: banana slices, berries, granola.", "Sprinkle with coconut flakes and chia seeds.", "Drizzle with honey.", "Serve immediately."],
    image: img("1494597564530-871f2b93ac55"), extraImages: [img("1590301157890-4810ed352733"), img("1511690743698-d9d18f7e20f1")],
    prepTime: 5, cookTime: 0, servings: 1, difficulty: "Easy"
  },

  // ===== LUNCH (13-24) =====
  {
    id: 13, title: "Grilled Chicken Caesar Salad", description: "The grilled chicken Caesar salad is a timeless lunch classic that delivers bold flavors and satisfying protein in every bite. Juicy, seasoned chicken breasts are grilled to perfection — charred on the outside and tender inside — then sliced and arranged over a bed of crisp, cold romaine lettuce. The creamy, garlicky Caesar dressing coats every leaf, while crunchy homemade croutons and shaved Parmesan cheese add layers of texture. This salad is a complete meal that's high in protein and low in carbs, making it a favorite for anyone watching their intake while still wanting something delicious. It's a staple on restaurant menus worldwide for good reason — and it's surprisingly easy to recreate at home in under 30 minutes.", category: "Lunch",
    ingredients: ["2 chicken breasts", "1 head romaine lettuce", "½ cup croutons", "¼ cup Parmesan", "Caesar dressing", "Lemon juice", "Olive oil", "Salt and pepper"],
    steps: ["Season chicken with olive oil, salt, and pepper.", "Grill 6-7 minutes per side until cooked through.", "Chop romaine and place in a large bowl.", "Slice grilled chicken.", "Add croutons and Parmesan.", "Toss with Caesar dressing.", "Serve with lemon wedges."],
    image: img("1546793665-c74683f339c1"), extraImages: [img("1512621776951-a57141f2eefd"), img("1550304943-4f24f54ddde9")],
    prepTime: 10, cookTime: 15, servings: 2, difficulty: "Easy"
  },
  {
    id: 14, title: "Turkey Club Sandwich", description: "The turkey club sandwich is the ultimate triple-decker lunch — three slices of toasted bread layered with thinly sliced turkey, crispy bacon, fresh lettuce, ripe tomato, and a generous spread of mayonnaise. Each bite delivers a perfect balance of savory, smoky, and fresh flavors with contrasting textures from the crunchy toast and crisp bacon to the juicy tomato. Secured with toothpicks and cut into neat triangles, the club sandwich is both visually impressive and deeply satisfying. It's a deli and diner staple that translates perfectly to the home kitchen with minimal effort. Pair it with a side of potato chips, coleslaw, or a cup of soup for a complete lunch spread. You can also substitute the turkey with chicken or ham for variety.", category: "Lunch",
    ingredients: ["3 slices bread", "4 slices turkey", "4 slices bacon", "Lettuce leaves", "Tomato slices", "Mayonnaise", "Toothpicks"],
    steps: ["Toast bread until golden.", "Cook bacon until crispy.", "Spread mayo on all bread slices.", "Layer turkey, bacon, lettuce, tomato on first slice.", "Add second slice, repeat layers.", "Top with third slice.", "Cut diagonally, secure with toothpicks."],
    image: img("1528735602780-2552fd46c7af"), extraImages: [img("1553909489-cd47e0907980"), img("1509722747-c0a6bff435e0")],
    prepTime: 10, cookTime: 10, servings: 1, difficulty: "Easy"
  },
  {
    id: 15, title: "Mediterranean Quinoa Bowl", description: "This Mediterranean quinoa bowl is a nutritious, colorful, and deeply flavorful lunch that's perfect for meal prep. Fluffy quinoa forms the protein-rich base, topped with crisp cucumber, sweet cherry tomatoes, tangy feta cheese, briny Kalamata olives, and a creamy dollop of hummus. A drizzle of extra virgin olive oil and fresh lemon juice ties everything together with bright, clean flavors inspired by the sun-drenched Mediterranean coast. This bowl is naturally gluten-free and vegetarian, packed with plant-based protein and fiber that will keep you energized throughout the afternoon. The best part? It tastes even better the next day as the flavors meld together, making it an ideal make-ahead lunch for work or school.", category: "Lunch",
    ingredients: ["1 cup quinoa", "1 cucumber diced", "1 cup cherry tomatoes", "½ cup feta cheese", "¼ cup olives", "Hummus", "Olive oil", "Lemon juice"],
    steps: ["Cook quinoa according to package.", "Dice cucumber and halve tomatoes.", "Assemble bowls with quinoa base.", "Top with vegetables, feta, and olives.", "Add a dollop of hummus.", "Drizzle with olive oil and lemon juice."],
    image: img("1512621776951-a57141f2eefd"), extraImages: [img("1546793665-c74683f339c1"), img("1550304943-4f24f54ddde9")],
    prepTime: 10, cookTime: 15, servings: 2, difficulty: "Easy"
  },
  {
    id: 16, title: "Chicken Tikka Wrap", description: "A chicken tikka wrap brings the bold, smoky flavors of Indian cuisine into a convenient handheld format that's perfect for lunch on the go. Tender chunks of chicken are marinated in a mixture of yogurt and aromatic tikka spices — a blend of cumin, coriander, turmeric, and garam masala — then grilled or pan-fried until charred and juicy. Wrapped in a warm flatbread with crisp lettuce, sliced tomatoes, cool cucumber, and a drizzle of refreshing mint yogurt sauce, every bite is a harmonious blend of spicy, creamy, and fresh. This recipe is a favorite for weekday lunches and casual gatherings alike. You can prep the marinated chicken ahead of time for even faster assembly.", category: "Lunch",
    ingredients: ["2 chicken breasts cubed", "2 tbsp tikka paste", "¼ cup yogurt", "4 flatbreads", "Lettuce", "Tomato", "Cucumber", "Mint sauce"],
    steps: ["Marinate chicken in tikka paste and yogurt for 30 min.", "Grill or pan-fry chicken until cooked.", "Warm flatbreads.", "Layer lettuce, tomato, cucumber on flatbread.", "Add chicken tikka.", "Drizzle with mint sauce and wrap."],
    image: img("1626700051175-6818013e1d4f"), extraImages: [img("1553909489-cd47e0907980"), img("1528735602780-2552fd46c7af")],
    prepTime: 35, cookTime: 12, servings: 4, difficulty: "Medium"
  },
  {
    id: 17, title: "Caprese Panini", description: "A Caprese panini is the Italian-inspired grilled sandwich that proves simplicity is sophistication. Fresh mozzarella, ripe tomato slices, and fragrant basil pesto are layered between crusty ciabatta bread, then pressed until the cheese melts into stretchy perfection and the bread develops irresistible golden grill marks. A drizzle of balsamic glaze adds a sweet-tangy finish that elevates this sandwich from good to unforgettable. The beauty of a Caprese panini lies in the quality of its few ingredients — use the best fresh mozzarella and ripest tomatoes you can find. Whether you use a panini press, a grill pan, or simply two heavy skillets, this warm, melty sandwich comes together in under 15 minutes and pairs perfectly with a bowl of tomato soup.", category: "Lunch",
    ingredients: ["2 ciabatta rolls", "Fresh mozzarella", "2 tomatoes sliced", "Basil pesto", "Olive oil", "Balsamic glaze"],
    steps: ["Slice ciabatta rolls in half.", "Spread pesto on both halves.", "Layer mozzarella and tomato slices.", "Drizzle with balsamic glaze.", "Press in a panini maker or skillet.", "Cook until cheese melts and bread is crispy."],
    image: img("1509722747-c0a6bff435e0"), extraImages: [img("1553909489-cd47e0907980"), img("1528735602780-2552fd46c7af")],
    prepTime: 5, cookTime: 8, servings: 2, difficulty: "Easy"
  },
  {
    id: 18, title: "Asian Noodle Salad", description: "This cold Asian noodle salad is a refreshing, crunchy, and flavor-packed dish that's perfect for warm-weather lunches and potlucks. Chewy soba noodles are tossed with julienned carrots, crisp cucumber, sliced red peppers, and bright green edamame, all coated in a savory-sweet sesame dressing made with sesame oil, soy sauce, and rice vinegar. A generous sprinkle of sesame seeds adds a nutty finish. The dish is served cold, making it ideal for meal prep — it keeps well in the fridge for 3-4 days and actually tastes better as the noodles absorb more dressing. It's vegetarian, full of fiber and plant protein, and takes less than 30 minutes to prepare. Add grilled chicken or shrimp for extra protein.", category: "Lunch",
    ingredients: ["200g soba noodles", "1 carrot julienned", "1 cucumber julienned", "1 red pepper sliced", "Edamame", "Sesame oil", "Soy sauce", "Rice vinegar", "Sesame seeds"],
    steps: ["Cook noodles according to package, rinse with cold water.", "Prepare vegetables.", "Make dressing: sesame oil, soy sauce, rice vinegar.", "Toss noodles with vegetables.", "Pour dressing over and mix well.", "Top with sesame seeds."],
    image: img("1569718212165-3a8922ada9e5"), extraImages: [img("1512621776951-a57141f2eefd"), img("1546793665-c74683f339c1")],
    prepTime: 15, cookTime: 10, servings: 3, difficulty: "Easy"
  },
  {
    id: 19, title: "Black Bean Tacos", description: "Black bean tacos are a flavorful, budget-friendly, and vegetarian-friendly lunch option that proves meatless meals can be just as satisfying as their meaty counterparts. Seasoned black beans cooked with cumin and chili powder provide a hearty, protein-rich filling, while a luscious avocado crema — made by blending ripe avocado with sour cream and lime juice — adds creamy richness. Quick-pickled red onions contribute a tangy, vibrant crunch that cuts through the richness. Fresh cilantro and a squeeze of lime juice bring everything together with bright, clean flavors. These tacos come together in about 20 minutes, making them a perfect quick weeknight meal. Double the batch for meal prep, or set up a taco bar and let everyone customize their own.", category: "Lunch",
    ingredients: ["1 can black beans", "8 small tortillas", "1 avocado", "Sour cream", "Lime juice", "Pickled red onions", "Cilantro", "Cumin", "Chili powder"],
    steps: ["Heat black beans with cumin and chili powder.", "Make avocado crema: blend avocado, sour cream, lime.", "Warm tortillas.", "Fill with seasoned black beans.", "Top with avocado crema and pickled onions.", "Garnish with cilantro."],
    image: img("1551504734-5ee1c4a1479b"), extraImages: [img("1565299585-bdd6a61a3a17"), img("1626700051175-6818013e1d4f")],
    prepTime: 10, cookTime: 10, servings: 4, difficulty: "Easy"
  },
  {
    id: 20, title: "Tom Yum Soup", description: "Tom Yum is Thailand's most famous soup — a fragrant, spicy, and sour broth packed with plump shrimp, sliced mushrooms, and the intoxicating aromas of lemongrass, galangal, and kaffir lime leaves. The balance of heat from fresh chilies, sourness from lime juice, saltiness from fish sauce, and a touch of sweetness creates an extraordinary complexity of flavors in every spoonful. This recipe is lighter than creamy soups but incredibly satisfying, and it's ready in under 30 minutes. Tom Yum is often called a natural remedy for colds thanks to its ginger-family ingredients and spice. Serve it as a standalone lunch with steamed jasmine rice or as a vibrant starter before a Thai-inspired dinner spread.", category: "Lunch",
    ingredients: ["500ml chicken broth", "200g shrimp", "Lemongrass", "Galangal", "Kaffir lime leaves", "Fish sauce", "Lime juice", "Chili paste", "Mushrooms"],
    steps: ["Bring broth to a boil.", "Add lemongrass, galangal, and lime leaves.", "Simmer for 10 minutes.", "Add mushrooms and shrimp.", "Cook until shrimp turn pink.", "Season with fish sauce, lime juice, chili paste.", "Serve hot."],
    image: img("1547592166-23ac45744acd"), extraImages: [img("1569718212165-3a8922ada9e5"), img("1512621776951-a57141f2eefd")],
    prepTime: 10, cookTime: 20, servings: 3, difficulty: "Medium"
  },
  {
    id: 21, title: "Falafel Bowl", description: "Crispy golden falafel served in a nourishing bowl with creamy hummus, fresh tabbouleh, and a silky tahini dressing is a Middle Eastern masterpiece of flavors and textures. The falafel themselves are made from chickpeas, fresh herbs, garlic, and warm spices — formed into balls and fried until they develop a satisfying crunch on the outside while remaining fluffy and green on the inside. Served in a bowl over fluffy couscous or alongside warm pita bread, this dish is hearty, deeply flavorful, and entirely vegetarian. The combination of protein-rich chickpeas, fresh vegetables, and healthy fats from tahini makes this a nutritionally balanced meal. It's popular street food in cities around the world and is now easy to make at home.", category: "Lunch",
    ingredients: ["1 can chickpeas", "½ onion", "3 garlic cloves", "Fresh parsley", "Cumin", "Flour", "Hummus", "Tahini", "Pita bread"],
    steps: ["Pulse chickpeas, onion, garlic, parsley in food processor.", "Season with cumin, salt, pepper.", "Form into balls, coat lightly in flour.", "Fry in oil until golden on all sides.", "Assemble bowls with hummus and tabbouleh.", "Drizzle with tahini."],
    image: img("1558024920-418585b5e222"), extraImages: [img("1512621776951-a57141f2eefd"), img("1546793665-c74683f339c1")],
    prepTime: 20, cookTime: 15, servings: 4, difficulty: "Medium"
  },
  {
    id: 22, title: "BLT with Avocado", description: "The BLT with avocado takes America's favorite sandwich and elevates it to new heights. Crispy, smoky bacon strips pair with ripe, creamy avocado slices for a combination that's rich, satisfying, and utterly addictive. Fresh, crisp lettuce and juicy tomato slices add freshness and crunch, while a spread of mayonnaise on perfectly toasted bread ties everything together. The avocado adds healthy fats and a buttery texture that transforms this simple sandwich into something truly special. It's the kind of lunch you'll look forward to making every week. For the best results, use thick-cut bacon cooked until perfectly crispy, and make sure your avocado is ripe but still firm enough to slice cleanly.", category: "Lunch",
    ingredients: ["4 slices bread", "8 strips bacon", "Lettuce", "2 tomatoes", "1 avocado", "Mayonnaise", "Salt and pepper"],
    steps: ["Cook bacon until crispy.", "Toast bread.", "Spread mayo on toast.", "Layer lettuce, tomato, bacon, avocado.", "Season with salt and pepper.", "Close sandwich and cut diagonally."],
    image: img("1553909489-cd47e0907980"), extraImages: [img("1528735602780-2552fd46c7af"), img("1509722747-c0a6bff435e0")],
    prepTime: 5, cookTime: 10, servings: 2, difficulty: "Easy"
  },
  {
    id: 23, title: "Chicken Quesadilla", description: "Crispy, cheesy chicken quesadillas are the ultimate quick lunch that the whole family will love. Seasoned shredded chicken and a generous amount of melted cheese are sandwiched between two golden flour tortillas and cooked until the outside is perfectly crispy and the inside is gooey and irresistible. Add sautéed peppers and onions for extra flavor and texture, or keep it simple with just chicken and cheese. Serve with fresh salsa, sour cream, and guacamole for dipping. Quesadillas are incredibly versatile — use leftover rotisserie chicken to make them even faster, or swap in black beans and corn for a vegetarian version. They're ready in under 15 minutes and are perfect for feeding hungry kids, game day snacking, or a satisfying solo lunch.", category: "Lunch",
    ingredients: ["2 large flour tortillas", "1 cup shredded chicken", "1 cup shredded cheese", "½ bell pepper diced", "¼ onion diced", "Salsa", "Sour cream", "Guacamole"],
    steps: ["Sauté bell pepper and onion until soft.", "Place one tortilla in a skillet over medium heat.", "Spread chicken, sautéed veggies, and cheese evenly.", "Top with second tortilla.", "Cook 3-4 minutes until golden, then flip.", "Cook another 3-4 minutes until cheese melts.", "Cut into wedges, serve with salsa and sour cream."],
    image: img("1626700051175-6818013e1d4f"), extraImages: [img("1565299585-bdd6a61a3a17"), img("1551504734-5ee1c4a1479b")],
    prepTime: 5, cookTime: 10, servings: 2, difficulty: "Easy"
  },
  {
    id: 24, title: "Poke Bowl with Salmon", description: "A poke bowl with fresh salmon brings the flavors of Hawaii to your lunch table. Cubes of sushi-grade salmon are lightly marinated in soy sauce and sesame oil, then served over warm sushi rice alongside creamy avocado, crunchy cucumber, edamame, and shredded nori. The combination of raw fish, sticky rice, and vibrant toppings creates a balanced bowl that's both light and deeply satisfying. Poke bowls have become one of the most popular healthy lunch options worldwide, and making them at home is surprisingly simple. The key is using the freshest fish possible and preparing the rice with a splash of rice vinegar for authentic flavor. Add spicy mayo or sriracha for a kick of heat.", category: "Lunch",
    ingredients: ["300g sushi-grade salmon", "2 cups sushi rice", "1 avocado", "1 cucumber", "Edamame", "Soy sauce", "Sesame oil", "Rice vinegar", "Nori strips", "Sesame seeds"],
    steps: ["Cook sushi rice, season with rice vinegar.", "Cube salmon into bite-sized pieces.", "Marinate salmon in soy sauce and sesame oil.", "Assemble bowls with rice base.", "Top with salmon, avocado, cucumber, edamame.", "Garnish with nori strips and sesame seeds."],
    image: img("1553163147-622ab57be1c7"), extraImages: [img("1569718212165-3a8922ada9e5"), img("1519708227418-b060153beabd")],
    prepTime: 15, cookTime: 20, servings: 2, difficulty: "Medium"
  },

  // ===== DINNER (25-42) =====
  {
    id: 25, title: "Spaghetti Carbonara", description: "Spaghetti carbonara is one of Italy's most beloved pasta dishes — a luxurious combination of al dente spaghetti, crispy pancetta, and a silky sauce made from egg yolks, Pecorino Romano, and freshly cracked black pepper. The magic happens when the hot pasta is tossed with the egg mixture off the heat, creating a creamy, emulsified sauce without any cream at all. The starchy pasta water is the secret ingredient that brings the sauce together into a glossy, clinging coating. This authentic Roman recipe uses just five ingredients, proving that Italian cooking is all about quality over complexity. Carbonara is a weeknight dinner hero — ready in about 20 minutes, it's quick, comforting, and endlessly satisfying.", category: "Dinner",
    ingredients: ["400g spaghetti", "200g pancetta", "4 egg yolks", "1 cup Parmesan", "Black pepper", "2 garlic cloves", "Olive oil"],
    steps: ["Cook spaghetti in salted water until al dente.", "Fry pancetta until crispy.", "Whisk egg yolks with Parmesan and pepper.", "Drain pasta, reserve 1 cup pasta water.", "Toss hot pasta with pancetta.", "Remove from heat, add egg mixture and toss quickly.", "Add pasta water as needed for creamy consistency."],
    image: img("1621996346565-e3dbc646d9a9"), extraImages: [img("1551183053-d0a57e3b1f0c"), img("1563379926898-05f4575a45d8")],
    prepTime: 10, cookTime: 20, servings: 4, difficulty: "Medium"
  },
  {
    id: 26, title: "Butter Chicken (Murgh Makhani)", description: "Butter chicken, or Murgh Makhani, is India's most popular curry and one of the most searched recipes in the world. Tender pieces of chicken are marinated in spiced yogurt, seared until charred, then simmered in a rich, velvety tomato-based sauce enriched with butter and cream. The sauce is a beautiful harmony of warm spices — garam masala, turmeric, cumin, and coriander — with the tang of tomatoes and the richness of dairy creating a flavor profile that's bold yet comforting. Serve over fluffy basmati rice or with warm naan bread to soak up every last drop of the incredible sauce. This restaurant-quality dish is absolutely achievable at home and feeds a family of four generously. It also reheats beautifully, making leftovers a treat.", category: "Dinner",
    ingredients: ["500g chicken thighs", "1 cup tomato puree", "½ cup heavy cream", "2 tbsp butter", "Garam masala", "Turmeric", "Ginger paste", "Garlic paste", "Yogurt"],
    steps: ["Marinate chicken in yogurt and spices for 1 hour.", "Sear chicken in butter until browned.", "Add ginger, garlic paste, cook 2 minutes.", "Add tomato puree, garam masala, turmeric.", "Simmer 20 minutes.", "Stir in cream, cook 5 more minutes.", "Serve with basmati rice."],
    image: img("1603894584373-5ac82b2ae7d3"), extraImages: [img("1585937421612-70a008356fbe"), img("1631452180519-c014fe946bc7")],
    prepTime: 65, cookTime: 30, servings: 4, difficulty: "Medium"
  },
  {
    id: 27, title: "Grilled Salmon with Asparagus", description: "Grilled salmon with asparagus is a healthy, elegant dinner that's ready in under 25 minutes. Wild-caught salmon fillets are seasoned simply with olive oil, garlic, salt, and pepper, then grilled until the skin is crispy and the flesh is flaky and moist. Alongside, fresh asparagus spears are grilled until tender-crisp with beautiful char marks. A squeeze of fresh lemon and a sprinkle of dill bring brightness and herbaceous flavor to the dish. Salmon is one of the best sources of heart-healthy omega-3 fatty acids, making this a meal that's as nutritious as it is delicious. This recipe is naturally gluten-free, low-carb, and keto-friendly, perfect for anyone focused on clean eating without sacrificing flavor.", category: "Dinner",
    ingredients: ["4 salmon fillets", "1 bunch asparagus", "2 lemons", "3 tbsp olive oil", "2 garlic cloves", "Fresh dill", "Salt and pepper"],
    steps: ["Preheat grill to medium-high.", "Season salmon with olive oil, salt, pepper, garlic.", "Toss asparagus with olive oil and salt.", "Grill salmon 4-5 minutes per side.", "Grill asparagus 3-4 minutes.", "Squeeze lemon over fish.", "Garnish with fresh dill."],
    image: img("1467003909585-2f8a72700288"), extraImages: [img("1519708227418-b060153beabd"), img("1504674900247-0877df9cc836")],
    prepTime: 10, cookTime: 12, servings: 4, difficulty: "Medium"
  },
  {
    id: 28, title: "Beef Stir-Fry with Vegetables", description: "A quick beef stir-fry is the weeknight dinner champion — packed with colorful vegetables, tender sliced beef, and a savory sauce, all cooked in a blazing-hot wok in under 15 minutes. Thinly sliced beef sirloin is seared until caramelized, then combined with crisp broccoli, bright red peppers, and sweet carrots in a glossy sauce of soy sauce, oyster sauce, and sesame oil. The high-heat cooking preserves the crunch of the vegetables while developing deep, savory flavors through the Maillard reaction. Served over steamed jasmine rice, this dish is faster than takeout, healthier, and tastes even better. The key is to prep all your ingredients before you start cooking — once the wok is hot, everything moves fast.", category: "Dinner",
    ingredients: ["400g beef sirloin sliced", "1 red pepper", "1 broccoli head", "2 carrots", "3 tbsp soy sauce", "1 tbsp oyster sauce", "Ginger", "Garlic", "Sesame oil"],
    steps: ["Slice beef thinly against the grain.", "Cut vegetables into bite-sized pieces.", "Heat sesame oil in a wok over high heat.", "Stir-fry beef 2-3 minutes, remove.", "Stir-fry vegetables 3-4 minutes.", "Return beef, add soy sauce and oyster sauce.", "Serve over steamed rice."],
    image: img("1603133872878-684f208fb84b"), extraImages: [img("1569718212165-3a8922ada9e5"), img("1551183053-d0a57e3b1f0c")],
    prepTime: 15, cookTime: 10, servings: 3, difficulty: "Easy"
  },
  {
    id: 29, title: "Chicken Parmesan", description: "Chicken Parmesan is a beloved Italian-American comfort food classic — juicy chicken breasts are breaded with a crispy coating of breadcrumbs and Parmesan cheese, pan-fried until golden, then topped with rich marinara sauce and bubbling mozzarella before being baked to melty perfection. The contrast between the crunchy breading and the gooey melted cheese is irresistible, and the tangy marinara sauce ties everything together beautifully. Serve it over a bed of spaghetti or with a side of garlic bread and a simple green salad for a hearty dinner the whole family will devour. This recipe is a crowd-pleaser for weeknight dinners and dinner parties alike. Pound the chicken to an even thickness for consistent cooking.", category: "Dinner",
    ingredients: ["4 chicken breasts", "1 cup breadcrumbs", "½ cup Parmesan", "2 eggs", "2 cups marinara sauce", "1 cup mozzarella", "Fresh basil", "Olive oil"],
    steps: ["Pound chicken breasts to even thickness.", "Dip in beaten eggs, then breadcrumb-Parmesan mixture.", "Pan-fry in olive oil until golden, about 4 min per side.", "Place in baking dish, top with marinara and mozzarella.", "Bake at 400°F for 15 minutes.", "Garnish with fresh basil.", "Serve with spaghetti."],
    image: img("1632778149955-e80f8ceca2e8"), extraImages: [img("1551183053-d0a57e3b1f0c"), img("1563379926898-05f4575a45d8")],
    prepTime: 15, cookTime: 25, servings: 4, difficulty: "Medium"
  },
  {
    id: 30, title: "Thai Green Curry", description: "Thai green curry is a fragrant, spicy, and deeply satisfying one-pot dinner that brings the bold flavors of Thailand to your home kitchen. Tender chicken pieces are simmered in a luscious sauce of coconut milk and green curry paste, along with bamboo shoots and kaffir lime leaves that infuse the dish with their distinctive citrusy aroma. Thai basil added at the end provides a fresh, peppery finish. The curry is seasoned with fish sauce for umami depth and a touch of sugar for balance. Served over steamed jasmine rice, this dish is rich, aromatic, and comforting. It comes together in about 30 minutes and is one of those dishes that tastes even better the next day as the flavors deepen.", category: "Dinner",
    ingredients: ["500g chicken breast", "1 can coconut milk", "3 tbsp green curry paste", "Bamboo shoots", "Thai basil", "Fish sauce", "Sugar", "Kaffir lime leaves"],
    steps: ["Heat a splash of coconut cream in a pan.", "Add curry paste, cook until fragrant.", "Add chicken, cook until sealed.", "Pour in remaining coconut milk.", "Add bamboo shoots and lime leaves.", "Season with fish sauce and sugar.", "Garnish with Thai basil, serve with rice."],
    image: img("1455619452474-d2be8b1e70cd"), extraImages: [img("1547592166-23ac45744acd"), img("1569718212165-3a8922ada9e5")],
    prepTime: 10, cookTime: 25, servings: 4, difficulty: "Medium"
  },
  {
    id: 31, title: "Homemade Margherita Pizza", description: "There's nothing quite like a homemade Margherita pizza fresh from a blazing-hot oven. This classic Neapolitan pizza features a thin, chewy crust topped with just three simple ingredients: crushed San Marzano tomatoes, fresh mozzarella, and fragrant basil leaves, finished with a drizzle of extra virgin olive oil. The result is a pizza that celebrates the purity of its ingredients — the sweet acidity of the tomatoes, the creamy melt of the mozzarella, and the aromatic pop of fresh basil. A pizza stone preheated to 475°F mimics the intense heat of a wood-fired oven, giving you a beautifully blistered, slightly charred crust at home. Homemade pizza dough is simple to make, but store-bought works great for a quick weeknight version.", category: "Dinner",
    ingredients: ["Pizza dough", "½ cup San Marzano tomatoes", "Fresh mozzarella", "Fresh basil", "Olive oil", "Salt", "Garlic"],
    steps: ["Preheat oven to 475°F with pizza stone.", "Stretch dough into a circle.", "Crush tomatoes and spread over dough.", "Tear mozzarella and distribute evenly.", "Drizzle with olive oil.", "Bake 10-12 minutes until crust is golden.", "Top with fresh basil."],
    image: img("1565299624946-b28f40a0ae38"), extraImages: [img("1551183053-d0a57e3b1f0c"), img("1563379926898-05f4575a45d8")],
    prepTime: 20, cookTime: 12, servings: 2, difficulty: "Medium"
  },
  {
    id: 32, title: "Lamb Chops with Rosemary", description: "Herb-crusted lamb chops seared in a cast-iron skillet are an impressive yet surprisingly simple dinner. The lamb is seasoned generously with fresh rosemary, garlic, salt, and pepper, then seared over high heat to create a deeply caramelized, flavorful crust while keeping the inside perfectly pink and juicy. After a brief rest, the chops are served alongside roasted baby potatoes tossed in olive oil and garlic, with a side of sharp Dijon mustard for dipping. This dish is elegant enough for a dinner party but quick enough for a special weeknight meal. Lamb loin chops are best cooked to medium-rare for optimal tenderness and flavor. The entire meal is ready in under 40 minutes.", category: "Dinner",
    ingredients: ["8 lamb chops", "3 tbsp olive oil", "Fresh rosemary", "4 garlic cloves", "1 lb baby potatoes", "Salt and pepper", "Dijon mustard"],
    steps: ["Season lamb chops with salt, pepper, and rosemary.", "Heat oil in a cast-iron skillet over high heat.", "Sear lamb 3-4 minutes per side for medium-rare.", "Rest for 5 minutes.", "Roast potatoes at 400°F with olive oil and garlic.", "Serve lamb with potatoes and Dijon."],
    image: img("1504674900247-0877df9cc836"), extraImages: [img("1467003909585-2f8a72700288"), img("1519708227418-b060153beabd")],
    prepTime: 10, cookTime: 30, servings: 4, difficulty: "Medium"
  },
  {
    id: 33, title: "Shrimp Scampi", description: "Shrimp scampi is an elegant yet effortless dinner of plump, juicy shrimp sautéed in a fragrant garlic butter sauce and deglazed with white wine, then tossed with linguine and finished with a squeeze of bright lemon juice and fresh parsley. The entire dish comes together in under 20 minutes, making it a perfect weeknight dinner that feels like a restaurant experience. The sauce is intentionally simple — butter, garlic, wine, and lemon — allowing the sweet, briny flavor of the shrimp to shine. A pinch of red pepper flakes adds gentle warmth without overpowering the delicate flavors. Serve with crusty bread to mop up every last drop of the incredible garlicky sauce.", category: "Dinner",
    ingredients: ["1 lb large shrimp", "400g linguine", "4 garlic cloves", "½ cup white wine", "3 tbsp butter", "Red pepper flakes", "Parsley", "Lemon"],
    steps: ["Cook linguine al dente.", "Sauté garlic in butter until fragrant.", "Add shrimp, cook 2 minutes per side.", "Deglaze with white wine.", "Add red pepper flakes and lemon juice.", "Toss with linguine.", "Garnish with parsley."],
    image: img("1563379926898-05f4575a45d8"), extraImages: [img("1551183053-d0a57e3b1f0c"), img("1621996346565-e3dbc646d9a9")],
    prepTime: 10, cookTime: 15, servings: 4, difficulty: "Easy"
  },
  {
    id: 34, title: "Stuffed Bell Peppers", description: "Stuffed bell peppers are a colorful, wholesome dinner that combines savory seasoned beef, fluffy rice, and rich tomato sauce all baked inside vibrant bell pepper shells and topped with melted cheese. Each pepper is a self-contained meal that's as beautiful to look at as it is delicious to eat. The filling is deeply flavored with Italian seasoning, garlic, and onion, while the pepper itself becomes tender and slightly sweet during baking. This is a fantastic recipe for meal prep — assemble the peppers ahead of time and bake when ready. Use red, yellow, or orange peppers for sweeter flavor, or green for a more classic taste. Stuffed peppers are naturally gluten-free and can be made low-carb by substituting cauliflower rice.", category: "Dinner",
    ingredients: ["4 bell peppers", "1 lb ground beef", "1 cup cooked rice", "1 cup tomato sauce", "1 cup shredded cheese", "1 onion diced", "Garlic", "Italian seasoning"],
    steps: ["Cut tops off peppers, remove seeds.", "Brown beef with onion and garlic.", "Mix with rice, tomato sauce, and seasoning.", "Stuff peppers with the mixture.", "Top with cheese.", "Bake at 375°F for 30 minutes.", "Serve hot."],
    image: img("1596797038530-2c107229654b"), extraImages: [img("1563379926898-05f4575a45d8"), img("1551183053-d0a57e3b1f0c")],
    prepTime: 15, cookTime: 35, servings: 4, difficulty: "Medium"
  },
  {
    id: 35, title: "Chicken Alfredo Pasta", description: "Creamy chicken Alfredo is the ultimate comfort pasta — silky fettuccine noodles coated in a rich, velvety sauce of butter, heavy cream, and freshly grated Parmesan cheese, topped with tender slices of grilled chicken breast. The Alfredo sauce comes together in just minutes by simmering cream with garlic and butter until it thickens slightly, then stirring in Parmesan until it melts into a luxuriously smooth coating for the pasta. This dish is indulgent, satisfying, and beloved by both kids and adults. For the best results, use freshly grated Parmigiano-Reggiano rather than pre-shredded cheese, which contains anti-caking agents that can make the sauce grainy. Pair with garlic bread and a crisp Caesar salad for the perfect Italian-American dinner.", category: "Dinner",
    ingredients: ["400g fettuccine", "2 chicken breasts", "2 cups heavy cream", "1 cup Parmesan", "3 garlic cloves", "2 tbsp butter", "Parsley", "Salt and pepper"],
    steps: ["Cook fettuccine al dente.", "Season and grill chicken, slice.", "Melt butter, sauté garlic.", "Add cream, simmer until thickened.", "Stir in Parmesan.", "Toss with fettuccine.", "Top with sliced chicken and parsley."],
    image: img("1551183053-d0a57e3b1f0c"), extraImages: [img("1621996346565-e3dbc646d9a9"), img("1563379926898-05f4575a45d8")],
    prepTime: 10, cookTime: 25, servings: 4, difficulty: "Easy"
  },
  {
    id: 36, title: "Korean Bibimbap", description: "Bibimbap is Korea's iconic mixed rice bowl — a vibrant, nutritious, and visually stunning dish that features warm rice topped with an array of seasoned vegetables, savory beef bulgogi, and a sunny-side-up fried egg, all brought together with a generous spoonful of gochujang (Korean chili paste). The name literally means 'mixed rice,' and the ritual of stirring everything together before eating is part of the experience. Each vegetable is prepared separately to highlight its unique flavor and texture — blanched spinach, sautéed zucchini, julienned carrots, and crispy bean sprouts create a rainbow of colors and nutrients. Drizzle with sesame oil for nuttiness and mix vigorously for the best results. Bibimbap is balanced, beautiful, and endlessly satisfying.", category: "Dinner",
    ingredients: ["2 cups cooked rice", "200g beef bulgogi", "Spinach", "Carrots", "Zucchini", "Bean sprouts", "Fried egg", "Gochujang", "Sesame oil"],
    steps: ["Prepare each vegetable: blanch spinach, sauté carrots and zucchini.", "Cook beef bulgogi.", "Place rice in bowls.", "Arrange vegetables and beef on top.", "Top with a fried egg.", "Serve with gochujang and sesame oil.", "Mix before eating."],
    image: img("1553163147-622ab57be1c7"), extraImages: [img("1569718212165-3a8922ada9e5"), img("1603133872878-684f208fb84b")],
    prepTime: 20, cookTime: 20, servings: 2, difficulty: "Medium"
  },
  {
    id: 37, title: "Beef Tacos", description: "Seasoned ground beef tacos are the quintessential Mexican-inspired dinner that everyone loves. Well-browned ground beef is cooked with a blend of warm spices — cumin, chili powder, garlic, and paprika — creating a deeply savory, slightly smoky filling that's perfect in crispy taco shells. Load them up with shredded lettuce, diced tomatoes, shredded cheese, cool sour cream, and your favorite salsa for a customizable meal that's interactive and fun. These tacos come together in about 20 minutes, making them one of the fastest dinners in your rotation. Set up a taco bar and let everyone build their own for a casual family dinner or game-day gathering. They're budget-friendly, crowd-pleasing, and infinitely adaptable — try fish, shrimp, or chicken for variety.", category: "Dinner",
    ingredients: ["500g ground beef", "Taco seasoning", "8 taco shells", "Lettuce shredded", "Tomatoes diced", "Cheese", "Sour cream", "Salsa"],
    steps: ["Brown ground beef, drain fat.", "Add taco seasoning and water, simmer.", "Warm taco shells.", "Fill with seasoned beef.", "Top with lettuce, tomatoes, cheese.", "Add sour cream and salsa.", "Serve immediately."],
    image: img("1565299585-bdd6a61a3a17"), extraImages: [img("1551504734-5ee1c4a1479b"), img("1626700051175-6818013e1d4f")],
    prepTime: 10, cookTime: 15, servings: 4, difficulty: "Easy"
  },
  {
    id: 38, title: "Mushroom Risotto", description: "Mushroom risotto is a luxurious Italian rice dish that's creamy, earthy, and deeply comforting. Arborio rice is slowly cooked with warm chicken broth, one ladle at a time, while being stirred constantly — a meditative process that releases the rice's starches and creates the dish's signature velvety texture. Golden-sautéed mushrooms add an earthy, umami-rich flavor, while white wine provides acidity and depth. A generous finish of butter and freshly grated Parmesan makes this risotto irresistibly rich and glossy. Fresh thyme adds an aromatic herbal note that complements the mushrooms perfectly. While risotto requires patience and attention, the result is restaurant-quality Italian cuisine that's worth every minute of stirring. Serve as a main course or as an elegant side dish.", category: "Dinner",
    ingredients: ["1½ cups arborio rice", "300g mixed mushrooms", "1L warm chicken broth", "½ cup white wine", "1 onion diced", "3 tbsp butter", "½ cup Parmesan", "Fresh thyme"],
    steps: ["Sauté onion in butter until soft.", "Add mushrooms, cook until golden.", "Add rice, toast for 2 minutes.", "Pour in wine, stir until absorbed.", "Add broth one ladle at a time, stirring.", "Continue until rice is creamy (about 18 min).", "Stir in Parmesan and butter."],
    image: img("1476124369491-e7addf5db371"), extraImages: [img("1551183053-d0a57e3b1f0c"), img("1510693206972-df098062cb71")],
    prepTime: 10, cookTime: 30, servings: 4, difficulty: "Hard"
  },
  {
    id: 39, title: "Fish and Chips", description: "Fish and chips is Britain's most iconic dish — flaky white cod encased in a golden, crispy beer batter, served alongside thick-cut golden fries and a generous side of tartar sauce. The beer batter is the secret to that incredibly light, crunchy coating — the carbonation creates tiny air pockets as it fries, resulting in a shatteringly crisp shell that gives way to perfectly tender, steaming fish inside. The chips are double-fried for maximum crispiness on the outside with a fluffy interior. A splash of malt vinegar over the top is traditional and adds a wonderful tangy contrast. This beloved recipe has been a British staple for over 150 years and continues to be one of the world's most popular comfort food dishes.", category: "Dinner",
    ingredients: ["4 cod fillets", "1 cup flour", "1 cup beer", "1 egg", "Potatoes for frying", "Salt", "Malt vinegar", "Tartar sauce"],
    steps: ["Cut potatoes into thick fries, soak in water.", "Make batter: whisk flour, beer, egg, salt.", "Heat oil to 375°F.", "Fry potatoes until golden, season with salt.", "Dip fish in batter, fry 5-6 minutes.", "Drain on paper towels.", "Serve with tartar sauce and vinegar."],
    image: img("1519708227418-b060153beabd"), extraImages: [img("1467003909585-2f8a72700288"), img("1504674900247-0877df9cc836")],
    prepTime: 20, cookTime: 20, servings: 4, difficulty: "Medium"
  },
  {
    id: 40, title: "One-Pot Chicken and Rice", description: "One-pot chicken and rice is the ultimate hands-off dinner — tender chicken thighs are browned and then braised with rice, onions, garlic, and chicken broth all in a single pot. As the rice cooks, it absorbs the rich, savory flavors from the chicken, creating an incredibly flavorful and comforting meal with minimal cleanup. This dish is a staple in home kitchens around the world for good reason: it's affordable, feeds a family, and practically cooks itself. Season with paprika, thyme, and a bay leaf for aromatic depth. Use bone-in, skin-on chicken thighs for the juiciest, most flavorful results. Add frozen peas or diced tomatoes in the last 5 minutes for color and extra nutrition. Perfect comfort food for busy weeknights.", category: "Dinner",
    ingredients: ["4 chicken thighs bone-in", "1½ cups long grain rice", "1 onion diced", "3 garlic cloves", "2 cups chicken broth", "1 tsp paprika", "Fresh thyme", "Bay leaf", "Olive oil"],
    steps: ["Season chicken with paprika, salt, and pepper.", "Brown chicken in olive oil, skin-side down, 5 minutes.", "Remove chicken, sauté onion and garlic.", "Add rice, toast 1 minute.", "Pour in broth, add thyme and bay leaf.", "Place chicken on top, cover tightly.", "Bake at 375°F for 35 minutes until rice is tender."],
    image: img("1603894584373-5ac82b2ae7d3"), extraImages: [img("1585937421612-70a008356fbe"), img("1632778149955-e80f8ceca2e8")],
    prepTime: 10, cookTime: 40, servings: 4, difficulty: "Easy"
  },
  {
    id: 41, title: "Lasagna Bolognese", description: "A classic lasagna Bolognese is the ultimate Italian comfort food — layers of silky pasta sheets, rich and meaty Bolognese sauce, creamy béchamel, and melted cheese all baked together until golden and bubbling. Each slice reveals beautiful distinct layers of pasta, meat, and sauce. The Bolognese is slowly simmered with aromatic vegetables, tomatoes, and red wine until deeply concentrated and full of flavor. A velvety béchamel sauce adds richness and helps bind the layers together. While lasagna takes a bit of effort to assemble, it feeds a crowd generously and tastes even better the next day. It's the quintessential dish for Sunday family dinners, holidays, and potlucks. Assemble it ahead of time and bake when your guests arrive.", category: "Dinner",
    ingredients: ["12 lasagna sheets", "500g ground beef", "1 onion diced", "2 garlic cloves", "1 can crushed tomatoes", "2 tbsp tomato paste", "½ cup red wine", "2 cups béchamel sauce", "2 cups mozzarella", "½ cup Parmesan", "Olive oil", "Italian seasoning"],
    steps: ["Make Bolognese: brown beef with onion and garlic.", "Add tomato paste, crushed tomatoes, wine, and seasoning.", "Simmer 30 minutes until thick.", "Cook lasagna sheets al dente.", "Layer in baking dish: sauce, pasta, béchamel, cheese.", "Repeat layers 3 times.", "Top with mozzarella and Parmesan.", "Bake at 375°F for 35 minutes until golden."],
    image: img("1551183053-d0a57e3b1f0c"), extraImages: [img("1621996346565-e3dbc646d9a9"), img("1563379926898-05f4575a45d8")],
    prepTime: 30, cookTime: 70, servings: 8, difficulty: "Hard"
  },
  {
    id: 42, title: "Teriyaki Chicken", description: "Teriyaki chicken is a Japanese-inspired favorite that features juicy chicken thighs glazed in a sticky, sweet-savory teriyaki sauce made from soy sauce, mirin, brown sugar, ginger, and garlic. The sauce caramelizes beautifully as the chicken cooks, creating a glossy, lacquered coating that's irresistible. Serve over steamed rice with stir-fried broccoli or edamame on the side for a complete, balanced meal. This recipe is faster than ordering takeout and tastes significantly better with fresh, homemade sauce. The key is to reduce the sauce until it thickens into a syrupy glaze that clings to the chicken. Garnish with sesame seeds and sliced green onions for an authentic presentation. A family-friendly dinner that kids absolutely love.", category: "Dinner",
    ingredients: ["4 chicken thighs boneless", "¼ cup soy sauce", "2 tbsp mirin", "2 tbsp brown sugar", "1 tbsp ginger grated", "2 garlic cloves minced", "1 tbsp cornstarch", "Sesame seeds", "Green onions", "Steamed rice"],
    steps: ["Mix soy sauce, mirin, brown sugar, ginger, and garlic.", "Heat oil in a skillet, cook chicken 5 minutes per side.", "Pour sauce over chicken.", "Simmer 5 minutes until sauce thickens and glazes chicken.", "If needed, mix cornstarch with water and add to thicken.", "Slice chicken and serve over rice.", "Garnish with sesame seeds and green onions."],
    image: img("1603133872878-684f208fb84b"), extraImages: [img("1569718212165-3a8922ada9e5"), img("1553163147-622ab57be1c7")],
    prepTime: 10, cookTime: 15, servings: 4, difficulty: "Easy"
  },

  // ===== DESSERTS (43-60) =====
  {
    id: 43, title: "Chocolate Lava Cake", description: "Chocolate lava cake is the ultimate show-stopping dessert — a rich, decadent chocolate cake with a molten, flowing center that oozes out like liquid gold when you break through the perfectly baked exterior with your spoon. Made with dark chocolate and butter melted together with eggs and just a touch of flour, these individual cakes bake in ramekins for just 12-14 minutes — timing is crucial for achieving that signature gooey center. Served warm with a scoop of vanilla ice cream or a dusting of powdered sugar, this dessert is pure chocolate indulgence. Despite its impressive presentation, chocolate lava cake is surprisingly simple to make and uses just a handful of ingredients. It's the perfect finale for a romantic dinner or special celebration.", category: "Desserts",
    ingredients: ["200g dark chocolate", "½ cup butter", "3 eggs", "3 egg yolks", "¼ cup sugar", "2 tbsp flour", "Cocoa powder", "Vanilla ice cream"],
    steps: ["Preheat oven to 425°F.", "Melt chocolate and butter together.", "Whisk eggs, yolks, and sugar until thick.", "Fold chocolate into egg mixture.", "Add flour, fold gently.", "Pour into greased ramekins.", "Bake 12-14 minutes, center should be soft.", "Invert onto plates, serve with ice cream."],
    image: img("1563805042-7684c019e1cb"), extraImages: [img("1578985545062-69928b1d9587"), img("1551024601-824cc3df1b1e")],
    prepTime: 15, cookTime: 14, servings: 4, difficulty: "Hard"
  },
  {
    id: 44, title: "New York Cheesecake", description: "A classic New York cheesecake is the gold standard of cheesecakes — dense, creamy, rich, and perfectly tangy with a buttery graham cracker crust. Made with cream cheese, eggs, sour cream, and vanilla, this cheesecake has a velvety smooth texture that melts on your tongue. The slow baking and gradual cooling process prevents cracks and ensures a perfectly set, silky interior. While it requires patience — the chilling time is essential for the best texture — every bite is worth the wait. Serve it plain to appreciate its pure, clean flavor, or dress it up with fresh strawberries, blueberry compote, or a drizzle of caramel sauce. This recipe makes a tall, impressive cheesecake that serves 12 generously, perfect for holidays and celebrations.", category: "Desserts",
    ingredients: ["2 lbs cream cheese", "1 cup sugar", "5 eggs", "2 tsp vanilla", "¼ cup flour", "1 cup sour cream", "Graham cracker crust"],
    steps: ["Preheat oven to 325°F.", "Beat cream cheese and sugar until smooth.", "Add eggs one at a time.", "Mix in vanilla, flour, sour cream.", "Pour into graham cracker crust.", "Bake 60-70 minutes until set with slight jiggle.", "Cool in oven with door cracked.", "Refrigerate overnight."],
    image: img("1578985545062-69928b1d9587"), extraImages: [img("1563805042-7684c019e1cb"), img("1551024601-824cc3df1b1e")],
    prepTime: 20, cookTime: 70, servings: 12, difficulty: "Hard"
  },
  {
    id: 45, title: "Classic Tiramisu", description: "Tiramisu is Italy's most beloved dessert — an elegant no-bake creation of espresso-soaked ladyfinger cookies layered with a cloud-like mascarpone cream and dusted with dark cocoa powder. The name means 'pick me up' in Italian, and this dessert certainly delivers with its bold coffee flavor and rich, creamy texture. The mascarpone filling is made by whisking egg yolks with sugar until pale and thick, then folding in the whipped mascarpone for a mousse-like consistency. Each ladyfinger is dipped briefly in a mixture of strong espresso and coffee liqueur — just long enough to absorb flavor without becoming soggy. After chilling for at least 4 hours, the layers meld together into pure Italian bliss. It's the perfect make-ahead dessert for dinner parties.", category: "Desserts",
    ingredients: ["6 egg yolks", "¾ cup sugar", "500g mascarpone", "2 cups strong espresso", "3 tbsp coffee liqueur", "Ladyfinger cookies", "Cocoa powder"],
    steps: ["Whisk egg yolks and sugar until thick and pale.", "Add mascarpone, fold gently.", "Mix espresso with coffee liqueur.", "Dip ladyfingers briefly in coffee mixture.", "Layer in a dish: cookies, then cream.", "Repeat layers.", "Refrigerate 4+ hours.", "Dust with cocoa powder before serving."],
    image: img("1571877227200-a36d1d8bd9c8"), extraImages: [img("1563805042-7684c019e1cb"), img("1578985545062-69928b1d9587")],
    prepTime: 30, cookTime: 0, servings: 8, difficulty: "Medium"
  },
  {
    id: 46, title: "Classic Apple Pie", description: "Nothing says home baking like a classic apple pie with its golden, flaky double crust and warm, cinnamon-spiced apple filling. Sliced apples are tossed with sugar, cinnamon, nutmeg, and a touch of flour, then piled high into a buttery pie crust and covered with a top crust that's crimped at the edges and vented to allow steam to escape. As it bakes, the apples soften into a tender, juicy filling while the crust turns golden and shatteringly crisp. An egg wash brushed on top gives the pie a beautiful, glossy finish. Serve warm with a scoop of vanilla ice cream or a dollop of whipped cream for the ultimate American dessert experience. Use a mix of sweet and tart apple varieties for the best flavor balance.", category: "Desserts",
    ingredients: ["6 apples peeled and sliced", "¾ cup sugar", "2 tbsp flour", "1 tsp cinnamon", "¼ tsp nutmeg", "1 tbsp butter", "Double pie crust", "1 egg for wash"],
    steps: ["Preheat oven to 375°F.", "Toss apples with sugar, flour, cinnamon, nutmeg.", "Place bottom crust in pie dish.", "Fill with apple mixture, dot with butter.", "Cover with top crust, crimp edges.", "Cut slits in top, brush with egg wash.", "Bake 45-50 minutes until golden.", "Cool before slicing."],
    image: img("1535920527002-b35e96722eb9"), extraImages: [img("1551024601-824cc3df1b1e"), img("1563805042-7684c019e1cb")],
    prepTime: 25, cookTime: 50, servings: 8, difficulty: "Medium"
  },
  {
    id: 47, title: "Crème Brûlée", description: "Crème brûlée is the crown jewel of French desserts — a silky smooth vanilla custard topped with a perfectly caramelized sugar crust that shatters with a satisfying crack when you tap it with your spoon. The custard itself is made from just four ingredients: heavy cream, egg yolks, sugar, and vanilla, baked gently in a water bath until set but still trembling. The caramelized sugar topping is created by sprinkling a thin, even layer of sugar over the chilled custard and torching it until it melts and hardens into a glassy amber shell. The contrast between the warm, brittle sugar crust and the cool, creamy custard beneath is pure dessert perfection. It looks incredibly elegant but is surprisingly approachable for home bakers.", category: "Desserts",
    ingredients: ["2 cups heavy cream", "5 egg yolks", "½ cup sugar", "1 tsp vanilla extract", "Extra sugar for topping"],
    steps: ["Preheat oven to 325°F.", "Heat cream until simmering.", "Whisk yolks with sugar and vanilla.", "Slowly pour hot cream into yolks, whisking.", "Strain into ramekins.", "Place in water bath, bake 40-45 minutes.", "Chill completely.", "Sprinkle sugar on top, torch until caramelized."],
    image: img("1551024601-824cc3df1b1e"), extraImages: [img("1563805042-7684c019e1cb"), img("1578985545062-69928b1d9587")],
    prepTime: 15, cookTime: 45, servings: 4, difficulty: "Hard"
  },
  {
    id: 48, title: "Chocolate Chip Cookies", description: "Chocolate chip cookies are the world's most popular cookie — and this recipe produces bakery-quality results every time. The dough is made by creaming butter with both white and brown sugar until fluffy, then mixing in eggs, vanilla, flour, and a generous amount of chocolate chips. Brown sugar is the secret to that chewy texture, while a slightly higher ratio of butter creates those irresistible crispy edges. Bake just until the edges turn golden but the centers are still slightly underdone — they'll firm up as they cool, leaving you with the perfect chewy-crispy combination. For extra-thick cookies, chill the dough for 30 minutes before baking. These cookies are a timeless crowd-pleaser for bake sales, holiday cookie swaps, or simply as a warm treat with a cold glass of milk.", category: "Desserts",
    ingredients: ["2¼ cups flour", "1 cup butter softened", "¾ cup sugar", "¾ cup brown sugar", "2 eggs", "1 tsp vanilla", "1 tsp baking soda", "2 cups chocolate chips"],
    steps: ["Preheat oven to 375°F.", "Cream butter and sugars until fluffy.", "Add eggs and vanilla.", "Mix in flour and baking soda.", "Fold in chocolate chips.", "Drop by tablespoons onto baking sheets.", "Bake 9-11 minutes until golden edges.", "Cool on wire rack."],
    image: img("1499636136210-6f4ee915583e"), extraImages: [img("1558961363-fa8fdf82db35"), img("1551024601-824cc3df1b1e")],
    prepTime: 15, cookTime: 11, servings: 36, difficulty: "Easy"
  },
  {
    id: 49, title: "Strawberry Shortcake", description: "Strawberry shortcake is a beloved summer dessert that celebrates the season's sweetest fruit. Tender, buttery biscuits are split open and layered with juicy macerated strawberries and billowy whipped cream for a dessert that's light, fresh, and utterly delightful. The biscuits are made with cold butter cut into flour for a flaky, crumbly texture, while the strawberries are sliced and tossed with sugar, which draws out their natural juices to create a sweet, syrupy sauce. The whipped cream adds a cool, airy richness that ties everything together. This recipe is simple, elegant, and endlessly adaptable — use blueberries, peaches, or mixed berries when strawberries aren't in season. It's the perfect ending to a summer barbecue or outdoor gathering.", category: "Desserts",
    ingredients: ["2 cups flour", "⅓ cup sugar", "1 tbsp baking powder", "½ cup cold butter", "⅔ cup milk", "1 lb strawberries", "Whipped cream"],
    steps: ["Make biscuits: cut butter into flour, sugar, baking powder.", "Add milk, mix until just combined.", "Bake at 425°F for 12-15 minutes.", "Slice strawberries, toss with sugar.", "Let macerate 30 minutes.", "Split biscuits, layer with berries and cream."],
    image: img("1488477181946-6428a0291777"), extraImages: [img("1563805042-7684c019e1cb"), img("1578985545062-69928b1d9587")],
    prepTime: 15, cookTime: 15, servings: 6, difficulty: "Easy"
  },
  {
    id: 50, title: "Lemon Tart", description: "A lemon tart is a stunning French pastry that balances a buttery, crisp tart shell with a tangy, silky lemon curd filling and an elegant meringue topping. The lemon curd is made by cooking fresh lemon juice, eggs, sugar, and butter together until thick and glossy, creating a filling that's intensely lemony with just the right amount of sweetness. The meringue is whipped from egg whites and sugar until stiff and glossy, then piped on top and torched to create beautiful golden peaks. Every bite delivers a symphony of textures — the crumbly pastry, the smooth curd, and the airy meringue. This tart looks like it came from a Parisian pâtisserie but is absolutely achievable in a home kitchen. Serve chilled as a show-stopping dessert for special occasions.", category: "Desserts",
    ingredients: ["1 tart shell baked", "4 lemons juiced", "4 eggs", "1 cup sugar", "½ cup butter", "3 egg whites", "¼ cup sugar for meringue"],
    steps: ["Make lemon curd: whisk juice, eggs, sugar over heat.", "Add butter, cook until thick.", "Pour into baked tart shell.", "Chill until set.", "Whip egg whites with sugar for meringue.", "Pipe meringue on top.", "Torch until golden."],
    image: img("1519915028121-7d3463d20b13"), extraImages: [img("1551024601-824cc3df1b1e"), img("1563805042-7684c019e1cb")],
    prepTime: 30, cookTime: 20, servings: 8, difficulty: "Hard"
  },
  {
    id: 51, title: "Banana Bread", description: "Banana bread is the quintessential comfort baking recipe — a moist, tender, and beautifully golden quick bread that turns overripe bananas into something magical. The riper and more spotted your bananas, the sweeter and more flavorful your bread will be. Mashed bananas provide both moisture and natural sweetness, meaning you need less added sugar than most baked goods. The batter comes together in one bowl with just a fork — no mixer needed — and bakes into a loaf with a gorgeous golden crust and incredibly soft, melt-in-your-mouth crumb. The aroma of banana bread baking fills your entire home with warmth and comfort. Enjoy it warm with a smear of butter, or toast leftover slices for breakfast. It also freezes beautifully for up to 3 months.", category: "Desserts",
    ingredients: ["3 ripe bananas", "⅓ cup melted butter", "1 cup sugar", "1 egg", "1 tsp vanilla", "1 tsp baking soda", "1½ cups flour", "Pinch of salt"],
    steps: ["Preheat oven to 350°F.", "Mash bananas, mix in melted butter.", "Add sugar, egg, and vanilla.", "Stir in baking soda, salt, and flour.", "Pour into greased loaf pan.", "Bake 55-65 minutes.", "Cool before slicing."],
    image: img("1558401391-7899b4bd5bbf"), extraImages: [img("1499636136210-6f4ee915583e"), img("1558961363-fa8fdf82db35")],
    prepTime: 10, cookTime: 60, servings: 10, difficulty: "Easy"
  },
  {
    id: 52, title: "Panna Cotta with Berry Coulis", description: "Panna cotta is an elegant Italian dessert that translates to 'cooked cream' — and that's exactly what it is: a delicate, silky custard made from heavy cream, sugar, and vanilla, set with just enough gelatin to hold its trembling shape. When unmolded, it wobbles beautifully on the plate, and a vibrant berry coulis — made by simmering mixed berries with sugar until they break down into a glossy sauce — drapes over the white custard in a stunning contrast of color and flavor. The beauty of panna cotta lies in its simplicity — it takes just 15 minutes of active preparation, then the refrigerator does the rest. It's lighter than many cream-based desserts, making it the perfect ending to a rich meal. Customize with coffee, chocolate, or citrus flavors.", category: "Desserts",
    ingredients: ["2 cups heavy cream", "⅓ cup sugar", "1 tsp vanilla", "1 packet gelatin", "3 tbsp water", "Mixed berries", "2 tbsp sugar for coulis"],
    steps: ["Bloom gelatin in water.", "Heat cream with sugar and vanilla until simmering.", "Remove from heat, stir in gelatin until dissolved.", "Pour into molds, refrigerate 4+ hours.", "Make coulis: cook berries with sugar, strain.", "Unmold panna cotta.", "Drizzle with berry coulis."],
    image: img("1488477181946-6428a0291777"), extraImages: [img("1551024601-824cc3df1b1e"), img("1563805042-7684c019e1cb")],
    prepTime: 10, cookTime: 5, servings: 4, difficulty: "Easy"
  },
  {
    id: 53, title: "Red Velvet Cupcakes", description: "Red velvet cupcakes are a stunning dessert with their vibrant crimson-red color, tender crumb, and tangy cream cheese frosting. The cake itself has a subtle cocoa flavor and a distinctive moistness that comes from buttermilk in the batter. The cream cheese frosting — tangy, sweet, and impossibly smooth — is the perfect complement to the mildly sweet cake. These cupcakes are showstoppers at birthday parties, holidays, and celebrations, and they're surprisingly easy to make from scratch. The dramatic red color comes from food coloring, though you can use beet powder for a natural alternative. Pipe the frosting in beautiful swirls for a professional finish. Each batch makes 12 perfect cupcakes that disappear as fast as you can put them on the table.", category: "Desserts",
    ingredients: ["1½ cups flour", "1 cup sugar", "1 egg", "½ cup buttermilk", "½ cup oil", "Red food coloring", "1 tsp vanilla", "Cream cheese frosting"],
    steps: ["Preheat oven to 350°F.", "Mix flour, sugar, cocoa powder.", "Whisk egg, buttermilk, oil, food coloring, vanilla.", "Combine wet and dry ingredients.", "Fill cupcake liners ⅔ full.", "Bake 18-20 minutes.", "Cool completely, frost with cream cheese frosting."],
    image: img("1563805042-7684c019e1cb"), extraImages: [img("1578985545062-69928b1d9587"), img("1551024601-824cc3df1b1e")],
    prepTime: 15, cookTime: 20, servings: 12, difficulty: "Easy"
  },
  {
    id: 54, title: "Mango Sticky Rice", description: "Mango sticky rice is Thailand's most famous dessert — a heavenly combination of sweet, chewy glutinous rice soaked in warm coconut cream and served alongside slices of perfectly ripe, golden mango. The sticky rice is steamed until tender, then mixed with sweetened coconut milk while still warm, allowing the rice to absorb the rich, creamy sauce and develop its characteristic sticky, glossy texture. A second drizzle of thicker coconut cream over the top adds extra richness, and a sprinkle of toasted sesame seeds or crispy mung beans provides a delightful crunch. The key to this dessert is using ripe, fragrant mangoes — the sweetness of the fruit balances the rich coconut rice perfectly. This iconic Thai dessert is naturally gluten-free and dairy-free.", category: "Desserts",
    ingredients: ["1 cup glutinous rice", "1 can coconut milk", "½ cup sugar", "Pinch salt", "2 ripe mangos", "Sesame seeds"],
    steps: ["Soak sticky rice 4+ hours, then steam.", "Heat coconut milk with sugar and salt.", "Mix half the sauce into cooked rice.", "Let rice absorb sauce for 30 minutes.", "Slice mangos.", "Serve rice with mango, drizzle remaining sauce.", "Top with sesame seeds."],
    image: img("1494597564530-871f2b93ac55"), extraImages: [img("1488477181946-6428a0291777"), img("1590301157890-4810ed352733")],
    prepTime: 240, cookTime: 30, servings: 4, difficulty: "Medium"
  },
  {
    id: 55, title: "Fudgy Brownies", description: "These fudgy brownies are the holy grail of chocolate desserts — intensely chocolatey with a dense, fudgy center and a crackly, paper-thin top crust that shatters with every bite. The secret to their incredible fudginess is a higher ratio of fat and sugar to flour, along with melted butter rather than creamed butter. Dark cocoa powder delivers deep chocolate flavor, while just the right amount of flour holds everything together without making the brownies cakey. They're mixed entirely by hand in one bowl — no mixer, no fuss — and bake in under 25 minutes. Cut them into squares while still slightly warm for the gooiest results. Serve plain, dust with powdered sugar, or top with a scoop of vanilla ice cream for the ultimate indulgence.", category: "Desserts",
    ingredients: ["½ cup butter", "1 cup sugar", "2 eggs", "⅓ cup cocoa powder", "½ cup flour", "¼ tsp salt", "¼ tsp baking powder", "1 tsp vanilla"],
    steps: ["Preheat oven to 350°F.", "Melt butter, stir in sugar.", "Add eggs and vanilla, mix well.", "Stir in cocoa, flour, salt, baking powder.", "Pour into greased 8x8 pan.", "Bake 20-25 minutes.", "Cool before cutting."],
    image: img("1558961363-fa8fdf82db35"), extraImages: [img("1499636136210-6f4ee915583e"), img("1563805042-7684c019e1cb")],
    prepTime: 10, cookTime: 25, servings: 9, difficulty: "Easy"
  },
  {
    id: 56, title: "Churros with Chocolate Sauce", description: "Churros are a beloved Spanish street food — crispy, golden fried dough sticks coated in cinnamon sugar and served with a rich, warm chocolate dipping sauce. The dough is simple — just flour, water, sugar, salt, and oil — but the magic happens when it's piped through a star-shaped tip and fried until deeply golden and ridged with crispy edges. Rolling them immediately in cinnamon sugar while they're still hot creates an addictive sweet, spiced coating. The chocolate sauce is the perfect partner — warm, thick, and intensely chocolatey for dipping. Churros are incredibly popular at fairs, markets, and theme parks around the world, and they're surprisingly easy to make at home. Serve them fresh for the crispiest results — they're best eaten within 30 minutes of frying.", category: "Desserts",
    ingredients: ["1 cup water", "2 tbsp sugar", "½ tsp salt", "2 tbsp oil", "1 cup flour", "Oil for frying", "Cinnamon sugar", "Chocolate sauce"],
    steps: ["Boil water with sugar, salt, and oil.", "Remove from heat, stir in flour until a ball forms.", "Pipe dough into hot oil using a star tip.", "Fry until golden brown.", "Roll in cinnamon sugar.", "Melt chocolate for dipping sauce.", "Serve warm."],
    image: img("1551024601-824cc3df1b1e"), extraImages: [img("1563805042-7684c019e1cb"), img("1558961363-fa8fdf82db35")],
    prepTime: 10, cookTime: 15, servings: 6, difficulty: "Medium"
  },
  {
    id: 57, title: "Matcha Ice Cream", description: "Matcha ice cream is a smooth, creamy, and uniquely flavored frozen treat that showcases the earthy, slightly bitter, and subtly sweet taste of premium Japanese green tea powder. The custard base is made by tempering egg yolks with hot cream and sugar, then whisking in sifted matcha powder until the mixture turns a beautiful shade of vibrant green. After churning in an ice cream maker and freezing until firm, the result is an intensely flavored ice cream that's refreshing and sophisticated. The bitterness of the matcha balances the sweetness of the cream, creating a flavor profile that's complex and addictive. Use ceremonial-grade matcha for the best color and flavor. This recipe makes a small batch perfect for a family treat or a special dessert course.", category: "Desserts",
    ingredients: ["2 cups heavy cream", "1 cup whole milk", "¾ cup sugar", "3 tbsp matcha powder", "4 egg yolks", "Pinch salt"],
    steps: ["Whisk matcha with a little warm milk until smooth.", "Heat cream, milk, and half the sugar.", "Whisk yolks with remaining sugar.", "Temper yolks with hot cream.", "Cook until mixture coats a spoon.", "Stir in matcha paste.", "Chill, then churn in ice cream maker.", "Freeze 4+ hours."],
    image: img("1590301157890-4810ed352733"), extraImages: [img("1494597564530-871f2b93ac55"), img("1488477181946-6428a0291777")],
    prepTime: 20, cookTime: 10, servings: 6, difficulty: "Medium"
  },
  {
    id: 58, title: "Cinnamon Rolls", description: "Homemade cinnamon rolls are the ultimate weekend baking project — soft, pillowy yeast dough rolled with a generous swirl of cinnamon-brown sugar butter filling, then baked until golden and topped with a luscious cream cheese glaze. The dough is enriched with milk, butter, and eggs, making it tender and slightly sweet. Rolling it out thin, spreading the filling edge to edge, and rolling tightly creates those beautiful spiral layers. Baked side by side in a pan, the rolls steam each other as they bake, staying impossibly soft on the inside with just a hint of golden crust on top. The cream cheese frosting — tangy, sweet, and melty — is spooned generously over the warm rolls so it drips down into every crevice.", category: "Desserts",
    ingredients: ["4 cups flour", "1 packet yeast", "1 cup warm milk", "⅓ cup sugar", "⅓ cup butter", "2 eggs", "½ cup brown sugar", "2 tbsp cinnamon", "Cream cheese frosting"],
    steps: ["Mix yeast with warm milk and sugar, let bloom.", "Add butter, eggs, and flour to form soft dough.", "Knead 8 minutes, let rise 1 hour.", "Roll dough into rectangle, spread softened butter.", "Sprinkle with cinnamon-brown sugar mixture.", "Roll tightly into log, cut into 12 rolls.", "Place in greased pan, let rise 30 minutes.", "Bake at 375°F for 22-25 minutes.", "Top with cream cheese frosting while warm."],
    image: img("1509365390695-33aee754301f"), extraImages: [img("1558401391-7899b4bd5bbf"), img("1499636136210-6f4ee915583e")],
    prepTime: 120, cookTime: 25, servings: 12, difficulty: "Medium"
  },
  {
    id: 59, title: "Tres Leches Cake", description: "Tres leches cake is a beloved Latin American dessert — a light, airy sponge cake soaked in a mixture of three milks: evaporated milk, condensed milk, and heavy cream. The cake absorbs the sweet, creamy milk mixture like a sponge, transforming into an incredibly moist, pudding-like dessert that's sweet, rich, and utterly irresistible. Topped with a fluffy cloud of whipped cream and a sprinkle of cinnamon, this cake is both elegant and homey. It's the kind of dessert that gets better as it sits in the fridge, making it perfect for making ahead for parties and celebrations. Tres leches is a staple at Latin American birthdays, holidays, and family gatherings, and once you try it, you'll understand why it's loved across the continent.", category: "Desserts",
    ingredients: ["1 cup flour", "5 eggs", "1 cup sugar", "⅓ cup whole milk", "1 can evaporated milk", "1 can condensed milk", "1 cup heavy cream", "Whipped cream topping", "Cinnamon"],
    steps: ["Bake sponge cake: beat eggs with sugar until fluffy, fold in flour and milk.", "Pour into greased pan, bake at 350°F for 25 minutes.", "Cool completely.", "Mix evaporated milk, condensed milk, and cream.", "Poke holes all over cake with a fork.", "Pour milk mixture over cake slowly.", "Refrigerate at least 4 hours.", "Top with whipped cream and cinnamon."],
    image: img("1578985545062-69928b1d9587"), extraImages: [img("1563805042-7684c019e1cb"), img("1551024601-824cc3df1b1e")],
    prepTime: 20, cookTime: 25, servings: 12, difficulty: "Medium"
  },
  {
    id: 60, title: "Carrot Cake with Cream Cheese Frosting", description: "Carrot cake is a moist, warmly spiced cake studded with grated carrots, crunchy walnuts, and sweet raisins, all topped with a thick, tangy cream cheese frosting. The carrots provide incredible moisture and a subtle sweetness, while warm spices like cinnamon, nutmeg, and ginger add cozy, aromatic flavor. Crushed pineapple and coconut are optional additions that make the cake even more moist and flavorful. The cream cheese frosting is the essential companion — its tanginess balances the sweetness of the cake perfectly. This recipe makes a stunning two-layer cake that's perfect for birthdays, Easter celebrations, or any time you want an impressive homemade dessert. Decorate with chopped walnuts around the edges for a classic bakery finish.", category: "Desserts",
    ingredients: ["2 cups flour", "2 cups grated carrots", "1½ cups sugar", "1 cup vegetable oil", "4 eggs", "2 tsp cinnamon", "1 tsp baking soda", "½ cup walnuts", "Cream cheese frosting"],
    steps: ["Preheat oven to 350°F.", "Mix flour, cinnamon, baking soda.", "Beat eggs with sugar and oil.", "Combine wet and dry ingredients.", "Fold in carrots and walnuts.", "Pour into two greased 9-inch pans.", "Bake 30-35 minutes.", "Cool completely, frost with cream cheese frosting."],
    image: img("1535920527002-b35e96722eb9"), extraImages: [img("1558401391-7899b4bd5bbf"), img("1578985545062-69928b1d9587")],
    prepTime: 20, cookTime: 35, servings: 12, difficulty: "Medium"
  },

  // ===== SALADS (61-70) =====
  {
    id: 61, title: "Greek Salad", description: "A classic Greek salad, or horiatiki, is a vibrant celebration of fresh Mediterranean ingredients at their peak. Chunky pieces of ripe tomatoes, crisp cucumbers, and thinly sliced red onion are tossed with briny Kalamata olives and generous crumbles of tangy feta cheese, then dressed simply with extra virgin olive oil, red wine vinegar, and dried oregano. What makes this salad special is its simplicity — there's no lettuce, no fancy dressing, just pristine vegetables and quality ingredients allowed to speak for themselves. It's a staple on Greek tables from Athens to the islands, served with virtually every meal. The combination of fresh produce and salty feta is refreshing, satisfying, and healthy. Use the ripest, most flavorful tomatoes you can find for the best results.", category: "Salads",
    ingredients: ["2 cucumbers", "4 tomatoes", "1 red onion", "200g feta cheese", "Kalamata olives", "Olive oil", "Red wine vinegar", "Oregano"],
    steps: ["Cut cucumbers and tomatoes into chunks.", "Thinly slice red onion.", "Combine in a large bowl.", "Add olives and crumbled feta.", "Drizzle with olive oil and vinegar.", "Sprinkle with oregano.", "Toss gently and serve."],
    image: img("1540189549336-e6e99c3679fe"), extraImages: [img("1512621776951-a57141f2eefd"), img("1546793665-c74683f339c1")],
    prepTime: 10, cookTime: 0, servings: 4, difficulty: "Easy"
  },
  {
    id: 62, title: "Kale Caesar Salad", description: "This kale Caesar salad puts a modern, nutrient-dense twist on the classic Caesar by swapping romaine for sturdy, dark green kale leaves. The secret is massaging the kale with olive oil and lemon juice, which tenderizes the tough leaves and mellows their slightly bitter flavor into something beautifully earthy and silky. Tossed with a creamy, garlicky Caesar dressing, crunchy homemade croutons, and shaved Parmesan cheese, this salad is hearty enough to serve as a main course. Kale holds up remarkably well to dressing — unlike lettuce, it won't wilt even after sitting for hours, making it perfect for meal prep and potlucks. It's packed with vitamins A, C, and K, iron, and fiber. A satisfying salad that proves healthy eating can be absolutely delicious.", category: "Salads",
    ingredients: ["1 bunch kale", "Caesar dressing", "Croutons", "Parmesan shaved", "Lemon juice", "Olive oil"],
    steps: ["Remove kale stems, chop leaves.", "Massage kale with olive oil and lemon juice.", "Toss with Caesar dressing.", "Top with croutons and shaved Parmesan.", "Serve immediately."],
    image: img("1546793665-c74683f339c1"), extraImages: [img("1512621776951-a57141f2eefd"), img("1540189549336-e6e99c3679fe")],
    prepTime: 10, cookTime: 0, servings: 3, difficulty: "Easy"
  },
  {
    id: 63, title: "Watermelon Feta Salad", description: "Watermelon feta salad is the ultimate refreshing summer salad — a surprising combination of sweet, juicy watermelon cubes and crumbles of salty, tangy feta cheese that somehow works perfectly together. Fresh mint leaves add a cool, herbal brightness, while a drizzle of balsamic glaze and extra virgin olive oil brings everything together with sweet and savory depth. Each bite delivers a burst of contrasting flavors and textures: sweet and salty, crisp and creamy, cool and tangy. This salad takes just 10 minutes to assemble and requires no cooking at all, making it the perfect side dish for summer barbecues, pool parties, and outdoor gatherings. It's light, hydrating, and eye-catching with its vibrant pink, white, and green colors. A true warm-weather essential.", category: "Salads",
    ingredients: ["4 cups watermelon cubed", "200g feta cheese", "Fresh mint leaves", "Balsamic glaze", "Olive oil", "Black pepper"],
    steps: ["Cube watermelon into bite-sized pieces.", "Crumble feta over watermelon.", "Tear mint leaves and scatter.", "Drizzle with balsamic glaze and olive oil.", "Crack black pepper over top.", "Serve chilled."],
    image: img("1512621776951-a57141f2eefd"), extraImages: [img("1540189549336-e6e99c3679fe"), img("1546793665-c74683f339c1")],
    prepTime: 10, cookTime: 0, servings: 4, difficulty: "Easy"
  },
  {
    id: 64, title: "Cobb Salad", description: "The Cobb salad is a hearty, protein-packed American classic that's as beautiful as it is satisfying. Created at the Brown Derby restaurant in Hollywood in the 1930s, it features rows of carefully arranged ingredients on a bed of mixed greens: diced grilled chicken, crispy crumbled bacon, hard-boiled eggs, creamy avocado, sweet cherry tomatoes, and crumbled blue cheese. Each ingredient brings its own distinct flavor and texture, and when drizzled with ranch dressing and tossed together, the combination is absolutely incredible. This is a salad that eats like a complete meal — it's protein-rich, loaded with healthy fats, and full of variety in every bite. Perfect for a satisfying lunch or light dinner, the Cobb salad proves that salads don't have to be boring or unsatisfying.", category: "Salads",
    ingredients: ["Mixed greens", "Grilled chicken", "4 strips bacon", "2 hard-boiled eggs", "1 avocado", "Cherry tomatoes", "Blue cheese", "Ranch dressing"],
    steps: ["Arrange greens on a platter.", "Dice chicken, bacon, eggs, avocado.", "Halve cherry tomatoes.", "Arrange all toppings in rows.", "Crumble blue cheese on top.", "Serve with ranch dressing."],
    image: img("1550304943-4f24f54ddde9"), extraImages: [img("1546793665-c74683f339c1"), img("1512621776951-a57141f2eefd")],
    prepTime: 15, cookTime: 15, servings: 4, difficulty: "Easy"
  },
  {
    id: 65, title: "Caprese Salad", description: "A Caprese salad is Italian simplicity at its finest — thick slices of fresh mozzarella alternated with slices of perfectly ripe tomato, interspersed with aromatic fresh basil leaves, and drizzled with the finest extra virgin olive oil and a splash of balsamic vinegar. Named after the island of Capri, this salad celebrates the colors of the Italian flag: red, white, and green. The quality of the ingredients is everything here — use buffalo mozzarella if you can find it, vine-ripened tomatoes at peak season, and fragrant basil leaves. A generous pinch of flaky sea salt enhances all the flavors. Serve it as an elegant starter at dinner parties or as a light summer lunch. This recipe requires zero cooking and assembles in under 10 minutes, making it effortlessly impressive.", category: "Salads",
    ingredients: ["Fresh mozzarella", "4 ripe tomatoes", "Fresh basil", "Extra virgin olive oil", "Balsamic vinegar", "Salt and pepper"],
    steps: ["Slice mozzarella and tomatoes evenly.", "Alternate slices on a platter.", "Tuck basil leaves between slices.", "Drizzle with olive oil and balsamic.", "Season with salt and pepper.", "Serve at room temperature."],
    image: img("1550304943-4f24f54ddde9"), extraImages: [img("1540189549336-e6e99c3679fe"), img("1512621776951-a57141f2eefd")],
    prepTime: 10, cookTime: 0, servings: 4, difficulty: "Easy"
  },
  {
    id: 66, title: "Asian Sesame Chicken Salad", description: "This Asian sesame chicken salad is a crunchy, colorful, and flavor-packed meal that's light yet incredibly satisfying. Tender slices of grilled chicken are served over a bed of crisp mixed greens with sweet mandarin orange segments, crunchy wonton strips, toasted sliced almonds, and thinly sliced green onions. The star is the sesame dressing — a savory-sweet blend of sesame oil, soy sauce, rice vinegar, and ginger that coats every leaf and brings all the elements together harmoniously. The combination of textures — the crunch of the wonton strips and almonds, the juiciness of the chicken and oranges, and the crispness of the greens — makes every bite interesting. This salad is restaurant-quality but comes together at home in under 20 minutes.", category: "Salads",
    ingredients: ["Mixed greens", "Grilled chicken sliced", "Mandarin oranges", "Crispy wonton strips", "Sliced almonds", "Sesame dressing", "Green onions"],
    steps: ["Arrange greens in bowls.", "Top with sliced chicken.", "Add mandarin segments.", "Sprinkle wonton strips and almonds.", "Drizzle with sesame dressing.", "Garnish with green onions."],
    image: img("1550304943-4f24f54ddde9"), extraImages: [img("1546793665-c74683f339c1"), img("1512621776951-a57141f2eefd")],
    prepTime: 10, cookTime: 12, servings: 3, difficulty: "Easy"
  },

  // ===== SOUPS (67-76) =====
  {
    id: 67, title: "Classic Tomato Soup", description: "Classic tomato soup is the ultimate comfort food — velvety smooth, vibrantly red, and full of rich, concentrated tomato flavor with a hint of cream and fresh basil. Roasting the tomatoes first intensifies their sweetness and depth, transforming canned or fresh tomatoes into something extraordinary. Sautéed onions and garlic build the aromatic foundation, while a splash of cream stirred in at the end adds a luxurious silkiness. This soup pairs famously with a golden grilled cheese sandwich for the most comforting meal imaginable. It's simple enough for a weeknight dinner yet elegant enough to serve as a starter at a dinner party. The entire recipe comes together in under an hour, and it freezes beautifully for quick future meals.", category: "Soups",
    ingredients: ["2 lbs tomatoes", "1 onion", "3 garlic cloves", "2 cups vegetable broth", "½ cup heavy cream", "Fresh basil", "Olive oil", "Salt and pepper"],
    steps: ["Halve tomatoes, roast at 400°F for 25 min.", "Sauté onion and garlic in olive oil.", "Add roasted tomatoes and broth.", "Simmer 15 minutes.", "Blend until smooth.", "Stir in cream.", "Season and garnish with basil."],
    image: img("1547592166-23ac45744acd"), extraImages: [img("1476718406336-bb5a9690ee2a"), img("1604152135912-04a022e23696")],
    prepTime: 10, cookTime: 40, servings: 4, difficulty: "Easy"
  },
  {
    id: 68, title: "French Onion Soup", description: "French onion soup is a masterpiece of patient cooking — deeply caramelized onions simmered in rich beef broth, ladled into oven-safe bowls, and topped with a crusty bread round and a thick layer of melted Gruyère cheese that bubbles and browns under the broiler. The secret is slowly caramelizing the onions over low heat for at least 40 minutes until they transform from sharp and white to deeply golden, sweet, and jammy. A splash of white wine deglazes the pan and adds complexity. The result is a soup with extraordinary depth of flavor — sweet, savory, and richly satisfying. When you break through the golden cheese crust with your spoon, the rich broth underneath releases an intoxicating aroma. This is French cooking at its most soulful and rewarding.", category: "Soups",
    ingredients: ["4 large onions", "3 tbsp butter", "1 cup white wine", "4 cups beef broth", "French bread slices", "1 cup Gruyère", "Fresh thyme"],
    steps: ["Slice onions thinly.", "Cook in butter over low heat 40 minutes until deeply caramelized.", "Add wine, simmer until reduced.", "Add broth and thyme, simmer 20 minutes.", "Ladle into oven-safe bowls.", "Top with bread and Gruyère.", "Broil until cheese is bubbly."],
    image: img("1476718406336-bb5a9690ee2a"), extraImages: [img("1547592166-23ac45744acd"), img("1604152135912-04a022e23696")],
    prepTime: 10, cookTime: 65, servings: 4, difficulty: "Medium"
  },
  {
    id: 69, title: "Chicken Noodle Soup", description: "Homemade chicken noodle soup is the world's most comforting bowl — a golden, soul-warming broth filled with tender shredded chicken, soft egg noodles, and perfectly cooked carrots, celery, and onion. There's a reason this soup is the universal remedy for cold days, sick days, and everything in between. Starting with a whole chicken produces an incredibly rich, flavorful broth that forms the foundation of this dish. Fresh dill added at the end brings a bright, herbal note that elevates the soup from good to exceptional. This recipe makes a large batch that feeds the whole family with enough for seconds, and it tastes even better the next day. It's also freezer-friendly — just store the broth and chicken separately from the noodles to prevent them from becoming mushy.", category: "Soups",
    ingredients: ["1 whole chicken", "8 cups water", "3 carrots", "3 celery stalks", "1 onion", "Egg noodles", "Fresh dill", "Salt and pepper"],
    steps: ["Simmer chicken in water for 1 hour.", "Remove chicken, shred meat.", "Dice carrots, celery, onion.", "Add vegetables to broth, cook 15 min.", "Add noodles, cook until tender.", "Return shredded chicken.", "Season and garnish with dill."],
    image: img("1604152135912-04a022e23696"), extraImages: [img("1547592166-23ac45744acd"), img("1476718406336-bb5a9690ee2a")],
    prepTime: 15, cookTime: 80, servings: 6, difficulty: "Easy"
  },
  {
    id: 70, title: "Butternut Squash Soup", description: "Butternut squash soup is a velvety, golden autumn soup that's naturally sweet, comforting, and beautifully simple. Tender roasted butternut squash is blended with sautéed onion, garlic, and vegetable broth until silky smooth, then enriched with a splash of cream and a warm grating of nutmeg. The squash's natural sweetness and vibrant orange color make this soup as visually stunning as it is delicious. Toasted pumpkin seeds scattered on top add a satisfying crunch and nutty flavor contrast. This soup is a seasonal favorite during fall and winter, but it's delicious year-round. It's naturally gluten-free and can be made vegan by swapping cream for coconut milk. Perfect as a starter or paired with crusty bread for a complete meal.", category: "Soups",
    ingredients: ["1 butternut squash", "1 onion", "2 garlic cloves", "3 cups vegetable broth", "½ cup cream", "Nutmeg", "Pumpkin seeds", "Olive oil"],
    steps: ["Peel and cube squash.", "Sauté onion and garlic.", "Add squash and broth, simmer 20 min.", "Blend until smooth.", "Stir in cream and nutmeg.", "Toast pumpkin seeds.", "Serve soup topped with seeds."],
    image: img("1547592166-23ac45744acd"), extraImages: [img("1476718406336-bb5a9690ee2a"), img("1604152135912-04a022e23696")],
    prepTime: 15, cookTime: 30, servings: 4, difficulty: "Easy"
  },
  {
    id: 71, title: "Minestrone Soup", description: "Minestrone is Italy's hearty vegetable soup — a chunky, nourishing bowl brimming with seasonal vegetables, tender pasta, and creamy cannellini beans in a tomato-rich broth. Every Italian family has their own version, and that's the beauty of minestrone — it's endlessly adaptable to whatever vegetables you have on hand. Carrots, celery, zucchini, green beans, potatoes, and leafy greens are all welcome additions. Italian seasoning and a Parmesan rind simmered in the broth add incredible depth of flavor. A generous grating of Parmesan and a drizzle of olive oil finish each bowl. This soup is budget-friendly, healthy, and makes fantastic leftovers. It's also naturally freezer-friendly, making it a perfect candidate for meal prep.", category: "Soups",
    ingredients: ["2 carrots", "2 celery stalks", "1 zucchini", "1 can cannellini beans", "1 can diced tomatoes", "Small pasta", "Vegetable broth", "Italian seasoning", "Parmesan"],
    steps: ["Dice all vegetables.", "Sauté carrots, celery in olive oil.", "Add zucchini, tomatoes, beans, broth.", "Simmer 15 minutes.", "Add pasta, cook until tender.", "Season with Italian herbs.", "Serve with grated Parmesan."],
    image: img("1604152135912-04a022e23696"), extraImages: [img("1547592166-23ac45744acd"), img("1476718406336-bb5a9690ee2a")],
    prepTime: 15, cookTime: 30, servings: 6, difficulty: "Easy"
  },
  {
    id: 72, title: "Clam Chowder", description: "New England clam chowder is a rich, creamy, and hearty soup loaded with tender clams, chunks of potato, and smoky bacon in a thick, velvety broth. This iconic American soup is comfort food at its finest — each spoonful delivers a warm, satisfying combination of briny clam flavor, starchy potato, and creamy dairy richness. Crispy bacon added at the beginning provides a smoky depth that complements the sweet clams beautifully. Fresh thyme adds an aromatic herbal note. Traditionally served in a bread bowl in seaside restaurants from Maine to Cape Cod, this soup is surprisingly easy to make at home and tastes even better than restaurant versions. Serve with oyster crackers or crusty sourdough bread for the complete experience.", category: "Soups",
    ingredients: ["2 cans clams", "4 slices bacon", "2 potatoes diced", "1 onion", "2 cups milk", "1 cup cream", "2 tbsp flour", "Fresh thyme"],
    steps: ["Cook bacon until crispy, crumble.", "Sauté onion in bacon fat.", "Add flour, cook 1 minute.", "Add potatoes, clam juice, milk.", "Simmer until potatoes are tender.", "Add clams and cream.", "Season and serve with crumbled bacon."],
    image: img("1476718406336-bb5a9690ee2a"), extraImages: [img("1604152135912-04a022e23696"), img("1547592166-23ac45744acd")],
    prepTime: 10, cookTime: 30, servings: 4, difficulty: "Medium"
  },
  {
    id: 73, title: "Lentil Soup", description: "Lentil soup is one of the most nutritious and satisfying soups you can make — a warming, earthy bowl of tender red lentils simmered with cumin, turmeric, garlic, and a squeeze of fresh lemon juice. Red lentils cook quickly and break down into a naturally thick, creamy soup without any cream needed. This recipe is packed with plant-based protein and fiber, making it incredibly filling and nutritious. The combination of cumin and turmeric provides warmth and a golden color, while a drizzle of good olive oil and a squeeze of lemon before serving brightens everything up. This soup is naturally vegan, gluten-free, and budget-friendly — a big batch costs just a few dollars to make and feeds a family generously. It's perfect for meal prep and freezes beautifully.", category: "Soups",
    ingredients: ["1½ cups red lentils", "1 onion", "3 garlic cloves", "1 tsp cumin", "½ tsp turmeric", "4 cups broth", "Lemon juice", "Olive oil"],
    steps: ["Sauté onion and garlic in olive oil.", "Add cumin and turmeric, cook 1 minute.", "Add lentils and broth.", "Simmer 20-25 minutes until lentils are soft.", "Blend partially for texture.", "Season with lemon juice, salt, pepper.", "Drizzle with olive oil to serve."],
    image: img("1547592166-23ac45744acd"), extraImages: [img("1476718406336-bb5a9690ee2a"), img("1604152135912-04a022e23696")],
    prepTime: 10, cookTime: 25, servings: 4, difficulty: "Easy"
  },
  {
    id: 74, title: "Miso Soup", description: "Miso soup is a traditional Japanese staple served at nearly every meal — a gentle, umami-rich broth made from dashi stock and miso paste, floating with soft cubes of silken tofu, rehydrated wakame seaweed, and thinly sliced green onions. Despite its elegant simplicity, miso soup delivers a surprising depth of flavor from the fermented miso paste, which provides beneficial probiotics for gut health. The key rule is to never boil miso — dissolve it gently into warm broth to preserve its flavor and nutritional benefits. This soup is ready in about 15 minutes, making it a perfect quick side dish alongside sushi, rice bowls, or any Japanese-inspired meal. It's naturally low in calories yet surprisingly satisfying and warming.", category: "Soups",
    ingredients: ["4 cups dashi stock", "3 tbsp miso paste", "Silken tofu cubed", "Wakame seaweed", "Green onions", "Sesame seeds"],
    steps: ["Bring dashi to a simmer.", "Soak wakame in water until soft.", "Add tofu cubes to broth.", "Remove from heat.", "Dissolve miso paste in a ladleful of broth.", "Stir miso back into soup.", "Serve with scallions and sesame seeds."],
    image: img("1547592166-23ac45744acd"), extraImages: [img("1569718212165-3a8922ada9e5"), img("1476718406336-bb5a9690ee2a")],
    prepTime: 5, cookTime: 10, servings: 4, difficulty: "Easy"
  },
  {
    id: 75, title: "Lobster Bisque", description: "Lobster bisque is the epitome of luxurious soup — a velvety, rich, and deeply flavored cream soup made from lobster shells, aromatic vegetables, sherry, and heavy cream. The shells are simmered slowly to extract every bit of sweet, briny lobster flavor, then the broth is strained and enriched with cream until it's smooth as silk and a beautiful shade of coral pink. Tender chunks of lobster meat are folded in at the end, and a splash of sherry adds warmth and complexity. Garnished with fresh tarragon, this soup is the ultimate indulgent starter for a special occasion dinner. While it requires a bit more effort than a simple soup, the result is genuinely restaurant-quality and will impress any guest. Serve in small portions — it's rich.", category: "Soups",
    ingredients: ["2 lobster tails", "2 tbsp butter", "1 onion", "1 carrot", "2 tbsp tomato paste", "¼ cup sherry", "2 cups cream", "Tarragon", "Paprika"],
    steps: ["Cook lobster tails, remove meat and chop.", "Sauté shells with onion and carrot.", "Add tomato paste and paprika.", "Deglaze with sherry.", "Add broth, simmer 30 minutes.", "Strain, add cream.", "Return lobster meat to soup.", "Garnish with tarragon."],
    image: img("1476718406336-bb5a9690ee2a"), extraImages: [img("1547592166-23ac45744acd"), img("1604152135912-04a022e23696")],
    prepTime: 15, cookTime: 45, servings: 4, difficulty: "Hard"
  },
  {
    id: 76, title: "Gazpacho", description: "Gazpacho is Spain's iconic chilled tomato soup — a refreshing, vibrant, and incredibly healthy no-cook soup that's perfect for hot summer days. Ripe tomatoes, crisp cucumber, sweet red pepper, garlic, and stale bread are blended with extra virgin olive oil and red wine vinegar until smooth, creating a soup that's bursting with fresh, sun-ripened flavors. Served ice-cold, gazpacho is both a soup and a salad in liquid form — it's hydrating, full of vitamins, and requires zero cooking. The tradition of using day-old bread thickens the soup and gives it body. After blending, chill for at least 2 hours to allow the flavors to meld. Serve in chilled bowls with diced cucumber, pepper, and a drizzle of olive oil on top. A taste of Spanish summer in every spoonful.", category: "Soups",
    ingredients: ["6 ripe tomatoes", "1 cucumber", "1 red pepper", "1 garlic clove", "3 tbsp olive oil", "2 tbsp red wine vinegar", "Stale bread", "Salt"],
    steps: ["Roughly chop all vegetables.", "Soak bread in water.", "Blend vegetables, bread, olive oil, and vinegar.", "Season with salt.", "Strain for smooth texture if desired.", "Refrigerate at least 2 hours.", "Serve chilled with diced vegetables on top."],
    image: img("1547592166-23ac45744acd"), extraImages: [img("1604152135912-04a022e23696"), img("1476718406336-bb5a9690ee2a")],
    prepTime: 15, cookTime: 0, servings: 4, difficulty: "Easy"
  },

  // ===== APPETIZERS (77-86) =====
  {
    id: 77, title: "Classic Bruschetta", description: "Bruschetta is the quintessential Italian appetizer — crispy, golden slices of grilled bread rubbed with garlic and topped with a vibrant mixture of ripe diced tomatoes, fresh basil, and extra virgin olive oil. A splash of balsamic vinegar adds a sweet-tangy depth that makes this simple appetizer utterly addictive. The key is using the best-quality tomatoes you can find and toasting the bread until it's golden and crunchy enough to hold the topping without becoming soggy. Bruschetta is traditionally served as an antipasto in Italy and has become one of the world's most popular appetizers for good reason — it's fresh, flavorful, and takes just 15 minutes to prepare. Perfect for dinner parties, holiday gatherings, or a casual snack with wine.", category: "Appetizers",
    ingredients: ["1 baguette", "4 tomatoes diced", "Fresh basil", "3 garlic cloves", "Olive oil", "Balsamic vinegar", "Salt and pepper"],
    steps: ["Slice baguette, brush with olive oil.", "Toast until golden.", "Rub with garlic clove.", "Mix diced tomatoes, basil, olive oil, vinegar.", "Season with salt and pepper.", "Spoon mixture onto toasted bread.", "Serve immediately."],
    image: img("1572695157366-5e585ab2b69f"), extraImages: [img("1541014741-ef18e6753048"), img("1509722747-c0a6bff435e0")],
    prepTime: 10, cookTime: 5, servings: 6, difficulty: "Easy"
  },
  {
    id: 78, title: "Stuffed Mushrooms", description: "Baked stuffed mushrooms are an irresistible appetizer that disappears fast at any gathering. Plump button mushroom caps are hollowed out and filled with a savory mixture of cream cheese, minced garlic, fresh parsley, and grated Parmesan, then topped with golden breadcrumbs and baked until bubbly and aromatic. The mushrooms release their earthy juices as they bake, which mingle with the rich, herbed cream cheese filling for an incredibly flavorful bite-sized treat. They're easy to prepare in advance — fill the mushrooms, refrigerate, and pop them in the oven when guests arrive. This recipe makes an impressive presentation on a platter and works equally well as a party appetizer or an elegant starter course at a dinner party.", category: "Appetizers",
    ingredients: ["24 button mushrooms", "8 oz cream cheese", "¼ cup breadcrumbs", "2 garlic cloves minced", "Fresh parsley", "Parmesan", "Olive oil"],
    steps: ["Remove mushroom stems, hollow caps.", "Mix cream cheese, garlic, parsley, Parmesan.", "Fill mushroom caps with mixture.", "Top with breadcrumbs.", "Drizzle with olive oil.", "Bake at 375°F for 20 minutes.", "Serve warm."],
    image: img("1510693206972-df098062cb71"), extraImages: [img("1572695157366-5e585ab2b69f"), img("1541014741-ef18e6753048")],
    prepTime: 15, cookTime: 20, servings: 8, difficulty: "Easy"
  },
  {
    id: 79, title: "Shrimp Cocktail", description: "Shrimp cocktail is the classic appetizer that never goes out of style — plump, perfectly poached shrimp served chilled on a bed of ice with a zesty, horseradish-spiked cocktail sauce for dipping. The shrimp are briefly poached in seasoned water, then immediately plunged into an ice bath to stop the cooking and create a firm, snappy texture. The cocktail sauce is a simple but perfect combination of ketchup, prepared horseradish, fresh lemon juice, and a dash of Worcestershire sauce. This elegant appetizer requires minimal effort but delivers maximum impact at dinner parties, holiday gatherings, and celebrations. Arrange the shrimp on a platter around a bowl of cocktail sauce for a presentation that looks like it came from a high-end restaurant.", category: "Appetizers",
    ingredients: ["1 lb large shrimp", "Lemon slices", "Bay leaves", "Cocktail sauce", "Horseradish", "Lemon wedges", "Parsley"],
    steps: ["Bring water to boil with lemon and bay leaves.", "Add shrimp, cook 2-3 minutes until pink.", "Transfer to ice bath immediately.", "Make cocktail sauce: ketchup, horseradish, lemon.", "Arrange shrimp on ice.", "Serve with cocktail sauce and lemon wedges."],
    image: img("1519708227418-b060153beabd"), extraImages: [img("1572695157366-5e585ab2b69f"), img("1541014741-ef18e6753048")],
    prepTime: 10, cookTime: 5, servings: 6, difficulty: "Easy"
  },
  {
    id: 80, title: "Spinach Artichoke Dip", description: "Warm spinach artichoke dip is the ultimate crowd-pleasing party appetizer — a bubbling, cheesy, creamy dip loaded with tender spinach and tangy artichoke hearts. The combination of cream cheese, sour cream, mozzarella, and Parmesan creates a rich, indulgent base, while the spinach and artichoke add flavor and texture. Baked until golden and bubbly, this dip is absolutely irresistible when scooped up with crispy tortilla chips, warm pita bread, or fresh vegetable sticks. It's the appetizer that gets requested at every game day party, holiday gathering, and potluck. The best part? It takes just 10 minutes to assemble before baking. You can also make it ahead and refrigerate until ready to bake — a huge time-saver for entertaining.", category: "Appetizers",
    ingredients: ["10 oz frozen spinach", "1 can artichoke hearts", "8 oz cream cheese", "½ cup sour cream", "1 cup mozzarella", "½ cup Parmesan", "Garlic", "Tortilla chips"],
    steps: ["Thaw and drain spinach well.", "Chop artichoke hearts.", "Mix cream cheese, sour cream, cheeses.", "Add spinach, artichokes, garlic.", "Transfer to baking dish.", "Bake at 350°F for 25 minutes.", "Serve hot with chips."],
    image: img("1541014741-ef18e6753048"), extraImages: [img("1572695157366-5e585ab2b69f"), img("1510693206972-df098062cb71")],
    prepTime: 10, cookTime: 25, servings: 8, difficulty: "Easy"
  },
  {
    id: 81, title: "Crispy Spring Rolls", description: "Crispy spring rolls are a beloved Asian appetizer — golden, shattering-crisp on the outside with a savory, aromatic filling of glass noodles, shredded carrots, cabbage, and a touch of soy sauce and sesame oil inside. Each bite delivers a satisfying crunch followed by the warm, flavorful filling. The wrappers are rolled tightly and sealed with a dab of water before being fried in hot oil until perfectly golden. Served with sweet chili dipping sauce, these spring rolls are the perfect starter for any Asian-inspired meal or party spread. While they're traditionally fried, they also bake beautifully for a lighter version — brush with oil and bake at 400°F for 20 minutes. Make a big batch and freeze them uncooked for a quick snack anytime.", category: "Appetizers",
    ingredients: ["Spring roll wrappers", "200g glass noodles", "1 carrot shredded", "1 cup cabbage shredded", "Soy sauce", "Sesame oil", "Sweet chili sauce", "Oil for frying"],
    steps: ["Soak noodles, drain and chop.", "Mix with vegetables, soy sauce, sesame oil.", "Place filling on wrapper, roll tightly.", "Seal with water.", "Fry in hot oil until golden.", "Drain on paper towels.", "Serve with sweet chili sauce."],
    image: img("1569718212165-3a8922ada9e5"), extraImages: [img("1572695157366-5e585ab2b69f"), img("1541014741-ef18e6753048")],
    prepTime: 20, cookTime: 10, servings: 6, difficulty: "Medium"
  },
  {
    id: 82, title: "Guacamole", description: "Fresh homemade guacamole is a vibrant, creamy, and flavor-packed dip that's leagues better than anything from a store. Ripe avocados are mashed to your preferred consistency — chunky or smooth — then mixed with fresh lime juice, finely diced red onion, minced jalapeño for heat, juicy diced tomato, and fragrant cilantro. A generous pinch of salt brings all the flavors together. The key to great guacamole is using perfectly ripe avocados — they should yield to gentle pressure but not feel mushy. Serve immediately with crispy tortilla chips, as a topping for tacos and burritos, or as a side with grilled meats. Guacamole is naturally gluten-free, vegan, and loaded with heart-healthy fats. It takes just 10 minutes to prepare and always steals the show at any gathering.", category: "Appetizers",
    ingredients: ["3 ripe avocados", "1 lime juiced", "½ red onion diced", "1 jalapeño minced", "Fresh cilantro", "1 tomato diced", "Salt", "Tortilla chips"],
    steps: ["Halve avocados, remove pit.", "Mash to desired consistency.", "Add lime juice, onion, jalapeño.", "Fold in tomato and cilantro.", "Season with salt.", "Serve immediately with chips."],
    image: img("1565299585-bdd6a61a3a17"), extraImages: [img("1551504734-5ee1c4a1479b"), img("1541014741-ef18e6753048")],
    prepTime: 10, cookTime: 0, servings: 6, difficulty: "Easy"
  },
  {
    id: 83, title: "Hummus Platter", description: "Creamy homemade hummus is the star of any Mediterranean appetizer spread — silky smooth chickpeas blended with tahini, fresh lemon juice, garlic, and olive oil into a dip that's incredibly rich, nutty, and satisfying. Homemade hummus has a fresher, more vibrant flavor than store-bought versions, and making it takes just 5 minutes in a food processor. Serve it drizzled with extra virgin olive oil and a sprinkle of paprika in the center, surrounded by warm pita bread triangles, crisp carrot and celery sticks, cucumber slices, and cherry tomatoes. This platter is perfect for parties, casual entertaining, or as a healthy snack any time. Hummus is naturally vegan, gluten-free, high in protein and fiber, and universally loved by both kids and adults.", category: "Appetizers",
    ingredients: ["1 can chickpeas", "3 tbsp tahini", "2 garlic cloves", "Lemon juice", "Olive oil", "Paprika", "Cumin", "Pita bread", "Vegetables"],
    steps: ["Blend chickpeas, tahini, garlic, lemon juice.", "Add olive oil while blending until smooth.", "Season with salt and cumin.", "Transfer to serving bowl.", "Drizzle with olive oil and paprika.", "Serve with pita and fresh vegetables."],
    image: img("1558024920-418585b5e222"), extraImages: [img("1541014741-ef18e6753048"), img("1572695157366-5e585ab2b69f")],
    prepTime: 10, cookTime: 0, servings: 6, difficulty: "Easy"
  },

  // ===== DRINKS (84-90) =====
  {
    id: 84, title: "Mango Lassi", description: "A mango lassi is a creamy, cooling Indian yogurt drink that's like a tropical smoothie with a tangy twist. Sweet mango pulp is blended with thick yogurt, chilled milk, and a touch of sugar until smooth and frothy, then perfumed with a pinch of cardamom for an exotic aromatic note. Served ice-cold, this drink is both refreshing and satisfying — rich enough to feel indulgent yet light enough for a hot afternoon. Mango lassi is traditionally served alongside spicy Indian curries and biryanis, where its cooling dairy base helps balance the heat. It's one of India's most popular beverages and has gained fans worldwide. Use frozen mango chunks for an even thicker, frostier drink. Perfect for breakfast, as a snack, or paired with your favorite Indian meal.", category: "Drinks",
    ingredients: ["1 cup mango pulp", "1 cup yogurt", "½ cup milk", "2 tbsp sugar", "Pinch cardamom", "Ice cubes"],
    steps: ["Combine mango, yogurt, milk, sugar in blender.", "Add cardamom and ice.", "Blend until smooth and frothy.", "Pour into glasses.", "Serve chilled."],
    image: img("1494597564530-871f2b93ac55"), extraImages: [img("1590301157890-4810ed352733"), img("1488477181946-6428a0291777")],
    prepTime: 5, cookTime: 0, servings: 2, difficulty: "Easy"
  },
  {
    id: 85, title: "Classic Mojito", description: "The mojito is Cuba's most famous cocktail — a refreshing, effervescent mix of white rum, fresh lime juice, mint leaves, sugar, and sparkling soda water served over ice. The fresh mint is gently muddled with sugar and lime to release its aromatic oils without tearing the leaves into bits, creating a fragrant, herbaceous base. Topped with fizzy soda water and plenty of ice, a mojito is the ultimate warm-weather drink that's crisp, citrusy, and gloriously refreshing. The balance of sweet, sour, and minty makes it one of the most universally appealing cocktails. For a non-alcoholic virgin mojito, simply omit the rum — it's equally delicious as a mocktail. Garnish with a sprig of fresh mint and a lime wedge for the classic presentation.", category: "Drinks",
    ingredients: ["2 oz white rum", "1 oz lime juice", "2 tsp sugar", "Fresh mint leaves", "Soda water", "Ice", "Lime wedge"],
    steps: ["Muddle mint with sugar and lime juice.", "Add rum and ice.", "Top with soda water.", "Stir gently.", "Garnish with mint and lime wedge.", "Serve immediately."],
    image: img("1551538827-9c037cb4f32a"), extraImages: [img("1494597564530-871f2b93ac55"), img("1590301157890-4810ed352733")],
    prepTime: 5, cookTime: 0, servings: 1, difficulty: "Easy"
  },
  {
    id: 86, title: "Matcha Latte", description: "A matcha latte is a smooth, creamy, and beautifully green beverage made from premium Japanese matcha green tea powder whisked with steamed milk and a touch of honey. Matcha delivers a calm, sustained energy boost without the jitters of coffee, thanks to L-theanine, an amino acid that promotes relaxation and focus. The latte can be served hot for a cozy morning drink or poured over ice for a refreshing afternoon pick-me-up. The key to a good matcha latte is sifting the matcha and whisking it with a small amount of hot water first to eliminate lumps before adding the milk. Use oat milk for a creamier, slightly sweet vegan version, or whole milk for the most traditional, rich flavor. A healthy, antioxidant-rich alternative to your daily coffee.", category: "Drinks",
    ingredients: ["2 tsp matcha powder", "2 tbsp hot water", "1 cup steamed milk", "1 tbsp honey", "Ice (optional)"],
    steps: ["Sift matcha into a cup.", "Add hot water, whisk until smooth.", "Steam and froth milk.", "Pour milk over matcha.", "Sweeten with honey.", "Serve hot or over ice."],
    image: img("1590301157890-4810ed352733"), extraImages: [img("1494597564530-871f2b93ac55"), img("1551538827-9c037cb4f32a")],
    prepTime: 3, cookTime: 2, servings: 1, difficulty: "Easy"
  },
  {
    id: 87, title: "Strawberry Lemonade", description: "Fresh homemade strawberry lemonade is the ultimate summer refresher — a gorgeous pink drink that's sweet, tart, and bursting with real fruit flavor. Ripe strawberries are blended until smooth, then combined with freshly squeezed lemon juice and a simple syrup made from sugar and water. The result is a beautifully balanced drink that's far superior to any bottled version. Serve it in a tall glass filled with ice, garnished with fresh strawberry slices, lemon rounds, and a sprig of mint for a drink that looks as stunning as it tastes. This recipe makes a large pitcher — perfect for summer barbecues, picnics, and outdoor parties. Make it sparkling by replacing still water with club soda. Kids and adults alike can't get enough of this fresh, fruity lemonade.", category: "Drinks",
    ingredients: ["1 cup strawberries", "1 cup lemon juice", "¾ cup sugar", "4 cups cold water", "Ice", "Lemon slices", "Mint"],
    steps: ["Make simple syrup: dissolve sugar in 1 cup hot water.", "Blend strawberries until smooth.", "Combine lemon juice, strawberry puree, syrup.", "Add cold water, stir well.", "Serve over ice.", "Garnish with lemon slices and mint."],
    image: img("1494597564530-871f2b93ac55"), extraImages: [img("1551538827-9c037cb4f32a"), img("1590301157890-4810ed352733")],
    prepTime: 10, cookTime: 5, servings: 4, difficulty: "Easy"
  },
  {
    id: 88, title: "Rich Hot Chocolate", description: "Rich hot chocolate is the ultimate cold-weather comfort drink — a thick, velvety, intensely chocolatey beverage that's worlds apart from instant cocoa powder mixed with water. Real dark chocolate chips are melted into warm whole milk with cocoa powder and a pinch of sugar, creating a luxuriously smooth and deeply satisfying drink. A pinch of salt enhances the chocolate flavor, and a generous crown of whipped cream and mini marshmallows makes each mug feel like a special treat. This hot chocolate is perfect for chilly evenings, holiday gatherings, or a cozy weekend at home. Customize with a splash of vanilla extract, a pinch of cinnamon, or a shot of espresso for a mocha version. Kids and adults alike will fall in love with this homemade version.", category: "Drinks",
    ingredients: ["2 cups whole milk", "⅓ cup dark chocolate chips", "2 tbsp cocoa powder", "2 tbsp sugar", "Whipped cream", "Marshmallows", "Pinch salt"],
    steps: ["Heat milk in a saucepan over medium heat.", "Add chocolate chips and cocoa powder.", "Whisk until chocolate is melted and smooth.", "Add sugar and salt.", "Pour into mugs.", "Top with whipped cream and marshmallows."],
    image: img("1551538827-9c037cb4f32a"), extraImages: [img("1590301157890-4810ed352733"), img("1494597564530-871f2b93ac55")],
    prepTime: 2, cookTime: 5, servings: 2, difficulty: "Easy"
  },
  {
    id: 89, title: "Iced Caramel Latte", description: "An iced caramel latte is a sweet, creamy, and refreshing coffee drink that rivals anything from your favorite coffee shop. Strong espresso or concentrated cold brew coffee is poured over ice, then topped with cold milk and a generous drizzle of rich caramel sauce. The caramel adds a buttery sweetness that perfectly complements the bold, slightly bitter coffee. Stir it all together for a beautifully marbled drink that's equal parts indulgent and energizing. This is the go-to afternoon pick-me-up for coffee lovers who want something more exciting than a plain iced coffee. Use oat milk for a trendy, dairy-free version, or whole milk for the creamiest result. Make a batch of caramel sauce on the weekend for lattes all week long.", category: "Drinks",
    ingredients: ["2 shots espresso", "1 cup cold milk", "2 tbsp caramel sauce", "Ice cubes", "Whipped cream (optional)"],
    steps: ["Brew strong espresso and let cool slightly.", "Fill a glass with ice cubes.", "Drizzle caramel sauce inside the glass.", "Pour cold milk over ice.", "Add espresso on top.", "Stir gently and top with whipped cream.", "Drizzle extra caramel on top."],
    image: img("1551538827-9c037cb4f32a"), extraImages: [img("1590301157890-4810ed352733"), img("1494597564530-871f2b93ac55")],
    prepTime: 5, cookTime: 3, servings: 1, difficulty: "Easy"
  },
  {
    id: 90, title: "Tropical Smoothie", description: "A tropical smoothie transports you straight to a sun-drenched beach with its vibrant blend of fresh mango, sweet pineapple, ripe banana, and creamy coconut milk. This naturally dairy-free and vegan smoothie is thick, frosty, and bursting with tropical fruit flavors. The banana provides creaminess and natural sweetness, while the pineapple adds a tangy brightness that keeps the drink from being too rich. A splash of orange juice and a squeeze of lime add additional layers of citrusy freshness. Pour it into a tall glass garnished with a pineapple wedge, or serve it in a bowl topped with granola and coconut flakes for a tropical smoothie bowl. It's packed with vitamins, fiber, and natural energy — the perfect healthy breakfast or afternoon refresher.", category: "Drinks",
    ingredients: ["1 cup mango chunks", "½ cup pineapple chunks", "1 banana", "½ cup coconut milk", "¼ cup orange juice", "1 tbsp lime juice", "Ice cubes"],
    steps: ["Add all fruits to a blender.", "Pour in coconut milk and orange juice.", "Add lime juice and ice cubes.", "Blend until smooth and creamy.", "Pour into a glass.", "Garnish with a pineapple wedge.", "Serve immediately."],
    image: img("1494597564530-871f2b93ac55"), extraImages: [img("1590301157890-4810ed352733"), img("1551538827-9c037cb4f32a")],
    prepTime: 5, cookTime: 0, servings: 1, difficulty: "Easy"
  },

  // ===== VEGETARIAN (91-105) =====
  {
    id: 91, title: "Vegetable Pad Thai", description: "Vegetable pad Thai is a vibrant, tangy, and utterly delicious stir-fried noodle dish that captures all the iconic flavors of Thailand's most famous street food — without the meat. Soft rice noodles are wok-fried with scrambled eggs, crunchy bean sprouts, julienned carrots, and thinly sliced green onions in a savory-sweet sauce made from tamarind paste, soy sauce, and a touch of sugar. Crushed roasted peanuts add a nutty crunch, and a squeeze of fresh lime brings brightness to every bite. The beauty of pad Thai is the balance of flavors — sweet, sour, salty, and savory all in perfect harmony. This vegetarian version is just as satisfying as the original and comes together in under 30 minutes once you have your ingredients prepped.", category: "Vegetarian",
    ingredients: ["200g rice noodles", "2 eggs", "Bean sprouts", "Carrots", "Green onions", "Peanuts", "Tamarind paste", "Soy sauce", "Lime"],
    steps: ["Soak noodles in hot water until soft.", "Scramble eggs in a wok.", "Add vegetables, stir-fry 2 minutes.", "Add noodles, tamarind, soy sauce.", "Toss until well coated.", "Top with peanuts and bean sprouts.", "Serve with lime wedges."],
    image: img("1569718212165-3a8922ada9e5"), extraImages: [img("1603133872878-684f208fb84b"), img("1551183053-d0a57e3b1f0c")],
    prepTime: 15, cookTime: 10, servings: 3, difficulty: "Medium"
  },
  {
    id: 92, title: "Eggplant Parmesan", description: "Eggplant Parmesan is a hearty, comforting Italian-American classic that proves vegetarian food can be just as indulgent and satisfying as any meat dish. Thick slices of eggplant are salted to draw out excess moisture, then breaded and fried until golden and crispy. Layered in a baking dish with rich marinara sauce and generous amounts of melted mozzarella and grated Parmesan, the whole thing is baked until bubbly, golden, and irresistible. Each slice delivers a satisfying crunch from the breading, the tender creaminess of the eggplant, and the rich tang of the tomato sauce and melted cheese. Garnish with fresh basil for a pop of color and flavor. This dish makes an impressive main course served alongside garlic bread and a simple green salad.", category: "Vegetarian",
    ingredients: ["2 eggplants", "2 cups marinara sauce", "2 cups mozzarella", "1 cup breadcrumbs", "½ cup Parmesan", "2 eggs", "Olive oil", "Fresh basil"],
    steps: ["Slice eggplant ½ inch thick, salt and rest 30 min.", "Pat dry, dip in egg then breadcrumbs.", "Fry until golden on both sides.", "Layer in baking dish: sauce, eggplant, cheese.", "Repeat layers.", "Bake at 375°F for 25 minutes.", "Garnish with basil."],
    image: img("1596797038530-2c107229654b"), extraImages: [img("1551183053-d0a57e3b1f0c"), img("1563379926898-05f4575a45d8")],
    prepTime: 40, cookTime: 35, servings: 6, difficulty: "Medium"
  },
  {
    id: 93, title: "Vegetable Curry", description: "A creamy coconut vegetable curry is one of the most satisfying and nutritious vegetarian meals you can make. Tender potatoes, cauliflower florets, and chickpeas are simmered in a rich, fragrant sauce of coconut milk and curry paste, seasoned with ginger, garlic, and a blend of warm spices. Handfuls of fresh spinach are stirred in at the end, wilting into the sauce and adding vibrant color and extra nutrition. Served over fluffy basmati rice, this curry is comforting, filling, and packed with plant-based protein and fiber. It comes together in one pot in about 40 minutes, making it a perfect weeknight dinner. The recipe is naturally vegan and gluten-free, and it reheats beautifully — making it ideal for meal prep. Adjust the curry paste to your heat preference.", category: "Vegetarian",
    ingredients: ["1 can coconut milk", "2 potatoes", "1 cauliflower head", "1 can chickpeas", "Curry paste", "Spinach", "Onion", "Garlic", "Ginger"],
    steps: ["Sauté onion, garlic, ginger.", "Add curry paste, cook 1 minute.", "Add potatoes and cauliflower, stir.", "Pour in coconut milk, simmer 20 min.", "Add chickpeas and spinach.", "Cook until spinach wilts.", "Serve over basmati rice."],
    image: img("1585937421612-70a008356fbe"), extraImages: [img("1455619452474-d2be8b1e70cd"), img("1603894584373-5ac82b2ae7d3")],
    prepTime: 15, cookTime: 25, servings: 4, difficulty: "Easy"
  },
  {
    id: 94, title: "Margherita Flatbread Pizza", description: "A Margherita flatbread pizza is the quickest route to pizza satisfaction — ready in under 15 minutes using store-bought naan or flatbread as a crispy, chewy base. Spread with marinara sauce, topped with torn fresh mozzarella and halved cherry tomatoes, then baked until the cheese is melted and bubbly and the edges are golden and crispy. A finish of fresh basil leaves and a drizzle of olive oil transform this simple flatbread into something truly special. This recipe is perfect for busy weeknights when you want homemade pizza flavor without the effort of making dough from scratch. Kids love making their own — set up a flatbread pizza bar with different toppings and let everyone customize. It also works beautifully as a quick appetizer or snack.", category: "Vegetarian",
    ingredients: ["Naan or flatbread", "Marinara sauce", "Fresh mozzarella", "Cherry tomatoes", "Fresh basil", "Olive oil", "Garlic powder"],
    steps: ["Preheat oven to 425°F.", "Place flatbread on baking sheet.", "Spread marinara sauce.", "Add torn mozzarella and halved tomatoes.", "Sprinkle with garlic powder.", "Bake 8-10 minutes.", "Top with fresh basil and olive oil."],
    image: img("1565299624946-b28f40a0ae38"), extraImages: [img("1509722747-c0a6bff435e0"), img("1563379926898-05f4575a45d8")],
    prepTime: 5, cookTime: 10, servings: 2, difficulty: "Easy"
  },
  {
    id: 95, title: "Stuffed Zucchini Boats", description: "Baked stuffed zucchini boats are a healthy, colorful, and delicious vegetarian dinner that transforms humble zucchini into a show-stopping meal. Zucchini halves are hollowed out and filled with a savory mixture of cooked quinoa, diced tomatoes, sweet corn, and Italian herbs, then topped with a generous layer of melted cheese and baked until the zucchini is tender and the cheese is golden and bubbly. Each boat is a self-contained meal that's low in carbs, high in fiber, and packed with protein from the quinoa. This recipe is perfect for using up summer garden zucchini and is easily customizable — add black beans, mushrooms, or diced peppers to the filling. It's gluten-free, vegetarian, and makes beautiful individual servings for dinner parties.", category: "Vegetarian",
    ingredients: ["4 zucchini", "1 cup cooked quinoa", "1 cup diced tomatoes", "½ cup corn", "1 cup shredded cheese", "Italian seasoning", "Olive oil"],
    steps: ["Halve zucchini lengthwise, scoop out centers.", "Mix quinoa, tomatoes, corn, half the cheese.", "Season with Italian herbs.", "Fill zucchini halves.", "Top with remaining cheese.", "Bake at 375°F for 25 minutes.", "Serve hot."],
    image: img("1596797038530-2c107229654b"), extraImages: [img("1551183053-d0a57e3b1f0c"), img("1512621776951-a57141f2eefd")],
    prepTime: 15, cookTime: 25, servings: 4, difficulty: "Easy"
  },
  {
    id: 96, title: "Mushroom Stroganoff", description: "Mushroom stroganoff is a rich, creamy, and deeply satisfying vegetarian twist on the classic Russian comfort dish. A generous mix of mushrooms — button, cremini, and portobello — are sautéed in butter until deeply golden and caramelized, then simmered in a luscious sauce of vegetable broth and sour cream seasoned with paprika and fresh parsley. The earthy, umami-rich mushrooms provide such meaty depth of flavor that you won't miss the beef at all. Served over a nest of tender egg noodles, this is pure comfort food at its finest. The dish comes together in about 30 minutes, making it a perfect weeknight dinner. The sour cream is stirred in off the heat to prevent curdling, creating a silky, tangy sauce that clings to every noodle.", category: "Vegetarian",
    ingredients: ["500g mixed mushrooms", "1 onion", "3 garlic cloves", "1 cup sour cream", "2 tbsp butter", "1 cup vegetable broth", "Egg noodles", "Paprika", "Fresh parsley"],
    steps: ["Cook egg noodles al dente.", "Sauté onion and garlic in butter.", "Add mushrooms, cook until golden.", "Sprinkle with paprika and flour.", "Add broth, simmer until thickened.", "Remove from heat, stir in sour cream.", "Serve over noodles with parsley."],
    image: img("1510693206972-df098062cb71"), extraImages: [img("1476124369491-e7addf5db371"), img("1551183053-d0a57e3b1f0c")],
    prepTime: 10, cookTime: 20, servings: 4, difficulty: "Easy"
  },
  {
    id: 97, title: "Roasted Cauliflower Steaks", description: "Roasted cauliflower steaks are a stunning vegetarian main course that proves vegetables can be the star of the dinner table. Thick-cut slices of cauliflower are brushed with olive oil and seasoned with cumin, smoked paprika, and garlic powder, then roasted at high heat until the edges are beautifully charred and caramelized while the center remains tender and sweet. A creamy tahini sauce — made by thinning tahini with lemon juice and water — drizzles over the top, adding a rich, nutty contrast. Fresh parsley adds a bright pop of color and herbaceous flavor. This dish is naturally vegan and gluten-free, making it inclusive for various dietary preferences. It's impressive enough for dinner parties and easy enough for a weeknight meal.", category: "Vegetarian",
    ingredients: ["1 large cauliflower", "3 tbsp olive oil", "Cumin", "Smoked paprika", "Garlic powder", "Tahini", "Lemon juice", "Fresh parsley"],
    steps: ["Slice cauliflower into 1-inch thick steaks.", "Brush with olive oil, season with spices.", "Roast at 425°F for 25-30 minutes.", "Flip halfway through.", "Make tahini sauce: thin tahini with lemon and water.", "Drizzle over roasted cauliflower.", "Garnish with parsley."],
    image: img("1512621776951-a57141f2eefd"), extraImages: [img("1546793665-c74683f339c1"), img("1550304943-4f24f54ddde9")],
    prepTime: 10, cookTime: 30, servings: 2, difficulty: "Easy"
  },
  {
    id: 98, title: "Spanakopita", description: "Spanakopita is a beloved Greek savory pastry — layers of flaky, buttery phyllo dough wrapped around a rich filling of spinach, tangy feta cheese, eggs, dill, and a whisper of nutmeg. Each bite delivers a satisfying crunch from the golden phyllo followed by the creamy, herbaceous filling. This traditional dish is served at Greek celebrations, family gatherings, and as a popular street food throughout Greece. While it looks impressive with its golden, shatteringly crisp layers, spanakopita is surprisingly approachable for home cooks. The key is brushing each sheet of phyllo generously with melted butter before layering, which creates those light, flaky, mille-feuille-like layers during baking. Score the top before baking to create neat diamond-shaped servings. Serve warm or at room temperature.", category: "Vegetarian",
    ingredients: ["1 lb spinach", "200g feta cheese", "1 onion", "3 eggs", "Phyllo dough", "Butter melted", "Dill", "Nutmeg"],
    steps: ["Sauté onion, add spinach until wilted.", "Cool and squeeze out moisture.", "Mix with feta, eggs, dill, nutmeg.", "Brush phyllo sheets with butter, layer.", "Spread filling, top with more buttered phyllo.", "Score top into diamonds.", "Bake at 350°F for 40 minutes until golden."],
    image: img("1541014741-ef18e6753048"), extraImages: [img("1510693206972-df098062cb71"), img("1572695157366-5e585ab2b69f")],
    prepTime: 25, cookTime: 40, servings: 8, difficulty: "Medium"
  },
  {
    id: 99, title: "Sweet Potato Buddha Bowl", description: "A sweet potato Buddha bowl is a nourishing, beautiful, and perfectly balanced meal in a bowl. Roasted sweet potato cubes caramelize to golden perfection in the oven, developing a natural sweetness that contrasts beautifully with the earthy quinoa, crispy roasted chickpeas, and tender massaged kale. Creamy sliced avocado adds healthy fats, while a drizzle of lemon tahini dressing ties everything together with a nutty, tangy finish. This bowl is a nutritional powerhouse — packed with complex carbs, plant protein, healthy fats, fiber, and a rainbow of vitamins and minerals. It's naturally vegan and gluten-free, making it inclusive for all dietary preferences. Buddha bowls are endlessly customizable — swap ingredients based on what's in season or what you have on hand.", category: "Vegetarian",
    ingredients: ["2 sweet potatoes", "1 cup quinoa", "1 can chickpeas", "Kale", "Avocado", "Tahini", "Lemon", "Olive oil"],
    steps: ["Cube sweet potatoes, roast at 400°F for 25 min.", "Cook quinoa.", "Roast chickpeas with cumin and paprika.", "Massage kale with olive oil.", "Assemble bowls: quinoa, sweet potato, chickpeas, kale.", "Add sliced avocado.", "Drizzle with lemon tahini dressing."],
    image: img("1512621776951-a57141f2eefd"), extraImages: [img("1550304943-4f24f54ddde9"), img("1546793665-c74683f339c1")],
    prepTime: 15, cookTime: 25, servings: 3, difficulty: "Easy"
  },
  {
    id: 100, title: "Vegetable Fried Rice", description: "Vegetable fried rice is the ultimate quick, satisfying, and budget-friendly dinner that transforms leftover rice into something extraordinary. Day-old rice — which is drier and firmer than freshly cooked rice — is stir-fried in a blazing-hot wok with scrambled eggs, colorful mixed vegetables, soy sauce, and aromatic sesame oil. The high heat creates the coveted 'wok hei' — a subtle smoky, charred flavor that makes restaurant fried rice so addictive. This dish is endlessly customizable: add tofu for extra protein, toss in whatever vegetables you have in the fridge, or add a drizzle of chili oil for heat. It comes together in under 15 minutes, making it one of the fastest dinners in your cooking repertoire. A vegetarian classic that the whole family will love.", category: "Vegetarian",
    ingredients: ["3 cups cooked rice (day-old)", "2 eggs", "1 cup mixed vegetables", "3 tbsp soy sauce", "1 tbsp sesame oil", "Green onions", "Garlic", "Ginger"],
    steps: ["Heat sesame oil in a wok over high heat.", "Scramble eggs, set aside.", "Sauté garlic, ginger, and vegetables.", "Add cold rice, stir-fry 3-4 minutes.", "Add soy sauce, toss well.", "Return eggs to wok.", "Garnish with green onions."],
    image: img("1603133872878-684f208fb84b"), extraImages: [img("1569718212165-3a8922ada9e5"), img("1553163147-622ab57be1c7")],
    prepTime: 5, cookTime: 10, servings: 3, difficulty: "Easy"
  },

  // ===== SEAFOOD (101-120) =====
  {
    id: 101, title: "Garlic Butter Shrimp", description: "Garlic butter shrimp is a quick, elegant, and utterly delicious dish that comes together in under 15 minutes. Plump, juicy shrimp are sautéed in a generous amount of melted butter with minced garlic until they turn pink and curl, then deglazed with a splash of white wine that creates a glossy, flavorful sauce. A pinch of red pepper flakes adds gentle warmth, while fresh lemon juice and chopped parsley bring brightness and color to the dish. Serve the shrimp over rice, pasta, or with crusty bread to soak up every drop of the incredible garlicky butter sauce. This recipe is proof that the simplest dishes are often the most satisfying. It's perfect for a quick weeknight dinner, a romantic meal for two, or an impressive appetizer at a dinner party.", category: "Seafood",
    ingredients: ["1 lb large shrimp", "4 tbsp butter", "5 garlic cloves", "¼ cup white wine", "Red pepper flakes", "Parsley", "Lemon juice"],
    steps: ["Peel and devein shrimp.", "Melt butter, sauté minced garlic.", "Add shrimp, cook 2 minutes per side.", "Add white wine and pepper flakes.", "Squeeze in lemon juice.", "Garnish with parsley.", "Serve with crusty bread."],
    image: img("1519708227418-b060153beabd"), extraImages: [img("1563379926898-05f4575a45d8"), img("1467003909585-2f8a72700288")],
    prepTime: 10, cookTime: 8, servings: 3, difficulty: "Easy"
  },
  {
    id: 102, title: "Tuna Poke Bowl", description: "A tuna poke bowl brings the fresh, vibrant flavors of Hawaiian cuisine to your table. Cubes of sushi-grade ahi tuna are briefly marinated in a savory mixture of soy sauce, sesame oil, and rice vinegar, then served over perfectly seasoned sushi rice alongside creamy avocado slices, crunchy cucumber, bright edamame, and garnished with shredded nori strips and toasted sesame seeds. Each bite delivers a perfect balance of flavors and textures — the buttery-soft tuna, the sticky rice, the creamy avocado, and the refreshing crunch of the vegetables. Poke bowls have become one of the most popular healthy lunch options worldwide, and making them at home is surprisingly simple and affordable. The key is using the highest quality fresh fish you can find.", category: "Seafood",
    ingredients: ["300g sushi-grade tuna", "2 cups sushi rice", "1 avocado", "Cucumber", "Edamame", "Soy sauce", "Sesame oil", "Rice vinegar", "Nori strips"],
    steps: ["Cook sushi rice, season with rice vinegar.", "Cube tuna into bite-sized pieces.", "Marinate in soy sauce and sesame oil.", "Assemble bowls with rice base.", "Top with tuna, avocado, cucumber, edamame.", "Garnish with nori strips and sesame seeds."],
    image: img("1553163147-622ab57be1c7"), extraImages: [img("1569718212165-3a8922ada9e5"), img("1519708227418-b060153beabd")],
    prepTime: 15, cookTime: 20, servings: 2, difficulty: "Medium"
  },
  {
    id: 103, title: "Pan-Seared Sea Bass", description: "Pan-seared sea bass is a refined yet remarkably simple seafood dish that delivers restaurant-quality results at home. The key technique is pressing the fish skin-side down in a hot, oiled pan and resisting the urge to move it — this creates an incredibly crispy, golden skin that shatters beautifully against the tender, flaky white flesh beneath. A quick lemon caper butter sauce made in the same pan — with browned butter, briny capers, and bright lemon juice — provides a tangy, rich accompaniment that elevates the dish from simple to stunning. This recipe takes just 15 minutes from start to plate, making it perfect for both weeknight dinners and special occasions. Serve with roasted vegetables or a light salad for a clean, elegant meal.", category: "Seafood",
    ingredients: ["4 sea bass fillets", "3 tbsp butter", "2 tbsp capers", "Lemon juice", "Fresh parsley", "Olive oil", "Salt and pepper"],
    steps: ["Score fish skin, season with salt and pepper.", "Heat olive oil in a pan over high heat.", "Place fish skin-side down, press flat.", "Cook 4 minutes until skin is crispy.", "Flip, cook 2 more minutes.", "Add butter, capers, and lemon juice.", "Baste fish with pan sauce, serve."],
    image: img("1467003909585-2f8a72700288"), extraImages: [img("1519708227418-b060153beabd"), img("1504674900247-0877df9cc836")],
    prepTime: 5, cookTime: 10, servings: 4, difficulty: "Medium"
  },
  {
    id: 104, title: "Seafood Paella", description: "Seafood paella is Spain's most celebrated rice dish — a stunning, one-pan feast of saffron-infused rice loaded with plump shrimp, tender mussels, rings of squid, and a medley of vegetables, all cooked together until the bottom develops the prized 'socarrat' — a crispy, caramelized layer of rice that's the hallmark of authentic paella. Saffron threads turn the rice a gorgeous golden color and infuse it with their distinctive, honeyed aroma. The technique is simple but important: after adding the stock, don't stir — let the rice cook undisturbed so it develops that crispy bottom layer. Paella is traditionally made outdoors over an open flame for large gatherings, and it's the perfect dish for entertaining. Serve it straight from the pan with lemon wedges for squeezing.", category: "Seafood",
    ingredients: ["2 cups bomba rice", "½ lb shrimp", "½ lb mussels", "½ lb squid", "Saffron threads", "4 cups fish stock", "1 onion", "1 red pepper", "Peas", "Paprika"],
    steps: ["Toast saffron in stock.", "Sauté onion and pepper in olive oil.", "Add rice and paprika, toast 2 minutes.", "Pour in saffron stock.", "Arrange seafood on top.", "Cook without stirring 18-20 minutes.", "Let rest 5 minutes.", "Serve with lemon wedges."],
    image: img("1519708227418-b060153beabd"), extraImages: [img("1467003909585-2f8a72700288"), img("1504674900247-0877df9cc836")],
    prepTime: 20, cookTime: 25, servings: 6, difficulty: "Hard"
  },
  {
    id: 105, title: "Coconut Curry Mussels", description: "Coconut curry mussels are a stunning, aromatic dish that's both impressive and surprisingly quick to prepare. Fresh mussels are steamed in a fragrant broth of coconut milk, red curry paste, garlic, and ginger until they pop open to reveal their plump, briny meat. The coconut curry broth is the star — rich, creamy, and deeply flavored with warm spices and a squeeze of fresh lime juice that adds a bright, citrusy finish. Fresh cilantro scattered on top provides color and a burst of herbal freshness. This dish is perfect served with crusty bread for soaking up every last drop of the incredible broth. Mussels are one of the most sustainable, affordable, and nutritious types of seafood. The entire dish comes together in about 15 minutes, making it a perfect quick but impressive dinner.", category: "Seafood",
    ingredients: ["2 lbs mussels", "1 can coconut milk", "2 tbsp red curry paste", "2 garlic cloves", "Ginger", "Lime juice", "Cilantro", "Crusty bread"],
    steps: ["Clean and debeard mussels.", "Sauté garlic and ginger.", "Add curry paste, cook 1 minute.", "Pour in coconut milk, bring to simmer.", "Add mussels, cover and cook 5-6 minutes.", "Discard any unopened mussels.", "Add lime juice and cilantro.", "Serve with crusty bread."],
    image: img("1519708227418-b060153beabd"), extraImages: [img("1467003909585-2f8a72700288"), img("1504674900247-0877df9cc836")],
    prepTime: 10, cookTime: 10, servings: 4, difficulty: "Medium"
  },
  {
    id: 106, title: "Fish Tacos with Mango Salsa", description: "Fish tacos with fresh mango salsa are a California-meets-Baja classic that brings together crispy, seasoned fish, crunchy slaw, and a bright, fruity mango salsa in warm corn tortillas. Flaky white fish — like cod or mahi-mahi — is seasoned with cumin, chili powder, and lime, then pan-fried or grilled until golden and tender. The mango salsa adds a sweet, tropical freshness with diced mango, red onion, jalapeño, and cilantro that perfectly complements the savory fish. A drizzle of creamy lime crema and a pile of crunchy cabbage slaw complete each taco. These tacos are lighter and brighter than their meat-based counterparts, making them perfect for summer. They come together quickly and are always a hit at casual gatherings.", category: "Seafood",
    ingredients: ["4 white fish fillets", "8 corn tortillas", "1 mango diced", "½ red onion diced", "1 jalapeño minced", "Cilantro", "2 limes", "Sour cream", "Cumin", "Chili powder", "Shredded cabbage"],
    steps: ["Season fish with cumin, chili powder, salt, and lime juice.", "Pan-fry fish 3-4 minutes per side until golden.", "Make mango salsa: mix mango, onion, jalapeño, cilantro, lime.", "Make lime crema: mix sour cream with lime juice.", "Warm tortillas.", "Fill with fish, top with cabbage slaw.", "Add mango salsa and drizzle with lime crema."],
    image: img("1565299585-bdd6a61a3a17"), extraImages: [img("1551504734-5ee1c4a1479b"), img("1519708227418-b060153beabd")],
    prepTime: 15, cookTime: 10, servings: 4, difficulty: "Easy"
  },
  {
    id: 107, title: "Shrimp Fried Rice", description: "Shrimp fried rice is the ultimate quick, satisfying, and flavorful dinner that transforms leftover rice into a complete meal in under 15 minutes. Plump, juicy shrimp are stir-fried with scrambled eggs, peas, carrots, and day-old rice in a hot wok, seasoned with soy sauce, sesame oil, and a touch of white pepper. The high heat creates that coveted smoky wok flavor while keeping the rice grains separate and slightly crispy rather than mushy. This dish is a staple in Chinese-American cuisine and a beloved comfort food around the world. It's endlessly customizable — add any vegetables you have on hand, adjust the soy sauce to taste, or add a drizzle of chili oil for heat. The key is using cold, day-old rice for the best texture.", category: "Seafood",
    ingredients: ["1 lb shrimp peeled", "3 cups day-old rice", "2 eggs", "½ cup peas", "1 carrot diced", "3 tbsp soy sauce", "1 tbsp sesame oil", "Green onions", "Garlic"],
    steps: ["Heat sesame oil in a wok over high heat.", "Cook shrimp 2 minutes per side, set aside.", "Scramble eggs, set aside.", "Sauté garlic, carrots, and peas.", "Add cold rice, stir-fry 3 minutes.", "Add soy sauce, return shrimp and eggs.", "Toss well, garnish with green onions."],
    image: img("1603133872878-684f208fb84b"), extraImages: [img("1569718212165-3a8922ada9e5"), img("1553163147-622ab57be1c7")],
    prepTime: 10, cookTime: 10, servings: 3, difficulty: "Easy"
  },
  {
    id: 108, title: "Baked Cod with Herb Crust", description: "Baked cod with a golden herb crust is a healthy, elegant, and incredibly easy dinner. Flaky white cod fillets are topped with a flavorful mixture of breadcrumbs, fresh parsley, lemon zest, garlic, and Parmesan, then baked until the crust is golden and crunchy and the fish beneath is tender and moist. This recipe requires just 10 minutes of prep and 15 minutes of baking, making it one of the fastest, healthiest dinners in your rotation. Cod is a mild, versatile white fish that's high in protein and low in fat, making it perfect for health-conscious cooks. Serve with roasted vegetables, a green salad, or lemon-dressed asparagus for a complete meal. The herb crust adds wonderful texture and flavor to the delicate fish.", category: "Seafood",
    ingredients: ["4 cod fillets", "½ cup panko breadcrumbs", "2 tbsp Parmesan", "2 tbsp fresh parsley chopped", "1 lemon zested and juiced", "2 garlic cloves minced", "2 tbsp olive oil", "Salt and pepper"],
    steps: ["Preheat oven to 400°F.", "Mix panko, Parmesan, parsley, lemon zest, garlic, and olive oil.", "Place cod on a lined baking sheet.", "Season with salt, pepper, and lemon juice.", "Press breadcrumb mixture on top of each fillet.", "Bake 12-15 minutes until golden and fish flakes.", "Serve with lemon wedges."],
    image: img("1467003909585-2f8a72700288"), extraImages: [img("1519708227418-b060153beabd"), img("1504674900247-0877df9cc836")],
    prepTime: 10, cookTime: 15, servings: 4, difficulty: "Easy"
  },
  {
    id: 109, title: "Lobster Mac and Cheese", description: "Lobster mac and cheese is the most indulgent, luxurious version of America's favorite comfort food. Tender chunks of sweet lobster meat are folded into an ultra-creamy, velvety cheese sauce made with a blend of sharp cheddar, Gruyère, and Parmesan, all tossed with perfectly cooked pasta shells and baked until golden and bubbly on top. A crispy panko breadcrumb topping adds the perfect textural contrast to the creamy, cheesy interior. This dish bridges the gap between comfort food and fine dining — it's the kind of meal you'd pay a premium for at a high-end restaurant but can easily recreate at home. Perfect for special occasions, date nights, or when you simply want to treat yourself. Use lobster tails for the most accessible and consistent results.", category: "Seafood",
    ingredients: ["2 lobster tails", "400g shell pasta", "2 cups sharp cheddar", "1 cup Gruyère", "½ cup Parmesan", "2 cups milk", "3 tbsp butter", "3 tbsp flour", "½ cup panko breadcrumbs", "Paprika"],
    steps: ["Cook lobster tails, chop meat into chunks.", "Cook pasta al dente.", "Make roux: melt butter, add flour, cook 1 minute.", "Gradually add milk, whisk until smooth.", "Stir in cheeses until melted.", "Fold in pasta and lobster.", "Transfer to baking dish, top with panko and paprika.", "Bake at 375°F for 20 minutes until golden."],
    image: img("1551183053-d0a57e3b1f0c"), extraImages: [img("1519708227418-b060153beabd"), img("1563379926898-05f4575a45d8")],
    prepTime: 15, cookTime: 30, servings: 6, difficulty: "Medium"
  },
  {
    id: 110, title: "Grilled Swordfish Steaks", description: "Grilled swordfish steaks are a meaty, robust, and satisfying seafood option that's perfect for grill lovers who want something more substantial than delicate fish fillets. Swordfish has a firm, steak-like texture that holds up beautifully on the grill, developing gorgeous char marks and a slightly smoky flavor. Marinated briefly in olive oil, lemon juice, garlic, and fresh herbs, the fish is grilled for just 4-5 minutes per side until it's perfectly cooked through but still moist and tender. A bright chimichurri sauce or simple lemon-herb butter is the ideal accompaniment. This dish is high in protein, rich in omega-3 fatty acids, and naturally gluten-free. Serve with grilled vegetables or a Mediterranean salad for a clean, healthy, and incredibly flavorful summer dinner.", category: "Seafood",
    ingredients: ["4 swordfish steaks", "3 tbsp olive oil", "2 lemons", "3 garlic cloves", "Fresh rosemary", "Fresh oregano", "Salt and pepper", "Cherry tomatoes"],
    steps: ["Marinate swordfish in olive oil, lemon, garlic, and herbs for 20 min.", "Preheat grill to medium-high.", "Grill swordfish 4-5 minutes per side.", "Don't move the fish — let it develop grill marks.", "Grill cherry tomatoes alongside for 2-3 minutes.", "Squeeze fresh lemon over the fish.", "Serve with grilled tomatoes and fresh herbs."],
    image: img("1504674900247-0877df9cc836"), extraImages: [img("1467003909585-2f8a72700288"), img("1519708227418-b060153beabd")],
    prepTime: 25, cookTime: 10, servings: 4, difficulty: "Medium"
  },
  {
    id: 111, title: "Crispy Calamari", description: "Crispy fried calamari is one of the most popular seafood appetizers worldwide — tender rings of squid coated in a light, seasoned batter and fried until golden, crunchy, and irresistible. The key to perfect calamari is quick, high-heat frying that cooks the squid in under 2 minutes, keeping it tender rather than rubbery. A light coating of seasoned flour — sometimes mixed with a touch of cornstarch for extra crispiness — creates a delicate, shattering crust. Served hot with a squeeze of lemon and a side of marinara sauce or aioli for dipping, crispy calamari is pure golden perfection. It's a beloved Italian-American restaurant starter that's surprisingly easy to make at home. The entire recipe takes less than 20 minutes including prep time.", category: "Seafood",
    ingredients: ["1 lb squid rings", "1 cup flour", "½ cup cornstarch", "1 tsp paprika", "1 tsp garlic powder", "Salt and pepper", "Oil for frying", "Lemon wedges", "Marinara sauce"],
    steps: ["Mix flour, cornstarch, paprika, garlic powder, salt, pepper.", "Pat squid rings completely dry.", "Toss squid in flour mixture, shake off excess.", "Heat oil to 375°F.", "Fry in batches 1-2 minutes until golden.", "Drain on paper towels immediately.", "Serve hot with lemon and marinara."],
    image: img("1519708227418-b060153beabd"), extraImages: [img("1572695157366-5e585ab2b69f"), img("1467003909585-2f8a72700288")],
    prepTime: 10, cookTime: 8, servings: 4, difficulty: "Medium"
  },
  {
    id: 112, title: "Salmon Teriyaki Bowl", description: "A salmon teriyaki bowl is a colorful, balanced, and deeply flavorful Japanese-inspired meal that brings together glazed salmon, fluffy rice, and fresh vegetables in one beautiful bowl. Salmon fillets are pan-seared until crispy-skinned, then glazed with a homemade teriyaki sauce that caramelizes into a sticky, sweet-savory coating. Served over steamed rice with steamed edamame, pickled ginger, sliced cucumber, and avocado, this bowl is a complete meal that's both nutritious and incredibly satisfying. The teriyaki sauce — made from soy sauce, mirin, brown sugar, and ginger — is far superior to bottled versions and takes just minutes to prepare. This bowl is high in omega-3 fatty acids, protein, and healthy fats. A Japanese-inspired dinner the whole family will love.", category: "Seafood",
    ingredients: ["4 salmon fillets", "¼ cup soy sauce", "2 tbsp mirin", "2 tbsp brown sugar", "1 tsp ginger grated", "2 cups steamed rice", "Edamame", "Cucumber sliced", "Avocado", "Sesame seeds"],
    steps: ["Mix soy sauce, mirin, brown sugar, and ginger for teriyaki sauce.", "Sear salmon skin-side down 4 minutes.", "Flip, pour teriyaki sauce over salmon.", "Cook 3-4 minutes, spooning sauce over fish.", "Assemble bowls: rice, salmon, edamame, cucumber, avocado.", "Drizzle remaining sauce over bowls.", "Garnish with sesame seeds."],
    image: img("1553163147-622ab57be1c7"), extraImages: [img("1467003909585-2f8a72700288"), img("1569718212165-3a8922ada9e5")],
    prepTime: 10, cookTime: 12, servings: 4, difficulty: "Easy"
  },
  {
    id: 113, title: "Crab Cakes", description: "Crab cakes are a quintessential American seafood delicacy — golden, crispy on the outside and packed with sweet, tender lump crab meat on the inside. The best crab cakes use minimal filler, allowing the crab to be the undeniable star. A light binder of mayonnaise, egg, Dijon mustard, and Worcestershire sauce holds everything together, while Old Bay seasoning adds that classic Chesapeake Bay flavor. Panko breadcrumbs provide just enough structure without overwhelming the delicate crab. Pan-fried in butter until golden brown on each side, these crab cakes are served with a tangy remoulade sauce and lemon wedges. They make an elegant appetizer or a stunning main course paired with coleslaw and corn on the cob. Use the best quality crab meat you can afford.", category: "Seafood",
    ingredients: ["1 lb lump crab meat", "⅓ cup mayonnaise", "1 egg", "1 tsp Dijon mustard", "1 tsp Worcestershire sauce", "Old Bay seasoning", "½ cup panko breadcrumbs", "2 tbsp butter", "Lemon wedges"],
    steps: ["Pick through crab meat to remove any shell pieces.", "Mix mayo, egg, mustard, Worcestershire, and Old Bay.", "Gently fold in crab meat and breadcrumbs.", "Form into 8 patties, refrigerate 30 minutes.", "Melt butter in a skillet over medium heat.", "Pan-fry crab cakes 3-4 minutes per side until golden.", "Serve with lemon wedges and remoulade."],
    image: img("1519708227418-b060153beabd"), extraImages: [img("1467003909585-2f8a72700288"), img("1572695157366-5e585ab2b69f")],
    prepTime: 40, cookTime: 8, servings: 4, difficulty: "Medium"
  },
  {
    id: 114, title: "Honey Garlic Glazed Salmon", description: "Honey garlic glazed salmon is one of the most popular easy dinner recipes for a reason — it's quick, healthy, and packed with incredible sweet-savory flavor. Salmon fillets are baked in a glossy glaze of honey, soy sauce, minced garlic, and a splash of rice vinegar that caramelizes beautifully in the oven, creating a sticky, golden coating on the fish. The salmon stays moist and flaky inside while developing gorgeous color on top. This recipe takes just 20 minutes from start to finish, including prep time, making it faster than most takeout orders. Serve over steamed rice with roasted broccoli or bok choy for a complete, balanced meal. It's high in omega-3s, protein, and healthy fats. A family-friendly recipe that even picky eaters will love.", category: "Seafood",
    ingredients: ["4 salmon fillets", "3 tbsp honey", "2 tbsp soy sauce", "3 garlic cloves minced", "1 tbsp rice vinegar", "1 tbsp olive oil", "Sesame seeds", "Green onions"],
    steps: ["Preheat oven to 400°F.", "Mix honey, soy sauce, garlic, and rice vinegar.", "Place salmon on a lined baking sheet.", "Brush generously with honey garlic glaze.", "Bake 12-15 minutes, basting halfway through.", "Broil for 1-2 minutes for caramelized top.", "Garnish with sesame seeds and green onions."],
    image: img("1467003909585-2f8a72700288"), extraImages: [img("1519708227418-b060153beabd"), img("1504674900247-0877df9cc836")],
    prepTime: 5, cookTime: 15, servings: 4, difficulty: "Easy"
  },
  {
    id: 115, title: "Cioppino — Seafood Stew", description: "Cioppino is San Francisco's legendary Italian-American seafood stew — a rustic, tomato-based broth brimming with an assortment of fresh seafood including shrimp, clams, mussels, white fish, and sometimes crab. Originating from Italian fishermen who would combine the day's catch in a communal pot, cioppino is as much about community and generosity as it is about incredible flavor. The aromatic base of onions, garlic, fennel, and white wine is simmered with crushed tomatoes until fragrant, then the seafood is added in stages — heartier pieces first, delicate ones last — so everything finishes cooking at the same time. Served in deep bowls with plenty of crusty sourdough bread for soaking up the incredible broth, cioppino is a feast for the senses.", category: "Seafood",
    ingredients: ["½ lb shrimp", "½ lb clams", "½ lb mussels", "½ lb white fish cubed", "1 can crushed tomatoes", "1 onion diced", "1 fennel bulb diced", "4 garlic cloves", "½ cup white wine", "Fish stock", "Red pepper flakes", "Fresh basil", "Sourdough bread"],
    steps: ["Sauté onion, fennel, and garlic in olive oil.", "Add red pepper flakes and white wine, simmer 2 minutes.", "Add crushed tomatoes and fish stock.", "Simmer 15 minutes.", "Add clams and mussels first, cover 3 minutes.", "Add fish and shrimp, cover 4 minutes.", "Discard any unopened shellfish.", "Ladle into bowls, garnish with basil, serve with bread."],
    image: img("1476718406336-bb5a9690ee2a"), extraImages: [img("1519708227418-b060153beabd"), img("1467003909585-2f8a72700288")],
    prepTime: 15, cookTime: 25, servings: 4, difficulty: "Medium"
  },
  {
    id: 116, title: "Lemon Herb Grilled Shrimp Skewers", description: "Lemon herb grilled shrimp skewers are the quintessential summer appetizer — large, juicy shrimp marinated in a bright mixture of lemon juice, olive oil, garlic, and fresh herbs like parsley and oregano, then threaded onto skewers and grilled until pink and slightly charred. The marinade infuses the shrimp with incredible flavor in just 15 minutes, and the high heat of the grill cooks them in under 5 minutes, creating a smoky, caramelized exterior while keeping the interior tender and succulent. These skewers are perfect for summer barbecues, outdoor parties, or a quick weeknight dinner. Serve them with rice, a green salad, or as part of a Mediterranean mezze spread. They're high in protein, low in calories, and always disappear fast.", category: "Seafood",
    ingredients: ["1 lb large shrimp peeled", "3 tbsp olive oil", "2 lemons juiced", "3 garlic cloves minced", "Fresh parsley", "Fresh oregano", "Salt and pepper", "Wooden skewers"],
    steps: ["Soak wooden skewers in water 30 minutes.", "Mix olive oil, lemon juice, garlic, herbs.", "Marinate shrimp 15 minutes.", "Thread shrimp onto skewers.", "Grill over medium-high heat 2-3 minutes per side.", "Squeeze fresh lemon over skewers.", "Serve hot with extra herbs."],
    image: img("1519708227418-b060153beabd"), extraImages: [img("1572695157366-5e585ab2b69f"), img("1467003909585-2f8a72700288")],
    prepTime: 50, cookTime: 6, servings: 4, difficulty: "Easy"
  },
  {
    id: 117, title: "Thai Coconut Shrimp Soup", description: "Thai coconut shrimp soup, or Tom Kha Goong, is a creamy, aromatic Thai soup that's more indulgent than its sister Tom Yum. Rich coconut milk forms the base, infused with fragrant lemongrass, galangal, and kaffir lime leaves, creating a broth that's simultaneously creamy and bright with citrus notes. Plump shrimp and sliced mushrooms add substance, while fish sauce and lime juice bring the essential Thai balance of salty and sour. A drizzle of chili oil on top adds gentle heat. This soup is incredibly comforting and warming, perfect for cold evenings or whenever you crave the complex, layered flavors of Thai cuisine. It's ready in about 25 minutes, making it a realistic weeknight dinner option.", category: "Seafood",
    ingredients: ["1 lb shrimp", "1 can coconut milk", "2 cups chicken broth", "Lemongrass", "Galangal", "Kaffir lime leaves", "Mushrooms", "Fish sauce", "Lime juice", "Cilantro", "Chili oil"],
    steps: ["Bring coconut milk and broth to a simmer.", "Add lemongrass, galangal, and lime leaves.", "Simmer 10 minutes for flavor extraction.", "Add mushrooms, cook 3 minutes.", "Add shrimp, cook until pink.", "Season with fish sauce and lime juice.", "Serve with cilantro and chili oil drizzle."],
    image: img("1547592166-23ac45744acd"), extraImages: [img("1569718212165-3a8922ada9e5"), img("1519708227418-b060153beabd")],
    prepTime: 10, cookTime: 20, servings: 4, difficulty: "Medium"
  },
  {
    id: 118, title: "Blackened Tilapia", description: "Blackened tilapia is a bold, spicy, and incredibly flavorful Cajun-inspired dish that turns mild tilapia fillets into something extraordinary. The fillets are coated in a homemade blackening seasoning — a fiery blend of paprika, cayenne, garlic powder, onion powder, thyme, and oregano — then seared in a smoking-hot cast-iron skillet until the spice crust develops a dark, flavorful char. Despite its dramatic appearance, the fish beneath the spice crust remains delicate, moist, and flaky. This technique was pioneered by legendary chef Paul Prudhomme and has become a staple of Southern and Cajun cooking. Serve with rice, coleslaw, or roasted vegetables for a complete meal. The entire recipe takes just 15 minutes, making it one of the fastest, most flavorful fish dinners you can prepare.", category: "Seafood",
    ingredients: ["4 tilapia fillets", "2 tsp paprika", "½ tsp cayenne", "1 tsp garlic powder", "1 tsp onion powder", "½ tsp dried thyme", "½ tsp dried oregano", "2 tbsp butter", "Lemon wedges"],
    steps: ["Mix all spices together.", "Pat tilapia completely dry.", "Press spice mixture onto both sides of fillets.", "Heat a cast-iron skillet until smoking hot.", "Add butter, let it sizzle.", "Cook fish 3 minutes per side until blackened crust forms.", "Serve with lemon wedges."],
    image: img("1467003909585-2f8a72700288"), extraImages: [img("1504674900247-0877df9cc836"), img("1519708227418-b060153beabd")],
    prepTime: 5, cookTime: 8, servings: 4, difficulty: "Easy"
  },
  {
    id: 119, title: "Seafood Chowder", description: "Seafood chowder is a rich, hearty, and warming soup loaded with a generous assortment of seafood in a thick, creamy broth. Tender chunks of white fish, sweet shrimp, and briny clams are simmered with diced potatoes, corn, and smoky bacon in a velvety cream-based broth seasoned with fresh thyme and bay leaves. Each spoonful delivers a different treasure from the sea. This chowder is a coastal classic that originated in New England fishing communities, where the day's catch was combined with cream and potatoes for a sustaining, flavorful meal. It's the perfect soup for cold weather, holiday gatherings, or whenever you want something truly comforting. Serve with oyster crackers or crusty bread for a complete meal that warms you from the inside out.", category: "Seafood",
    ingredients: ["½ lb white fish cubed", "½ lb shrimp", "1 can clams", "4 slices bacon", "2 potatoes diced", "1 cup corn", "1 onion", "2 cups cream", "2 cups fish stock", "Fresh thyme", "Bay leaves"],
    steps: ["Cook bacon until crispy, set aside.", "Sauté onion in bacon fat.", "Add potatoes, fish stock, thyme, and bay leaves.", "Simmer 15 minutes until potatoes are tender.", "Add cream, fish, and clams.", "Cook 5 minutes.", "Add shrimp, cook 3 more minutes.", "Serve topped with crumbled bacon."],
    image: img("1476718406336-bb5a9690ee2a"), extraImages: [img("1604152135912-04a022e23696"), img("1547592166-23ac45744acd")],
    prepTime: 15, cookTime: 30, servings: 6, difficulty: "Medium"
  },
  {
    id: 120, title: "Miso Glazed Cod", description: "Miso glazed cod is one of the most elegant and popular seafood dishes in modern cuisine — a technique made famous by chef Nobu Matsuhisa. Thick fillets of white cod are marinated in a sweet, savory mixture of white miso paste, mirin, sake, and sugar, then broiled until the glaze caramelizes into a gorgeous golden-brown shell that's sweet, salty, and deeply umami. The cod beneath the glaze is buttery-soft and melts in your mouth. The traditional recipe calls for marinating for 2-3 days, but even an hour produces exceptional results. This dish is a staple on fine-dining menus worldwide but is surprisingly simple to prepare at home. Serve with steamed rice and sautéed bok choy for an elegant, restaurant-quality Japanese dinner that's ready in under 30 minutes.", category: "Seafood",
    ingredients: ["4 cod fillets", "¼ cup white miso paste", "2 tbsp mirin", "2 tbsp sake or rice wine", "1 tbsp sugar", "Sesame seeds", "Green onions", "Steamed rice"],
    steps: ["Mix miso, mirin, sake, and sugar until smooth.", "Coat cod fillets with miso mixture.", "Marinate 1 hour to 3 days in refrigerator.", "Preheat broiler.", "Place cod on a lined baking sheet.", "Broil 8-10 minutes until glaze caramelizes.", "Garnish with sesame seeds and green onions.", "Serve with steamed rice."],
    image: img("1467003909585-2f8a72700288"), extraImages: [img("1519708227418-b060153beabd"), img("1553163147-622ab57be1c7")],
    prepTime: 65, cookTime: 10, servings: 4, difficulty: "Medium"
  },
];
