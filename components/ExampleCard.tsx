"use client";

import { useState } from "react";
import { Button } from "x-react/button";
import { IconArrowRight, IconHeart, IconHeartFilled } from "x-react/icons";
import { useResponsive } from "x-react/hooks";
import { Avatar } from "x-react/avatar";
import { Card as CardRoot } from "x-react/card";
import { Image } from "x-react/image";
import { motion } from "framer-motion";

interface CardFooterProps {
  category: string;
  readTime: string;
  title: string;
  description: string;
  authorName: string;
  authorAvatar: string;
  color: "warning" | "primary" | "secondary" | "default" | "success" | "danger";
}

const CardFooter = ({
  category,
  readTime,
  title,
  description,
  authorName,
  authorAvatar,
  color = "warning",
}: CardFooterProps) => {
  const [liked, setLiked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="space-y-3 px-1">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className={`bg-${color}/10 text-${color} px-2 py-0.5 rounded-full text-xs font-medium`}
          >
            {category}
          </motion.div>
          <span className="text-xs text-gray-500 dark:text-gray-400 italic">
            {readTime} min read
          </span>
        </div>
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setLiked(!liked)}
          className={`text-gray-500 transition-colors ${
            liked ? `text-${color}` : ""
          }`}
          aria-label={liked ? "Unlike" : "Like"}
        >
          {liked ? (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <IconHeartFilled className="size-4" />
            </motion.div>
          ) : (
            <IconHeart className="size-4" />
          )}
        </motion.button>
      </div>

      <div>
        <motion.h3
          className="text-sm font-bold text-gray-800 dark:text-white mb-1"
          initial={{ opacity: 0.9 }}
          whileHover={{ opacity: 1 }}
        >
          {title}
        </motion.h3>
        <p className="text-xs text-gray-600 dark:text-gray-300 line-clamp-2">
          {description}
        </p>
      </div>

      <div className="flex justify-between items-center pt-2 border-t border-border">
        <motion.div
          className="flex items-center space-x-1"
          whileHover={{ x: 3 }}
        >
          <Avatar
            src={authorAvatar}
            alt="Author"
            size="sm"
            className="w-6 h-6 border border-border shadow-sm"
          />
          <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
            {authorName}
          </span>
        </motion.div>

        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button
            variant="faded"
            className="border rounded-md shadow-sm text-xs px-2 py-1 h-auto min-h-0"
            size="sm"
            color={color}
            endContent={
              <motion.div
                animate={isHovered ? { x: [0, 4, 0] } : {}}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                <IconArrowRight className="size-3" />
              </motion.div>
            }
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            Read more
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export const ExampleCard = () => {
  const { isDesktop, isTablet } = useResponsive();

  const cardsData = [
    {
      category: "Automobile",
      readTime: "5",
      title: "Maserati Gran Turismo: Italian Elegance",
      description:
        "Discover the exceptional performance and timeless design of the Maserati Gran Turismo, the embodiment of Italian automotive luxury.",
      authorName: "Marie Dubois",
      authorAvatar: "/avatars/marie.jpg",
      imageSrc:
        "https://cdn.pixabay.com/photo/2016/09/06/13/37/maserati-gran-turismo-1649119_1280.jpg",
      color: "warning" as const,
    },
    {
      category: "Supercar",
      readTime: "7",
      title: "Koenigsegg Jesko: Orange Beast",
      description:
        "Explore the technical features and revolutionary aerodynamics of the Koenigsegg Jesko, a hypercar that redefines speed and engineering excellence.",
      authorName: "Thomas Martin",
      authorAvatar: "/avatars/thomas.jpg",
      imageSrc:
        "https://cdn.pixabay.com/photo/2020/11/10/23/07/car-5731160_1280.jpg",
      color: "primary" as const,
    },
    {
      category: "Design",
      readTime: "4",
      title: "Lamborghini Aventador: Black Masterpiece",
      description:
        "Dive into the world of exceptional automotive design with the Lamborghini Aventador, a perfect blend of aggressive aesthetics and performance.",
      authorName: "Sophie Laurent",
      authorAvatar: "/avatars/sophie.jpg",
      imageSrc:
        "https://cdn.pixabay.com/photo/2020/12/28/05/54/car-5865989_1280.jpg",
      color: "secondary" as const,
    },
    {
      category: "Classic",
      readTime: "6",
      title: "Porsche Carrera GT: Silver Perfection",
      description:
        "Experience the refined engineering and timeless appeal of the Porsche Carrera GT, a modern classic that combines elegance with raw power.",
      authorName: "Jean Dupont",
      authorAvatar: "/avatars/jean.jpg",
      imageSrc:
        "https://cdn.pixabay.com/photo/2016/04/01/12/16/car-1300629_1280.png",
      color: "danger" as const,
    },
  ];
  const getGridCols = () => {
    if (isDesktop) return "grid-cols-4";
    if (isTablet) return "grid-cols-2";
    return "grid-cols-1";
  };

  return (
    <motion.section
      className="flex flex-col justify-center items-center w-full px-4 md:px-6"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-4 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Discover Our Components
      </motion.h2>

      <motion.p
        className="text-base text-background-foreground/70 max-w-3xl text-center mb-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
      >
        Explore our beautifully crafted components that offer both aesthetic
        appeal and functional excellence for your next project.
      </motion.p>

      <div className={`w-full max-w-7xl grid ${getGridCols()} gap-4 md:gap-6`}>
        {cardsData.map((cardData, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true, margin: "-50px" }}
            className="w-full"
          >
            <CardRoot
              className="h-full overflow-hidden border border-border bg-transparent"
              classNames={{
                base: "shadow-md group border border-default hover:shadow-lg transition-all duration-300 h-full",
                body: "p-0",
                header: "p-0",
                footer: "p-3",
              }}
              footer={
                <CardFooter
                  category={cardData.category}
                  readTime={cardData.readTime}
                  title={cardData.title}
                  description={cardData.description}
                  authorName={cardData.authorName}
                  authorAvatar={cardData.authorAvatar}
                  color={cardData.color}
                />
              }
            >
              <div className="overflow-hidden">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                >
                  <Image
                    src={cardData.imageSrc}
                    alt={`Image of ${cardData.category}`}
                    radius="none"
                    className="object-cover aspect-[4/3] w-full"
                  />
                </motion.div>
              </div>
            </CardRoot>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};
