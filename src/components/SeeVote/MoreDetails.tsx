import { useState } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Dashboard } from "../Dashboard";

export function MoreDetails({ children }: { children: React.ReactNode }) {
  const [showAmountVote, setShowAmountVote] = useState(true);

  const toggleShowAmountVote = () => {
    setShowAmountVote(!showAmountVote);
  }

  return (
    <Accordion type="single" collapsible className="text-zinc-600">
      <AccordionItem value="item-1">
        <AccordionTrigger onClick={toggleShowAmountVote}>
          Ver {`${showAmountVote ? "mais" : "menos"}`}
        </AccordionTrigger>

        {showAmountVote && children}

        <AccordionContent>
          <Dashboard />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
