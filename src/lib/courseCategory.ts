import { MessageCircle, Users, Brain, Target, Cpu, BarChart3, type LucideIcon } from "lucide-react";
import type { CourseCategory } from "@/data/courses";

export const CATEGORY_META: Record<CourseCategory, { label: string; icon: LucideIcon }> = {
  language: { label: "Language", icon: MessageCircle },
  "soft-skills": { label: "Soft Skills", icon: Users },
  leadership: { label: "Leadership", icon: Brain },
  career: { label: "Career", icon: Target },
  tech: { label: "Tech & AI", icon: Cpu },
  data: { label: "Data", icon: BarChart3 },
};
