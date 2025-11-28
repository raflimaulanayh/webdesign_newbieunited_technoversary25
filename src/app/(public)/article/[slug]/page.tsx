'use client'

import { articles } from '@/constants/article-data'
import { useParams, notFound } from 'next/navigation'
import React from 'react'

import { ArticleDetail } from '@/components/organisms/article/detail-article/detail-article'

export default function ArticleDetailPage() {
  const params = useParams()

  const rawSlug = params?.slug
  const urlSlug = Array.isArray(rawSlug) ? rawSlug[0] : rawSlug

  const article = articles.find((item) => {
    if (!urlSlug) return false
    const decodedUrlSlug = decodeURIComponent(urlSlug)

    return item.slug.endsWith(decodedUrlSlug)
  })

  if (!urlSlug) return null
  if (!article) return notFound()

  return <ArticleDetail article={article} />
}
