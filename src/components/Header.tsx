import { Button } from "@/components/ui/button";
import { BookOpen, Brain, User } from "lucide-react";
import aiMascot from "@/assets/ai-mascot.png";

export const Header = () => {
  return (
    <header className="w-full border-b border-border bg-background/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={aiMascot} alt="Learn with AI Mascot" className="w-10 h-10" />
          <div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Learn with AI
            </h1>
            <p className="text-xs text-muted-foreground">Personalized Study Platform</p>
          </div>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <a href="#dashboard" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Dashboard
          </a>
          <a href="#study" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Study
          </a>
          <a href="#analytics" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Analytics
          </a>
          <a href="#assessments" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Assessments
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm">
            <Brain className="w-4 h-4" />
            AI Assistant
          </Button>
          <Button variant="outline" size="sm">
            <User className="w-4 h-4" />
            Profile
          </Button>
        </div>
      </div>
    </header>
  );
};