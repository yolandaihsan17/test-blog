import { RegularLayout as UserLayout } from "@/components/layout/regular/layout";

export default function RegularLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <UserLayout>{children}</UserLayout>;
}
