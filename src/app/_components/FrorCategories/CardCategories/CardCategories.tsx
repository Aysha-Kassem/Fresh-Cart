"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Category } from "../../../../Types/category.t";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../../../components/ui/card";

const CardCategories = ({ category }: { category: Category }) => {
  const [showSubs, setShowSubs] = useState(false);

  return (
    <div>
      <Card className="relative border-0 shadow-sm hover:shadow-green-600 transition-shadow duration-300 p-5">
        <button
          onClick={() => setShowSubs(!showSubs)}
          className="w-full h-full text-left"
        >
          <CardHeader>
            <Image
              src={category.image}
              alt={category.name}
              width={200}
              height={200}
              className="mx-auto rounded-lg"
            />
          </CardHeader>

          <CardContent className="px-5">
            <CardTitle className="pb-3 !text-green-800 line-clamp-2 text-center">
              {category.name}
            </CardTitle>
          </CardContent>
        </button>
      </Card>
    </div>
  );
};

export default CardCategories;
