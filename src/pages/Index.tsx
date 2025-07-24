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
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">History</span>
                <span className="bg-gradient-to-r from-slate-700 via-slate-800 to-slate-900 bg-clip-text text-transparent ml-2">Atlas</span>
              </h1>
              <div className="w-32 h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8 rounded-full shadow-lg" />
            </div>
            <p className="text-xl md:text-2xl lg:text-3xl text-foreground/80 max-w-4xl mx-auto leading-relaxed font-light">
              Journey through time and explore the rich tapestry of world history through countries and civilizations
            </p>
          </div>
          
          {/* Feature Icons */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="group flex flex-col items-center space-y-4 transition-all duration-300 hover:scale-105">
              <div className="p-4 rounded-2xl bg-blue-50 dark:bg-blue-950/50 backdrop-blur-sm border border-blue-200 dark:border-blue-800 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/50 transition-all duration-300 shadow-lg group-hover:shadow-xl">
                <Globe className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-700 dark:text-blue-300 mb-1">195</div>
                <span className="text-sm text-muted-foreground font-medium">Countries</span>
              </div>
            </div>
            <div className="group flex flex-col items-center space-y-4 transition-all duration-300 hover:scale-105">
              <div className="p-4 rounded-2xl bg-indigo-50 dark:bg-indigo-950/50 backdrop-blur-sm border border-indigo-200 dark:border-indigo-800 group-hover:bg-indigo-100 dark:group-hover:bg-indigo-900/50 transition-all duration-300 shadow-lg group-hover:shadow-xl">
                <Clock className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-indigo-700 dark:text-indigo-300 mb-1">∞</div>
                <span className="text-sm text-muted-foreground font-medium">Timelines</span>
              </div>
            </div>
            <div className="group flex flex-col items-center space-y-4 transition-all duration-300 hover:scale-105">
              <div className="p-4 rounded-2xl bg-purple-50 dark:bg-purple-950/50 backdrop-blur-sm border border-purple-200 dark:border-purple-800 group-hover:bg-purple-100 dark:group-hover:bg-purple-900/50 transition-all duration-300 shadow-lg group-hover:shadow-xl">
                <MapPin className="h-8 w-8 text-purple-600 dark:text-purple-400" />
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-700 dark:text-purple-300 mb-1">1000+</div>
                <span className="text-sm text-muted-foreground font-medium">Historical Maps</span>
              </div>
            </div>
            <div className="group flex flex-col items-center space-y-4 transition-all duration-300 hover:scale-105">
              <div className="p-4 rounded-2xl bg-violet-50 dark:bg-violet-950/50 backdrop-blur-sm border border-violet-200 dark:border-violet-800 group-hover:bg-violet-100 dark:group-hover:bg-violet-900/50 transition-all duration-300 shadow-lg group-hover:shadow-xl">
                <Users className="h-8 w-8 text-violet-600 dark:text-violet-400" />
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-violet-700 dark:text-violet-300 mb-1">500+</div>
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
