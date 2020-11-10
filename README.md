# Checkout coding assignment

Hi! 👋

Thanks for taking the time to interview at Mollie. This assignment will be used by us to assess your technical skills. It will also give us something to talk about should you progress to the technical interview.

As you applied for a frontend position in the Payments domain, we’d like to see how you’d implement a few screens of the brand new Mollie checkout. As we’re processing tens of thousands payments a day, we’d like everyone to have a smooth payment experience.

It should take you about 4 hours to complete the exercise. If you’re stuck on a problem, try to work around it or come back to it later. When reviewing, we will focus on intent more than on implementation details. If you are unable to complete the full assignment, that’s fine – try to make the right choices during the process and prioritize what parts you’d like to finish.

Requirements / things to keep in mind:

* Implement design of the two screens (checkout overview and payment details) using readable and easy to maintain HTML / CSS.
    - You can assume all visitors are using modern browsers.
    - Make the design work well on responsive screens (mobile designs are included).
* Checkout should be accessible for everyone (a11y).
* Inputs fields use the floating label UX pattern.
* The credit card issuer brand depends on the credit card number. 
* You should go to the credit card form when selecting the credit card payment method. You can ignore the iDEAL and Bank transfer links.
* The icon of the credit card brand that’s shown behind the credit card number input field depends on the credit card number. No icon is shown when the credit card number is not filled in. We support 3 credit card brands (icons are included in the `assets` folder):
    * Amex: card number length: 15 digits, CVV length: 4 digits. First digit must be a 3 and second digit must be a 4 or 7.
    * Mastercard: 16 digits, CVV length: 3 digits. First digit must be 5 and second digit must be in the range 1 through 5 inclusive.
    * VISA: Up to 19 digits, CVV length: 3 digits. First digit must be a 4.
* We’d like to see some basic validation on the credit card form. Make sure you apply the correct for various form states:
    * Card holder name: non empty
    * Card number: non empty
    * CVV: non empty + max length
    * Expiry date: non empty, valid date, and in the future
* We really like tests 🙌

The idea behind this assignment is to see what technical level you’re on. If you have any cool technologies that you’re familiar with and think would be beneficial for Mollie, feel free to use them!

There are a couple of files in the ZIP: a basic Parcel project that you can work with and a design file. There’s a Sketch file if you would love to check out the exact pixels (it’s okay if you don’t have Sketch and some pixels are a bit off) and icons / images are included in the `assets` folder.

Good luck!