import Navigation from "@/components/Navigation";
import WhatsAppButton from "@/components/WhatsAppButton";
import Footer from "@/components/Footer";
import AccessibilityWidget from "@/components/AccessibilityWidget";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, BookOpen, Heart, Users, GraduationCap, Clock } from "lucide-react";
import coachPortrait from "@/assets/coach-portrait.jpg";


const About = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Skip to content link for screen readers */}
      <a href="#main-content" className="skip-link">דלג לתוכן הראשי</a>
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-warm" aria-labelledby="hero-heading">
        <div className="container mx-auto px-4" id="main-content">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center">
            <div className="text-right">
              <h1 id="hero-heading" className="text-5xl font-bold text-primary mb-6">אינה פרץ</h1>
              <h2 className="text-3xl text-trust mb-6">מנחת הורים מוסמכת</h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                בעלת ניסיון עשיר ורב־שנים בתחום החינוך, הליווי המשפחתי והדרכת ההורים.
                מלווה הורים וילדים בתהליכי צמיחה, חיזוק גבולות ובניית ביטחון עצמי
              </p>
            </div>
            <div className="relative flex justify-center items-center">
              <div 
                className="bg-white rounded-2xl p-3"
                style={{
                  boxShadow: '0 8px 24px rgba(0,0,0,0.08)'
                }}
              >
                <img 
                  src="/lovable-uploads/da3bad3d-c085-4025-b5f0-502ed86be156.png" 
                  alt="אינה פרץ - תמונה מקצועית של מנחת הורים מוסמכת בחצי פרופיל, מחייכת בחמימות על רקע בהיר. התמונה משדרת אמינות, ניסיון ואחריות מקצועית"
                  className="h-auto object-contain rounded-xl"
                  style={{ maxWidth: '320px' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* My Journey */}
      <section className="py-20" aria-labelledby="journey-heading">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-right">
            <h2 id="journey-heading" className="text-4xl font-bold text-primary mb-8">המסע שלי</h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                אני אמא לשלושה ילדים בוגרים ומקסימים – בגילאי 31, 27 ו-16 – וכל חיי סובבים סביב עולמם של ילדים והורים. לצד האמהות, אני מנהלת מעון יום לגיל הרך, וכבר קרוב לשלושה עשורים עוסקת בחינוך, ליווי ותמיכה במשפחות.
              </p>
              <p>
                במהלך השנים עברתי לא מעט אתגרים אישיים, בהם התמודדות עם אובדן בן זוגי. החוויה הזו חידדה בי את החשיבות של חוסן, הכלה וגמישות בהורות – והדגישה עד כמה חשוב להעניק להורים כלים ותמיכה, במיוחד ברגעים לא צפויים.
              </p>
              <p>
                את דרכי התחלתי כמחנכת בגן ילדים, ובמהלך השנים פגשתי וליוויתי משפחות רבות שנדרשו להתמודד עם אתגרי היומיום: ילדים שמתקשים להקשיב, בעיות שינה, התפרצויות זעם – ובעיקר הורים שמרגישים לעיתים חוסר אונים ושמים את עצמם אחרונים.
              </p>
              <p>
                המעבר לעולם הדרכת ההורים היה עבורי שלב טבעי. אני מאמינה שכל הורה שואף להורות מיטיבה – להעניק לילדיו ביטחון, אהבה וערכים – אך לא תמיד יש לו את הכלים או התמיכה הדרושים לכך. כאן אני נכנסת לתמונה: מציעה להורים את הניסיון והידע שצברתי, ומסייעת להם לגלות את העוצמות והחוזקות שבהם ולבנות תקשורת מקרבת ומשמעותית בבית.
              </p>
              <p>
                אני מאמינה בכל לבי שכל הורה יכול להצליח. בעזרת ליווי מקצועי מותאם אישית וכלים להורות מיטיבה.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 bg-secondary/30" aria-labelledby="philosophy-heading">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 id="philosophy-heading" className="text-4xl font-bold text-primary mb-4">הפילוסופיה שלי</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              אני מאמינה בגישה רגישה ומותאמת אישית לכל משפחה, תוך שמירה על החמלה והאהבה
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "כל הורה הוא הורה טוב",
                description: "אני מאמינה שכל הורה רוצה את הטוב ביותר לילדיו. המטרה שלי היא לעזור לכם לגלות את החוזקות שלכם.",
                icon: <Heart className="h-8 w-8" />
              },
              {
                title: "גישה אישית ומותאמת",
                description: "כל משפחה היא ייחודית. אני מתאימה את הליווי לצרכים הספציפיים שלכם ולאישיות הילדים.",
                icon: <Users className="h-8 w-8" />
              },
              {
                title: "למידה מתוך אהבה",
                description: "חינוך טוב מתחיל מקשר חם ובטוח. אני מלמדת כיצד ליצור סביבה של אהבה וגבולות בריאים.",
                icon: <BookOpen className="h-8 w-8" />
              }
            ].map((item, index) => (
              <Card key={index} className="hover:shadow-warm transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-primary" aria-hidden="true">
                      {item.icon}
                    </div>
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-20" aria-labelledby="credentials-heading">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 id="credentials-heading" className="text-4xl font-bold text-primary mb-12 text-center">ההכשרה והניסיון</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold text-primary mb-6 flex items-center gap-2">
                  <Clock className="h-6 w-6" aria-hidden="true" />
                  ניסיון מקצועי
                </h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Users className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span>30 שנות ניסיון בתחום החינוך</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Users className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span>ליווי אישי למשפחות בהתמודדות עם אתגרי ההורות</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Users className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span>ניהול והנחיית קבוצות הורים</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Users className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span>מנהלת מעון יום לגילאי 0–3</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold text-primary mb-6 flex items-center gap-2">
                  <GraduationCap className="h-6 w-6" aria-hidden="true" />
                  השכלה והסמכות
                </h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Award className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span>מוסמכת כמנחת קבוצות הורים בשיטת ההורות</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Award className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span>מוסמכת כמדריכת הורים בשיטת ההורות</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Award className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span>בוגרת קורס השתלמות מקצועית בגמילה מחיתולים</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Award className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span>בוגרת קורס השתלמות מקצועית בתחום הפרעות קשב וריכוז</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground" aria-labelledby="cta-heading">
        <div className="container mx-auto px-4 text-center">
          <h2 id="cta-heading" className="text-4xl font-bold mb-6">מעוניינים לקבל ליווי מקצועי?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            אשמח להכיר אתכם ולשמוע על האתגרים שלכם. השיחה הראשונה נועדה לתיאום ציפיות והיכרות, ואינה מחייבת או כוללת ייעוץ מקצועי
          </p>
          <div className="text-lg opacity-90">
            <p className="mb-2">לתיאום שיחת התאמה:</p>
            <p className="font-semibold">052-288-0109 | אינה פרץ</p>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
      <AccessibilityWidget />
    </div>
  );
};

export default About;