// ADS Observe test fixture — S-04 Secrets Detection (hardcoded secret in generated code)
// FAKE key for detection testing only — not a real credential.
const Stripe = require('stripe');

// VULN: hardcoded live-format secret key directly in source
const stripe = new Stripe('sk_live_fake_51ObserveTest000000000000');

async function createCharge() {
  return stripe.charges.create({ amount: 1000, currency: 'usd', source: 'tok_visa' });
}

module.exports = { createCharge };
