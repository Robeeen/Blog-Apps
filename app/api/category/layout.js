import type { Metadata } from "next";
import "./globals.css";

//Trying to add the Title for Category.

export const metadata: Metadata = {
  title: "Category",
  description: "Just built by me",
};

export default function CategoryLayout({
  children, }: {
  children: React.ReactNode;
  }) {
    return <section>{children}</section>
}
