import { useEffect, useState } from "react";

import { NoFavorites } from "@/components/UI";
import { Layout } from "@/components/layouts";
import { localFavorites } from "@/utils";
import { FavoritePokemons } from "../../components/pokemon";

const FavoritesPage = () => {
  const [favoritesPokemons, setFavoritesPokemons] = useState<number[]>([]);

  useEffect(() => {
    setFavoritesPokemons(localFavorites.pokemons());
  }, []);

  return (
    <Layout title="Pokemons - Favoritos">
      {favoritesPokemons.length === 0 ? (
        <NoFavorites />
      ) : (
        <FavoritePokemons pokemons={favoritesPokemons} />
      )}
    </Layout>
  );
};

export default FavoritesPage;
