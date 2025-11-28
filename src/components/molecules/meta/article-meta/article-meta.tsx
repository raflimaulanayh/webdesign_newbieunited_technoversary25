import { Calendar, Clock } from 'lucide-react'
import React from 'react'

import { Badge } from '@/components/atoms/ui/badge'

interface ArticleMetaProps {
  title: string
  category: string
  date: string
  readTime: string
}

export const ArticleMeta = ({ title, category, date, readTime }: ArticleMetaProps) => {
  return (
    <div className="max-w-4xl">
      <div className="mb-6">
        <Badge label={category} />
      </div>

      <h1 className="mb-6 text-3xl leading-tight font-bold text-white sm:text-4xl md:text-5xl lg:leading-[1.1]">{title}</h1>

      <div className="flex flex-wrap items-center gap-6 text-sm font-medium text-white/80 sm:text-base">
        <div className="flex items-center gap-2">
          <Calendar className="h-4 w-4" />
          <span>{date}</span>
        </div>
        <div className="flex items-center gap-2">
          <Clock className="h-4 w-4" />
          <span>{readTime}</span>
        </div>
      </div>
    </div>
  )
}
