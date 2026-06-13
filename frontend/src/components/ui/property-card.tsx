// frontend/src/components/ui/property-card.tsx
"use client"

import { Card, CardContent } from "./card"
import { Button } from "./button"
import { Heart, Bed, Bath, Square, MapPin } from "lucide-react"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { useState } from "react"

interface PropertyCardProps {
  id: string
  title: string
  price: number
  location: string
  bedrooms: number
  bathrooms: number
  area: number
  imageUrl: string
  isFeatured?: boolean
  className?: string
}

export function PropertyCard({
  id,
  title,
  price,
  location,
  bedrooms,
  bathrooms,
  area,
  imageUrl,
  isFeatured,
  className
}: PropertyCardProps) {
  const [isLiked, setIsLiked] = useState(false)
  const [isImageLoaded, setIsImageLoaded] = useState(false)

  return (
    <Card className={cn("group overflow-hidden transition-all duration-300 hover:scale-[1.02]", className)}>
      <div className="relative aspect-[4/3] overflow-hidden">
        <div className={cn(
          "absolute inset-0 bg-muted animate-pulse",
          isImageLoaded && "hidden"
        )} />
        <Image
          src={imageUrl}
          alt={title}
          fill
          className={cn(
            "object-cover transition-transform duration-500 group-hover:scale-110",
            isImageLoaded ? "opacity-100" : "opacity-0"
          )}
          onLoad={() => setIsImageLoaded(true)}
        />
        {isFeatured && (
          <div className="absolute left-3 top-3 rounded-full bg-primary px-2 py-1 text-xs font-semibold text-primary-foreground">
            Featured
          </div>
        )}
        <Button
          variant="ghost"
          size="icon-sm"
          className="absolute right-3 top-3 bg-background/80 backdrop-blur-sm hover:bg-background"
          onClick={() => setIsLiked(!isLiked)}
        >
          <Heart className={cn(
            "h-4 w-4 transition-all",
            isLiked && "fill-red-500 text-red-500"
          )} />
        </Button>
      </div>
      <CardContent className="p-4">
        <div className="mb-2 flex items-start justify-between">
          <div>
            <h3 className="font-semibold line-clamp-1">{title}</h3>
            <div className="mt-1 flex items-center text-sm text-muted-foreground">
              <MapPin className="mr-1 h-3 w-3" />
              {location}
            </div>
          </div>
          <div className="text-right">
            <p className="text-lg font-bold text-primary">
              ${price.toLocaleString()}
            </p>
            <p className="text-xs text-muted-foreground">总价</p>
          </div>
        </div>
        <div className="mt-3 flex items-center justify-between border-t pt-3">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Bed className="h-4 w-4" />
            <span>{bedrooms} 室</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Bath className="h-4 w-4" />
            <span>{bathrooms} 卫</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Square className="h-4 w-4" />
            <span>{area} m²</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}