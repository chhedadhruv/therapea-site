import { ButtonLink, PageTitle } from "@/components/ui";

export default function NotFound() {
  return (
    <div className="flex flex-col gap-4">
      <PageTitle title="Page not found" intro="That page doesn't exist, or it has moved." />
      <div>
        <ButtonLink href="/">Go to the home page</ButtonLink>
      </div>
    </div>
  );
}
