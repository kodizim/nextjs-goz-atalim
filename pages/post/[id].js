export default function PostDetails({ details }) {
  console.log(details);
  return (
    <div>
      <h1>{details.title}</h1>
      <p>{details.body}</p>
    </div>
  );
}

export const getServerSideProps = async (context) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
  );
  const details = await res.json();
  console.log("contex", context);

  return {
    props: {
      details,
    },
  };
};
