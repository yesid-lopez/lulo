import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, CalendarCheck, Palette, ShieldCheck } from 'lucide-react';
import { getCmsPsychologistDemos, type CmsPsychologistDemo } from '@/utils/psychologistDemos';
import {
  psychologistDemoFallbacks,
  type PsychologistDemo,
} from '@/utils/psychologistDemoData';

const fallbackBySlug = new Map(psychologistDemoFallbacks.map((demo) => [demo.slug, demo]));

const mapCmsDemo = (demo: CmsPsychologistDemo): PsychologistDemo | null => {
  const fallback = fallbackBySlug.get(demo.slug);
  const image = demo.heroImage ?? fallback?.image;

  if (!demo.demoUrl || !image) {
    return null;
  }

  return {
    title: demo.title,
    slug: demo.slug,
    url: demo.demoUrl,
    specialty: demo.specialty || fallback?.specialty || '',
    summary: demo.summary || fallback?.summary || '',
    image: {
      src: image.src,
      alt: image.alt,
    },
  };
};

const getPsychologistDemos = async (): Promise<PsychologistDemo[]> => {
  try {
    const cmsDemos = await getCmsPsychologistDemos();
    const mapped = cmsDemos.map(mapCmsDemo).filter((demo): demo is PsychologistDemo => demo !== null);

    return mapped.length > 0 ? mapped : psychologistDemoFallbacks;
  } catch {
    return psychologistDemoFallbacks;
  }
};

export default async function PsychologistDemosSection() {
  const demos = await getPsychologistDemos();

  return (
    <section id="demos-psicologos" className="border-t border-gray-300 bg-white px-5 py-16 md:px-12 md:py-20 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-end">
          <div>
            <p className="sora-text mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-emerald-700">
              Demos para psicólogos
            </p>
            <h2 className="sora-text max-w-3xl text-3xl font-light leading-tight text-gray-950 md:text-5xl">
              Sitios pensados para transmitir confianza antes de la primera cita.
            </h2>
          </div>

          <div className="sora-light max-w-2xl text-base leading-7 text-gray-600">
            <p>
              Estas referencias muestran cómo puede verse una web profesional para consulta psicológica:
              clara, humana y fácil de recorrer para pacientes que quieren entender tu enfoque antes de
              escribirte.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact-us"
                className="sora-text inline-flex min-h-12 items-center justify-center rounded-full bg-gray-950 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-gray-800"
              >
                Quiero un sitio como estos
              </Link>
              <a
                href="#demos-psicologos-lista"
                className="sora-text inline-flex min-h-12 items-center justify-center rounded-full border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-950 transition-colors hover:border-gray-950"
              >
                Ver demos
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-3 md:grid-cols-3">
          {[
            {
              icon: ShieldCheck,
              title: 'Confianza y profesionalismo',
              text: 'Contenido sobrio, tono ético y jerarquía visual para presentar credenciales sin exagerar resultados.',
            },
            {
              icon: CalendarCheck,
              title: 'Más fácil recibir consultas',
              text: 'CTAs visibles para WhatsApp, agenda o formulario, según cómo prefieras atender nuevos pacientes.',
            },
            {
              icon: Palette,
              title: 'Adaptable a tu especialidad',
              text: 'Colores, fotos, servicios, modalidad online o presencial y mensajes ajustados a tu práctica.',
            },
          ].map((item) => (
            <div key={item.title} className="rounded-lg border border-gray-200 bg-[#F5F5F5] p-5">
              <item.icon className="mb-4 h-5 w-5 text-emerald-700" aria-hidden="true" />
              <h3 className="sora-text text-base font-semibold text-gray-950">{item.title}</h3>
              <p className="sora-light mt-2 text-sm leading-6 text-gray-600">{item.text}</p>
            </div>
          ))}
        </div>

        <div id="demos-psicologos-lista" className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {demos.map((demo) => (
            <article
              key={demo.slug}
              className="group overflow-hidden rounded-lg border border-gray-200 bg-white shadow-[0_18px_50px_-35px_rgba(17,24,39,0.45)] transition-transform duration-300 hover:-translate-y-1"
            >
              <a href={demo.url} target="_blank" rel="noopener noreferrer" className="block">
                <div className="relative aspect-[16/11] overflow-hidden bg-gray-100">
                  <Image
                    src={demo.image.src}
                    alt={demo.image.alt}
                    width={1440}
                    height={1100}
                    sizes="(min-width: 1280px) 31vw, (min-width: 768px) 46vw, 100vw"
                    className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
              </a>

              <div className="p-5">
                <div className="mb-3 flex items-center justify-between gap-4">
                  <p className="sora-text text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">
                    {demo.specialty}
                  </p>
                  <a
                    href={demo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Abrir demo de ${demo.title}`}
                    className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gray-200 text-gray-700 transition-colors hover:border-gray-950 hover:bg-gray-950 hover:text-white"
                  >
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                </div>
                <h3 className="sora-text text-xl font-light leading-tight text-gray-950">{demo.title}</h3>
                <p className="sora-light mt-3 text-sm leading-6 text-gray-600">{demo.summary}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
