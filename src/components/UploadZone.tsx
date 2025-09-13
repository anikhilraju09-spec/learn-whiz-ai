import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Upload, FileText, Sparkles, CheckCircle } from "lucide-react";

export const UploadZone = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<string[]>([]);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const files = Array.from(e.dataTransfer.files);
    const fileNames = files.map(file => file.name);
    setUploadedFiles(prev => [...prev, ...fileNames]);
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      const fileNames = files.map(file => file.name);
      setUploadedFiles(prev => [...prev, ...fileNames]);
    }
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Upload Your Study Materials</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Drag and drop your documents, PDFs, presentations, or any study materials. 
            Our AI will analyze them and create personalized learning experiences.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card 
            className={`p-12 border-2 border-dashed transition-all duration-300 ${
              isDragging 
                ? 'border-primary bg-primary/5 scale-105' 
                : 'border-muted-foreground/25 hover:border-primary/50'
            }`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            <div className="text-center space-y-6">
              <div className="mx-auto w-24 h-24 rounded-full gradient-primary flex items-center justify-center shadow-medium">
                <Upload className="w-12 h-12 text-white" />
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-2">Drop files here to upload</h3>
                <p className="text-muted-foreground mb-6">
                  Support for PDF, DOCX, PPTX, TXT, and more
                </p>
                
                <input
                  type="file"
                  multiple
                  accept=".pdf,.doc,.docx,.ppt,.pptx,.txt,.md"
                  onChange={handleFileSelect}
                  className="hidden"
                  id="file-upload"
                />
                <label htmlFor="file-upload">
                  <Button variant="outline" size="lg" className="cursor-pointer">
                    <FileText className="w-5 h-5" />
                    Choose Files
                  </Button>
                </label>
              </div>

              <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-primary" />
                  AI Processing
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-secondary" />
                  Auto Analysis
                </div>
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-accent" />
                  Multiple Formats
                </div>
              </div>
            </div>
          </Card>

          {uploadedFiles.length > 0 && (
            <Card className="mt-6 p-6 gradient-card shadow-soft">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-success" />
                Uploaded Files ({uploadedFiles.length})
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {uploadedFiles.map((fileName, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-3 p-3 rounded-lg bg-success-light"
                  >
                    <FileText className="w-4 h-4 text-success" />
                    <span className="text-sm font-medium truncate">{fileName}</span>
                    <Button variant="secondary" size="sm" className="ml-auto">
                      <Sparkles className="w-3 h-3" />
                      Process
                    </Button>
                  </div>
                ))}
              </div>
            </Card>
          )}
        </div>
      </div>
    </section>
  );
};