import type { DemoPatientId } from "./demoPatients";
import type { DemoTrial } from "./demoTrials";

export interface ConsentSection {
  id: string;
  title: string;
  original: string;
  simplified: string;
}

export interface ChatTurn {
  role: "bondAgent" | "patient";
  message: string;
}

export interface DemoConsentContent {
  trialRef: Pick<DemoTrial, "nctId" | "title">;
  sections: ConsentSection[];
  chatbotScript: ChatTurn[];
}

export const demoConsentByPatient: Record<DemoPatientId, DemoConsentContent> = {
  "luisa-santana": {
    trialRef: {
      nctId: "NCT00000001",
      title: "Once-Weekly GLP-1 Agonist for Adults With Type 2 Diabetes",
    },
    sections: [
      {
        id: "purpose",
        title: "Purpose of the study",
        original:
          "The purpose of this clinical research study is to evaluate the efficacy and safety of an investigational once-weekly glucagon-like peptide-1 (GLP-1) receptor agonist when administered in combination with standard-of-care therapy in adult subjects with inadequately controlled Type 2 diabetes mellitus.",
        simplified:
          "This study is testing a new once-a-week diabetes medicine to see how well it lowers blood sugar and how safe it is when added to your usual treatments.",
      },
      {
        id: "procedures",
        title: "Study procedures",
        original:
          "If you choose to take part, you will be randomly assigned (like flipping a coin) to receive either the investigational study drug or a comparator treatment. You will attend approximately 12 study visits over 52 weeks. At these visits, we will check your vital signs, review your medications, draw blood samples, and ask about side effects.",
        simplified:
          "If you join, you will be placed by chance into one of two groups: one gets the study drug and the other gets a comparison treatment. You will come to the clinic about 12 times over a year for checkups, blood tests, and questions about how you are feeling.",
      },
      {
        id: "risks",
        title: "Risks and discomforts",
        original:
          "The investigational drug may cause side effects similar to other GLP-1 receptor agonists, including but not limited to nausea, vomiting, diarrhea, decreased appetite, and injection site reactions. Rare but serious risks may include pancreatitis or gallbladder disease. There may also be risks that are not yet known.",
        simplified:
          "Possible side effects are like other medicines in this class and can include nausea, vomiting, stomach upset, and pain or redness where you get the shot. Rarely, these medicines have been linked to pancreas or gallbladder problems. There may be other side effects we do not know about yet.",
      },
    ],
    chatbotScript: [
      {
        role: "bondAgent",
        message:
          "Hi Ana, I’ll walk you through this diabetes study in plain language. We’ll cover what the study is, what visits look like, and the main risks and benefits.",
      },
      {
        role: "patient",
        message: "Is this medicine already approved?",
      },
      {
        role: "bondAgent",
        message:
          "Not yet. It is still being studied. You would be helping researchers learn if it is safe and works well compared to current treatments.",
      },
      {
        role: "patient",
        message: "How often would I need to come in?",
      },
      {
        role: "bondAgent",
        message:
          "About 12 clinic visits over one year. Most visits are short check-ins where we draw blood, ask how you’re doing, and adjust medications if needed.",
      },
      {
        role: "patient",
        message: "Could I leave the study if I change my mind?",
      },
      {
        role: "bondAgent",
        message:
          "Yes. Participation is completely voluntary. You can stop at any time without affecting your regular medical care.",
      },
    ],
  },
};

