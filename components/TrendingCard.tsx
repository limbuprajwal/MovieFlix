import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { icons } from "@/constants/icons";

type TrendingCardProps = {
  id: number;
  poster_path: string | null;
  title: string;
  vote_average: number;
  release_date: string;
};

const TrendingCard = ({
  id,
  poster_path,
  title,
  vote_average,
  release_date,
}: TrendingCardProps) => {
  return (
    <Link href={`/movies/${id}`} asChild>
      <TouchableOpacity className="w-36 mr-4">
        <Image
          source={{
            uri: poster_path
              ? `https://image.tmdb.org/t/p/w500${poster_path}`
              : "https://placehold.co/600x400/1a1a1a/ffffff.png",
          }}
          className="w-full h-52 rounded-xl"
          resizeMode="cover"
        />
        <Text className="text-white font-semibold text-sm mt-2" numberOfLines={1}>
          {title}
        </Text>
        <View className="flex-row items-center mt-1">
          <Image source={icons.star} className="size-4 mr-1" />
          <Text className="text-white text-xs font-semibold">
            {Math.round(vote_average * 10) / 10}/10
          </Text>
        </View>
        <Text className="text-light-300 text-xs mt-1">
          {release_date ? release_date.split("-")[0] : "N/A"}
        </Text>
      </TouchableOpacity>
    </Link>
  );
};

export default TrendingCard;
