import { useState, useCallback, useMemo, useEffect } from "react";
import { Search, Heart, ChefHat, X } from "lucide-react";
import { recipes, categories } from "@/data/recipes";
import type { Recipe } from "@/data/recipes";
import { getFavorites, toggleFavorite, getRatings, setRating } from "@/lib/favorites";
import RecipeCard from "@/components/RecipeCard";
import RecipeDetail from "@/components/RecipeDetail";

export default function Index() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [showFavsOnly, setShowFavsOnly] = useState(false);
  const [favs, setFavs] = useState<number[]>([]);
  const [ratings, setRatings] = useState<Record<number, number>>({});
  const [selected, setSelected] = useState<Recipe | null>(null);

  useEffect(() => {
    setFavs(getFavorites());
    setRatings(getRatings());
    // Check URL for deep link
    const params = new URLSearchParams(window.location.search);
    const rid = params.get("recipe");
    if (rid) {
      const r = recipes.find((r) => r.id === Number(rid));
      if (r) setSelected(r);
    }
  }, []);

  const handleToggleFav = useCallback((id: number) => {
    setFavs(toggleFavorite(id));
  }, []);

  const handleRate = useCallback((id: number, r: number) => {
    setRatings(setRating(id, r));
  }, []);

  const filtered = useMemo(() => {
    let list = recipes;
    if (category !== "All") list = list.filter((r) => r.category === category);
    if (showFavsOnly) list = list.filter((r) => favs.includes(r.id));
    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter((r) => r.title.toLowerCase().includes(q) || r.description.toLowerCase().includes(q) || r.category.toLowerCase().includes(q));
    }
    return list;
  }, [category, showFavsOnly, search, favs]);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <header className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-accent/20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--primary)/0.08),transparent_70%)]" />
        <nav className="relative z-10 flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
          <div className="flex items-center gap-2">
            <ChefHat size={28} className="text-primary" />
            <span className="font-display text-xl font-bold text-foreground">FlavorVault</span>
          </div>
          <button
            onClick={() => setShowFavsOnly((v) => !v)}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-colors ${showFavsOnly ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground hover:bg-accent"}`}
          >
            <Heart size={15} className={showFavsOnly ? "fill-primary-foreground" : ""} />
            Favorites {favs.length > 0 && `(${favs.length})`}
          </button>
        </nav>
        <div className="relative z-10 text-center px-6 pt-12 pb-16 max-w-3xl mx-auto">
         <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-4 leading-tight">
            Discover <span className="text-primary">Delicious</span> Recipes
          </h1>
          <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
            100+ curated recipes from around the world — cook something amazing today.
          </p>
          {/* Chef hero image */}
          <div className="relative max-w-2xl mx-auto mb-8 rounded-2xl overflow-hidden shadow-xl border border-border">
            <img
              src={chefHeroImg}
              alt="Professional chef presenting beautifully plated gourmet dishes"
              className="w-full h-auto object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
          </div>
          {/* Search */}
          <div className="relative max-w-lg mx-auto">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search recipes..."
              className="w-full pl-11 pr-10 py-3.5 bg-card border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring text-sm"
            />
            {search && (
              <button onClick={() => setSearch("")} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
                <X size={16} />
              </button>
            )}
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 pb-16">
        {/* Categories */}
        <div className="flex gap-2 overflow-x-auto py-6 scrollbar-hide -mx-4 px-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${cat === category ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground hover:bg-accent"}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Results count */}
        <p className="text-sm text-muted-foreground mb-4">
          {filtered.length} recipe{filtered.length !== 1 ? "s" : ""} found
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filtered.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              recipe={recipe}
              isFav={favs.includes(recipe.id)}
              onToggleFav={handleToggleFav}
              onSelect={setSelected}
            />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-muted-foreground">
            <ChefHat size={48} className="mx-auto mb-4 opacity-30" />
            <p className="text-lg font-display">No recipes found</p>
            <p className="text-sm mt-1">Try adjusting your search or filters</p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-8 text-center text-sm text-muted-foreground">
        <p>FlavorVault © {new Date().getFullYear()} — Made with love for food lovers everywhere.</p>
      </footer>

      {/* Detail Modal */}
      {selected && (
        <RecipeDetail
          recipe={selected}
          isFav={favs.includes(selected.id)}
          rating={ratings[selected.id] || 0}
          onClose={() => setSelected(null)}
          onToggleFav={handleToggleFav}
          onRate={handleRate}
        />
      )}
    </div>
  );
}
