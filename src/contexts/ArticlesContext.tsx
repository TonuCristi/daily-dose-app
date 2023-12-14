import {
  ReactElement,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

import supabase from "../supabase/supabase";

type ArticlesContext = {
  data: Article[];
  isLoading: boolean;
  error: string;
  article: Article;
  getArticle: (title: string | undefined) => Promise<void>;
};

type Article = {
  id: number;
  userId: number;
  created_at: Date;
  title: string;
  text: string;
  category: string;
  query: string;
};

const ArticlesContext = createContext<ArticlesContext>({} as ArticlesContext);

export default function ArticlesProvider({
  children,
}: {
  children: ReactElement;
}) {
  const [data, setData] = useState<Article[]>([]);
  const [article, setArticle] = useState<Article>({} as Article);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    async function getArticles() {
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
    try {
      const { data, error } = await supabase
        .from("articles")
        .select("id, userId, created_at, title, query, text, category")
        .eq("query", title?.split("-").join(" "));

      console.log(data);

      if (error) throw error;

      setArticle(data[0]);
    } catch (error) {
      setError("Something went wrong...");
    }
  },
  []);

  return (
    <ArticlesContext.Provider
      value={{ data, isLoading, error, article, getArticle }}
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
