import { NextRequest, NextResponse } from 'next/server';

/**
 * Stripe Checkout API Route
 *
 * To complete integration:
 * 1. npm install stripe
 * 2. Add STRIPE_SECRET_KEY to .env.local
 * 3. Add STRIPE_WEBHOOK_SECRET to .env.local
 * 4. Create products/prices in Stripe Dashboard
 * 5. Uncomment the Stripe code below
 */

// import Stripe from 'stripe';
// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
//   apiVersion: '2024-04-10',
// });

const PRICE_MAP: Record<string, string> = {
  starter: 'free',
  pro: 'price_pro_placeholder', // Replace with real Stripe price ID
  team: 'price_team_placeholder', // Replace with real Stripe price ID
};

export async function POST(req: NextRequest) {
  try {
    const { planId } = await req.json();

    if (!planId || !PRICE_MAP[planId]) {
      return NextResponse.json({ error: 'Invalid plan' }, { status: 400 });
    }

    if (planId === 'starter') {
      return NextResponse.json({ url: '/signup' });
    }

    // Stripe checkout session (uncomment when ready)
    // const session = await stripe.checkout.sessions.create({
    //   mode: 'payment',
    //   payment_method_types: ['card'],
    //   line_items: [{ price: PRICE_MAP[planId], quantity: 1 }],
    //   success_url: `${req.nextUrl.origin}/training?success=true`,
    //   cancel_url: `${req.nextUrl.origin}/pricing?cancelled=true`,
    // });
    // return NextResponse.json({ url: session.url });

    // Placeholder response until Stripe is connected
    return NextResponse.json({
      message: 'Stripe not yet connected. Add STRIPE_SECRET_KEY to .env.local',
      planId,
    });
  } catch (error) {
    console.error('Stripe error:', error);
    return NextResponse.json(
      { error: 'Failed to create checkout session' },
      { status: 500 },
    );
  }
}
