export async function POST(request: Request) {
  const post = await request.json();
  const newPost = {
    ...post,
    userId: 1,
  };

  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify(newPost),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  const jsonifiedResponse = await response.json();
  console.log(jsonifiedResponse);

  return new Response(JSON.stringify(jsonifiedResponse), {
    headers: {
      "Content-Type": "application/json",
    },
    status: 201,
  });
}
