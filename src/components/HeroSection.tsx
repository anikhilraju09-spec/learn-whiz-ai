import { Button } from "@/components/ui/button";
import { Upload, Brain, BarChart3, FileText } from "lucide-react";
import heroBanner from "@/assets/hero-banner.png";

export const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-muted/30 to-primary/5 py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Transform Your
                <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                  {" "}Learning{" "}
                </span>
                with AI
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Upload documents, get personalized assessments, track your progress, 
                and receive AI-driven study recommendations. Make learning smarter, not harder.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg">
                <Upload className="w-5 h-5" />
                Start Learning
              </Button>
              <Button variant="outline" size="lg">
                <Brain className="w-5 h-5" />
                Explore Features
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-6 pt-8">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl gradient-primary flex items-center justify-center shadow-soft">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm">Document Processing</h3>
                  <p className="text-xs text-muted-foreground">Upload & analyze any document</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl gradient-secondary flex items-center justify-center shadow-soft">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm">AI Assessments</h3>
                  <p className="text-xs text-muted-foreground">Auto-generated quizzes</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl gradient-accent flex items-center justify-center shadow-soft">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm">Progress Analytics</h3>
                  <p className="text-xs text-muted-foreground">Track your learning journey</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl gradient-learning flex items-center justify-center shadow-soft">
                  <Upload className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm">Smart Recommendations</h3>
                  <p className="text-xs text-muted-foreground">Personalized study paths</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-3xl"></div>
            <img 
              src={heroBanner} 
              alt="AI Learning Platform"
              className="relative w-full h-auto rounded-3xl shadow-strong"
            />
          </div>
        </div>
      </div>
    </section>
  );
};