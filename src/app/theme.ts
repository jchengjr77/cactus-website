import { createSystem, defaultConfig } from "@chakra-ui/react"

export const system = createSystem(defaultConfig, {
  theme: {
    tokens: {
      colors: {
        brand: {
          highlight: { value: '#b39e36' },      // highlights
          darkGold: { value: '#948125' },       // dark gold
          background: { value: '#FFFEFD' },     // background (light cream)
          lightGrey: { value: '#DBE4C9' },      // light grey
          lightGreen: { value: '#6bc77a' },     // light green
          green: { value: '#408f48' },          // brand green
          vibrantGreen: { value: '#668f40' },   // greener green (brownish)
          darkGreen: { value: '#28542d' },      // dark green
          black: { value: '#1A1A19' },          // black
        }
      },
      fonts: {
        body: { value: "var(--font-work-sans), system-ui, sans-serif" },
        heading: { value: "var(--font-work-sans), system-ui, sans-serif" },
      }
    },
  },
})
