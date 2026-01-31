import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Is this really anonymous? How does it work?",
      answer: "Yes, completely. When you join, we assign you a random username and avatar. We never ask for your real name, email, phone number, or any personal information. There's no way to link your profile to your real identity."
    },
    {
      question: "Is it free? Are there any hidden costs?",
      answer: "It's 100% free, forever. No premium plans, no hidden fees, no ads. We believe everyone deserves access to support, regardless of their financial situation."
    },
    {
      question: "What kinds of challenges can I join?",
      answer: "We have challenges for all recovery journeys: addiction (alcohol, drugs, gambling, pornography), mental health (anxiety, depression, loneliness), and positive habits (exercise, gratitude, meditation). You can also create custom challenges for your specific goals."
    },
    {
      question: "Can other users find out who I am?",
      answer: "No. Your posts, comments, and profile are completely anonymous. Even we don't know who you are. The platform is designed specifically for safe, judgment-free sharing."
    },
    {
      question: "How do streaks and challenges work?",
      answer: "When you join a challenge, you check in daily to build your streak. Missing a day resets your current streak, but your longest streak is always saved. You'll see milestones at 7, 30, and 90 days with special celebrations!"
    },
    {
      question: "What if I relapse or have a bad day?",
      answer: "That's okay—recovery isn't linear. The community is here to support you, not judge you. Share what you're going through, and you'll find people who understand and want to help you get back on track."
    },
    {
      question: "Can I connect with specific users?",
      answer: "The platform is designed to be community-focused rather than DM-focused. You interact through public posts and comments. This keeps everyone accountable and allows more people to benefit from the support shared."
    },
    {
      question: "Is this a replacement for professional help?",
      answer: "No. This is a peer support community—a supplement to, not a replacement for, professional treatment, therapy, or medical care. If you're in crisis, please reach out to a professional or emergency service."
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-card/20">
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-section">
          <div className="inline-block px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 mb-4">
            <span className="text-secondary font-semibold text-sm">FAQ</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Questions? We've Got Answers.
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about how the platform works.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="animate-section"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className={cn(
                  "w-full text-left p-6 rounded-2xl border transition-all",
                  openIndex === index
                    ? "bg-card border-primary/50 shadow-elevated"
                    : "bg-card/50 border-border hover:border-primary/30"
                )}
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-lg font-semibold pr-8">{faq.question}</h3>
                  <ChevronDown
                    className={cn(
                      "w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform",
                      openIndex === index && "rotate-180 text-primary"
                    )}
                  />
                </div>
                <div
                  className={cn(
                    "overflow-hidden transition-all",
                    openIndex === index ? "max-h-96 mt-4" : "max-h-0"
                  )}
                >
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </button>
            </div>
          ))}
        </div>

        {/* Still have questions CTA */}
        <div className="text-center mt-16 animate-section">
          <p className="text-muted-foreground mb-4">Still have questions?</p>
          <a
            href="mailto:support@kindredpath.com"
            className="text-primary hover:underline font-semibold"
          >
            Contact our support team
          </a>
        </div>
      </div>
    </section>
  );
}
