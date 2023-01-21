import { BlogPost } from "@models/BlogPost";
import Link from "next/link";
import { FormattedMessage } from "react-intl";

type Props = {
  recentPosts: BlogPost[];
};

const Aside = ({ recentPosts }: Props) => (
  <aside className="p-4">
    <h2>
      <FormattedMessage
        id="post_recent_posts"
        defaultMessage="Posts récents"
        description="Post recent posts"
      />
    </h2>
    {recentPosts.length > 0 ? (
      <ul>
        {recentPosts.map((p) => (
          <Link href={`/blog/${p.slug}`} key={p.id}>
            <li>{p.title}</li>
          </Link>
        ))}
      </ul>
    ) : (
      <p>
        <FormattedMessage
          id="post_no_recent_posts"
          defaultMessage="Aucun posts récents"
          description="Post no recent posts"
        />
      </p>
    )}
  </aside>
);

export default Aside;
