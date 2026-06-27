import {
  CheckCircle2,
  Server,
  Globe,
  Shield,
  Wrench,
  LayoutTemplate,
  ArrowRight,
  XCircle,
  Check,
  MessageCircle,
  Copy,
  Send,
} from "lucide-react";
import { motion, useScroll, useSpring, AnimatePresence } from "motion/react";
import SavingsCalculator from "./components/SavingsCalculator";
import Chat from "./components/Chat";
import ScheduleCall from "./components/ScheduleCall";
import { useState } from "react";

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const [isAnnual, setIsAnnual] = useState(false);
  const [copied, setCopied] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [emailError, setEmailError] = useState("");

  const handleCopy = () => {
    navigator.clipboard.writeText("hello@webbanao.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError("Please enter a valid email address.");
      return;
    }
    setEmailError("");
    setIsSubscribed(true);
    setEmail("");
    setTimeout(() => setIsSubscribed(false), 3000);
  };

  return (
    <div className="min-h-screen bg-slate-100 font-sans text-slate-900 p-4 md:p-8 flex flex-col gap-6 relative">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-indigo-600 origin-left z-[100]"
        style={{ scaleX }}
      />
      {/* Navbar */}
      <nav className="flex justify-between items-center px-4 bg-white/50 backdrop-blur-md rounded-full shadow-sm border border-slate-200 py-3">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center">
            <div className="w-5 h-5 border-2 border-white rounded-sm"></div>
          </div>
          <span className="text-2xl font-bold text-indigo-900 tracking-tight">
            WebBanao
          </span>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="#pricing"
            className="bg-indigo-600 text-white px-5 py-2.5 rounded-full font-bold shadow-lg shadow-indigo-200 hover:bg-indigo-700 transition-colors"
          >
            Start Now
          </a>
        </div>
      </nav>

      <main className="grid grid-cols-1 md:grid-cols-12 gap-6 flex-grow">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="md:col-span-12 lg:col-span-7 bg-white rounded-[2rem] p-8 md:p-10 shadow-sm border border-slate-200 flex flex-col justify-center relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <div className="w-32 h-32 border-[12px] border-indigo-600 rounded-full"></div>
          </div>
          <div className="relative z-10">
            <div className="inline-block mb-4 px-3 py-1 rounded border border-indigo-100 text-indigo-600 font-bold text-xs uppercase tracking-widest bg-indigo-50">
              Specially Designed for Indian Local Businesses 🇮🇳
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-extrabold tracking-tight mb-4 leading-tight text-slate-900">
              Ab Apne Business Ko Online Le Jao,{" "}
              <br className="hidden md:block" />
              <span className="text-indigo-600">Bina Lakho Kharch Kiye!</span>
            </h1>
            <p className="text-lg text-slate-500 max-w-md mb-8">
              Sirf ₹799/month mein pao ek premium, fast aur secure website.{" "}
              <br className="hidden md:block" />
              Na koi setup fee, na koi coding ka jhanjhat.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center text-green-600 text-xs font-bold">
                  ✔
                </div>
                <span className="font-semibold text-slate-700">
                  Free Domain & Hosting
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center text-green-600 text-xs font-bold">
                  ✔
                </div>
                <span className="font-semibold text-slate-700">
                  Secure SSL Certificate
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center text-green-600 text-xs font-bold">
                  ✔
                </div>
                <span className="font-semibold text-slate-700">
                  Monthly Maintenance
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center text-green-600 text-xs font-bold">
                  ✔
                </div>
                <span className="font-semibold text-slate-700">
                  Unlimited Layout Support
                </span>
              </div>
            </div>

            <a
              href="#pricing"
              className="w-fit inline-flex items-center gap-2 bg-indigo-600 text-white px-10 py-4 rounded-2xl font-bold text-xl hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-200 hover:scale-105"
            >
              Apni Website Banwao <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </motion.section>

        {/* Comparison Table Section (Pricing style) */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
          className="md:col-span-12 lg:col-span-5 bg-indigo-900 rounded-[2rem] p-8 text-white flex flex-col justify-between border border-indigo-800 shadow-xl relative overflow-hidden"
          id="pricing"
        >
          <div className="space-y-6 relative z-10">
            <div>
              <h2 className="text-3xl font-display font-bold mb-2">
                Zyaada Paise Kyun Dena?
              </h2>
              <div className="flex justify-between items-center mt-2">
                <p className="text-indigo-200 text-sm">
                  Market Price vs Humara Plan
                </p>

                {/* Billing Toggle */}
                <div className="flex items-center gap-2 bg-indigo-950/50 p-1 rounded-full border border-indigo-500/30">
                  <button
                    onClick={() => setIsAnnual(false)}
                    className={`px-3 py-1 rounded-full text-xs font-bold transition-colors ${!isAnnual ? "bg-indigo-600 text-white" : "text-indigo-300 hover:text-white"}`}
                  >
                    Monthly
                  </button>
                  <button
                    onClick={() => setIsAnnual(true)}
                    className={`px-3 py-1 rounded-full text-xs font-bold transition-colors flex items-center gap-1 ${isAnnual ? "bg-indigo-600 text-white" : "text-indigo-300 hover:text-white"}`}
                  >
                    Annual{" "}
                    <span className="bg-yellow-400 text-indigo-900 px-1.5 py-0.5 rounded text-[9px] uppercase tracking-wider ml-1">
                      Save 17%
                    </span>
                  </button>
                </div>
              </div>
            </div>

            <div className="space-y-3 pt-4">
              <div className="flex justify-between items-center p-4 bg-white/10 rounded-xl border border-white/5">
                <span className="text-slate-300">Regular Agency (Upfront)</span>
                <span className="font-bold line-through text-red-400">
                  ₹15,000+
                </span>
              </div>
              <div className="flex justify-between items-center p-4 bg-white/10 rounded-xl border border-white/5">
                <span className="text-slate-300">
                  Domain & Hosting (Yearly)
                </span>
                <span className="font-bold line-through text-red-400">
                  ₹3,000+
                </span>
              </div>
              <div className="flex justify-between items-center p-5 bg-indigo-600 rounded-xl border border-white/20 shadow-lg">
                <span className="font-bold uppercase tracking-widest text-[10px] bg-white/20 px-2 py-1 rounded text-white">
                  Our Offer
                </span>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={isAnnual ? "annual" : "monthly"}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    className="font-bold text-2xl text-white"
                  >
                    {isAnnual ? "₹7,999 / yr" : "₹799 / mo"}
                  </motion.span>
                </AnimatePresence>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-indigo-800/50 flex flex-col gap-2">
              <div className="flex justify-between text-sm">
                <span className="text-indigo-200">Setup Cost</span>
                <span className="text-green-400 font-bold">₹0 (ZERO)</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-indigo-200">
                  Maintenance & Content Updates
                </span>
                <span className="text-green-400 font-bold">Included</span>
              </div>
            </div>

            <SavingsCalculator isAnnual={isAnnual} />
          </div>

          <div className="mt-6 pt-6 border-t border-indigo-800/50 flex justify-center gap-6 relative z-10">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-green-400" />
              <span className="text-xs font-medium text-indigo-100">
                Secure Payment
              </span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-400" />
              <span className="text-xs font-medium text-indigo-100">
                No Hidden Fees
              </span>
            </div>
          </div>

          <p className="text-xs text-indigo-300 italic opacity-60 text-center mt-4 relative z-10">
            *Cancel anytime. No questions asked.
          </p>
        </motion.section>

        {/* How It Works Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
          className="md:col-span-12 lg:col-span-4 bg-white rounded-[2rem] p-8 shadow-sm border border-slate-200 flex flex-col"
        >
          <h3 className="text-xl font-bold mb-6 text-indigo-900">
            Kaise Shuru Karein?
          </h3>
          <p className="text-sm text-slate-500 mb-6">
            Aapko bas apna business chalana hai, technical kaam hum sambhalenge.
          </p>

          <div className="space-y-6 flex-grow">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-slate-100 text-indigo-600 rounded-full flex items-center justify-center font-bold text-lg">
                1
              </div>
              <div>
                <p className="font-bold text-slate-900">
                  Humein Apni Requirement Batao
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  Apne business ki details, logo aur photos WhatsApp par share
                  karein.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-slate-100 text-indigo-600 rounded-full flex items-center justify-center font-bold text-lg">
                2
              </div>
              <div>
                <p className="font-bold text-slate-900">Hum Design Karenge</p>
                <p className="text-xs text-slate-500 mt-1">
                  Humari team aapke brand ke hisaab se modern website banayegi.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-slate-100 text-indigo-600 rounded-full flex items-center justify-center font-bold text-lg">
                3
              </div>
              <div>
                <p className="font-bold text-slate-900">
                  Website Live & Maintenance
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  Speed, security aur regular updates ka dhyaan hum rakhenge.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* What's Included Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
          className="md:col-span-12 lg:col-span-4 bg-white rounded-[2rem] p-8 shadow-sm border border-slate-200 flex flex-col"
        >
          <h3 className="text-xl font-bold mb-6 text-indigo-900">
            Sab Kuch Milega
          </h3>
          <p className="text-sm text-slate-500 mb-6">
            ₹799/Month mein ek complete package.
          </p>

          <div className="grid grid-cols-2 gap-3 flex-grow mb-6">
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
              <Globe className="w-5 h-5 text-indigo-500 mb-2" />
              <p className="text-[10px] text-indigo-600 font-bold uppercase mb-1">
                Domain
              </p>
              <p className="text-sm font-bold text-slate-900">.com / .in</p>
            </div>
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
              <Server className="w-5 h-5 text-indigo-500 mb-2" />
              <p className="text-[10px] text-indigo-600 font-bold uppercase mb-1">
                Hosting
              </p>
              <p className="text-sm font-bold text-slate-900">Ultra Fast</p>
            </div>
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
              <Shield className="w-5 h-5 text-indigo-500 mb-2" />
              <p className="text-[10px] text-indigo-600 font-bold uppercase mb-1">
                Security
              </p>
              <p className="text-sm font-bold text-slate-900">
                SSL Certificate
              </p>
            </div>
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
              <LayoutTemplate className="w-5 h-5 text-indigo-500 mb-2" />
              <p className="text-[10px] text-indigo-600 font-bold uppercase mb-1">
                Support
              </p>
              <p className="text-sm font-bold text-slate-900">2 Edits/Mo</p>
            </div>
          </div>

          <div className="p-4 bg-green-50 rounded-2xl border border-green-100">
            <p className="text-xs font-semibold text-green-700 italic">
              "Local businesses ke liye best deal! Gyms, Cafes, aur Shops ke
              liye perfect."
            </p>
          </div>
        </motion.section>

        {/* FAQ Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
          className="md:col-span-12 lg:col-span-4 bg-white rounded-[2rem] p-8 shadow-sm border border-slate-200 flex flex-col justify-between"
          id="faqs"
        >
          <div>
            <h3 className="text-xl font-bold mb-4 text-indigo-900">
              Aapke Sawal (FAQs)
            </h3>

            <div className="space-y-4 mt-6">
              <div className="group">
                <p className="font-bold text-sm text-slate-900">
                  Coding aani chahiye kya?
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  Bilkul nahi! Hum saara tech sambhaal lenge. Aapko coding ki
                  ABC bhi aane ki zaroorat nahi hai.
                </p>
              </div>
              <div className="h-[1px] bg-slate-100"></div>
              <div className="group">
                <p className="font-bold text-sm text-slate-900">
                  Photos update kaise hogi?
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  Bas WhatsApp karein! 2 major edits per month included hain
                  bina extra charge ke.
                </p>
              </div>
              <div className="h-[1px] bg-slate-100"></div>
              <div className="group">
                <p className="font-bold text-sm text-slate-900">
                  Cancel kiya toh?
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  Koi fine ya lock-in period nahi. Jab chahe stop kar sakte
                  hain, khushi khushi.
                </p>
              </div>
              <div className="h-[1px] bg-slate-100"></div>
              <div className="group">
                <p className="font-bold text-sm text-slate-900">
                  Koi extra charge hai?
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  Nahi, ₹799/month flat fee hai jisme hosting, domain aur
                  maintenance sab included hai.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center gap-2 text-indigo-600 font-bold text-xs uppercase tracking-widest cursor-pointer hover:text-indigo-800 transition-colors">
            <span>Contact Support</span>
            <span>→</span>
          </div>
        </motion.section>

        {/* CTA Footer */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
          className="col-span-1 md:col-span-12 bg-yellow-400 rounded-[2rem] p-10 md:p-16 text-center border border-yellow-500/30 shadow-lg relative overflow-hidden"
        >
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-display font-black text-slate-900 mb-6 tracking-tight">
              Apne Business Ko Bada Banane Ka Sahi Waqt Aa Gaya Hai!
            </h2>
            <p className="text-xl text-slate-800 mb-10 font-medium">
              Aaj hi apni website book karein sirf ₹799/month mein. Limited time
              offer.
            </p>
            <button className="bg-slate-900 text-white px-10 py-5 rounded-2xl font-bold text-xl hover:bg-slate-800 transition-all shadow-xl hover:scale-105 flex items-center gap-3 mx-auto">
              Haan, Mujhe Website Banwani Hai <ArrowRight className="w-6 h-6" />
            </button>
          </div>
        </motion.section>
      </main>

      {/* Footer minimal */}
      <footer className="py-12 px-4 text-center text-slate-500 font-medium text-sm flex flex-col items-center justify-center gap-8 bg-white mt-8 rounded-[2rem] shadow-sm border border-slate-200">
        {/* Newsletter Signup */}
        <div className="w-full max-w-md">
          <h4 className="text-lg font-bold text-slate-800 mb-2">
            Stay Updated
          </h4>
          <p className="text-slate-500 mb-6">
            Subscribe to our newsletter for business tips and exclusive offers.
          </p>

          <form onSubmit={handleSubscribe} className="relative">
            <div className="flex gap-2 relative z-10">
              <input
                type="text"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setEmailError("");
                }}
                className={`flex-grow px-4 py-3 rounded-xl border ${emailError ? "border-red-400 focus:ring-red-400" : "border-slate-200 focus:border-indigo-400 focus:ring-indigo-400"} bg-slate-50 outline-none focus:ring-2 focus:ring-opacity-50 transition-all`}
                disabled={isSubscribed}
              />
              <button
                type="submit"
                disabled={isSubscribed}
                className={`px-6 py-3 rounded-xl font-bold flex items-center gap-2 transition-colors ${
                  isSubscribed
                    ? "bg-green-500 text-white"
                    : "bg-indigo-600 hover:bg-indigo-700 text-white"
                }`}
              >
                {isSubscribed ? (
                  <CheckCircle2 className="w-5 h-5" />
                ) : (
                  <Send className="w-5 h-5" />
                )}
              </button>
            </div>
            <AnimatePresence>
              {emailError && (
                <motion.p
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="text-red-500 text-xs font-semibold text-left mt-2 absolute -bottom-6 left-1"
                >
                  {emailError}
                </motion.p>
              )}
            </AnimatePresence>
            <AnimatePresence>
              {isSubscribed && (
                <motion.p
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="text-green-600 text-xs font-semibold text-left mt-2 absolute -bottom-6 left-1"
                >
                  Thanks for subscribing!
                </motion.p>
              )}
            </AnimatePresence>
          </form>
        </div>

        <div className="w-full h-px bg-slate-100 max-w-2xl mx-auto"></div>

        <div className="flex flex-col items-center gap-4">
          <div className="relative">
            <button
              onClick={handleCopy}
              className="flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-full transition-colors"
            >
              <Copy className="w-4 h-4" />
              <span className="font-bold">hello@webbanao.com</span>
            </button>

            <AnimatePresence>
              {copied && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-lg pointer-events-none"
                >
                  Copied!
                  {/* Arrow */}
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 border-l-4 border-r-4 border-t-4 border-transparent border-t-slate-800" />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <p>
            © {new Date().getFullYear()} WebBanao. Specially made for Indian
            Businesses.
          </p>
        </div>
      </footer>

      {/* Chatbot */}
      <Chat />

      {/* Schedule Call */}
      <ScheduleCall />

      {/* WhatsApp Floating Action Button */}
      <a
        href="https://wa.me/919876543210?text=Hello%20WebBanao!%20I'm%20interested%20in%20the%20%E2%82%B9799/month%20website%20plan."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 left-4 sm:left-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </div>
  );
}
