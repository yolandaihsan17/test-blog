export async function GET() {
  const response = {
    totalPost: 523,
    postThisMonth: 98,
    increaseThisMonth: 30,
    usersThisMonth: 100,
    usersIncreaseThisMonth: 34,
    visitsThisMonth: 2394,
    visitsIncrease: 40,
  };
  return Response.json(response);
}
