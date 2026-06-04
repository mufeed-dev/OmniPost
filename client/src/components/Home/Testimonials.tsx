import { StarIcon } from "lucide-react";

const testimonials = [
  {
    name: "Sophia",
    role: "Influencer",
    avatar: "S",
    avatarBg: "from-violet-400 to-purple-500",
    text: "OmniPost has saved my team 10+ hours a week. The AI composer is genuinely impressive — it writes content that sounds like us.",
  },
  {
    name: "Anil Kumar",
    role: "Marketing Manager",
    avatar: "A",
    avatarBg: "from-purple-400 to-indigo-400",
    text: "Best AI writer I have tried. The content sounds natural and human. I would recommend this to all my friends. The UI is also very clean and easy to use. Highly recommended.",
  },
  {
    name: "Lia",
    role: "Startup Founder",
    avatar: "L",
    avatarBg: "from-sky-400 to-blue-500",
    text: "Best in class features and the UI is super clean and easy to use. Highly recommended to everyone. OmniPost is a game-changer for me.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <div className="mb-6 inline-flex items-center gap-1.5 bg-purple-500/10 border border-purple-500/15 text-purple-600 dark:text-purple-400 text-[11px] font-medium tracking-[0.06em] uppercase px-3.5 py-1.5 rounded-full">
            <StarIcon className="size-3 " />
            Testimonials
          </div>
          <h2 className="font-serif font-medium text-4xl sm:text-5xl leading-tight text-gray-900">
            Loved by{" "}
            <span className="bg-linear-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent font-semibold">
              creators &amp; teams
            </span>
          </h2>
          <p className="mt-5 text-slate-500 dark:text-slate-400 text-base sm:text-lg font-normal leading-relaxed max-w-md mx-auto tracking-wide">
            Join thousands of people who automate their social media with
            OmniPost.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-slate-100 hover:border-slate-200 hover:shadow-lg hover:shadow-slate-100 p-6 transition-all flex flex-col gap-4"
            >
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed flex-1">
                "{t.text}"
              </p>
              <div className="flex items-center gap-3 pt-2 border-t border-slate-100">
                <div
                  className={`size-9 rounded-full bg-linear-to-br ${t.avatarBg} flex items-center justify-center text-white text-sm font-bold shrink-0`}
                >
                  {t.avatar}
                </div>
                <div>
                  <div className="text-sm font-medium text-slate-900">
                    {t.name}
                  </div>
                  <div className="text-xs text-slate-400">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
