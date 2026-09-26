<script lang="ts">
    import ArrowRight from '@lucide/svelte/icons/arrow-right';
    import ArrowUpRight from '@lucide/svelte/icons/arrow-up-right';
    import BookOpen from '@lucide/svelte/icons/book-open';
    import GraduationCap from '@lucide/svelte/icons/graduation-cap';
    import FlaskConical from '@lucide/svelte/icons/flask-conical';

    import CTASection from '$lib/components/shared/CTASection.svelte';

    import { news } from '$lib/data/news';
    import { events } from '$lib/data/events';
    import { programmes } from '$lib/data/programmes';

    const exploreLinks = [
        {
            number: '01',
            label: 'Study at MMU',
            href: '/academics/programmes'
        },
        {
            number: '02',
            label: 'Research & innovation',
            href: '/research'
        },
        {
            number: '03',
            label: 'Campus life',
            href: '/campus-life'
        }
    ];

    const studyLinks = [
        {
            number: '01',
            title: 'Academic programmes',
            description:
                "Explore undergraduate and postgraduate programmes across the university's schools and disciplines.",
            href: '/academics/programmes'
        },
        {
            number: '02',
            title: 'Admissions',
            description:
                'Understand entry requirements, applications, deadlines and what happens after you apply.',
            href: '/admissions'
        },
        {
            number: '03',
            title: 'Fees & funding',
            description:
                'Find the financial information and resources you need to plan for university.',
            href: '/resources'
        }
    ];

    const researchLinks = [
        {
            number: '01',
            title: 'Research centres',
            description:
                'Discover the research ecosystem across the university.',
            href: '/research'
        },
        {
            number: '02',
            title: 'Innovation',
            description:
                'Explore ideas moving from research into practice.',
            href: '/research'
        },
        {
            number: '03',
            title: 'Partnerships',
            description:
                'Connect research with industry, communities and collaborators.',
            href: '/research'
        }
    ];

    const campusLinks = [
        {
            title: 'Student life',
            description: 'Clubs, communities, events and experiences.',
            href: '/campus-life'
        },
        {
            title: 'Our campus',
            description: 'Spaces for learning, collaboration and connection.',
            href: '/campus-life'
        },
        {
            title: 'Community',
            description: 'Meet the people who make MMU what it is.',
            href: '/campus-life'
        }
    ];

    const programmeCount = programmes.length;

    const faculties = new Set(
        programmes.map((programme) => programme.faculty)
    ).size;

    const featuredProgrammes = programmes.slice(0, 5);
</script>

<svelte:head>
    <title>Multimedia University of Kenya</title>

    <meta
        name="description"
        content="Discover programmes, research, innovation, campus life and opportunities at Multimedia University of Kenya."
    />
</svelte:head>

<!-- ============================================================
    HERO
============================================================ -->

<section class="relative overflow-hidden bg-background">
    <div class="container mx-auto px-5 lg:px-6">
        <div
            class="grid min-h-[calc(100svh-72px)] gap-12 py-14 md:py-20 lg:min-h-[calc(100vh-124px)] lg:grid-cols-[1fr_360px] lg:items-end lg:py-24"
        >
            <div>
                <div
                    class="mb-8 flex items-center gap-3 text-[9px] font-semibold uppercase tracking-[0.18em] text-primary sm:mb-10 sm:gap-4 sm:text-[10px]"
                >
                    <span class="h-0.5 w-7 bg-accent sm:w-10"></span>

                    Multimedia University of Kenya
                </div>

                <h1
                    class="max-w-6xl text-[clamp(3.7rem,18vw,7rem)] font-semibold leading-[0.82] tracking-[-0.07em] text-foreground sm:text-[clamp(4.5rem,10vw,9.5rem)] sm:tracking-[-0.065em]"
                >
                    Shape what
                    <br />
                    comes next.
                </h1>

                <div
                    class="mt-9 grid max-w-4xl gap-7 border-t border-border/60 pt-6 sm:mt-12 sm:gap-8 sm:pt-7 lg:grid-cols-[1fr_auto]"
                >
                    <p
                        class="max-w-xl text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7 md:text-lg"
                    >
                        A university built around technology, creativity,
                        research and the people shaping tomorrow.
                    </p>

                    <div
                        class="flex flex-col gap-2.5 sm:flex-row sm:items-start sm:gap-3"
                    >
                        <a
                            href="/academics/programmes"
                            class="group inline-flex h-11 items-center justify-center bg-primary px-5 text-[10px] font-bold uppercase tracking-[0.1em] text-primary-foreground shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
                        >
                            Explore programmes

                            <ArrowUpRight
                                class="ml-2 size-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                            />
                        </a>

                        <a
                            href="/admissions"
                            class="inline-flex h-11 items-center justify-center border border-primary/70 px-5 text-[10px] font-bold uppercase tracking-[0.1em] text-primary transition-colors hover:border-primary hover:bg-secondary/60"
                        >
                            Admissions
                        </a>
                    </div>
                </div>

                <div class="mt-10 border-t border-border/60 lg:hidden">
                    <div
                        class="py-4 text-[9px] font-semibold uppercase tracking-[0.18em] text-primary"
                    >
                        Explore MMU
                    </div>

                    {#each exploreLinks as item}
                        <a
                            href={item.href}
                            class="group flex items-center justify-between border-t border-border/60 py-4 transition-colors hover:border-primary/40"
                        >
                            <div class="flex items-center gap-4">
                                <span
                                    class="font-mono text-[9px] font-semibold text-accent"
                                >
                                    {item.number}
                                </span>

                                <span class="text-sm font-medium group-hover:text-primary">
                                    {item.label}
                                </span>
                            </div>

                            <ArrowRight
                                class="size-4 text-primary transition-transform duration-200 group-hover:translate-x-1"
                            />
                        </a>
                    {/each}
                </div>
            </div>

            <div class="hidden border-l border-border/60 pl-8 lg:block">
                <p
                    class="text-[9px] font-semibold uppercase tracking-[0.18em] text-primary"
                >
                    Explore MMU
                </p>

                <div class="mt-6 divide-y divide-border/60">
                    {#each exploreLinks as item}
                        <a
                            href={item.href}
                            class="group flex items-center justify-between py-6 transition-colors hover:text-primary"
                        >
                            <div>
                                <span
                                    class="font-mono text-[9px] font-semibold text-accent"
                                >
                                    {item.number}
                                </span>

                                <p class="mt-1 text-sm font-medium">
                                    {item.label}
                                </p>
                            </div>

                            <ArrowRight
                                class="size-4 text-primary transition-transform duration-200 group-hover:translate-x-1"
                            />
                        </a>
                    {/each}
                </div>
            </div>
        </div>
    </div>
</section>

<!-- ============================================================
    STUDY
============================================================ -->

<section class="bg-secondary/10">
    <div class="container mx-auto px-5 py-16 sm:py-24 lg:px-6 lg:py-32">
        <div
            class="grid gap-10 sm:gap-14 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24"
        >
            <div>
                <p
                    class="text-[9px] font-bold uppercase tracking-[0.18em] text-accent sm:text-[10px]"
                >
                    01 / Study
                </p>

                <h2
                    class="mt-5 max-w-md text-4xl font-semibold leading-[0.95] tracking-[-0.045em] text-foreground sm:mt-6 sm:text-5xl"
                >
                    Find a direction.
                </h2>

                <p
                    class="mt-5 max-w-sm text-sm leading-6 text-muted-foreground sm:mt-6 sm:leading-7"
                >
                    Whether you know exactly what you want to study or are
                    still exploring, start with the information that matters.
                </p>

                <a
                    href="/academics/programmes"
                    class="group mt-6 inline-flex items-center text-[10px] font-semibold uppercase tracking-[0.1em] text-primary hover:text-accent sm:mt-8 sm:text-xs"
                >
                    View all programmes

                    <ArrowRight
                        class="ml-3 size-4 transition-transform duration-200 group-hover:translate-x-1"
                    />
                </a>
            </div>

            <div class="border-t border-border/60">
                {#each studyLinks as item}
                    <a
                        href={item.href}
                        class="group grid gap-3 border-b border-border/60 py-6 transition-colors hover:border-primary/30 hover:bg-background sm:grid-cols-[60px_1fr_auto] sm:items-center sm:gap-5 sm:py-9 sm:px-5"
                    >
                        <span
                            class="font-mono text-[10px] font-semibold text-accent sm:text-xs"
                        >
                            {item.number}
                        </span>

                        <div>
                            <h3
                                class="text-lg font-semibold tracking-tight transition-transform duration-200 group-hover:translate-x-1 group-hover:text-primary sm:text-xl md:text-2xl"
                            >
                                {item.title}
                            </h3>

                            <p
                                class="mt-2 max-w-xl text-xs leading-5 text-muted-foreground sm:text-sm sm:leading-6"
                            >
                                {item.description}
                            </p>
                        </div>

                        <ArrowUpRight
                            class="hidden size-5 text-primary transition-transform duration-200 group-hover:-translate-y-1 group-hover:translate-x-1 sm:block"
                        />
                    </a>
                {/each}
            </div>
        </div>
    </div>
</section>

<!-- ============================================================
    AT A GLANCE
============================================================ -->

<section class="bg-background">
    <div class="container mx-auto px-5 py-16 sm:py-24 lg:px-6 lg:py-32">
        <div
            class="grid gap-10 sm:gap-14 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24"
        >
            <div>
                <p
                    class="text-[9px] font-bold uppercase tracking-[0.18em] text-accent sm:text-[10px]"
                >
                    02 / MMU at a glance
                </p>

                <h2
                    class="mt-5 max-w-md text-4xl font-semibold leading-[0.95] tracking-[-0.045em] sm:mt-6 sm:text-5xl"
                >
                    A university connected to a changing world.
                </h2>
            </div>

            <div>
                <div class="border-t border-border/60 pt-6 sm:pt-8">
                    <p
                        class="font-mono text-[clamp(4rem,18vw,7rem)] font-semibold leading-none tracking-[-0.075em] text-primary"
                    >
                        15,000+
                    </p>

                    <p
                        class="mt-3 max-w-xs text-[9px] font-semibold uppercase tracking-[0.14em] text-muted-foreground sm:text-[10px]"
                    >
                        Students enrolled across faculties
                    </p>
                </div>

                <div class="mt-8 grid grid-cols-3 border-t border-border/60 sm:mt-12">
                    <div class="py-6 pr-3 sm:py-8 sm:pr-6">
                        <BookOpen
                            class="mb-6 size-4 text-accent sm:mb-8"
                        />

                        <p
                            class="font-mono text-2xl font-semibold tracking-[-0.04em] text-foreground sm:text-3xl"
                        >
                            {programmeCount}+
                        </p>

                        <p
                            class="mt-1.5 text-[10px] leading-4 text-muted-foreground sm:mt-2 sm:text-xs"
                        >
                            Programmes
                        </p>
                    </div>

                    <div class="border-l border-border/50 px-3 py-6 sm:px-6 sm:py-8">
                        <FlaskConical
                            class="mb-6 size-4 text-accent sm:mb-8"
                        />

                        <p
                            class="font-mono text-2xl font-semibold tracking-[-0.04em] text-foreground sm:text-3xl"
                        >
                            10+
                        </p>

                        <p
                            class="mt-1.5 text-[10px] leading-4 text-muted-foreground sm:mt-2 sm:text-xs"
                        >
                            Research centres
                        </p>
                    </div>

                    <div class="border-l border-border/50 py-6 pl-3 sm:py-8 sm:pl-6">
                        <GraduationCap
                            class="mb-6 size-4 text-accent sm:mb-8"
                        />

                        <p
                            class="font-mono text-2xl font-semibold tracking-[-0.04em] text-foreground sm:text-3xl"
                        >
                            30+
                        </p>

                        <p
                            class="mt-1.5 text-[10px] leading-4 text-muted-foreground sm:mt-2 sm:text-xs"
                        >
                            Years of service
                        </p>
                    </div>
                </div>

                <div class="mt-8 grid grid-cols-2 border-t border-border/60 sm:mt-12">
                    <div class="border-r border-border/50 py-6 pr-5 sm:py-8 sm:pr-8">
                        <p
                            class="font-mono text-2xl font-semibold tracking-[-0.04em] text-primary sm:text-3xl"
                        >
                            {faculties}
                        </p>

                        <p
                            class="mt-2 text-[10px] uppercase tracking-[0.1em] text-muted-foreground sm:text-xs"
                        >
                            Academic faculties
                        </p>
                    </div>

                    <div class="py-6 pl-5 sm:py-8 sm:pl-8">
                        <p
                            class="font-mono text-2xl font-semibold tracking-[-0.04em] text-primary sm:text-3xl"
                        >
                            01
                        </p>

                        <p
                            class="mt-2 text-[10px] uppercase tracking-[0.1em] text-muted-foreground sm:text-xs"
                        >
                            Main campus
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- ============================================================
    PROGRAMME FINDER
============================================================ -->

<section class="bg-secondary/10">
    <div class="container mx-auto px-5 py-16 sm:py-24 lg:px-6 lg:py-32">
        <div
            class="flex flex-col justify-between gap-6 sm:gap-8 lg:flex-row lg:items-end"
        >
            <div>
                <p
                    class="text-[9px] font-bold uppercase tracking-[0.18em] text-accent sm:text-[10px]"
                >
                    03 / Academic programmes
                </p>

                <h2
                    class="mt-5 text-4xl font-semibold leading-none tracking-[-0.05em] sm:mt-6 sm:text-6xl"
                >
                    Choose your path.
                </h2>

                <p
                    class="mt-4 max-w-lg text-sm leading-6 text-muted-foreground sm:mt-5 sm:leading-7"
                >
                    Start with a programme and discover where it can take
                    you.
                </p>
            </div>

            <a
                href="/academics/programmes"
                class="group inline-flex items-center text-[10px] font-semibold uppercase tracking-[0.1em] text-primary hover:text-accent sm:text-xs"
            >
                Browse all programmes

                <ArrowUpRight
                    class="ml-2 size-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
            </a>
        </div>

        <div class="mt-10 border-y border-border/60 sm:mt-14">
            <div
                class="grid gap-4 border-b border-border/60 py-5 sm:grid-cols-[1fr_auto] sm:items-center sm:py-6"
            >
                <div>
                    <p
                        class="text-[9px] font-bold uppercase tracking-[0.16em] text-primary"
                    >
                        Programme catalogue
                    </p>

                    <p
                        class="mt-1.5 text-base font-medium tracking-tight sm:text-lg"
                    >
                        {programmeCount} programmes across {faculties} academic
                        faculties.
                    </p>
                </div>

                <a
                    href="/academics/programmes"
                    class="group inline-flex w-full items-center justify-center border border-primary/70 bg-primary/5 px-4 py-3 text-[10px] font-bold uppercase tracking-[0.1em] text-primary transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground sm:w-fit"
                >
                    Open programme finder

                    <ArrowUpRight
                        class="ml-2 size-3.5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                </a>
            </div>

            <div>
                {#each featuredProgrammes as programme, index}
                    <a
                        href={`/academics/programmes/${programme.slug}`}
                        class="group grid gap-2 border-b border-border/60 py-5 transition-colors last:border-b-0 hover:border-primary/30 hover:bg-background sm:gap-4 sm:py-7 md:grid-cols-[70px_1fr_220px_auto] md:items-center md:px-5"
                    >
                        <div
                            class="flex items-center justify-between md:contents"
                        >
                            <span
                                class="font-mono text-[9px] font-semibold text-accent sm:text-[10px]"
                            >
                                {String(index + 1).padStart(2, '0')}
                            </span>

                            <ArrowRight
                                class="size-4 text-primary transition-transform group-hover:translate-x-1 md:hidden"
                            />
                        </div>

                        <h3
                            class="text-base font-semibold tracking-tight transition-transform duration-200 group-hover:translate-x-1 group-hover:text-primary sm:text-lg md:text-xl"
                        >
                            {programme.title}
                        </h3>

                        <p
                            class="text-[11px] text-muted-foreground sm:text-xs"
                        >
                            {programme.faculty}
                        </p>

                        <ArrowRight
                            class="hidden size-4 text-primary transition-transform group-hover:translate-x-1 md:block"
                        />
                    </a>
                {/each}
            </div>
        </div>
    </div>
</section>

<!-- ============================================================
    RESEARCH
============================================================ -->

<section class="bg-background">
    <div class="container mx-auto px-5 py-16 sm:py-24 lg:px-6 lg:py-32">
        <div
            class="grid gap-10 sm:gap-14 lg:grid-cols-[1fr_0.8fr] lg:gap-24"
        >
            <div>
                <p
                    class="text-[9px] font-bold uppercase tracking-[0.18em] text-accent sm:text-[10px]"
                >
                    04 / Research & innovation
                </p>

                <h2
                    class="mt-5 max-w-3xl text-5xl font-semibold leading-[0.9] tracking-[-0.06em] text-foreground sm:mt-6 md:text-7xl"
                >
                    Ideas become
                    <br />
                    <span class="text-primary">impact.</span>
                </h2>

                <p
                    class="mt-7 max-w-xl text-sm leading-6 text-muted-foreground sm:mt-8 sm:text-base sm:leading-7"
                >
                    Research at MMU connects technology, media, science
                    and society to address real problems and create new
                    possibilities.
                </p>

                <a
                    href="/research"
                    class="group mt-7 inline-flex items-center text-[10px] font-semibold uppercase tracking-[0.1em] text-primary hover:text-accent sm:mt-8 sm:text-xs"
                >
                    Explore research

                    <ArrowRight
                        class="ml-3 size-4 transition-transform duration-200 group-hover:translate-x-1"
                    />
                </a>
            </div>

            <div class="border-t border-border/60 pt-2 sm:pt-6 lg:mt-16">
                <div class="divide-y divide-border/60">
                    {#each researchLinks as item}
                        <a
                            href={item.href}
                            class="group block py-6 transition-all hover:pl-2 sm:py-8"
                        >
                            <div class="flex items-start justify-between gap-6">
                                <p
                                    class="font-mono text-3xl font-semibold tracking-[-0.05em] text-primary sm:text-4xl"
                                >
                                    {item.number}
                                </p>

                                <ArrowUpRight
                                    class="mt-1 size-4 text-accent transition-transform duration-200 group-hover:-translate-y-1 group-hover:translate-x-1"
                                />
                            </div>

                            <p
                                class="mt-3 text-base font-semibold group-hover:text-primary sm:mt-4 sm:text-lg"
                            >
                                {item.title}
                            </p>

                            <p
                                class="mt-1 text-xs leading-5 text-muted-foreground sm:text-sm sm:leading-6"
                            >
                                {item.description}
                            </p>
                        </a>
                    {/each}
                </div>
            </div>
        </div>
    </div>
</section>

<!-- ============================================================
    NEWS (UNIVERSITY LIFE)
============================================================ -->

<section class="bg-secondary/10">
    <div class="container mx-auto px-5 py-16 sm:py-24 lg:px-6 lg:py-32">
        <div
            class="flex flex-col justify-between gap-6 sm:gap-8 md:flex-row md:items-end"
        >
            <div>
                <p
                    class="text-[9px] font-bold uppercase tracking-[0.18em] text-accent sm:text-[10px]"
                >
                    05 / University life
                </p>

                <h2
                    class="mt-5 text-4xl font-semibold tracking-[-0.05em] sm:mt-6 sm:text-6xl"
                >
                    What's happening.
                </h2>
            </div>

            <a
                href="/news"
                class="group inline-flex items-center text-[10px] font-semibold uppercase tracking-[0.1em] text-primary hover:text-accent sm:text-xs"
            >
                View all news

                <ArrowUpRight
                    class="ml-2 size-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
            </a>
        </div>

        <div class="mt-10 border-t border-border/60 sm:mt-14">
            {#each news.slice(0, 4) as article, index}
                <a
                    href={`/news/${article.slug ?? article.id}`}
                    class="group grid gap-3 border-b border-border/60 py-6 transition-colors hover:border-primary/30 hover:bg-background sm:grid-cols-[70px_1fr_200px_auto] sm:items-center sm:gap-6 sm:py-8 md:px-5"
                >
                    <span
                        class="font-mono text-[10px] font-semibold text-accent sm:text-xs"
                    >
                        {String(index + 1).padStart(2, '0')}
                    </span>

                    <div>
                        <h3
                            class="text-base font-semibold tracking-tight transition-transform duration-200 group-hover:translate-x-1 group-hover:text-primary sm:text-lg md:text-xl"
                        >
                            {article.title}
                        </h3>

                        <p
                            class="mt-1.5 line-clamp-1 text-xs text-muted-foreground sm:text-sm"
                        >
                            {article.excerpt || article.description}
                        </p>
                    </div>

                    <p
                        class="font-mono text-[11px] text-muted-foreground sm:text-xs"
                    >
                        {article.date}
                    </p>

                    <ArrowUpRight
                        class="hidden size-5 text-primary transition-transform duration-200 group-hover:-translate-y-1 group-hover:translate-x-1 sm:block"
                    />
                </a>
            {/each}
        </div>
    </div>
</section>

<!-- ============================================================
    EVENTS
============================================================ -->

<section class="bg-background">
    <div class="container mx-auto px-5 py-16 sm:py-24 lg:px-6 lg:py-32">
        <div
            class="flex flex-col justify-between gap-6 sm:gap-8 md:flex-row md:items-end"
        >
            <div>
                <p
                    class="text-[9px] font-bold uppercase tracking-[0.18em] text-accent sm:text-[10px]"
                >
                    06 / Events
                </p>

                <h2
                    class="mt-5 text-4xl font-semibold tracking-[-0.05em] sm:mt-6 sm:text-6xl"
                >
                    Be part of it.
                </h2>
            </div>

            <a
                href="/events"
                class="group inline-flex items-center text-[10px] font-semibold uppercase tracking-[0.1em] text-primary hover:text-accent sm:text-xs"
            >
                View all events

                <ArrowUpRight
                    class="ml-2 size-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
            </a>
        </div>

        <div class="mt-10 border-t border-border/60 sm:mt-14">
            {#each events.slice(0, 3) as event, index}
                <a
                    href={`/events/${event.slug ?? event.id}`}
                    class="group grid gap-3 border-b border-border/60 py-6 transition-colors hover:border-primary/30 hover:bg-secondary/10 sm:grid-cols-[70px_1fr_220px_auto] sm:items-center sm:gap-6 sm:py-8 md:px-5"
                >
                    <span
                        class="font-mono text-[10px] font-semibold text-accent sm:text-xs"
                    >
                        {String(index + 1).padStart(2, '0')}
                    </span>

                    <div>
                        <h3
                            class="text-base font-semibold tracking-tight transition-transform duration-200 group-hover:translate-x-1 group-hover:text-primary sm:text-lg md:text-xl"
                        >
                            {event.title}
                        </h3>

                        <p
                            class="mt-1.5 text-xs text-muted-foreground sm:text-sm"
                        >
                            {event.location || event.time || 'Main Campus'}
                        </p>
                    </div>

                    <p
                        class="font-mono text-[11px] text-muted-foreground sm:text-xs"
                    >
                        {event.date}
                    </p>

                    <ArrowUpRight
                        class="hidden size-5 text-primary transition-transform duration-200 group-hover:-translate-y-1 group-hover:translate-x-1 sm:block"
                    />
                </a>
            {/each}
        </div>
    </div>
</section>

<!-- ============================================================
    CAMPUS LIFE
============================================================ -->

<section class="bg-secondary/10">
    <div class="container mx-auto px-5 py-16 sm:py-24 lg:px-6 lg:py-32">
        <div
            class="grid gap-10 sm:gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24"
        >
            <div>
                <p
                    class="text-[9px] font-bold uppercase tracking-[0.18em] text-accent sm:text-[10px]"
                >
                    07 / Campus life
                </p>

                <h2
                    class="mt-5 text-5xl font-semibold leading-[0.9] tracking-[-0.06em] sm:mt-6 md:text-7xl"
                >
                    More than
                    <br />
                    a classroom.
                </h2>

                <p
                    class="mt-7 max-w-sm text-sm leading-6 text-muted-foreground sm:mt-8 sm:leading-7"
                >
                    Discover the people, spaces and experiences that make
                    university life more than lectures and assignments.
                </p>
            </div>

            <div class="border-t border-border/60">
                {#each campusLinks as item}
                    <a
                        href={item.href}
                        class="group flex items-center justify-between border-b border-border/60 py-6 transition-colors hover:border-primary/30 hover:bg-background sm:py-9 sm:px-5"
                    >
                        <div>
                            <p
                                class="text-lg font-semibold tracking-tight group-hover:text-primary sm:text-xl"
                            >
                                {item.title}
                            </p>

                            <p
                                class="mt-1 text-xs text-muted-foreground sm:text-sm"
                            >
                                {item.description}
                            </p>
                        </div>

                        <ArrowUpRight
                            class="size-5 text-primary transition-transform duration-200 group-hover:-translate-y-1 group-hover:translate-x-1"
                        />
                    </a>
                {/each}
            </div>
        </div>
    </div>
</section>

<!-- ============================================================
    CTA
============================================================ -->

<section class="bg-background">
    <div class="container mx-auto px-5 py-16 sm:py-24 lg:px-6 lg:py-32">
        <CTASection
            eyebrow="Your next step"
            title="Find your place at MMU."
            description="Explore programmes, discover opportunities and take the next step towards your future."
            primaryAction={{
                label: 'Explore programmes',
                href: '/academics/programmes'
            }}
            secondaryAction={{
                label: 'How to apply',
                href: '/admissions/how-to-apply'
            }}
        />
    </div>
</section>