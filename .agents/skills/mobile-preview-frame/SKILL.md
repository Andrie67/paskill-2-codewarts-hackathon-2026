---
name: mobile-preview-frame
description: Wraps the web application in a mobile phone border (device frame) to simulate a mobile environment during development.
---

# Mobile Preview Frame

This skill instructs the agent on how to condense a standard web application into a simulated mobile phone view. It is useful for testing mobile-first designs on desktop browsers.

## Implementation Steps

1. Create a `DeviceFrame` or `MobileMockup` layout wrapper.
2. The wrapper should have a fixed width (e.g., `375px` or `414px`) and height (e.g., `812px` or `896px`) to simulate standard mobile screens like the iPhone.
3. Apply styling to create a phone border:
   - Thick borders (e.g., `border: 12px solid #1a1a1a`)
   - Rounded corners (e.g., `border-radius: 40px`)
   - Add a simulated "notch" or "dynamic island" at the top for realism.
   - Set `overflow: hidden` to contain the app content within the frame.
   - Add a subtle drop shadow (`box-shadow`) to lift the phone off the background.
4. Center the `DeviceFrame` on the desktop screen.
5. Ensure the inner content area scrolls independently.
