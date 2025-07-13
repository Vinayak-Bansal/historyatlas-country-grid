import Navigation from "@/components/Navigation";
import CountryGrid from "@/components/CountryGrid";
import { MapPin, Clock, Users, Globe } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 px-4 text-center bg-gradient-hero overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.05),transparent_50%)]" />
        
        <div className="container mx-auto relative z-10">
          <div className="mb-12 md:mb-16">
            <div className="mb-6">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground mb-6 tracking-tight">
                History<span className="text-accent">Atlas</span>
              </h1>
              <div className="w-24 h-1 bg-accent mx-auto mb-8 rounded-full" />
            </div>
            <p className="text-xl md:text-2xl lg:text-3xl text-primary-foreground/90 max-w-4xl mx-auto leading-relaxed font-light">
              Journey through time and explore the rich tapestry of world history through countries and civilizations
            </p>
          </div>
          
          {/* Feature Icons */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="group flex flex-col items-center space-y-4 transition-all duration-300 hover:scale-105">
              <div className="p-4 rounded-2xl bg-primary-foreground/15 backdrop-blur-sm border border-primary-foreground/20 group-hover:bg-primary-foreground/25 transition-all duration-300 shadow-lg">
                <Globe className="h-8 w-8 text-primary-foreground" />
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-foreground mb-1">195</div>
                <span className="text-sm text-primary-foreground/80 font-medium">Countries</span>
              </div>
            </div>
            <div className="group flex flex-col items-center space-y-4 transition-all duration-300 hover:scale-105">
              <div className="p-4 rounded-2xl bg-primary-foreground/15 backdrop-blur-sm border border-primary-foreground/20 group-hover:bg-primary-foreground/25 transition-all duration-300 shadow-lg">
                <Clock className="h-8 w-8 text-primary-foreground" />
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-foreground mb-1">∞</div>
                <span className="text-sm text-primary-foreground/80 font-medium">Timelines</span>
              </div>
            </div>
            <div className="group flex flex-col items-center space-y-4 transition-all duration-300 hover:scale-105">
              <div className="p-4 rounded-2xl bg-primary-foreground/15 backdrop-blur-sm border border-primary-foreground/20 group-hover:bg-primary-foreground/25 transition-all duration-300 shadow-lg">
                <MapPin className="h-8 w-8 text-primary-foreground" />
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-foreground mb-1">1000+</div>
                <span className="text-sm text-primary-foreground/80 font-medium">Historical Maps</span>
              </div>
            </div>
            <div className="group flex flex-col items-center space-y-4 transition-all duration-300 hover:scale-105">
              <div className="p-4 rounded-2xl bg-primary-foreground/15 backdrop-blur-sm border border-primary-foreground/20 group-hover:bg-primary-foreground/25 transition-all duration-300 shadow-lg">
                <Users className="h-8 w-8 text-primary-foreground" />
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-foreground mb-1">500+</div>
                <span className="text-sm text-primary-foreground/80 font-medium">Civilizations</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Countries Section */}
      <section className="py-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-hero bg-clip-text text-transparent">
            Explore Countries
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Click on any country to discover its fascinating history, from ancient civilizations to modern times
          </p>
        </div>
        
        <CountryGrid />
      </section>
    </div>
  );
};

export default Index;
