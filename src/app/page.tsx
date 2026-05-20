import Image from "next/image";
import Link from "next/link";
import { Bubbles } from "@/components/Bubbles";
import { SectionDivider } from "@/components/SectionDivider";
import { ListenCTA, ListenPlaceholder } from "@/components/ListenCTA";
import { img } from "@/lib/assets";

export default function HomePage() {
  return (
    <>
      <section className="relative isolate overflow-hidden">
        <div aria-hidden className="absolute inset-0 -z-10 ocean-grain">
          <div className="absolute inset-0 bg-ocean-radial" />
          <div className="absolute -top-32 right-[-10%] h-[80vh] w-[80vh] rounded-full bg-brass-500/15 blur-3xl" />
          <div className="absolute bottom-[-20%] left-[-10%] h-[60vh] w-[60vh] rounded-full bg-accent-cyan/10 blur-3xl" />
        </div>
        <Bubbles count={16} />
        <div className="relative z-10 mx-auto grid max-w-6xl gap-10 px-5 pt-32 pb-24 sm:pt-40 md:grid-cols-[1.05fr_0.95fr] md:items-center md:gap-14">
          <div className="text-left">
            <p className="reveal font-script text-3xl text-amber-glow drop-shadow">
              et dansk AI-band & fortælleunivers
            </p>
            <h1 className="reveal mt-2 font-display text-6xl leading-[1.02] sm:text-7xl md:text-8xl">
              <span className="text-brass">Kronisk Syg</span>
            </h1>
            <p className="reveal mt-5 max-w-xl font-display text-2xl italic text-parchment/95 sm:text-3xl">
              Musik om at fylde, hvile, danse og blive — også når livet gør modstand.
            </p>
            <p className="reveal mt-6 max-w-xl leading-relaxed text-parchment/85">
              Vi laver sange, karakterer og verdener for alle, der lever med
              kronisk sygdom, neurodivergens og kroppe, der ikke makker ret
              hver dag. Ikke som kampagne — som kunst, fest, fortælling og et
              sted at høre til.
            </p>
            <div className="reveal mt-8 flex flex-wrap items-center gap-3">
              <ListenCTA label="Lyt til musikken" />
              <Link
                href="/fest-i-hvalen"
                className="rounded-full border border-brass-500/60 px-6 py-3 text-amber-glow hover:bg-brass-500/15"
              >
                Gå ombord på Fest i Hvalen →
              </Link>
            </div>
            <p className="reveal mt-10 max-w-md text-sm italic text-parchment/65">
              “Du skal ikke blive mindre, fordi livet blev sværere.”
            </p>
          </div>
          <div className="reveal relative">
            <div className="relative mx-auto aspect-square w-[min(78vw,520px)] animate-floaty">
              <div
                aria-hidden
                className="absolute inset-[-8%] rounded-full bg-gradient-to-tr from-brass-500/20 via-accent-pink/10 to-accent-cyan/15 blur-2xl"
              />
              <Image
                src={img("kronisk-syg-logo", 1600)}
                alt="Kronisk Syg-logoet: et infinity-hjerte i messing og koral over isstykker."
                fill
                priority
                sizes="(min-width: 768px) 520px, 78vw"
                className="object-contain drop-shadow-[0_25px_45px_rgba(0,0,0,0.55)]"
              />
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      <section className="mx-auto max-w-6xl px-5 py-24">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="reveal">
            <p className="font-display text-sm uppercase tracking-[0.3em] text-brass-400">
              Hvad er Kronisk Syg
            </p>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl text-parchment">
              Et band, et univers og en flåde af karakterer.
            </h2>
            <p className="mt-5 leading-relaxed text-parchment/85">
              Kronisk Syg er et dansk AI-band og et musikalsk fortælleprojekt om
              kronisk sygdom, neurodivergens, sårbarhed, værdighed, humor,
              fællesskab og musik. Vi skriver sange, bygger karakterer og åbner
              et univers, hvor sygdom ikke er noget, der defineres af lægejournal
              eller medlidenhed — men af stemmer, scener og hvalens varme bug.
            </p>
            <p className="mt-4 leading-relaxed text-parchment/85">
              Bandet findes som AI-skabt ensemble: en høne, en ræv, et egern, en
              bjørn, en blæksprutte, en grævling og en hval, der hedder Walter.
              De spiller pop, rap, cabaret, electro-swing, sea shanty, musical,
              eurodance, folk og teatralske ensemblesange — og minder dig om, at
              du må fylde, selvom du ikke fylder det samme som i går.
            </p>
          </div>
          <div className="reveal relative aspect-square overflow-hidden rounded-3xl border border-brass-500/30 shadow-brass">
            <Image
              src={img("kronisk-syg-logo", 1600)}
              alt="Kronisk Syg-logoet: et infinity-hjerte i messing og koral over isstykker."
              fill
              sizes="(min-width: 768px) 480px, 90vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ocean-950/60 via-transparent to-transparent" />
          </div>
        </div>
      </section>

      <section className="relative">
        <div className="absolute inset-0 -z-10">
          <Image
            src={img("scene-brass-owl", 1600)}
            alt=""
            fill
            sizes="100vw"
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ocean-950 via-ocean-900/85 to-ocean-950" />
        </div>
        <div className="mx-auto max-w-5xl px-5 py-24 text-center">
          <p className="reveal font-script text-3xl text-amber-glow">manifest</p>
          <h2 id="manifest" className="reveal mt-2 font-display text-4xl sm:text-5xl text-parchment">
            Vi gør plads.
          </h2>
          <p className="reveal mt-6 mx-auto max-w-2xl text-lg leading-relaxed text-parchment/85">
            Om du danser, sidder eller hviler — så får livet lidt mere gas. Vi
            taler hinanden op. Vi forvandler skammen til scene. Fest er ikke
            fornægtelse, det er livsvilje med rytme.
          </p>
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 text-left">
            {[
              {
                t: "Du må fylde.",
                d: "Selv når kroppen siger nej, må du fylde med stemme, vrede og latter.",
              },
              {
                t: "Der er plads på dækket.",
                d: "Hvile er ikke et nederlag. Det er et sæde med udsigt.",
              },
              {
                t: "Sproget hører til dig.",
                d: "Ordene, der har gjort dig lille, kan vendes om og synges højt.",
              },
              {
                t: "Vi lyver ikke om mørket.",
                d: "Ingen falsk feelgood. Hvalens lys virker bedst, når natten må være nat.",
              },
            ].map((v) => (
              <li
                key={v.t}
                className="reveal rounded-2xl border border-brass-500/25 bg-ocean-900/60 p-5"
              >
                <p className="font-display text-2xl text-amber-glow">{v.t}</p>
                <p className="mt-2 text-sm leading-relaxed text-parchment/80">{v.d}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-24">
        <div className="grid items-center gap-12 md:grid-cols-5">
          <div className="reveal md:col-span-2 relative aspect-[4/5] overflow-hidden rounded-3xl border border-brass-500/30 shadow-brass">
            <Image
              src={img("hero-ship", 1600)}
              alt="Fest i Hvalen: en gigantisk levende hval som krydstogtsskib over solnedgangen."
              fill
              sizes="(min-width: 768px) 420px, 90vw"
              className="object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ocean-950 via-ocean-950/40 to-transparent p-5">
              <p className="font-script text-2xl text-amber-glow">Album · konceptkrydstogt</p>
              <p className="font-display text-3xl text-parchment">Fest i Hvalen</p>
            </div>
          </div>
          <div className="reveal md:col-span-3">
            <p className="font-display text-sm uppercase tracking-[0.3em] text-brass-400">
              Seneste univers
            </p>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl text-parchment">
              Velkommen ombord på Fest i Hvalen.
            </h2>
            <p className="mt-5 leading-relaxed text-parchment/85">
              En levende hval. Et flydende festivalpalads. Et fællesskab for
              alle, der stadig vil synge, grine, danse, hvile og fylde — også
              når livet gør modstand. Hvalen hedder Walter, og han er både
              skibet og kaptajnen.
            </p>
            <p className="mt-4 leading-relaxed text-parchment/85">
              Albummet er en rejse i ni dramaturgiske faser: fra morgensol og
              havnens kalden, gennem festens fællesskab, piraternes angreb,
              mørkets bur og ordenes genfundne værdighed — og hjem til et liv,
              der får lidt mere gas.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="/fest-i-hvalen"
                className="inline-flex items-center gap-2 rounded-full bg-brass-shine px-6 py-3 font-medium text-ocean-950 shadow-glow hover:-translate-y-0.5"
              >
                Udforsk Fest i Hvalen →
              </Link>
              <ListenCTA variant="ghost" label="Lyt til smagsprøver" />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-24">
        <ListenPlaceholder />
      </section>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src={img("scene-deck", 1600)}
            alt=""
            fill
            sizes="100vw"
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ocean-950/70 via-ocean-950/85 to-ocean-950" />
        </div>
        <div className="mx-auto max-w-4xl px-5 py-28 text-center">
          <h2 className="reveal font-display text-4xl sm:text-5xl text-parchment">
            Sæt sejl.
          </h2>
          <p className="reveal mt-5 mx-auto max-w-xl text-lg text-parchment/85">
            Gå ombord i universet. Mød Walter, Inge, Nora, Noah, Bjarne, Delta
            og Valentina — og find dit eget sted på dækket.
          </p>
          <div className="reveal mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/fest-i-hvalen"
              className="inline-flex items-center gap-2 rounded-full bg-brass-shine px-7 py-3.5 font-medium text-ocean-950 shadow-glow hover:-translate-y-0.5"
            >
              Åbn landingen for Fest i Hvalen
            </Link>
            <ListenCTA variant="ghost" label="Lyt nu" />
          </div>
        </div>
      </section>
    </>
  );
}
