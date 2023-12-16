import {
  ReactElement,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

import supabase from "../supabase/supabase";

interface ArticlesContext {
  data: Article[];
  isLoading: boolean;
  error: string;
  article: Article;
  getArticle: (title: string | undefined) => Promise<void>;
  categories: string[];
  getCategories: () => Promise<void>;
  articlesDate: number[];
  getDates: () => Promise<void>;
}

type Article = {
  id: number;
  userId: number;
  created_at: Date;
  title: string;
  text: string;
  category: string;
  query: string;
  author: string;
};

const ArticlesContext = createContext<ArticlesContext>({} as ArticlesContext);

export default function ArticlesProvider({
  children,
}: {
  children: ReactElement;
}) {
  const [data, setData] = useState<Article[]>([]);
  const [article, setArticle] = useState<Article>({} as Article);
  const [categories, setCategories] = useState<string[]>([]);
  const [articlesDate, setArticlesDate] = useState<number[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    async function getArticles() {
      setError("");
      setIsLoading(true);

      try {
        const { data, error } = await supabase.from("articles").select();

        if (error) throw error;

        setData(data);
      } catch (error) {
        setError("Something went wrong...");
      } finally {
        setIsLoading(false);
      }
    }

    getArticles();
  }, []);

  const getArticle = useCallback(async function getArticle(
    title: string | undefined
  ) {
    setError("");
    setIsLoading(true);

    try {
      const { data, error } = await supabase
        .from("articles")
        .select("id, userId, created_at, title, query, text, category, author")
        .eq("query", title?.split("-").join(" "));

      if (error) throw error;

      setArticle(data[0]);
    } catch (error) {
      setError("Something went wrong...");
    } finally {
      setIsLoading(false);
    }
  },
  []);

  const getCategories = useCallback(async function getCategories() {
    setError("");
    setIsLoading(true);

    try {
      const { data, error } = await supabase
        .from("articles")
        .select("category");

      if (error) throw error;

      setCategories(data.map((item) => item.category));
    } catch (error) {
      setError("Something went wrong...");
    } finally {
      setIsLoading(false);
    }
  }, []);

  const getDates = useCallback(async function getDates() {
    setError("");
    setIsLoading(true);

    try {
      const { data, error } = await supabase
        .from("articles")
        .select("created_at");

      if (error) throw error;

      setArticlesDate(
        data.map((item) => new Date(item.created_at).getFullYear())
      );
    } catch (error) {
      setError("Something went wrong...");
    } finally {
      setIsLoading(false);
    }
  }, []);

  return (
    <ArticlesContext.Provider
      value={{
        data,
        isLoading,
        error,
        article,
        getArticle,
        categories,
        getCategories,
        articlesDate,
        getDates,
      }}
    >
      {children}
    </ArticlesContext.Provider>
  );
}

function useArticles() {
  const context = useContext(ArticlesContext);

  if (context === undefined) {
    throw new Error("ArticlesContext was used outside of ArticlesProvider");
  }

  return context;
}

export { ArticlesProvider, useArticles };
