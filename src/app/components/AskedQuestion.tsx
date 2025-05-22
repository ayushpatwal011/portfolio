import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const AskedQuestion = () => {
  return (
    <div>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>Fresher or Work Experience?</AccordionTrigger>
          <AccordionContent>
            Yes, I am a fresher and do not have any work experience.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Looking for Internship or Job?</AccordionTrigger>
          <AccordionContent>
            Yes, I am looking for an internship or a job to start my career in the tech field.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Future Plans?</AccordionTrigger>
          <AccordionContent>
            I am interested in Full Stack Development, AI/ML, and Data Science.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default AskedQuestion;
