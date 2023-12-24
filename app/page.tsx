import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function AccordionDemo() {
  return (
    <section className="p-20">
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>Front End</AccordionTrigger>
          <AccordionContent>
            Utilizo lenguajes como HTML,CSS,JAVASCRIPT,REACT.JS, NETX.JS, entre
            otras herramientas que me permiten obtener buenos resultados de
            desarrollo
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Back End</AccordionTrigger>
          <AccordionContent>
            Yes. It comes with default styles that matches the other
            components&apos; aesthetic.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
}
