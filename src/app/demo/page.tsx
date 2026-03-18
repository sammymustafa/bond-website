import DemoPageClient from "@/components/demo/DemoPageClient";

export const metadata = {
  title: "Interactive Demo | Bond Health",
  description:
    "Walk through how Bond Health uses AI to identify eligible patients, engage them with voice agents, and simplify informed consent for clinical trials.",
};

export default function DemoPage() {
  return (
    <DemoPageClient />
  );
}

