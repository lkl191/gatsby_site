---
title: "javascriptでコピー"
date: "2020-12-11"
---

## html

>`<button id="btn" class="btn">copy</button>`<br>
>`<br>`<br>
>`<code id="copy" class="copy">gatsby-node</code>`

##javascript

>`const cp = document.getElementById('copy');`<br>
>`const btn = document.getElementById('btn');`<br>
>`btn.addEventListener("click", () => `<br>
>`{`<br>
>`    navigator.clipboard.writeText(cp.innerHTML)`<br>
>`}`<br>
>`);`<br>