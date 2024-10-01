import { redirect } from "next/navigation";
import { componentsLinks } from "common/pages-list";

export default function Components() {
  redirect(componentsLinks[0]?.items[0]?.href ?? "/");
}
