export async function GET(request: Request, params: any) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}/comments`
  );
  const jsonified = await response.json();
  return Response.json(jsonified);
}
