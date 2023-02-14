import LocalizedLink from "@helpers/LocalizedLink";
import { BlogPost } from "@models/BlogPost";

type Props = {
  recentPosts: BlogPost[];
};

const Aside = ({ recentPosts }: Props) => (
  <aside className="p-4">
    <h2>Posts récents</h2>
    {recentPosts.length > 0 ? (
      <ul>
        {recentPosts.map((p) => (
          <LocalizedLink href={`/blog/${p.slug}`} key={p.id}>
            <li>{p.title}</li>
          </LocalizedLink>
        ))}
      </ul>
    ) : (
      <p>Aucun posts récents</p>
    )}
  </aside>
);

export default Aside;
