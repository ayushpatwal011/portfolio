import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
   
const AskedQuestion = () => {
  return (
    <div>
         <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>Frasher or Work experience?</AccordionTrigger>
        <AccordionContent>
          Yes. Im Frasher and do not have any experience
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Required intenship or Job?</AccordionTrigger>
        <AccordionContent>
          Yes. I want  intenship or Job to start my carrier in Tech Feild
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Future Planes?</AccordionTrigger>
        <AccordionContent>
            Full stack development, AIML, Data Science
        </AccordionContent>
      </AccordionItem>
    </Accordion>
    </div>
  )
}

export default AskedQuestion