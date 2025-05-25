import { AnimatedSpan, Terminal, TypingAnimation } from "../magicui/terminal";

export function TerminalHero() {
  return (
    <Terminal>
      <TypingAnimation className="text-xl sm:text-4xl" duration={80}>
        &gt; npm run my-portfolio!!
      </TypingAnimation>

      <AnimatedSpan delay={2500} className="text-green-500">
        <span>✔ Verifying framework. Found Next.js.</span>
      </AnimatedSpan>

      <AnimatedSpan delay={2600} className="text-green-500">
        <span>✔ Validating Tailwind CSS.</span>
      </AnimatedSpan>

      <AnimatedSpan delay={2700} className="text-green-500">
        <span>✔ Validating import alias.</span>
      </AnimatedSpan>

      <AnimatedSpan delay={2800} className="text-green-500">
        <span>✔ Writing components.json.</span>
      </AnimatedSpan>

      <AnimatedSpan delay={2900} className="text-green-500">
        <span>✔ Checking registry.</span>
      </AnimatedSpan>

      <AnimatedSpan delay={3000} className="text-green-500">
        <span>✔ Updating tailwind.config.ts</span>
      </AnimatedSpan>

      <AnimatedSpan delay={3100} className="text-green-500">
        <span>✔ Updating app/globals.css</span>
      </AnimatedSpan>

      <AnimatedSpan delay={3500} className="text-green-500">
        <span>✔ Installing dependencies.</span>
      </AnimatedSpan>

      <AnimatedSpan delay={3600} className="text-blue-500">
        <span>ℹ Updated 1 file:</span>
        <span className="pl-2">- lib/utils.ts</span>
      </AnimatedSpan>

      <TypingAnimation delay={3700} className="text-xs text-muted-foreground">
        Success! Project initialization completed.
      </TypingAnimation>

      <TypingAnimation
        delay={3800}
        className=" text-muted-foreground text-sm sm:text-xl"
      >
        Welcome to my portfolio website!😁
      </TypingAnimation>
    </Terminal>
  );
}
