/* MentalCore sales-page config.
   This is the only file to edit to change where the buy button points or what the price says. */
window.MENTALCORE = {

  /* Gumroad checkout for The Reactivation. Confirmed live 2026-08-01. */
  checkoutUrl: 'https://mentalcore.gumroad.com/l/reactivation',

  /* Shown everywhere the price appears on the sales page.
     Dropped to $19 2026-08-05: bio link points straight at this page (cold
     traffic, no warm-up), matches Hormozi's impulse-tier call for that case.
     NOTE: this only changes the displayed text. The actual charged amount is
     set on the Gumroad product itself and must be changed there too. */
  price: '$19'

};
