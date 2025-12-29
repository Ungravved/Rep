import { useState } from "react";
import { Loader2, Users, LockKeyhole, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { PASSWORD, FRIENDS } from "@/config";


function LockScreen({ onSuccess }: { onSuccess: () => void }) {
  const [password, setPassword] = useState("");
  const [isPending, setIsPending] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!password) return;
    
    setIsPending(true);
    setTimeout(() => {
      if (password === PASSWORD) {
        onSuccess();
      } else {
        toast({
          title: "Åtkomst nekad",
          description: "Felaktigt lösenord. Försök igen.",
          variant: "destructive",
        });
        setPassword("");
      }
      setIsPending(false);
    }, 300);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center">
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
      <motion.div 
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative z-10 w-full max-w-md p-8 mx-4 glass-panel rounded-3xl border-t border-white/10"
      >
        <div className="flex flex-col items-center text-center space-y-6">
          <div className="p-4 rounded-full bg-primary/10 ring-1 ring-primary/20 text-primary mb-2">
            <LockKeyhole className="w-8 h-8" />
          </div>
          <div className="space-y-2">
            <h1 className="text-3xl tracking-tight text-white font-display">Välkommen in</h1>
            <p className="text-muted-foreground text-sm">Detta är en privat plats för våra vänner. <br/>Vänligen ange lösenordet för att fortsätta.</p>
          </div>
          <form onSubmit={handleSubmit} className="w-full space-y-4">
            <div className="relative group">
              <Input
                type="password"
                placeholder="Ange lösenord..."
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-black/20 border-white/10 h-14 pl-6 text-lg rounded-xl focus:ring-primary/50 transition-all placeholder:text-white/20 text-center tracking-widest"
                autoFocus
              />
            </div>
            <Button 
              type="submit" 
              disabled={isPending || !password}
              className="w-full h-14 text-base font-semibold rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20 transition-all active:scale-[0.98]"
            >
              {isPending ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <>Lås upp <ArrowRight className="ml-2 w-5 h-5" /></>
              )}
            </Button>
          </form>
          <p className="text-xs text-white/30 pt-4">Skyddad åtkomst &copy; {new Date().getFullYear()}</p>
        </div>
      </motion.div>
    </div>
  );
}

interface Friend {
  id: number;
  firstName: string;
  lastName: string;
  bio: string;
  imageUrl: string;
}

function FriendCard({ friend, index }: { friend: Friend; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
    >
      <Card className="group h-full overflow-hidden border-0 bg-secondary/50 hover:bg-secondary/80 transition-all duration-300 hover:shadow-2xl hover:shadow-black/50 hover:-translate-y-1 rounded-2xl">
        <div className="aspect-square w-full overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 z-10" />
          <img
            src={friend.imageUrl || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2864&auto=format&fit=crop"}
            alt={`${friend.firstName} ${friend.lastName}`}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
            <h3 className="text-2xl font-bold text-white font-display tracking-tight mb-1">
              {friend.firstName} <span className="text-primary/90">{friend.lastName}</span>
            </h3>
          </div>
        </div>
        <div className="p-6">
          <p className="text-muted-foreground leading-relaxed text-sm">{friend.bio}</p>
        </div>
      </Card>
    </motion.div>
  );
}

export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  if (!isAuthenticated) {
    return <LockScreen onSuccess={() => setIsAuthenticated(true)} />;
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-background/80 backdrop-blur-xl">
        <div className="container mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
              <Users className="w-5 h-5" />
            </div>
            <h1 className="text-xl font-bold tracking-tight font-display">
              Stenkulas elever
            </h1>
          </div>
          <div className="text-sm font-medium text-muted-foreground hidden sm:block">
            Privat gemenskap
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 md:px-8 py-12 md:py-16">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-2xl mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
            Drängar
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Här är skitkuksugarna och horungarna. Ett gäng värdelösa jävlar som tillsammans förstör allt omkring sig.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {FRIENDS.map((friend, index) => (
            <FriendCard key={friend.id} friend={friend} index={index} />
          ))}
        </div>
      </main>

      <footer className="border-t border-white/5 py-12 mt-12 bg-black/20">
        <div className="container mx-auto px-4 text-center">
          <p className="font-display text-2xl font-bold text-white/20 mb-4">Stenkulas elever</p>
          <p className="text-sm text-muted-foreground/40">
            &copy; {new Date().getFullYear()} En privat webbplats för oss.
          </p>
        </div>
      </footer>
    </div>
  );
}
