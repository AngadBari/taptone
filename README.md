# <a href="">🎵 TapTone</a>

<h2>Your buttons are missing a sound.</h2>

<h3>
Beautiful UI interaction sounds that make websites feel physical.
TapTone adds subtle tactile feedback to buttons, inputs, and everyday interactions using lightweight synthesized sounds—no audio files, no configuration, and zero dependencies. Just install it, add a data attribute, and your UI comes alive.
</h3>

---
# Installation

```bash
npm install tap-tone
```

---

# Usage

```tsx
"use client";

import "tap-tone";

export default function Home() {
  return (
    <>
      <button data-tone-click>Click Me</button>

      <button data-tone-droplet>
        Save
      </button>

      <button data-tone-success>
        Success
      </button>

      <button data-tone-error>
        Delete
      </button>
    </>
  );
}
```

---

## 🎧 Available Sounds

- `data-tone-click`
- `data-tone-droplet`
- `data-tone-success`
- `data-tone-error`
- `data-tone-copy`
- `data-tone-remove`
- `data-tone-keypress`
- `data-tone-beep`
- `data-tone-tap`
- `data-tone-mouse1`
- `data-tone-mouse2`

---

## 💡 Why TapTone?

Modern interfaces look great—but they often feel silent.

TapTone adds subtle sound feedback that makes interactions feel faster, more tactile, and more satisfying. Whether it's clicking a button, copying text, deleting an item, or confirming an action, every interaction feels more alive with just a single import.

---

## 🤝 Contributing

Contributions are always welcome!

Feel free to open an issue, suggest a feature, or submit a pull request.

---

## 📄 License

MIT

---

