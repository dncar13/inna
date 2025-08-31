import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppButton = () => {
  const phoneNumber = "972522880109"; // Eina's actual WhatsApp number
  const message = encodeURIComponent("שלום אינה, אני מעוניין/ת ליעוץ הורים");

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 animate-gentle-bounce"
    >
      <Button variant="whatsapp" size="icon" className="h-14 w-14 rounded-full shadow-lg">
        <MessageCircle className="h-6 w-6" />
      </Button>
    </a>
  );
};

export default WhatsAppButton;