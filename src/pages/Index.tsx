import Navigation from "@/components/Navigation";
import CountryGrid from "@/components/CountryGrid";
import { MapPin, Clock, Users, Globe } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-16 px-4 text-center bg-gradient-hero">
        <div className="container mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-4">
              HistoryAtlas
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto">
              Explore the rich tapestry of world history through countries and civilizations
            </p>
          </div>
          
          {/* Feature Icons */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            <div className="flex flex-col items-center space-y-2">
              <div className="p-3 rounded-full bg-primary-foreground/20 backdrop-blur-sm">
                <Globe className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="text-sm text-primary-foreground/80">195 Countries</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="p-3 rounded-full bg-primary-foreground/20 backdrop-blur-sm">
                <Clock className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="text-sm text-primary-foreground/80">Timelines</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="p-3 rounded-full bg-primary-foreground/20 backdrop-blur-sm">
                <MapPin className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="text-sm text-primary-foreground/80">Historical Maps</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="p-3 rounded-full bg-primary-foreground/20 backdrop-blur-sm">
                <Users className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="text-sm text-primary-foreground/80">Civilizations</span>
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
