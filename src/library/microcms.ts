import type { MicroCMSQueries, MicroCMSListContent } from "microcms-js-sdk";
import { createClient } from "microcms-js-sdk";

const client = createClient({
  serviceDomain: import.meta.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: import.meta.env.MICROCMS_API_KEY,
});

// 型定義
export type Blog = {
  title: string;
  content: string;
  eyecatch?: {
    url:string
  };
  category?: {
    name:string,
    id:string,
  };
} & MicroCMSListContent;

// 「カテゴリ」情報のレスポンスデータ型
export type CategoryResponse = {
  totalCount: number;
  offset: number;
  limit: number;
  contents: Category[]; // 個々のカテゴリ情報の配列
} & MicroCMSListContent;
// 1つのカテゴリが持つデータ型を定義
export type Category = {
  id: string;
  name: string;
  slug: string;
};

// APIの呼び出し
export const getBlogs = async (queries?: MicroCMSQueries) => {
  return await client.getList<Blog>({ endpoint: "blogs", queries });
};

// カテゴリを取得する関数
export const getCategory = async (queries?: MicroCMSQueries) => {
  return await client.get<CategoryResponse>({
    endpoint: "categories",
    queries,
  });
};

export const getBlogDetail = async (
  contentId: string,
  queries?: MicroCMSQueries
) => {
  return await client.getListDetail<Blog>({
    endpoint: "blogs",
    contentId,
    queries,
  });
};