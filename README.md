This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open `http://localhost:3000` with your browser to see the result.

## Explanation
### Available Routes
1. `/` Root page. to engage user. Can be said as landing page
2. `/blog`. Blog Page. Where user can see all post list.
3. `/blog/:id` Post Page. Where user can see the Post Details. Post title, content, and comments
4. `/dashboard` Admin Page. Admin can see overview of site performance.
5. `/posts` Admin Post Page. Admin can check list of posts. And can delete post from this page.
6. `/dashboard/posts/edit/:id` Edit post page.
7. `/dashboard/posts/new` Create a new post page.

### Use of Hooks
To demonstrate the use of hooks. Here i implement it to save user (admin) data. If you want to check it, please go to dashboard pages. And at the top right of Navigation Bar, you can click on the user profile picture. Avatar url, name and status is stored in useContext API.

### Testing
Testing can be run using command `npm run test`. I implemented Vitest library. The tests files can be checked at `__test__` folder.

### Typesafe
Common interfaces are stored in `src/types`, e.g `post` and `comment`. While one-time-use interface will be stored in each of their files.

### Deployments
this demo app is deployed at `test-blog-eta-seven.vercel.app`