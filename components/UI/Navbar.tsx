import React from "react";
import { Spacer, Text, useTheme } from "@nextui-org/react";
import Image from "next/image";
import NextLink from "next/link";

export const Navbar = () => {
  const { theme } = useTheme();

  return (
    <div
      style={{
        display: "flex",
        width: "96%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        padding: "0x 20px",
        backgroundColor: theme?.colors.gray500.value,
        margin: "20px",
      }}
    >
      <Image
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
        alt="icono de la app"
        width={120}
        height={120}
      />
      <NextLink href="/" passHref>
        <Text color="red" h1>
          Pokemón
        </Text>
      </NextLink>

      <Spacer css={{ flex: 1 }} />

      <NextLink href="/favorites" passHref>
        <Text color="White" css={{ marginRight: "20px", fontSize: "30px" }}>
          Favoritos
        </Text>
      </NextLink>
    </div>
  );
};
