import React, { useState, useEffect } from 'react';
import { Accessibility, Plus, Minus, Eye, EyeOff, Palette, Link2, Keyboard } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface AccessibilitySettings {
  fontSize: number;
  contrast: 'normal' | 'high' | 'inverted';
  linksHighlighted: boolean;
  keyboardNavigation: boolean;
}

const AccessibilityWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>({
    fontSize: 100,
    contrast: 'normal',
    linksHighlighted: false,
    keyboardNavigation: false,
  });

  // Load settings from localStorage on mount
  useEffect(() => {
    const savedSettings = localStorage.getItem('accessibility-settings');
    if (savedSettings) {
      setSettings(JSON.parse(savedSettings));
    }
  }, []);

  // Apply settings to document
  useEffect(() => {
    applySettings(settings);
    localStorage.setItem('accessibility-settings', JSON.stringify(settings));
  }, [settings]);

  const applySettings = (newSettings: AccessibilitySettings) => {
    const root = document.documentElement;
    
    // Font size
    root.style.fontSize = `${newSettings.fontSize}%`;
    
    // Contrast
    root.classList.remove('accessibility-high-contrast', 'accessibility-inverted');
    if (newSettings.contrast === 'high') {
      root.classList.add('accessibility-high-contrast');
    } else if (newSettings.contrast === 'inverted') {
      root.classList.add('accessibility-inverted');
    }
    
    // Links highlighting
    root.classList.toggle('accessibility-highlight-links', newSettings.linksHighlighted);
    
    // Keyboard navigation
    root.classList.toggle('accessibility-keyboard-nav', newSettings.keyboardNavigation);
  };

  const updateSettings = (partial: Partial<AccessibilitySettings>) => {
    setSettings(prev => ({ ...prev, ...partial }));
  };

  const increaseFontSize = () => {
    if (settings.fontSize < 150) {
      updateSettings({ fontSize: settings.fontSize + 10 });
    }
  };

  const decreaseFontSize = () => {
    if (settings.fontSize > 80) {
      updateSettings({ fontSize: settings.fontSize - 10 });
    }
  };

  const resetSettings = () => {
    const defaultSettings: AccessibilitySettings = {
      fontSize: 100,
      contrast: 'normal',
      linksHighlighted: false,
      keyboardNavigation: false,
    };
    setSettings(defaultSettings);
  };

  return (
    <>
      {/* Floating Button */}
      <div className="fixed left-4 bottom-20 z-50">
        <Button
          variant="outline"
          size="icon"
          className="h-12 w-12 rounded-full bg-primary text-primary-foreground border-primary hover:bg-primary/90 shadow-lg"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="פתיחת תפריט נגישות"
        >
          <Accessibility className="h-6 w-6" />
        </Button>
      </div>

      {/* Accessibility Panel */}
      {isOpen && (
        <div className="fixed left-4 bottom-36 z-50 w-80">
          <Card className="shadow-xl border-2">
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">אפשרויות נגישות</CardTitle>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(false)}
                  aria-label="סגירת תפריט נגישות"
                >
                  <EyeOff className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Font Size Controls */}
              <div className="space-y-2">
                <h4 className="font-medium flex items-center gap-2">
                  <Eye className="h-4 w-4" />
                  גודל טקסט ({settings.fontSize}%)
                </h4>
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={decreaseFontSize}
                    disabled={settings.fontSize <= 80}
                    aria-label="הקטנת טקסט"
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <div className="flex-1 text-center text-sm">
                    {settings.fontSize}%
                  </div>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={increaseFontSize}
                    disabled={settings.fontSize >= 150}
                    aria-label="הגדלת טקסט"
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Contrast Controls */}
              <div className="space-y-2">
                <h4 className="font-medium flex items-center gap-2">
                  <Palette className="h-4 w-4" />
                  ניגודיות
                </h4>
                <div className="grid grid-cols-3 gap-2">
                  <Button
                    variant={settings.contrast === 'normal' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => updateSettings({ contrast: 'normal' })}
                    aria-label="ניגודיות רגילה"
                  >
                    רגיל
                  </Button>
                  <Button
                    variant={settings.contrast === 'high' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => updateSettings({ contrast: 'high' })}
                    aria-label="ניגודיות גבוהה"
                  >
                    גבוה
                  </Button>
                  <Button
                    variant={settings.contrast === 'inverted' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => updateSettings({ contrast: 'inverted' })}
                    aria-label="ניגודיות הפוכה"
                  >
                    הפוך
                  </Button>
                </div>
              </div>

              {/* Links Highlighting */}
              <div className="space-y-2">
                <h4 className="font-medium flex items-center gap-2">
                  <Link2 className="h-4 w-4" />
                  הדגשת קישורים
                </h4>
                <Button
                  variant={settings.linksHighlighted ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => updateSettings({ linksHighlighted: !settings.linksHighlighted })}
                  className="w-full"
                  aria-label={settings.linksHighlighted ? 'ביטול הדגשת קישורים' : 'הדגשת קישורים'}
                >
                  {settings.linksHighlighted ? 'בטל הדגשה' : 'הדגש קישורים'}
                </Button>
              </div>

              {/* Keyboard Navigation */}
              <div className="space-y-2">
                <h4 className="font-medium flex items-center gap-2">
                  <Keyboard className="h-4 w-4" />
                  ניווט מקלדת
                </h4>
                <Button
                  variant={settings.keyboardNavigation ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => updateSettings({ keyboardNavigation: !settings.keyboardNavigation })}
                  className="w-full"
                  aria-label={settings.keyboardNavigation ? 'ביטול ניווט מקלדת משופר' : 'הפעלת ניווט מקלדת משופר'}
                >
                  {settings.keyboardNavigation ? 'בטל ניווט משופר' : 'הפעל ניווט משופר'}
                </Button>
              </div>

              {/* Reset Button */}
              <Button
                variant="secondary"
                size="sm"
                onClick={resetSettings}
                className="w-full"
                aria-label="איפוס הגדרות נגישות"
              >
                איפוס הגדרות
              </Button>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
};

export default AccessibilityWidget;