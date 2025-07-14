import Navigation from "@/components/Navigation";
import CountryGrid from "@/components/CountryGrid";
import { MapPin, Clock, Users, Globe } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 px-4 text-center bg-gradient-to-br from-background via-secondary/30 to-background overflow-hidden">
        {/* Modern background effects */}
        <div className="absolute inset-0 bg-gradient-modern opacity-5" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-modern rounded-full blur-3xl opacity-10 animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-sleek rounded-full blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '1s' }} />
        
        <div className="container mx-auto relative z-10">
          <div className="mb-12 md:mb-16">
            <div className="mb-6">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight">
                <span className="bg-gradient-sleek bg-clip-text text-transparent animate-pulse">History</span>
                <span className="bg-gradient-modern bg-clip-text text-transparent ml-2">Atlas</span>
              </h1>
              <div className="w-32 h-1.5 bg-gradient-modern mx-auto mb-8 rounded-full shadow-lg" />
            </div>
            <p className="text-xl md:text-2xl lg:text-3xl text-foreground/80 max-w-4xl mx-auto leading-relaxed font-light">
              Journey through time and explore the rich tapestry of world history through countries and civilizations
            </p>
          </div>
          
          {/* Feature Icons */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="group flex flex-col items-center space-y-4 transition-all duration-300 hover:scale-105">
              <div className="p-4 rounded-2xl bg-gradient-modern/10 backdrop-blur-sm border border-modern-purple/20 group-hover:bg-gradient-modern/20 transition-all duration-300 shadow-lg group-hover:shadow-xl">
                <Globe className="h-8 w-8 text-modern-purple" />
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground mb-1">195</div>
                <span className="text-sm text-muted-foreground font-medium">Countries</span>
              </div>
            </div>
            <div className="group flex flex-col items-center space-y-4 transition-all duration-300 hover:scale-105">
              <div className="p-4 rounded-2xl bg-gradient-modern/10 backdrop-blur-sm border border-modern-cyan/20 group-hover:bg-gradient-modern/20 transition-all duration-300 shadow-lg group-hover:shadow-xl">
                <Clock className="h-8 w-8 text-modern-cyan" />
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground mb-1">∞</div>
                <span className="text-sm text-muted-foreground font-medium">Timelines</span>
              </div>
            </div>
            <div className="group flex flex-col items-center space-y-4 transition-all duration-300 hover:scale-105">
              <div className="p-4 rounded-2xl bg-gradient-modern/10 backdrop-blur-sm border border-modern-emerald/20 group-hover:bg-gradient-modern/20 transition-all duration-300 shadow-lg group-hover:shadow-xl">
                <MapPin className="h-8 w-8 text-modern-emerald" />
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground mb-1">1000+</div>
                <span className="text-sm text-muted-foreground font-medium">Historical Maps</span>
              </div>
            </div>
            <div className="group flex flex-col items-center space-y-4 transition-all duration-300 hover:scale-105">
              <div className="p-4 rounded-2xl bg-gradient-modern/10 backdrop-blur-sm border border-modern-purple/20 group-hover:bg-gradient-modern/20 transition-all duration-300 shadow-lg group-hover:shadow-xl">
                <Users className="h-8 w-8 text-modern-purple" />
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground mb-1">500+</div>
                <span className="text-sm text-muted-foreground font-medium">Civilizations</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Countries Section */}
      <section className="py-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-modern bg-clip-text text-transparent">
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
