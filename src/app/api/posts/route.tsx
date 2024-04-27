export async function GET() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const jsonified = await response.json();
    return Response.json(jsonified);
  } catch (error) {
    return Response.error();
  }
}
