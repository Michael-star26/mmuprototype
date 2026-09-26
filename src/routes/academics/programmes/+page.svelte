<script lang="ts">
    import ArrowRight from '@lucide/svelte/icons/arrow-right';

    import PageHero from '$lib/components/shared/PageHero.svelte';
    import SectionHeading from '$lib/components/shared/SectionHeading.svelte';
    import CTASection from '$lib/components/shared/CTASection.svelte';
    import Breadcrumbs from '$lib/components/shared/Breadcrumbs.svelte';
    import ProgrammeList from '$lib/components/programmes/ProgrammeList.svelte';

    import { programmes } from '$lib/data/programmes';
</script>

<svelte:head>
    <title>Academic Programmes | Multimedia University of Kenya</title>
    <meta
        name="description"
        content="Explore undergraduate, postgraduate, diploma, certificate, and doctoral programmes at Multimedia University of Kenya."
    />
</svelte:head>

<div class="relative">
    <!-- Page accent -->
    <div
        class="pointer-events-none absolute inset-x-0 top-0 -z-10 h-72 overflow-hidden"
        aria-hidden="true"
    >
        <div
            class="absolute left-1/2 top-0 h-64 w-[42rem] -translate-x-1/2 rounded-full bg-primary/5 blur-3xl"
        ></div>
    </div>

    <!-- Breadcrumbs -->
    <div class="mx-auto max-w-[1440px] px-6 pt-6">
        <Breadcrumbs
            items={[
                { label: 'Home', href: '/' },
                { label: 'Academics', href: '/academics' },
                { label: 'Programmes', href: '/academics/programmes' }
            ]}
        />
    </div>

    <PageHero
        eyebrow="Academics"
        title="Academic Programmes"
        description="Discover programmes designed to develop the knowledge, skills, and practical experience needed for today's world."
        actions={[
            {
                label: 'Explore Programmes',
                href: '#programmes'
            },
            {
                label: 'Admissions',
                href: '/admissions',
                variant: 'outline'
            }
        ]}
    />
</div>

<!-- =========================================================
     PROGRAMME EXPLORER
========================================================= -->
<section id="programmes" class="scroll-mt-20 border-y border-border">
    <div class="mx-auto max-w-[1440px] px-6 py-16 md:py-24">
        <div class="mb-12 grid gap-8 border-b border-border pb-10 lg:grid-cols-[1fr_360px] lg:items-end">
            <div>
                <p class="text-[9px] font-bold uppercase tracking-[0.18em] text-primary">
                    01 / Programme Catalogue
                </p>

                <h2 class="mt-4 text-4xl font-semibold tracking-[-0.05em] md:text-5xl text-foreground">
                    Explore your options.
                </h2>
            </div>

            <p class="text-sm leading-6 text-muted-foreground">
                From undergraduate study to advanced research, explore the
                programmes that make up MMU's academic community.
            </p>
        </div>

        <ProgrammeList {programmes} />
    </div>
</section>

<!-- =========================================================
     ACADEMIC DISCOVERY
========================================================= -->
<section class="border-b border-border">
    <div class="mx-auto max-w-[1440px] px-6 py-16 md:py-24">
        <div class="grid gap-10 lg:grid-cols-[280px_1fr]">
            <div>
                <p class="text-[9px] font-bold uppercase tracking-[0.18em] text-primary">
                    02 / Explore MMU
                </p>

                <p class="mt-4 max-w-xs text-sm leading-6 text-muted-foreground">
                    Go beyond the programme catalogue and discover the wider
                    academic environment.
                </p>
            </div>

            <div class="grid border-y border-border md:grid-cols-3">
                <a
                    href="/university/schools"
                    class="group border-b border-border p-6 transition-colors hover:bg-muted/40 md:border-b-0 md:border-r md:p-8"
                >
                    <div class="flex items-start justify-between">
                        <span class="font-mono text-[10px] text-muted-foreground">
                            01
                        </span>

                        <ArrowRight class="size-4 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" />
                    </div>

                    <h3 class="mt-16 text-xl font-semibold tracking-tight text-foreground">
                        Schools & Faculties
                    </h3>

                    <p class="mt-3 text-sm leading-6 text-muted-foreground">
                        Explore the academic schools and departments behind
                        teaching and research at MMU.
                    </p>

                    <span class="mt-7 inline-block text-[9px] font-bold uppercase tracking-[0.12em] text-primary">
                        Explore schools
                    </span>
                </a>

                <a
                    href="/research"
                    class="group border-b border-border p-6 transition-colors hover:bg-muted/40 md:border-b-0 md:border-r md:p-8"
                >
                    <div class="flex items-start justify-between">
                        <span class="font-mono text-[10px] text-muted-foreground">
                            02
                        </span>

                        <ArrowRight class="size-4 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" />
                    </div>

                    <h3 class="mt-16 text-xl font-semibold tracking-tight text-foreground">
                        Research & Innovation
                    </h3>

                    <p class="mt-3 text-sm leading-6 text-muted-foreground">
                        Discover research activity, innovation initiatives,
                        publications, and opportunities.
                    </p>

                    <span class="mt-7 inline-block text-[9px] font-bold uppercase tracking-[0.12em] text-primary">
                        Explore research
                    </span>
                </a>

                <a
                    href="/admissions"
                    class="group p-6 transition-colors hover:bg-muted/40 md:p-8"
                >
                    <div class="flex items-start justify-between">
                        <span class="font-mono text-[10px] text-muted-foreground">
                            03
                        </span>

                        <ArrowRight class="size-4 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" />
                    </div>

                    <h3 class="mt-16 text-xl font-semibold tracking-tight text-foreground">
                        Admissions
                    </h3>

                    <p class="mt-3 text-sm leading-6 text-muted-foreground">
                        Find entry requirements, application information, fees,
                        and everything you need to begin.
                    </p>

                    <span class="mt-7 inline-block text-[9px] font-bold uppercase tracking-[0.12em] text-primary">
                        View admissions
                    </span>
                </a>
            </div>
        </div>
    </div>
</section>

<!-- =========================================================
     CTA
========================================================= -->
<section class="mx-auto max-w-[1440px] px-6 py-16 md:py-24">
    <CTASection
        eyebrow="Start Your Journey"
        title="Ready to take the next step?"
        description="Explore our programmes, review the admission requirements, and find the path that fits your academic goals."
        primaryAction={{
            label: 'View Admissions',
            href: '/admissions'
        }}
        secondaryAction={{
            label: 'Contact Us',
            href: '/contact'
        }}
    />
</section>