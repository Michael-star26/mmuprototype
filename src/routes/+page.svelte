<script lang="ts">
    import CalendarDays from '@lucide/svelte/icons/calendar-days';
    import GraduationCap from '@lucide/svelte/icons/graduation-cap';
    import Newspaper from '@lucide/svelte/icons/newspaper';
    import ArrowRight from '@lucide/svelte/icons/arrow-right';

    import { Button } from '$lib/components/ui/button';

    import CTASection from '$lib/components/shared/CTASection.svelte';
    import EventCard from '$lib/components/shared/EventCard.svelte';
    import NewsCard from '$lib/components/shared/NewsCard.svelte';
    import ProgrammeCard from '$lib/components/shared/ProgrammeCard.svelte';
    import SectionHeading from '$lib/components/shared/SectionHeading.svelte';
    import StatBlock from '$lib/components/shared/StatBlock.svelte';

    import { news } from '$lib/data/news';
    import { events } from '$lib/data/events';
    import { programmes } from '$lib/data/programmes';
</script>

<svelte:head>
    <title>Multimedia University of Kenya</title>
    <meta
        name="description"
        content="Discover programmes, research, innovation, and opportunities at Multimedia University of Kenya."
    />
</svelte:head>

<!-- Hero Section -->
<section class="border-b bg-background">
    <div class="container mx-auto px-4 py-20 lg:py-28">
        <div class="max-w-4xl space-y-6">
            <div class="inline-flex items-center gap-2 border-l-2 border-primary pl-3 text-xs font-mono uppercase tracking-widest text-muted-foreground">
                Multimedia University of Kenya
            </div>

            <h1 class="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                Shaping the future through knowledge, innovation and technology.
            </h1>

            <p class="max-w-2xl text-lg text-muted-foreground leading-relaxed">
                Explore structured academic programmes, rigorous research centers, and career pathways designed to prepare professionals for complex, changing environments.
            </p>

            <div class="flex flex-wrap items-center gap-3 pt-2">
                <Button href="/admissions">
                    Apply Now
                    <ArrowRight class="w-4 h-4 ml-2" />
                </Button>

                <Button href="/academics/programmes" variant="outline">
                    Explore Programmes
                </Button>
            </div>
        </div>
    </div>
</section>

<!-- Stats Grid -->
<section class="border-b bg-muted/10">
    <div class="container mx-auto grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-border border-x border-border">
        <div class="p-6 lg:p-8">
            <StatBlock value="15,000+" label="Students" />
        </div>
        <div class="p-6 lg:p-8">
            <StatBlock value="40+" label="Academic Programmes" />
        </div>
        <div class="p-6 lg:p-8">
            <StatBlock value="10+" label="Research Centres" />
        </div>
        <div class="p-6 lg:p-8">
            <StatBlock value="30+" label="Years of Excellence" />
        </div>
    </div>
</section>

<!-- Programmes -->
<section class="container mx-auto px-4 py-20">
    <div class="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
        <SectionHeading
            eyebrow="Academics"
            title="Explore Our Programmes"
            description="Discover academic programmes designed to develop practical skill sets and mastery."
        />
        <Button href="/academics/programmes" variant="outline" class="self-start md:self-auto">
            View All Programmes
            <ArrowRight class="w-4 h-4 ml-2" />
        </Button>
    </div>

    <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {#each programmes.slice(0, 3) as programme}
            <ProgrammeCard {programme} />
        {/each}
    </div>
</section>

<!-- News -->
<section class="border-y bg-muted/20">
    <div class="container mx-auto px-4 py-20">
        <div class="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <SectionHeading
                eyebrow="News & Updates"
                title="What's Happening at MMU"
                description="Stay informed about institutional developments, milestones, and campus reports."
            />
            <Button href="/news" variant="outline" class="self-start md:self-auto">
                View All News
                <Newspaper class="w-4 h-4 ml-2" />
            </Button>
        </div>

        <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {#each news.slice(0, 3) as article}
                <NewsCard news={article} />
            {/each}
        </div>
    </div>
</section>

<!-- Events -->
<section class="container mx-auto px-4 py-20">
    <div class="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
        <SectionHeading
            eyebrow="Events"
            title="Upcoming Events"
            description="Engage with academic lectures, institutional workshops, and campus activities."
        />
        <Button href="/events" variant="outline" class="self-start md:self-auto">
            View All Events
            <CalendarDays class="w-4 h-4 ml-2" />
        </Button>
    </div>

    <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {#each events.slice(0, 3) as event}
            <EventCard {event} />
        {/each}
    </div>
</section>

<!-- CTA -->
<section class="border-t bg-muted/10">
    <div class="container mx-auto px-4 py-20">
        <CTASection
            eyebrow="Start Your Journey"
            title="Ready to become part of MMU?"
            description="Review admission timelines, curriculum requirements, and application procedures."
            primaryAction={{
                label: 'Apply Now',
                href: '/admissions'
            }}
            secondaryAction={{
                label: 'Contact Us',
                href: '/contact'
            }}
        />
    </div>
</section>