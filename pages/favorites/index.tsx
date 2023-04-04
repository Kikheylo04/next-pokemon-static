import React, { useEffect, useState } from "react";

import { NoFavorites } from "@/components/UI";
import { Layout } from "@/components/layouts";
import { localFavorites } from "@/utils";
import { Card, Grid } from "@nextui-org/react";
import { FavoritePokemon } from "@/components/pokemon";

const favorites = () => {
  const [favoritesPokemons, setFavoritesPokemons] = useState<number[]>([]);

  useEffect(() => {
    setFavoritesPokemons(localFavorites.pokemons());
  }, []);

  return (
    <Layout title="favoritos">
      {favoritesPokemons.length === 0 ? (
        <NoFavorites />
      ) : (
        <FavoritePokemon pokemons={favoritesPokemons} />
      )}
    </Layout>
  );
};

export default favorites;
