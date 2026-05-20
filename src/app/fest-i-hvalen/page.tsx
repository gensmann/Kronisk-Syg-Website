import Image from "next/image";
import type { Metadata } from "next";
import { ParallaxHero } from "@/components/ParallaxHero";
import { Bubbles } from "@/components/Bubbles";
import { SectionDivider } from "@/components/SectionDivider";
import { ListenCTA, ListenPlaceholder } from "@/components/ListenCTA";
import { img, type ImgRole } from "@/lib/assets";

export const metadata: Metadata = {
  title: "Fest i Hvalen — konceptalbum og krydstogtseventyr",
  description:
    "Fest i Hvalen er et dansk konceptalbum og et musikalsk krydstogtseventyr om kronisk sygdom, værdighed og fællesskab. Mød Walter, Inge, Nora, Bjarne, Delta og Valentina.",
  openGraph: {
    title: "Fest i Hvalen — konceptalbum og krydstogtseventyr",
    description:
      "Velkommen ombord på Fest i Hvalen — en levende hval, et flydende festivalpalads og et fællesskab for alle, der stadig vil synge, grine, danse, hvile og fylde.",
    images: ["/images/hero-ship-1600.webp"],
  },
};

type Phase = { n: string; title: string; body: string; img: ImgRole };

const phases: Phase[] = [
  {
    n: "I",
    title: "Myten åbner",
    body:
      "Morgensol over åbent hav. En solsort fløjter, og verden ånder ind. Håb og undren før noget er sagt højt.",
    img: "scene-brass-owl",
  },
  {
    n: "II",
    title: "Havnen kalder",
    body:
      "Bymylder, F.O.M.O. og længsel. Et trækspil et sted i larmen. Følelsen af at noget vigtigt sker uden dig — og at du gerne vil nå frem.",
    img: "scene-aux",
  },
  {
    n: "III",
    title: "Velkommen ombord",
    body:
      "Inge serverer kage. Walter hilser. Nora og Noah etablerer den enkle, radikale regel: her må du være, som du er, og som du svinger i dag.",
    img: "character-inge",
  },
  {
    n: "IV",
    title: "Festivalen tager form",
    body:
      "Karakterer, dans og humor. Et dæk fyldt med folk, der ikke skal forklare deres ret til glæde. Ensemblet finder sin puls.",
    img: "scene-singer-shepherd",
  },
  {
    n: "V",
    title: "Piraterne angriber",
    body:
      "Selvværds-piraterne stiger ombord. Kaptajn Den Store giver skammen et ansigt og en stemme — og prøver at hugge værdigheden om bord.",
    img: "scene-captain-bear",
  },
  {
    n: "VI",
    title: "Mørket falder",
    body:
      "Sammenbrud. Angstens bur klemmer. Ingen falsk feelgood her — kun ærligt mørke, og et lys i hvalbugen, der ikke går ud.",
    img: "scene-engine-frogs",
  },
  {
    n: "VII",
    title: "Ordene vendes",
    body:
      "Valentino/Valentina, Nora, Preben og Henning kæmper med ord, værdighed og selvtillid. Sproget får sin retmæssige plads tilbage.",
    img: "character-valentina",
  },
  {
    n: "VIII",
    title: "Livet får mere gas",
    body:
      "Hvile, dans, hyldest og gentagelse. Ingen falsk triumf — bare et liv, der fortsætter med rytme, og en hval, der bliver ved at synge.",
    img: "scene-drummer-bear",
  },
  {
    n: "IX",
    title: "Undskyldningen",
    body:
      "Hans Stempel træder frem uden sit kostume. Erkendelse, ansvar og en undskyldning, der ikke laver fortiden om — men gør plads til at gå videre.",
    img: "scene-lemur",
  },
];

type Character = {
  name: string;
  role: string;
  blurb: string;
  img: ImgRole;
  tag: string;
};

const characters: Character[] = [
  {
    name: "Walter",
    role: "Hval, kaptajn, hjem",
    blurb:
      "Hvalen, kaptajnen og stemmen, der siger: Du er velkommen her. Walter er både skibet og den, der styrer det.",
    img: "hero-ship",
    tag: "Bas, kor, fundament",
  },
  {
    name: "Inge",
    role: "Stewardesse · keyboard",
    blurb:
      "Praktisk kærlighed. Kage, sikkerhedsbriefing, moderlig skævhed — og en lille for-bred-til-at-være-tilfældig værtindesmil.",
    img: "character-inge",
    tag: "Keys, kor, allesammen-sange",
  },
  {
    name: "Nora",
    role: "Ræv · rapper, frontfigur",
    blurb:
      "Følelsesmæssig frontfigur. Rå autenticitet og varm vrede mod skammen. Nora råber det, vi alle har glemt at sige højt.",
    img: "character-nora",
    tag: "Rap, vokal, scenefyld",
  },
  {
    name: "Noah",
    role: "Egern · guitar",
    blurb:
      "Analytisk modvægt. Præcision, indre ro og et neurodivergent blik på flokken. Den, der lytter, før der spilles.",
    img: "scene-singer-retriever",
    tag: "Guitar, arrangement",
  },
  {
    name: "Bjarne",
    role: "Bjørn · trommer",
    blurb:
      "Rytmisk fundament. Trommesæt integreret i kørestolen. Bandets groove sidder ikke på trods — den sidder på toppen.",
    img: "scene-drummer-bear",
    tag: "Trommer, groove",
  },
  {
    name: "Delta",
    role: "Blæksprutte · DJ",
    blurb:
      "Puls og dybde. Depression uden endimensional tristhed. Otte arme, otte tempi, ét sind, der nogle gange skal mørklægge for at finde lyset.",
    img: "scene-engine-frogs",
    tag: "Synth, beats, DJ-sæt",
  },
  {
    name: "Valentino / Valentina",
    role: "Grævling · cabaret-ikon",
    blurb:
      "Værdighedens dobbeltstemme. Et cabaret-ikon, der kan både hvisken og buldren — og som ved, at outfit også er sprog.",
    img: "character-valentina",
    tag: "Cabaret, vokal, drama",
  },
  {
    name: "Kaptajn Den Store / Hans Stempel",
    role: "Isbjørn · antagonist med erkendelsesbue",
    blurb:
      "Selvværdets fjende — og en figur, der får dybde, ansvar og til sidst en undskyldning. Han er ikke ond af natur. Han er bange for sin egen lillehed.",
    img: "scene-captain-bear",
    tag: "Antagonist, monolog",
  },
];

const themes: { t: string; d: string }[] = [
  {
    t: "Den levende hval",
    d: "Walter er ikke et skib, der bærer dig. Han er det fællesskab, du er en del af, så længe du er ombord.",
  },
  {
    t: "Forvandling, ikke straf",
    d: "Når sygdommen kommer, ændrer mennesker form i dette univers. Det er ikke en dom — det er et sprog for, hvordan ens plads i verden ændrer sig.",
  },
  {
    t: "Selvværds-piraterne",
    d: "Skammen kommer ikke ud af det blå. Den entrer dækket med rangtegn og store ord. Vi peger på den. Det gør den mindre.",
  },
  {
    t: "Ingen falsk feelgood",
    d: "Mørket må være mørkt, hvile må være hvile, og festen må være fest. Hvalen helbreder ikke. Den gør plads.",
  },
  {
    t: "Sprog som scene",
    d: "Vi tager ordene tilbage. Det, der gjorde dig lille, kan synges højt og blive til en hook.",
  },
  {
    t: "Erkendelsens bue",
    d: "Selv skurken må vokse. Hans Stempel ender ikke besejret — han ender afsløret og ansvarlig.",
  },
];

export default function FestIHvalenPage() {
  return (
    <>
      <ParallaxHero
        layers={[
          { src: img("hero-ship", 1600), depth: 16, priority: true },
          {
            src: img("ship-schematic", 1600),
            depth: 48,
            className: "opacity-15 mix-blend-screen",
          },
        ]}
        minHeight="min-h-[96vh]"
      >
        <Bubbles count={22} />
        <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-5 pt-44 pb-28 text-center">
          <p className="reveal font-script text-3xl text-amber-glow drop-shadow">
            et album · en hval · et fællesskab
          </p>
          <h1 className="reveal mt-2 font-display text-6xl leading-[1.05] sm:text-8xl">
            <span className="text-brass">Fest i Hvalen</span>
          </h1>
          <p className="reveal mt-6 max-w-2xl text-lg leading-relaxed text-parchment/90">
            Velkommen ombord på Fest i Hvalen — en levende hval, et flydende
            festivalpalads og et fællesskab for alle, der stadig vil synge,
            grine, danse, hvile og fylde, også når livet gør modstand.
          </p>
          <div className="reveal mt-8 flex flex-wrap items-center justify-center gap-3">
            <ListenCTA label="Lyt til albummet" />
            <a
              href="#rejsen"
              className="rounded-full border border-brass-500/60 px-6 py-3 text-amber-glow hover:bg-brass-500/15"
            >
              Følg rejsen i 9 faser ↓
            </a>
          </div>
          <p className="reveal mt-12 font-script text-2xl text-amber-glow/85">
            “Om du danser, sidder eller hviler, så får livet lidt mere gas.”
          </p>
        </div>
      </ParallaxHero>

      <SectionDivider />

      <section className="mx-auto max-w-6xl px-5 py-24">
        <div className="grid items-start gap-12 md:grid-cols-5">
          <div className="reveal md:col-span-3">
            <p className="font-display text-sm uppercase tracking-[0.3em] text-brass-400">
              Hvad er Fest i Hvalen?
            </p>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl text-parchment">
              Et konceptalbum og et krydstogtseventyr.
            </h2>
            <p className="mt-5 leading-relaxed text-parchment/85">
              I universet bag Kronisk Syg begynder mennesker, der bliver kronisk
              syge, at forandre form. Ikke som straf — som metafor for, hvordan
              sygdom og omverdenens blik ændrer ens plads i verden. Nogle finder
              vej til havnen og kommer ombord på Fest i Hvalen.
            </p>
            <p className="mt-4 leading-relaxed text-parchment/85">
              Hvalen er en gigantisk, levende skabning, et krydstogtsskib, en
              koncertscene, et festivalområde, et tilflugtssted og et bevægeligt
              fællesskab. Hvalen hedder Walter, og han er både skibet og kaptajnen.
            </p>
            <p className="mt-4 leading-relaxed text-parchment/85">
              Albummet helbreder ikke. Det tilbyder et navn, en stol, en scene,
              en stemme, musik, fællesskab — og et sted, hvor du ikke skal
              forklare din ret til at være der.
            </p>
          </div>
          <aside className="reveal md:col-span-2 rounded-3xl border border-brass-500/30 bg-ocean-900/60 p-7 shadow-brass">
            <p className="font-display text-2xl text-amber-glow">Lydlig identitet</p>
            <p className="mt-3 text-parchment/80 text-sm leading-relaxed">
              Show- og festival-DNA med karakterbaseret lydsprog. Skiftende
              genrer, fælles univers.
            </p>
            <ul className="mt-5 flex flex-wrap gap-2 text-xs">
              {[
                "pop",
                "rap",
                "cabaret",
                "electro-swing",
                "sea shanty",
                "musical",
                "eurodance",
                "folk",
                "spoken word",
                "ensemble",
              ].map((g) => (
                <li
                  key={g}
                  className="rounded-full border border-brass-500/40 bg-ocean-800/60 px-3 py-1 text-parchment/85"
                >
                  {g}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <section id="rejsen" className="relative">
        <div className="absolute inset-0 -z-10">
          <Image
            src={img("ship-schematic", 1600)}
            alt=""
            fill
            sizes="100vw"
            className="object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ocean-950 via-ocean-950/85 to-ocean-950" />
        </div>
        <div className="mx-auto max-w-6xl px-5 py-24">
          <div className="text-center">
            <p className="reveal font-display text-sm uppercase tracking-[0.3em] text-brass-400">
              Albumrejsen
            </p>
            <h2 className="reveal mt-3 font-display text-4xl sm:text-5xl text-parchment">
              Ni faser. Én hval. Én sang ad gangen.
            </h2>
          </div>
          <ol className="relative mt-16 grid gap-10 md:gap-14">
            <span
              aria-hidden
              className="pointer-events-none absolute left-6 top-2 hidden h-[calc(100%-1rem)] w-px bg-gradient-to-b from-brass-500/60 via-brass-500/20 to-transparent md:block md:left-1/2"
            />
            {phases.map((p, i) => {
              const isRight = i % 2 === 1;
              return (
                <li
                  key={p.n}
                  className={`reveal relative grid items-center gap-6 md:grid-cols-2 ${
                    isRight ? "md:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  <div className="relative aspect-[5/4] overflow-hidden rounded-2xl border border-brass-500/30 shadow-brass">
                    <Image
                      src={img(p.img, 1600)}
                      alt=""
                      fill
                      sizes="(min-width: 768px) 480px, 90vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ocean-950/70 via-transparent to-transparent" />
                  </div>
                  <div
                    className={`relative ${
                      isRight ? "md:pr-10 md:text-right" : "md:pl-10"
                    }`}
                  >
                    <div
                      className={`absolute top-2 hidden h-6 w-6 -translate-x-1/2 translate-y-1 rotate-45 border border-brass-500/70 bg-brass-500/30 md:block ${
                        isRight ? "right-[-1.85rem] left-auto translate-x-1/2" : "left-[-1.85rem]"
                      }`}
                      aria-hidden
                    />
                    <p className="font-script text-3xl text-amber-glow">Fase {p.n}</p>
                    <h3 className="mt-1 font-display text-3xl text-parchment">
                      {p.title}
                    </h3>
                    <p className="mt-3 leading-relaxed text-parchment/85">{p.body}</p>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-24">
        <div className="text-center">
          <p className="reveal font-display text-sm uppercase tracking-[0.3em] text-brass-400">
            Ombord
          </p>
          <h2 className="reveal mt-3 font-display text-4xl sm:text-5xl text-parchment">
            Karaktererne på dækket.
          </h2>
          <p className="reveal mt-4 mx-auto max-w-2xl text-parchment/85">
            Hver karakter er en stemme, en stil og et lille univers. De spiller
            sammen — og de spiller mod, når historien kræver det.
          </p>
        </div>
        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {characters.map((c) => (
            <li
              key={c.name}
              className="reveal group relative overflow-hidden rounded-3xl border border-brass-500/25 bg-ocean-900/55 shadow-brass"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={img(c.img, 960)}
                  alt={`${c.name} — ${c.role}`}
                  fill
                  sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 90vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ocean-950 via-ocean-950/60 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <p className="font-display text-2xl text-amber-glow">{c.name}</p>
                  <p className="text-sm text-parchment/85">{c.role}</p>
                </div>
              </div>
              <div className="px-5 pb-5 pt-4">
                <p className="text-sm leading-relaxed text-parchment/85">{c.blurb}</p>
                <p className="mt-3 inline-block rounded-full border border-brass-500/30 bg-ocean-800/60 px-3 py-1 text-xs text-parchment/75">
                  {c.tag}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="relative">
        <div className="absolute inset-0 -z-10">
          <Image
            src={img("scene-singer-retriever", 1600)}
            alt=""
            fill
            sizes="100vw"
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ocean-950/85 via-ocean-950 to-ocean-950" />
        </div>
        <div className="mx-auto max-w-6xl px-5 py-24">
          <div className="text-center">
            <p className="reveal font-display text-sm uppercase tracking-[0.3em] text-brass-400">
              Temaer
            </p>
            <h2 className="reveal mt-3 font-display text-4xl sm:text-5xl text-parchment">
              Hvad albummet handler om.
            </h2>
          </div>
          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {themes.map((t) => (
              <li
                key={t.t}
                className="reveal rounded-2xl border border-brass-500/25 bg-ocean-900/55 p-6"
              >
                <p className="font-display text-2xl text-amber-glow">{t.t}</p>
                <p className="mt-2 text-sm leading-relaxed text-parchment/85">{t.d}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-24">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div className="reveal">
            <p className="font-display text-sm uppercase tracking-[0.3em] text-brass-400">
              Presse & kontakt
            </p>
            <h2 className="mt-3 font-display text-4xl text-parchment">
              For redaktioner, kuratorer og medvandrere.
            </h2>
            <p className="mt-5 leading-relaxed text-parchment/85">
              Fest i Hvalen kan høres som album, læses som univers og bruges som
              afsæt for samtaler om sygdom, værdighed, neurodivergens og glæden,
              der nægter at gå sin vej. Vi taler gerne med skribenter,
              programværter og kunstneriske ledere.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-parchment/85">
              <li>· Pressefotos og citater: kommer snart</li>
              <li>· Booking og samtaler: kommer snart</li>
              <li>· Lyt-links samles løbende nedenfor</li>
            </ul>
          </div>
          <div className="reveal">
            <ListenPlaceholder />
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src={img("hero-ship", 1600)}
            alt=""
            fill
            sizes="100vw"
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ocean-950/70 via-ocean-950/85 to-ocean-950" />
          <Bubbles count={14} />
        </div>
        <div className="mx-auto max-w-3xl px-5 py-28 text-center">
          <p className="reveal font-script text-3xl text-amber-glow">der er plads på dækket</p>
          <h2 className="reveal mt-2 font-display text-4xl sm:text-5xl text-parchment">
            Gå ombord.
          </h2>
          <p className="reveal mt-5 mx-auto max-w-xl text-parchment/85">
            Sangen begynder, når du sætter dig — eller danser. Vi er klar, når
            du er.
          </p>
          <div className="reveal mt-8 flex flex-wrap items-center justify-center gap-3">
            <ListenCTA label="Lyt nu" />
            <a
              href="#rejsen"
              className="rounded-full border border-brass-500/60 px-6 py-3 text-amber-glow hover:bg-brass-500/15"
            >
              Gen-rejs albummet
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
