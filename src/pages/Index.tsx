import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Users, BookOpen, Star, Award, Clock, Phone, Mail, MessageCircle } from "lucide-react";
import Navigation from "@/components/Navigation";
import WhatsAppButton from "@/components/WhatsAppButton";
import Footer from "@/components/Footer";
import AccessibilityWidget from "@/components/AccessibilityWidget";
import heroImage from "@/assets/hero-image.jpg";
import coachPortrait from "@/assets/coach-portrait.jpg";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Skip to content link for screen readers */}
      <a href="#main-content" className="skip-link">דלג לתוכן הראשי</a>
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-warm overflow-hidden" aria-labelledby="hero-heading">
        <div className="container mx-auto px-4 py-20" id="main-content">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center">
            <div className="text-right animate-fade-in">
              <h1 id="hero-heading" className="text-5xl md:text-6xl font-bold text-primary mb-6 leading-tight">
                ליווי הורים
                <span className="block text-4xl md:text-5xl text-trust">עם אהבה וחמלה</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                בעלת ניסיון עשיר ורב־שנים בתחום החינוך, הליווי המשפחתי והדרכת ההורים. מלווה הורים וילדים בתהליכי צמיחה, חיזוק גבולות ובניית ביטחון עצמי
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-end">
                <Button 
                  variant="warm" 
                  size="lg" 
                  className="text-lg px-8 py-6" 
                  onClick={() => navigate('/about')}
                  aria-label="למד עלי יותר - מעבר לעמוד אודותיי"
                >
                  למדו עלי יותר
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="text-lg px-8 py-6" 
                  onClick={() => navigate('/services')}
                  aria-label="צפה בשירותים - מעבר לעמוד שירותים ומאמרים"
                >
                  צפו בשירותים
                </Button>
              </div>
            </div>
            <div className="relative animate-slide-up flex justify-center items-center">
              <div 
                className="bg-white rounded-2xl p-3"
                style={{
                  boxShadow: '0 8px 24px rgba(0,0,0,0.08)'
                }}
              >
                <img 
                  src="/lovable-uploads/da3bad3d-c085-4025-b5f0-502ed86be156.png" 
                  alt="אינה פרץ, מנחת הורים מוסמכת - תמונה מקצועית וחמה המסמלת את הגישה האוהבת והתומכת בליווי הורים"
                  className="h-auto object-contain rounded-xl"
                  style={{ maxWidth: '320px' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 bg-secondary/30" aria-labelledby="trust-heading">
        <div className="container mx-auto px-4">
          <h2 id="trust-heading" className="sr-only">היתרונות והניסיון שלי</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <Award className="h-12 w-12 text-primary mb-4" aria-hidden="true" />
              <h3 className="text-2xl font-semibold mb-2">כ-30 שנות ניסיון בעבודה עם ילדים</h3>
              <p className="text-muted-foreground">ניסיון עשיר בחינוך וליווי הורים</p>
            </div>
            <div className="flex flex-col items-center">
              <Users className="h-12 w-12 text-primary mb-4" aria-hidden="true" />
              <h3 className="text-2xl font-semibold mb-2">מאות משפחות</h3>
              <p className="text-muted-foreground">משפחות שקיבלו ליווי מקצועי</p>
            </div>
            <div className="flex flex-col items-center">
              <Heart className="h-12 w-12 text-primary mb-4" aria-hidden="true" />
              <h3 className="text-2xl font-semibold mb-2">גישה אישית</h3>
              <p className="text-muted-foreground">כל משפחה מקבלת טיפול מותאם אישית</p>
            </div>
          </div>
        </div>
      </section>

      {/* My Story Section */}
      <section className="py-20" aria-labelledby="story-heading">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center max-w-5xl mx-auto">
            {/* מלל בצד שמאל */}
            <div className="text-right order-1 lg:order-1">
              <h2 id="story-heading" className="text-4xl font-bold text-primary mb-6">המסע שלי כמנחת הורים</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                התחלתי את דרכי לפני כ-30 שנה כמחנכת בגן ילדים. עם השנים הבנתי שהמפתח לחינוך  מוצלח נמצא בליווי ההורים עצמם. המעבר לתחום ההדרכה ההורית היה טבעי ומלא משמעות עבורי.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                כיום, לאחר ליווי מאות משפחות, אני מאמינה שכל הורה יכול להצליח, צריך רק את הכלים הנכונים והליווי המקצועי שיעזור לו לגלות את החוזקות שלו.
              </p>
              <Button 
                variant="warm" 
                size="lg" 
                onClick={() => navigate('/about')}
                aria-label="למד עלי עוד - מעבר לעמוד האישי המלא שלי"
              >
                למד עלי עוד
              </Button>
            </div>
            
            {/* לוגו בצד ימין */}
            <div className="flex justify-center items-center order-2 lg:order-2">
              <img 
                src="/lovable-uploads/641fd2d0-4094-4fb6-a48e-170a52ac250a.png" 
                alt="אינה פרץ – מדריכת הורים - לוגו עם עץ ודמויות הורה וילד"
                className="h-auto object-contain rounded-2xl"
                style={{ 
                  maxWidth: '400px', 
                  maxHeight: '400px',
                  filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.1))'
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-gradient-gentle" aria-labelledby="services-heading">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 id="services-heading" className="text-4xl font-bold text-primary mb-4">תחומי ההתמחות שלי</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              אני מציעה ליווי מקצועי ואישי במגוון תחומים המותאמים לצרכים הייחודיים של כל משפחה
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "קביעת גבולות בריאים",
                description: "ללמד ילדים כללים ברורים תוך שמירה על חמלה ואהבה",
                icon: <Users className="h-8 w-8" />
              },
              {
                title: "ליווי רגשי",
                description: "עזרה להורים ולילדים להבין ולנהל רגשות בצורה בריאה",
                icon: <Heart className="h-8 w-8" />
              },
              {
                title: "פתרון בעיות שינה",
                description: "יצירת שגרות שינה בריאות לכל המשפחה",
                icon: <Clock className="h-8 w-8" />
              },
              {
                title: "הכנה לגן וביה״ס",
                description: "הכנה נכונה ומתחשבת למעברים חשובים בחיי הילד",
                icon: <BookOpen className="h-8 w-8" />
              },
              {
                title: "בניית ביטחון עצמי",
                description: "חיזוק הביטחון העצמי אצל ילדים והורים כאחד",
                icon: <Star className="h-8 w-8" />
              },
              {
                title: "התנהגויות מאתגרות",
                description: "פתרונות יעילים להתמודדות עם התנהגויות קשות",
                icon: <Award className="h-8 w-8" />
              }
            ].map((service, index) => (
              <Card key={index} className="hover:shadow-warm transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-primary" aria-hidden="true">
                      {service.icon}
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button 
              variant="hero" 
              size="lg" 
              onClick={() => navigate('/services')}
              aria-label="צפה בכל השירותים - מעבר לעמוד השירותים המלא"
            >
              צפו בכל השירותים
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-secondary/30" aria-labelledby="contact-heading">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 id="contact-heading" className="text-4xl font-bold text-primary mb-4">בואו נכיר</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              אשמח לשמוע על האתגרים שלכם ולעזור לכם למצוא את הדרך לחיי משפחה טובים יותר. 
              השיחה הראשונה תמיד ללא עלות והתחייבות.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="hover:shadow-warm transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <Phone className="h-12 w-12 text-primary" aria-hidden="true" />
                  <div>
                    <CardTitle>שיחת טלפון</CardTitle>
                    <CardDescription>האופן המהיר והישיר ביותר</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-primary mb-4" aria-label="מספר טלפון">052-288-0109</p>
                <p className="text-sm text-muted-foreground mb-4">
                  זמינה ימים א'-ה' בין השעות 9:00-18:00
                </p>
                <Button 
                  variant="hero" 
                  className="w-full" 
                  onClick={() => window.location.href = 'tel:052-288-0109'}
                  aria-label="התקשר עכשיו למספר 052-288-0109"
                >
                  התקשרו עכשיו
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-warm transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <MessageCircle className="h-12 w-12 text-primary" aria-hidden="true" />
                  <div>
                    <CardTitle>הודעת ווטסאפ</CardTitle>
                    <CardDescription>נוח ומהיר - תשובה תוך שעות</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-bold text-primary mb-4">שלחו הודעה</p>
                <p className="text-sm text-muted-foreground mb-4">
                  מענה מהיר ואישי לכל שאלה
                </p>
                <Button 
                  variant="whatsapp" 
                  className="w-full" 
                  onClick={() => window.open('https://wa.me/972522880109?text=' + encodeURIComponent('שלום אינה, אני מעוניין/ת ליעוץ הורים'), '_blank')}
                  aria-label="שלח הודעת ווטסאפ לאינה פרץ"
                >
                  שלחו הודעה
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-warm transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <Mail className="h-12 w-12 text-primary" aria-hidden="true" />
                  <div>
                    <CardTitle>מייל</CardTitle>
                    <CardDescription>למי שמעדיף תקשורת בכתב</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-bold text-primary mb-4" aria-label="כתובת מייל">inaper73@gmail.com</p>
                <p className="text-sm text-muted-foreground mb-4">
                  מענה תוך 24 שעות
                </p>
                <Button 
                  variant="outline" 
                  className="w-full" 
                  onClick={() => window.location.href = 'mailto:inaper73@gmail.com'}
                  aria-label="שלח מייל לאינה פרץ"
                >
                  שלחו מייל
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground" aria-labelledby="cta-heading">
        <div className="container mx-auto px-4 text-center">
          <h2 id="cta-heading" className="text-4xl font-bold mb-6">מוכנים להתחיל במסע לחינוך טוב יותר?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            קבעו ייעוץ ראשוני איתי ונתחיל יחד לבנות מערכת יחסים טובה יותר עם הילדים שלכם
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="secondary" 
              size="lg" 
              className="text-lg px-8 py-6" 
              onClick={() => window.open('https://wa.me/972522880109?text=' + encodeURIComponent('שלום אינה, אני מעוניין/ת בייעוץ ראשוני'), '_blank')}
              aria-label="קבע ייעוץ ראשוני עם אינה פרץ בווטסאפ"
            >
              ייעוץ ראשוני
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-6 border-primary-foreground bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-primary" 
              onClick={() => window.open('https://wa.me/972522880109?text=' + encodeURIComponent('שלום אינה, אני מעוניין/ת ליעוץ הורים'), '_blank')}
              aria-label="שלח הודעה בווטסאפ לאינה פרץ"
            >
              שלחו הודעה בווטסאפ
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
      <AccessibilityWidget />
    </div>
  );
};

export default Index;
