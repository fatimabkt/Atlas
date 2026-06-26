type Props = {
  eyebrow: string;
  title: string;
  description?: string;
  image: string;
};

export default function PageHero({ eyebrow, title, description, image }: Props) {
  return (
    <section className="relative h-[58vh] min-h-[420px] w-full overflow-hidden flex items-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${image}')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-deep/75 via-indigo-deep/55 to-indigo-deep/90" />
      <div className="absolute inset-0 zellij-bg opacity-[0.05]" />

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <span className="text-gold text-xs font-semibold tracking-[0.25em] uppercase">
          {eyebrow}
        </span>
        <h1 className="font-display text-cream text-shadow-soft text-4xl sm:text-5xl lg:text-6xl mt-4 leading-tight">
          {title}
        </h1>
        {description && (
          <p className="text-cream/80 mt-5 max-w-xl mx-auto leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
