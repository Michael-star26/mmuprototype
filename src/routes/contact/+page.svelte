<script lang="ts">
	import Mail from '@lucide/svelte/icons/mail';
	import MapPin from '@lucide/svelte/icons/map-pin';
	import Phone from '@lucide/svelte/icons/phone';

	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import * as Card from '$lib/components/ui/card';
	import { Textarea } from '$lib/components/ui/textarea';

	import PageHero from '$lib/components/shared/PageHero.svelte';
	import SectionHeading from '$lib/components/shared/SectionHeading.svelte';
</script>

<svelte:head>
	<title>Contact Us | Multimedia University of Kenya</title>
	<meta
		name="description"
		content="Get in touch with Multimedia University of Kenya."
	/>
</svelte:head>

<PageHero
	title="Contact Us"
	subtitle="We're Here to Help"
/>

<section class="container mx-auto px-4 py-16">
	<div class="grid gap-12 lg:grid-cols-3">
		<!-- Contact information -->
		<div>
			<SectionHeading
				eyebrow="Get in Touch"
				title="Contact MMU"
				description="Have a question about admissions, programmes, or university services? Get in touch with us."
			/>

			<div class="mt-8 space-y-6">
				<div class="flex gap-4">
					<div
						class="flex size-10 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary"
					>
						<MapPin class="size-5" />
					</div>

					<div>
						<h2 class="font-semibold">Visit Us</h2>
						<p class="mt-1 text-sm text-muted-foreground">
							Nairobi, Kenya
						</p>
					</div>
				</div>

				<div class="flex gap-4">
					<div
						class="flex size-10 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary"
					>
						<Phone class="size-5" />
					</div>

					<div>
						<h2 class="font-semibold">Phone</h2>
						<p class="mt-1 text-sm text-muted-foreground">
							+254 000 000 000
						</p>
					</div>
				</div>

				<div class="flex gap-4">
					<div
						class="flex size-10 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary"
					>
						<Mail class="size-5" />
					</div>

					<div>
						<h2 class="font-semibold">Email</h2>
						<p class="mt-1 text-sm text-muted-foreground">
							info@mmu.ac.ke
						</p>
					</div>
				</div>
			</div>
		</div>

		<!-- Contact form -->
		<Card.Root class="lg:col-span-2">
			<Card.Header>
				<Card.Title>Send Us a Message</Card.Title>
				<Card.Description>
					Fill in the form below and we'll get back to you.
				</Card.Description>
			</Card.Header>

			<Card.Content>
				<form class="space-y-6">
					<div class="grid gap-6 sm:grid-cols-2">
						<div class="space-y-2">
							<label for="name" class="text-sm font-medium">
								Full Name
							</label>
							<Input
								id="name"
								name="name"
								placeholder="Your name"
							/>
						</div>

						<div class="space-y-2">
							<label for="email" class="text-sm font-medium">
								Email Address
							</label>
							<Input
								id="email"
								name="email"
								type="email"
								placeholder="you@example.com"
							/>
						</div>
					</div>

					<div class="space-y-2">
						<label for="subject" class="text-sm font-medium">
							Subject
						</label>
						<Input
							id="subject"
							name="subject"
							placeholder="What can we help you with?"
						/>
					</div>

					<div class="space-y-2">
						<label for="message" class="text-sm font-medium">
							Message
						</label>
						<Textarea
							id="message"
							name="message"
							placeholder="Write your message..."
							class="min-h-36"
						/>
					</div>
				</form>
			</Card.Content>

			<Card.Footer>
				<Button type="submit">
					Send Message
				</Button>
			</Card.Footer>
		</Card.Root>
	</div>
</section>