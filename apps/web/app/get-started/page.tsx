import { redirect } from "next/navigation";
import { getStartedLinks } from "common/pages-list";

export default function GetStarted() {
  redirect(getStartedLinks[0]?.href ?? "/");
}
