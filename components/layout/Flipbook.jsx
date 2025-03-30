// ui elements
import TitleText from "@/components/ui/TitleText";
import Button from "@/components/ui/Button";

export default function Flipbook() {
  return (
    <section className="relative overflow-hidden bg-white my-12 p-4 md:p-0 md:my-20 md:max-w-7xl mx-auto">
      <TitleText />
      <iframe
        src="https://catalogueselectrolux.com/electrolux-catalogue-flipsnack/full-view.html"
        frameBorder="0"
        width="100%"
        height="100%"
        className="my-18"
      />
      <div className="flex justify-center">
        <Button className="text-primary mr-4" variant="primary">
          Quiero saber más
        </Button>
      </div>
    </section>
  );
}
