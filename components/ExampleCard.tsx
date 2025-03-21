"use client";

import { useState } from "react";
import { Button } from "x-react/button";
import { IconArrowRight, IconHeart, IconHeartFilled } from "x-react/icons";
import { Avatar } from "x-react/avatar";
import { Card } from "x-react/card";
import { Image } from "x-react/image";
import { motion } from "framer-motion";

interface CardFooterProps {
  category: string;
  readTime: string;
  title: string;
  description: string;
  authorName: string;
  authorAvatar: string;
  color: any;
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
    <div className="space-y-4 px-1">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className={`bg-${color}/10 text-${color} px-3 py-1 rounded-full text-xs font-medium`}
          >
            {category}
          </motion.div>
          <span className="text-sm text-gray-500 dark:text-gray-400 italic">
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
              <IconHeartFilled className="size-5" />
            </motion.div>
          ) : (
            <IconHeart className="size-5" />
          )}
        </motion.button>
      </div>

      <div>
        <motion.h3
          className="text-xl font-bold text-gray-800 dark:text-white mb-2"
          initial={{ opacity: 0.9 }}
          whileHover={{ opacity: 1 }}
        >
          {title}
        </motion.h3>
        <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2">
          {description}
        </p>
      </div>

      <div className="flex justify-between items-center pt-2 border-t border-border">
        <motion.div
          className="flex items-center space-x-2"
          whileHover={{ x: 3 }}
        >
          <Avatar
            src={authorAvatar}
            alt="Author"
            size="sm"
            className="border-2 border-border shadow-sm"
          />
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            {authorName}
          </span>
        </motion.div>

        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button
            variant="faded"
            className="border rounded-md shadow-sm"
            size="sm"
            color={color}
            endContent={
              <motion.div
                animate={isHovered ? { x: [0, 4, 0] } : {}}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                <IconArrowRight className="size-4" />
              </motion.div>
            }
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            Lire plus
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export const ExampleCard = () => {
  return (
    <Card
      className="w-[400px] overflow-hidden border border-border bg-transparent"
      classNames={{
        base: "shadow-xl group border border-default hover:shadow-2xl transition-all duration-300",
        body: "p-0",
        header: "p-0",
        footer: "p-4",
      }}
      footer={
        <CardFooter
          category="Voyage"
          readTime="5"
          title="Découverte des Merveilles Cachées"
          description="Voluptatem cumque ab perferendis ullam voluptatum natus nam, mollitia quos minima consectetur magnam saepe labore delectus odit quasi eos id modi dolor nesciunt debitis error ea doloribus, provident sunt."
          authorName="Marie Dubois"
          authorAvatar="/avatar.jpg"
          color="warning"
        />
      }
    >
      <div className="overflow-hidden">
        <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.6 }}>
          <Image
            src="/vago.jpg"
            alt="Image de voyage"
            radius="none"
            className="object-cover aspect-[4/3]"
          />
        </motion.div>
      </div>
    </Card>
  );
};
