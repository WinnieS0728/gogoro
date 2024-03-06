import Banner from "@/components/banner";
import { homepage_content } from "@contents/home banner";

export default function Homepage() {
  return (
    <main className="grid gap-4">
      {homepage_content.map((content) => (
        <Banner key={content.sectionId} content={content} />
      ))}
    </main>
  );
}
