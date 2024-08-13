import { useState } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function MoreDetails({ children }: { children: React.ReactNode }) {
  const [showAmountVote, setShowAmountVote] = useState(true);

  const toggleShowAmountVote = () => {
    setShowAmountVote(!showAmountVote);
  }

  return (
    <Accordion type="single" collapsible className="mb-10 text-zinc-600">
      <AccordionItem value="item-1">
        <AccordionTrigger onClick={toggleShowAmountVote}>
          Ver {`${showAmountVote ? "mais" : "menos"}`}
        </AccordionTrigger>

        {children}

        <AccordionContent>
          <p>155 pessoas vão votar nulo</p>
          <p>200 pessoas não vão votar</p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
