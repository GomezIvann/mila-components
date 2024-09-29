import { redirect } from "next/navigation";
import { foundationsLinks } from "@/common/pages-list";

export default function FoundationsPage() {
  redirect(foundationsLinks[0]?.href ?? "/");
}
