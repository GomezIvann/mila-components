import { redirect } from "next/navigation";
import { foundationsLinks } from "common/pages-list";

export default function Foundations() {
  redirect(foundationsLinks[0]?.href ?? "/");
}
