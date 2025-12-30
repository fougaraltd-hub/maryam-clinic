# Mariam Msai-Ahmed — Clinic Website (Local Test)

## Run locally
This is a static site (HTML/CSS/JS). No build tools required.

1) Unzip the package
2) Open `index.html` in your browser

## Update contact details
Edit `script.js` and change:
- CONFIG.clinicEmail
- CONFIG.clinicPhone
- CONFIG.clinicWhatsApp

## Booking form
For local testing, the form:
- saves a copy to your browser localStorage
- opens your email client using `mailto:` (no backend)

For production, replace the mailto flow with a secure form endpoint + email provider.
