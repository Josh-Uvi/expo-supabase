// types.ts
export interface Article {
  id: number;
  title: string;
  description: string;
  url: string;
  author: string | null;
  source: {
    id: string | null;
    name: string | null;
  };
  publishedAt: string;
  urlToImage: string | null;
  content: string | null;
}

const API_KEY = process.env.EXPO_PUBLIC_NEWS_API_KEY!;

export const headlinesApi = async (country: string, category: string): Promise<Article[]> => {
  try {
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}`,
      {
        headers: {
          Authorization: API_KEY,
        },
      },
    );
    if (!response.ok) {
      throw new Error('Failed to fetch news');
    }
    const data = await response.json();
    return data.articles.map((article: Article, index: number) => ({
      id: index,
      title: article.title,
      description: article.description,
      url: article.url,
    }));
  } catch (error) {
    console.error('Error fetching news:', error);
    return [];
  }
};
export const headlinesByCountryApi = async (country: string): Promise<Article[]> => {
  try {
    const response = await fetch(`https://newsapi.org/v2/top-headlines?country=${country}`, {
      headers: {
        Authorization: API_KEY,
      },
    });
    if (!response.ok) {
      throw new Error('Failed to fetch news');
    }
    const data = await response.json();
    return data.articles.map((article: Article, index: number) => ({
      id: index,
      title: article.title,
      description: article.description,
      url: article.url,
    }));
  } catch (error) {
    console.error('Error fetching news:', error);
    return [];
  }
};

export const queryApi = async (query: string): Promise<Article[]> => {
  try {
    const response = await fetch(`https://newsapi.org/v2/everything?q=${query}`, {
      headers: {
        Authorization: API_KEY,
      },
    });
    if (!response.ok) {
      throw new Error('Failed to fetch news');
    }
    const data = await response.json();
    return data.articles.map((article: Article, index: number) => ({
      id: index,
      title: article.title,
      description: article.description,
      url: article.url,
    }));
  } catch (error) {
    console.error('Error fetching news:', error);
    return [];
  }
};
