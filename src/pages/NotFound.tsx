import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, Phone, MessageCircle } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AccessibilityWidget from "@/components/AccessibilityWidget";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    // Log 404 for analytics/monitoring
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
    
    // Optional: Send to analytics
    if (typeof gtag !== 'undefined') {
      gtag('event', 'page_not_found', {
        page_path: location.pathname
      });
    }
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background">
      {/* Skip to content link for screen readers */}
      <a href="#main-content" className="skip-link">דלג לתוכן הראשי</a>
      
      <Navigation />
      
      <main className="container mx-auto px-4 py-20" id="main-content">
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-6xl font-bold text-primary mb-6">404</div>
          <h1 className="text-4xl font-bold mb-4 text-foreground">העמוד לא נמצא</h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            מצטערים, העמוד שחיפשתם אינו קיים או הוסר. 
            ייתכן שהכתובת שגויה או שהקישור ישן.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            <Button 
              asChild 
              variant="hero" 
              size="lg"
              className="flex items-center gap-2"
            >
              <Link to="/" aria-label="חזרה לעמוד הבית">
                <Home className="h-5 w-5" />
                עמוד הבית
              </Link>
            </Button>
            
            <Button 
              asChild 
              variant="outline" 
              size="lg"
              className="flex items-center gap-2"
            >
              <Link to="/services" aria-label="עבור לעמוד השירותים">
                השירותים שלי
              </Link>
            </Button>
            
            <Button 
              variant="warm" 
              size="lg"
              className="flex items-center gap-2"
              onClick={() => window.location.href = 'tel:052-288-0109'}
              aria-label="התקשר לאינה פרץ"
            >
              <Phone className="h-5 w-5" />
              יצירת קשר
            </Button>
          </div>
          
          <div className="text-center">
            <p className="text-muted-foreground mb-4">או שלחו לי הודעה:</p>
            <Button 
              variant="whatsapp"
              onClick={() => window.open('https://wa.me/972522880109?text=' + encodeURIComponent('שלום אינה, נתקלתי בקישור שבור באתר'), '_blank')}
              aria-label="דווח על קישור שבור בווטסאפ"
              className="flex items-center gap-2"
            >
              <MessageCircle className="h-5 w-5" />
              דווח על בעיה
            </Button>
          </div>
        </div>
      </main>
      
      <Footer />
      <AccessibilityWidget />
    </div>
  );
};

export default NotFound;
