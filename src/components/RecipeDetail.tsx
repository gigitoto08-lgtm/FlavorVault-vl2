import { useState } from "react";
import { X, Heart, Clock, Users, Star, Share2, Copy, Check, ChefHat } from "lucide-react";
import type { Recipe } from "@/data/recipes";

interface Props {
  recipe: Recipe;
  isFav: boolean;
  rating: number;
  onClose: () => void;
  onToggleFav: (id: number) => void;
  onRate: (id: number, r: number) => void;
}

export default function RecipeDetail({ recipe, isFav, rating, onClose, onToggleFav, onRate }: Props) {
  const [copied, setCopied] = useState(false);
  const [imgIdx, setImgIdx] = useState(0);
  const allImages = [recipe.image, ...recipe.extraImages];

  const handleShare = async () => {
    const url = window.location.origin + `?recipe=${recipe.id}`;
    if (navigator.share) {
      await navigator.share({ title: recipe.title, url });
    } else {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-foreground/40 backdrop-blur-sm overflow-y-auto p-4 md:p-8" onClick={onClose}>
      <div className="bg-card rounded-2xl max-w-3xl w-full shadow-2xl my-8 overflow-hidden" onClick={(e) => e.stopPropagation()}>
        {/* Header image */}
        <div className="relative">
          <img src={allImages[imgIdx]} alt={recipe.title} className="w-full aspect-video object-cover" loading="lazy" decoding="async" />
          <button onClick={onClose} className="absolute top-4 right-4 p-2 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background">
            <X size={20} />
          </button>
          {/* Thumbnails */}
          {allImages.length > 1 && (
            <div className="absolute bottom-3 left-3 flex gap-2">
              {allImages.map((img, i) => (
                <button key={i} onClick={() => setImgIdx(i)} className={`w-12 h-12 rounded-lg overflow-hidden border-2 transition-all ${i === imgIdx ? "border-primary scale-110" : "border-transparent opacity-70"}`}>
                  <img src={img} alt="" className="w-full h-full object-cover" loading="lazy" decoding="async" />
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="p-6 md:p-8">
          {/* Title & actions */}
          <div className="flex items-start justify-between gap-4 mb-4">
            <div>
              <span className="px-2.5 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">{recipe.category}</span>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-card-foreground mt-2">{recipe.title}</h2>
            </div>
            <div className="flex gap-2 flex-shrink-0">
              <button onClick={() => onToggleFav(recipe.id)} className="p-2.5 rounded-full border border-border hover:bg-accent transition-colors">
                <Heart size={18} className={isFav ? "fill-primary text-primary" : ""} />
              </button>
              <button onClick={handleShare} className="p-2.5 rounded-full border border-border hover:bg-accent transition-colors">
                {copied ? <Check size={18} className="text-success" /> : <Share2 size={18} />}
              </button>
            </div>
          </div>

          <p className="text-muted-foreground mb-4">{recipe.description}</p>

          {/* Meta */}
          <div className="flex flex-wrap gap-4 mb-6 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5"><Clock size={15} /> Prep: {recipe.prepTime}m</span>
            <span className="flex items-center gap-1.5"><ChefHat size={15} /> Cook: {recipe.cookTime}m</span>
            <span className="flex items-center gap-1.5"><Users size={15} /> {recipe.servings} servings</span>
            <span className={`px-2 py-0.5 rounded-full text-xs ${recipe.difficulty === "Easy" ? "bg-success/10 text-success" : recipe.difficulty === "Medium" ? "bg-primary/10 text-primary" : "bg-destructive/10 text-destructive"}`}>{recipe.difficulty}</span>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-1 mb-6">
            <span className="text-sm text-muted-foreground mr-2">Rate:</span>
            {[1, 2, 3, 4, 5].map((s) => (
              <button key={s} onClick={() => onRate(recipe.id, s)} className="p-0.5 hover:scale-125 transition-transform">
                <Star size={20} className={s <= rating ? "fill-primary text-primary" : "text-muted-foreground/40"} />
              </button>
            ))}
          </div>

          {/* Ingredients */}
          <div className="mb-6">
            <h3 className="font-display text-xl font-semibold mb-3 text-card-foreground">Ingredients</h3>
            <ul className="grid sm:grid-cols-2 gap-2">
              {recipe.ingredients.map((ing, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  {ing}
                </li>
              ))}
            </ul>
          </div>

          {/* Steps */}
          <div>
            <h3 className="font-display text-xl font-semibold mb-3 text-card-foreground">Instructions</h3>
            <ol className="space-y-3">
              {recipe.steps.map((step, i) => (
                <li key={i} className="flex gap-3 text-sm text-muted-foreground">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-semibold">
                    {i + 1}
                  </span>
                  <span className="pt-1">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
