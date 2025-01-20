"use client";

import { Button } from "x-react/button";
import { IconArrowRight, IconHeart } from "x-react/icons";
import { Avatar } from "x-react/avatar";
import { Card } from "x-react/card";
import { Image } from "x-react/image";

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
  return (
    <div className="space-y-3">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div
            className={`bg-${color}/10 text-${color} px-3 py-1 rounded-full text-xs font-medium`}
          >
            {category}
          </div>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {readTime} min read
          </span>
        </div>
        <button
          className={`text-gray-500 hover:text-${color} transition-colors`}
        >
          <IconHeart className="size-5" />
        </button>
      </div>
      <h3 className="text-xl font-bold text-gray-800 dark:text-white">
        {title}
      </h3>
      <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2">
        {description}
      </p>
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Avatar src={authorAvatar} alt="Author" size="sm" />
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            {authorName}
          </span>
        </div>
        <Button
          variant="faded"
          className="dark:bg-[#222427] border-1 rounded-md"
          size="sm"
          color={color}
          endContent={<IconArrowRight className="size-4" />}
        >
          Lire plus
        </Button>
      </div>
    </div>
  );
};

export const ExampleCard = () => {
  return (
    <Card
      className="w-[400px] border dark:border-[#2A3441]"
      classNames={{
        base: "shadow-lg group overflow-hidden border border-default",
        footer: "bg-white dark:bg-[#0f172a]",
        body: "p-0",

        header: "p-0",
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
      <Image src="/vago.jpg" alt="Image de voyage" radius="none" />
    </Card>
  );
};
