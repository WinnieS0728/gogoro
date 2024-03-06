import { homeBanner_content } from "@/contents/home banner";
import { cn } from "@/utils/cn";

interface props {
  content: homeBanner_content;
}
export default function Banner({ content }: props) {
  return (
    <>
      <section className="relative flex justify-center">
        <img src={content.bgImg} alt="bg-img-1" className="object-cover" />
        <article className="absolute top-3 flex flex-col gap-4">
          <h3 className={cn("text-9 text-white")}>{content.title.label}</h3>
          <a
            href={content.link.href}
            className=" flex items-center justify-center gap-3 text-white"
          >
            {content.link.label}
            <p>{">"}</p>
          </a>
        </article>
      </section>
    </>
  );
}
