import type { LoaderFunction } from '@remix-run/cloudflare';
import { json } from '@remix-run/cloudflare';
import { useLoaderData } from '@remix-run/react';

export const loader: LoaderFunction = async () => {
  const list = await BLOG_POSTS.list();

  return json(list.objects.map((o) => o.key));
};

export default function Index() {
  const articles = useLoaderData<string[]>();

  return (
    <div>
      <h1>adwd blog</h1>
      <ul>
        {articles.map((article) => (
          <li key={article}>{article}</li>
        ))}
      </ul>
    </div>
  );
}
