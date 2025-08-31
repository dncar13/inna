import { Heart, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary/50 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Services */}
          <div className="text-center md:text-right">
            <h3 className="text-lg font-semibold mb-4 text-primary">שירותים</h3>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>יעוץ הורים אישי</li>
              
              <li>הכנה לגן וביה״ס</li>
              <li>קביעת גבולות בריאים</li>
              <li>פתרון בעיות שינה</li>
              <li>גמילה מטיטולים</li>
              <li>הנחיית קבוצות</li>
              <li>התמודדות עם שינוי קפיצת גיל</li>
              <li>גיל התבגרות</li>
              <li>התמודדות עם התקפי זעם</li>
            </ul>
          </div>

          {/* About */}
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-4 text-primary">אינה פרץ</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              מנחת הורים מוסמכת, בעלת ניסיון עשיר ורב־שנים בתחום החינוך, הליווי המשפחתי והדרכת ההורים.
              מלווה הורים וילדים בתהליכי צמיחה, חיזוק גבולות ובניית ביטחון עצמי
            </p>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4 text-primary">יצירת קשר</h3>
            <div className="space-y-2">
              <div className="flex items-center justify-center md:justify-end gap-2">
                <span className="text-muted-foreground">052-288-0109</span>
                <Phone className="h-4 w-4 text-primary" />
              </div>
              <div className="flex items-center justify-center md:justify-end gap-2">
                <span className="text-muted-foreground">inaper73@gmail.com</span>
                <Mail className="h-4 w-4 text-primary" />
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground flex items-center justify-center space-x-1">
            <span>נבנה באהבה על ידי</span>
            <a 
              href="https://wa.me/972503977708?text=שלום%20גילה%2C%20ראיתי%20את%20האתר%20שלך%20ורציתי%20לשאול%20שאלה"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 underline font-medium"
              aria-label="צור קשר עם גילה פוגודין בווטסאפ"
            >
              גילה פוגודין
            </a>
            <span>❤️</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;