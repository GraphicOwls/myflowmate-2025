import { Button } from "@/components/ui/button";
import { SquarePoint } from "@/components/SquarePoint";

export default function Hero() {
  return (
    <section className="border-stone-400 border-dashed border-b">
      <div className="max-w-[1608px] mx-auto text-center grid place-items-center gap-4 py-28 border-l border-stone-400 border-dashed border-r relative">
        <h1 className="text-4xl font-bold">Webflow Expert Support</h1>
        <p className="text-xl text-stone-600 max-w-2xl leading-relaxed">
          Get 1 on 1 training & mentorship with a webflow expert. Want to learn
          Webflow faster? Need help with interactions? Not a problem!
        </p>
        <Button href="/#book-session" size="lg">
          Book Session
        </Button>
        <SquarePoint position="bottomLeft" />
        <SquarePoint position="bottomRight" />
      </div>
    </section>
  );
}
