const text = [
    { header: "1. Waterproof shoes:", para: "To turn your canvas shoes into waterproof ones, you need nothing but beeswax and a blow dryer.</br> Spread beeswax all over your shoes. Next, use the blow dryer to melt the beeswax until you can no longer see it.</br> Voila! Your waterproof shoes are ready!"},
    { header: "2. Smelly shoes", para: "If you have bad-smelling shoes, place a few dry tea bags inside each shoe to absorb the smell.</br> If your shoes are not just smelly but also wet, fill them with a mixture of rice and baking soda and leave for a few days"},
    { header: "3. Tight shoes:", para: "If your new shoes feel too tight, here's a way to stretch them.</br> Stuff each shoe with wet newspaper as tightly as you can.</br> Let the shoes dry, and then remove the newspaper."},
    { header: "4. Find small lost items:", para: "Use your vacuum cleaner to find tiny items you've lost, such as earrings.</br> Just cover the end of a vacuum cleaner with a stocking or pantyhose, and start your search.</br> Check from time to time to see if the object you are looking for is already there."},
    { header: "5. Keep buttons from falling off:", para: "To keep your buttons in place, simply paint a bit of clear nail polish over the threads."},
  ];

  for(let i = 0; i < text.length; i++) {
      let h1 = text[i].getElementsById("h1");
      let p1 = text[i].getElementsById("p1");
      h1.innerText.appendChild(text[i].header);
      p1.innerText.appendChild(text[i].para);
      
  }
