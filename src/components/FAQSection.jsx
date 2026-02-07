import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

export default function FAQSection() {
  const [open, setOpen] = useState(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const faqs = [
    {
      question: "Is candidate data secure?",
      answer:
        "Yes. RecruiterAI uses industry-standard security practices including data encryption, role-based access controls, and secure cloud infrastructure. All candidate information is stored and processed in compliance with privacy regulations such as GDPR and other applicable data protection laws. Only authorized users can access sensitive data.",
    },
    {
      question: "Does RecruiterAI integrate with our existing ATS?",
      answer:
        "Absolutely. RecruiterAI is designed to integrate with most major Applicant Tracking Systems through APIs and built-in connectors. This allows you to sync candidate data, job postings, and hiring workflows without disrupting your current processes.",
    },
    {
      question: "What’s the pricing structure?",
      answer:
        "Pricing is based on your hiring volume and required features. We offer flexible plans ranging from basic usage for small teams to enterprise packages with advanced analytics and automation. You only pay for what you actually use—no hidden fees.",
    },
    {
      question: "How long does setup take?",
      answer:
        "Setup is fast. Most organizations are up and running within 24–48 hours. Even for enterprise integrations, full deployment typically takes less than a week depending on system complexity and customization needs.",
    },
    {
      question: "What kind of support is provided?",
      answer:
        "We provide full onboarding assistance, documentation, and dedicated customer support. Depending on your plan, you’ll have access to email support, live chat, and account managers to ensure smooth implementation and ongoing success.",
    },
  ];

  return (
    <section
      ref={ref}
      className="relative overflow-hidden py-24 px-6"
      style={{
        background: "radial-gradient(circle at center, #2a2a2a 0%, #000000 85%)",
      }}
    >
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-white text-3xl font-semibold"
        >
          Frequently Asked Questions
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
          className="mt-3 text-gray-300"
        >
          Everything you need to know about RecruiterAI
        </motion.p>

        <div className="mt-10 space-y-4">
          {faqs.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: -30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 1.2,
                ease: "easeOut",
                delay: 0.4 + index * 0.25,
              }}
              className="text-left"
            >
              <button
                onClick={() =>
                  setOpen(open === index ? null : index)
                }
                className="
                  w-full
                  bg-[#2b2b2b]
                  text-white
                  px-6
                  py-4
                  flex
                  justify-between
                  items-center
                  rounded-sm
                  hover:bg-[#323232]
                  transition
                "
              >
                <span className="text-base">{item.question}</span>

                <motion.span
                  animate={{
                    rotate: open === index ? 180 : 0,
                  }}
                  transition={{ duration: 0.35 }}
                  className="text-gray-400"
                >
                  ▼
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {open === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{
                      duration: 0.45,
                      ease: "easeInOut",
                    }}
                    className="bg-[#242424] px-6 py-4 text-gray-300 text-sm leading-relaxed"
                  >
                    {item.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}