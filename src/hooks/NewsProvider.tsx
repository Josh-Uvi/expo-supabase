// NewsContext.tsx
import React, { createContext, useContext, useEffect, useState } from 'react';

import { Article, headlinesByCountryApi } from '@/lib/fetcher';

interface NewsContextType {
  articles: Article[];
  loading: boolean;
}

type NewsProviderProps = {
  children: React.ReactNode;
};

const NewsContext = createContext<NewsContextType>({ articles: [], loading: true });

export const useNews = () => {
  return useContext(NewsContext);
};

export const NewsProvider = ({ children }: NewsProviderProps) => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const res = await headlinesByCountryApi('gb');
        setArticles(res);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching articles:', error);
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  return <NewsContext.Provider value={{ articles, loading }}>{children}</NewsContext.Provider>;
};
