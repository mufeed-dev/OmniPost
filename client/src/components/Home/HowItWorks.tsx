import { ArrowRightIcon, CheckCircleIcon } from "lucide-react";

const steps = [
    { step: "01", title: "Connect Your Accounts", description: "Link your social profiles in seconds. We support Twitter, LinkedIn, Facebook, and Instagram." },
    { step: "02", title: "Create or Generate Content", description: "Write your own post or let our AI craft a caption and image based on your prompt." },
    { step: "03", title: "Schedule & Publish", description: "Pick a time, select your platforms, and hit schedule. We handle publishing automatically." },
];

export default function HowItWorks() {
    return (
        <section id="how-it-works" className="py-24 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6">
                <div className="text-center mb-16">
                    <div className="mb-6 inline-flex items-center gap-1.5 bg-purple-500/10 border border-purple-500/15 text-purple-600 dark:text-purple-400 text-[11px] font-medium tracking-[0.06em] uppercase px-3.5 py-1.5 rounded-full">
                        <CheckCircleIcon className="size-3" />
                        Simple setup
                    </div>
                    <h2 className="font-serif font-medium text-4xl sm:text-5xl leading-tight text-gray-900">
                        Up and running in <span className="bg-linear-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent font-semibold italic">minutes</span>
                    </h2>
                    <p className="mt-5 text-slate-500 dark:text-slate-400 text-base sm:text-lg font-normal leading-relaxed max-w-lg mx-auto tracking-wide">No complicated onboarding, no steep learning curve. Just connect, create, and grow.</p>
                </div>

                <div className="space-y-6">
                    {steps.map((s, i) => (
                        <div key={s.step} className="flex gap-6 items-start">
                            <div className="shrink-0 size-12 rounded-2xl bg-purple-50 border border-purple-100 dark:bg-purple-950/20 dark:border-purple-900/30 flex items-center justify-center">
                                <span className="text-sm font-medium text-purple-600 dark:text-purple-400">{s.step}</span>
                            </div>
                            <div className="pt-1">
                                <h3 className=" text-slate-900 mb-1">{s.title}</h3>
                                <p className="text-slate-500 dark:text-slate-400 text-sm sm:text-base leading-relaxed">{s.description}</p>
                            </div>
                            {i < steps.length - 1 && (
                                <div className="hidden sm:block ml-auto shrink-0 self-center">
                                    <ArrowRightIcon className="size-4 text-slate-200" />
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
