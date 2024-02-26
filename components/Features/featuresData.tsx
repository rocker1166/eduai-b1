import { Feature } from "@/types/feature";
import Image from "next/image";
const featuresData: Feature[] = [
  {
    id: 1,
    icon: "/images/icon/1.svg",
    title: "United Platform",
    description:
      "Access all tools of online platfrom in single page"},
  {
    id: 2,
    icon: "/images/icon/aibot.svg",
    title: "Ai Chatbot",
    description:
      "Answers all your questions, guides you, slove question instantly and offers personalized support.",
  },
  {
    id: 3,
    icon: "/images/icon/Designer.svg",
    title: "Ai Designed Notes",
    description:
      " Unleash AI powered learning & productivity: capture, organize, understand with Ai Designed Notes.",
  },
  {
    id: 4,
    icon: "/images/icon/youtube.svg",
    title: "Ai Youtube Video Recomendation",
    description:
      "Access most popular,contextual youtube video without searching or switching tas.",
  },
  {
    id: 5,
    icon: "/images/icon/question.svg",
    title: "Endless Questions and mock test",
    description:
      "Practice as much question (pyqs,mcqs,laqs,numericals etc) as you want. Get instant feedback on your progress and performance."},

  {
    id: 6,
    icon: "/images/icon/posture.svg",
    title: "Posture Checker",
    description:
      "Check your posture and get suggestion to correct your posture .",
  },
];

export default featuresData;
