import Link from "next/link";

export default function Post({ posts }) {
  console.log("post comp", posts);
  return (
    <div>
      {posts?.map((data, i) => (
        <div key={data.id}>
          <Link href={`post/${data.id}`}>
            <a>
              <h3>{data.title}</h3>
            </a>
          </Link>
        </div>
      ))}
    </div>
  );
}
