import React from 'react';
import articles from '../article-content';
import ArticleContent from './ArticleContent';

export async function generateStaticParams() {
  return articles.map((article) => ({
    id: article.name,
  }));
}

export default function ArticlePage({ params }) {
  const article = articles.find(article => article.name === params.id);

  if (!article) {
    return <div>Article not found</div>;
  }

  return <ArticleContent article={article} />;
}