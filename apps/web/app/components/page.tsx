import { redirect } from "next/navigation";
import { componentsLinks } from "@/common/pages-list";

export default function ComponentsPage() {
  redirect(componentsLinks[0]?.href ?? "/");
}
