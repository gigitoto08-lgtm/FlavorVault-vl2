import { memo } from "react";
import { Heart, Clock, Users } from "lucide-react";
import type { Recipe } from "@/data/recipes";

interface Props {
  recipe: Recipe;
  isFav: boolean;
  onToggleFav: (id: number) => void;
  onSelect: (recipe: Recipe) => void;
}

const RecipeCard = memo(function RecipeCard({ recipe, isFav, onToggleFav, onSelect }: Props) {
  return (
    <article
      className="group bg-card rounded-xl overflow-hidden border border-border shadow-sm hover:shadow-lg transition-shadow duration-300 cursor-pointer"
      onClick={() => onSelect(recipe)}
    >
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          src={recipe.image}
          alt={recipe.title}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <button
          onClick={(e) => { e.stopPropagation(); onToggleFav(recipe.id); }}
          className="absolute top-3 right-3 p-2 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background transition-colors"
          aria-label={isFav ? "Remove from favorites" : "Add to favorites"}
        >
          <Heart size={18} className={isFav ? "fill-primary text-primary" : "text-muted-foreground"} />
        </button>
        <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-primary/90 text-primary-foreground text-xs font-medium">
          {recipe.category}
        </span>
      </div>
      <div className="p-4">
        <h3 className="font-display text-lg font-semibold text-card-foreground mb-1 line-clamp-1 group-hover:text-primary transition-colors">
          {recipe.title}
        </h3>
        <p className="text-muted-foreground text-sm line-clamp-2 mb-3">{recipe.description}</p>
        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <span className="flex items-center gap-1"><Clock size={13} /> {recipe.prepTime + recipe.cookTime}m</span>
          <span className="flex items-center gap-1"><Users size={13} /> {recipe.servings}</span>
          <span className={`ml-auto px-2 py-0.5 rounded-full text-xs ${recipe.difficulty === "Easy" ? "bg-success/10 text-success" : recipe.difficulty === "Medium" ? "bg-primary/10 text-primary" : "bg-destructive/10 text-destructive"}`}>
            {recipe.difficulty}
          </span>
        </div>
      </div>
    </article>
  );
});

export default RecipeCard;
