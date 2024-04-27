export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );
  const jsonified = await response.json();
  return Response.json(jsonified);
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`,
    {
      method: "DELETE",
    }
  );
  const jsonified = await response.json();
  return Response.json(jsonified);
}

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  const data = await request.json();
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`,
    {
      method: "PATCH",
      body: JSON.stringify(data),
    }
  );
  const jsonified = await response.json();
  return Response.json(jsonified);
}
