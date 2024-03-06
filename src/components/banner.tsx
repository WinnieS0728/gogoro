import { homeBanner_content } from "@/contents/home banner";

interface props {
  content: homeBanner_content;
}
export default function Banner({ content }: props) {
  return (
    <>
      <section className="relative flex justify-center">
        <img src={content.bgImg} alt="bg-img-1" className="object-cover" />
        <article className="absolute top-3 flex flex-col gap-4">
          <h3 className="text-banner_title text-white">{content.title}</h3>
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
