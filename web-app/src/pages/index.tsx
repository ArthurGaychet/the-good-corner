import ArticleCard from "@/components/ArticleCard/ArticleCard";
import { CardGrid } from "@/components/CardGrid/CardGrid";

const ARTICLES = [
  { id: 1, name: "Table", price: 120 },
  { id: 2, name: "Dame-jeanne", price: 75 },
  { id: 3, name: "Vide-poche", price: 4 },
  { id: 4, name: "Vaisselier", price: 900 },
  { id: 5, name: "Bougie", price: 8 },
  { id: 6, name: "Porte-magazine", price: 45 },
];

export default function Home() {
  return (
    <>
      <h2>Annonces récentes</h2>
      <CardGrid>
        {ARTICLES.map((article) => (
          <ArticleCard
            key={article.id}
            id={article.id}
            name={article.name}
            price={article.price}
          />
        ))}
      </CardGrid>
    </>
  );
}
